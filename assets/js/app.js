/* Smart Recruiters Limited — Application logic */
(function () {
  'use strict';

  var S = window.SRL || { site: {}, jobs: [], industries: [], services: [], team: [], process: [],
    faqs: { candidates: [], employers: [], general: [] } };
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function fmtDate(iso) {
    if (!iso) return '';
    var d = new Date(iso + 'T00:00:00');
    if (isNaN(d)) return iso;
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  function daysFromNow(iso) {
    if (!iso) return null;
    var d = new Date(iso + 'T23:59:59');
    if (isNaN(d)) return null;
    return Math.ceil((d - new Date()) / 86400000);
  }

  function icon(name, cls) {
    return '<svg class="icon ' + (cls || '') + '" aria-hidden="true"><use href="#i-' + name + '"></use></svg>';
  }

  function param(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  /* ----------------------------------------------------------------------
     Shared chrome: header state, mobile nav, back-to-top
     ---------------------------------------------------------------------- */
  function initChrome() {
    var header = $('.site-header');
    var onScroll = function () {
      if (header) header.classList.toggle('is-stuck', window.scrollY > 8);
      var top = $('.to-top');
      if (top) top.classList.toggle('is-visible', window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    var top = $('.to-top');
    if (top) {
      top.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    var nav = $('.main-nav');
    var toggle = $('.nav-toggle');
    var scrim = $('.nav-scrim');

    function closeNav() {
      if (!nav) return;
      nav.classList.remove('is-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
      if (scrim) scrim.classList.remove('is-open');
      document.body.classList.remove('nav-open');
    }

    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (scrim) scrim.classList.toggle('is-open', open);
        document.body.classList.toggle('nav-open', open);
      });
    }
    if (scrim) scrim.addEventListener('click', closeNav);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeNav(); });

    // Mobile dropdown accordions
    $$('.has-dropdown > button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var wrap = btn.parentElement;
        var open = wrap.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });

    // Anchor links close the drawer
    $$('.main-nav a').forEach(function (a) {
      a.addEventListener('click', closeNav);
    });

    // Tabs
    $$('[data-tabs]').forEach(function (group) {
      var btns = $$('.tabs__btn', group);
      btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var target = btn.getAttribute('data-target');
          btns.forEach(function (b) { b.setAttribute('aria-selected', 'false'); });
          btn.setAttribute('aria-selected', 'true');
          $$('[data-tabs-panel]').forEach(function (p) {
            p.hidden = p.getAttribute('data-tabs-panel') !== target;
          });
        });
      });
    });

    // File upload previews
    $$('input[type="file"]').forEach(function (input) {
      var drop = input.closest('.file-drop');
      if (!drop) return;
      var target = drop.querySelector('[data-file-name]');
      input.addEventListener('change', function () {
        var f = input.files && input.files[0];
        if (!f) {
          if (target) target.textContent = '';
          drop.classList.remove('is-drag');
          var reset = drop.querySelector('[data-file-name-block]');
          if (reset) reset.textContent = 'No file selected';
          return;
        }
        var mb = (f.size / 1048576).toFixed(2);
        var badType = !/\.(pdf|doc|docx|rtf)$/i.test(f.name);
        var tooBig = f.size > 5 * 1024 * 1024;

        if (target) {
          target.innerHTML = icon(badType || tooBig ? 'alert' : 'checkCircle') + esc(f.name) +
            ' (' + mb + ' MB)';
        }
        drop.classList.toggle('is-drag', !badType && !tooBig);

        var nameEl = drop.querySelector('[data-file-name-block]');
        if (nameEl) {
          nameEl.textContent = badType ? 'Unsupported file type'
            : tooBig ? 'File too large'
            : 'File selected';
        }
        // Surface the problem immediately rather than only on submit.
        var field = input.closest('.field');
        if (field) {
          if (badType || tooBig) {
            field.classList.add('has-error');
            input.classList.add('is-invalid');
            var box = field.querySelector('.field__error');
            if (box) {
              box.textContent = badType
                ? 'Upload a PDF, DOC, DOCX or RTF file.'
                : 'That file is ' + mb + ' MB. Please upload a file of 5 MB or less.';
            }
          } else {
            field.classList.remove('has-error');
            input.classList.remove('is-invalid');
          }
        }
      });
    });
  }

  /* ----------------------------------------------------------------------
     Forms: validate, save to localStorage, show confirmation
     ---------------------------------------------------------------------- */
  var STORE_KEY = 'srl_submissions_v1';

  function store(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || '[]');
    } catch (e) { return []; }
  }

  function persist(entry) {
    try {
      var all = store(STORE_KEY);
      all.push(entry);
      localStorage.setItem(STORE_KEY, JSON.stringify(all));
      return true;
    } catch (e) { return false; }
  }

  function fieldError(input, msg) {
    var field = input.closest('.field');
    if (!field) return;
    field.classList.add('has-error');
    input.classList.add('is-invalid');
    var box = field.querySelector('.field__error');
    if (box) box.textContent = msg;
  }

  function clearErrors(form) {
    $$('.field', form).forEach(function (f) { f.classList.remove('has-error'); });
    $$('.is-invalid', form).forEach(function (i) { i.classList.remove('is-invalid'); });
  }

  var CV_MAX_BYTES = 5 * 1024 * 1024;
  var CV_EXT = /\.(pdf|doc|docx|rtf)$/i;

  function validate(form) {
    clearErrors(form);
    var firstBad = null;

    $$('[required]', form).forEach(function (input) {
      if (input.type === 'checkbox' && !input.checked) {
        fieldError(input, input.dataset.msg || 'Please tick this box to continue.');
        firstBad = firstBad || input;
        return;
      }

      // File inputs need real content checks: presence, type and size.
      if (input.type === 'file') {
        var f = input.files && input.files[0];
        if (!f) {
          fieldError(input, 'Please choose a file to upload.');
          firstBad = firstBad || input;
          return;
        }
        if (!CV_EXT.test(f.name)) {
          fieldError(input, 'Upload a PDF, DOC, DOCX or RTF file.');
          firstBad = firstBad || input;
          return;
        }
        if (f.size > CV_MAX_BYTES) {
          fieldError(input, 'That file is ' + (f.size / 1048576).toFixed(1) +
            ' MB. Please upload a file of 5 MB or less.');
          firstBad = firstBad || input;
        }
        return;
      }

      var val = (input.value || '').trim();

      if (!val) {
        fieldError(input, 'This field is required.');
        firstBad = firstBad || input;
        return;
      }
      if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val)) {
        fieldError(input, 'Enter a valid email address.');
        firstBad = firstBad || input;
        return;
      }
      if (input.type === 'tel' && val.replace(/\D/g, '').length < 7) {
        fieldError(input, 'Enter a valid phone number.');
        firstBad = firstBad || input;
        return;
      }
      if (input.type === 'url' && !/^https?:\/\/.+\..+/.test(val)) {
        fieldError(input, 'Enter a full web address starting with https://');
        firstBad = firstBad || input;
        return;
      }
      if (input.dataset.minlen && val.length < parseInt(input.dataset.minlen, 10)) {
        fieldError(input, 'Please write at least ' + input.dataset.minlen + ' characters.');
        firstBad = firstBad || input;
      }
    });

    if (firstBad) {
      firstBad.focus({ preventScroll: true });
      firstBad.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return !firstBad;
  }

  function formToObject(form) {
    var out = {};
    $$('input, select, textarea', form).forEach(function (i) {
      if (!i.name) return;
      if (i.type === 'file') {
        var f = i.files && i.files[0];
        out[i.name] = f ? f.name + ' (' + (f.size / 1048576).toFixed(2) + ' MB)' : '';
      } else if (i.type === 'radio') {
        if (i.checked) out[i.name] = i.value;
      } else if (i.type === 'checkbox') {
        if (i.checked) out[i.name] = 'Yes';
      } else {
        out[i.name] = (i.value || '').trim();
      }
    });
    return out;
  }

  function initForms() {
    $$('form[data-srl-form]').forEach(function (form) {
      var kind = form.getAttribute('data-srl-form');
      var live = $('[data-form-live]');

      // Live character counters
      $$('textarea[maxlength]', form).forEach(function (ta) {
        var counter = document.createElement('div');
        counter.className = 'hint';
        ta.parentNode.appendChild(counter);
        var upd = function () {
          counter.textContent = ta.value.length + ' / ' + ta.maxlength + ' characters';
        };
        ta.addEventListener('input', upd);
        upd();
      });

      // Clear error as user types
      $$('input, select, textarea', form).forEach(function (i) {
        i.addEventListener('input', function () {
          var f = i.closest('.field');
          if (f && f.classList.contains('has-error')) {
            f.classList.remove('has-error');
            i.classList.remove('is-invalid');
          }
        });
      });

      // Pre-fill from query params (e.g. job title on apply page)
      var prefill = formToObject({ querySelectorAll: function () { return []; } });
      void prefill;

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!validate(form)) return;

        var data = formToObject(form);
        var saved = persist({ kind: kind, at: new Date().toISOString(), data: data });

        if (live) {
          live.hidden = false;
          live.scrollIntoView({ behavior: 'smooth', block: 'center' });

          var recap = $('[data-recap]', live);
          if (recap) {
            var dl = document.createElement('dl');
            dl.className = 'recap';
            var labelMap = {
              fullName: 'Full name', email: 'Email', phone: 'Phone', location: 'Location',
              education: 'Education', experience: 'Work experience', coverLetter: 'Cover letter',
              linkedin: 'LinkedIn', role: 'Role', company: 'Organisation', jobTitle: 'Job title',
              industry: 'Industry', vacancies: 'Number of vacancies', salary: 'Salary range',
              startDate: 'Available from', contractType: 'Contract type', iama: 'I am a',
              subject: 'Subject', message: 'Message', cv: 'CV / file'
            };
            var keys = Object.keys(data).filter(function (k) {
              return data[k] && labelMap[k];
            });
            if (kind === 'application' && data.cv) keys.push('cv');
            keys.forEach(function (k) {
              var row = document.createElement('div');
              row.innerHTML = '<dt>' + esc(labelMap[k]) + '</dt><dd>' + esc(String(data[k]).slice(0, 300)) + '</dd>';
              dl.appendChild(row);
            });
            recap.appendChild(dl);
          }

          var note = $('[data-save-note]');
          if (note) {
            note.hidden = !!saved;
            note.textContent = saved
              ? ''
              : 'Note: your browser storage is full, so this submission could not be saved locally. Please email us directly.';
          }

          form.hidden = true;
          var wrap = $('[data-form-wrap]');
          if (wrap) wrap.hidden = true;
        } else {
          window.alert('Thank you. Your submission has been recorded.');
          form.reset();
        }
      });
    });
  }

  /* ----------------------------------------------------------------------
     Job search + filtering (Find a Job page)
     ---------------------------------------------------------------------- */
  function jobCard(job) {
    var days = daysFromNow(job.deadline);
    var urgent = days !== null && days <= 7;
    return '' +
      '<article class="job-card' + (job.featured ? ' job-card--featured' : '') + '"' +
        ' data-title="' + esc(job.title.toLowerCase()) + '"' +
        ' data-org="' + esc(job.org.toLowerCase()) + '"' +
        ' data-type="' + esc(job.type) + '"' +
        ' data-industry="' + esc(job.industry) + '"' +
        ' data-level="' + esc(job.level) + '"' +
        ' data-posted="' + esc(job.posted) + '"' +
        ' data-salary="' + esc(job.salary || '') + '">' +
        '<div class="job-card__logo" aria-hidden="true">' + esc(job.initials) + '</div>' +
        '<div>' +
          '<h3 class="job-card__title"><a href="job-details.html?id=' + encodeURIComponent(job.id) + '">' + esc(job.title) + '</a></h3>' +
          '<div class="job-card__org">' + icon('building') + esc(job.org) +
            (job.featured ? ' <span class="chip chip--teal">' + icon('sparkle') + 'Featured</span>' : '') +
          '</div>' +
          '<div class="job-card__meta">' +
            '<span>' + icon('mapPin') + esc(job.location) + '</span>' +
            '<span>' + icon('briefcase') + esc(job.type) + '</span>' +
            '<span>' + icon('trending') + esc(job.level) + '</span>' +
            '<span>' + icon('layers') + esc(job.industry) + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="job-card__side">' +
          '<span class="job-card__posted">Posted ' + fmtDate(job.posted) +
            (urgent ? ' &middot; <strong style="color:#dc2626">Closes soon</strong>' : '') + '</span>' +
          '<a class="btn btn--primary btn--sm" href="job-details.html?id=' + encodeURIComponent(job.id) + '">View Details' + icon('arrowRight') + '</a>' +
        '</div>' +
      '</article>';
  }

  function initJobSearch() {
    var list = $('#job-list');
    if (!list) return;

    var q = $('#f-title');
    var loc = $('#f-location');
    var ind = $('#f-industry');
    var typ = $('#f-type');
    var lvl = $('#f-level');
    var sort = $('#f-sort');
    var count = $('#job-count');
    var empty = $('#job-empty');
    var resetBtn = $('#f-reset');
    var chipsWrap = $('#active-chips');

    // Populate selects from data
    if (ind) {
      ind.innerHTML = '<option value="">All industries</option>' +
        S.industries.map(function (i) {
          return '<option value="' + esc(i.name) + '">' + esc(i.name) + '</option>';
        }).join('');
    }
    if (typ) {
      typ.innerHTML = '<option value="">All types</option>' +
        S.employmentTypes.map(function (t) {
          return '<option value="' + esc(t) + '">' + esc(t) + '</option>';
        }).join('');
    }
    if (lvl) {
      lvl.innerHTML = '<option value="">All levels</option>' +
        S.experienceLevels.map(function (t) {
          return '<option value="' + esc(t) + '">' + esc(t) + '</option>';
        }).join('');
    }

    function matches(job, term, location) {
      if (ind && ind.value && job.industry !== ind.value) return false;
      if (typ && typ.value && job.type !== typ.value) return false;
      if (lvl && lvl.value && job.level !== lvl.value) return false;
      if (location && job.location.toLowerCase().indexOf(location.toLowerCase()) === -1) return false;
      if (term) {
        var hay = (job.title + ' ' + job.org + ' ' + job.industry + ' ' + job.level + ' ' +
          job.type + ' ' + job.skills.join(' ') + ' ' + job.overview).toLowerCase();
        if (hay.indexOf(term.toLowerCase()) === -1) return false;
      }
      return true;
    }

    function render() {
      var term = (q && q.value || '').trim();
      var location = (loc && loc.value || '').trim();
      var found = S.jobs.filter(function (j) { return matches(j, term, location); });

      if (sort && sort.value) {
        found.sort(function (a, b) {
          if (sort.value === 'newest') return b.posted.localeCompare(a.posted);
          if (sort.value === 'oldest') return a.posted.localeCompare(b.posted);
          if (sort.value === 'title') return a.title.localeCompare(b.title);
          if (sort.value === 'closing') return a.deadline.localeCompare(b.deadline);
          return 0;
        });
      } else {
        found.sort(function (a, b) {
          if (a.featured !== b.featured) return a.featured ? -1 : 1;
          return b.posted.localeCompare(a.posted);
        });
      }

      list.innerHTML = found.map(jobCard).join('');
      if (count) {
        count.innerHTML = 'Showing <b>' + found.length + '</b> of <b>' + S.jobs.length + '</b> vacancies';
      }
      if (empty) empty.hidden = found.length !== 0;

      // Active filter chips
      if (chipsWrap) {
        var chips = [];
        if (term) chips.push({ k: 'title', label: '“' + term + '”' });
        if (location) chips.push({ k: 'location', label: location });
        if (ind && ind.value) chips.push({ k: 'industry', label: ind.value });
        if (typ && typ.value) chips.push({ k: 'type', label: typ.value });
        if (lvl && lvl.value) chips.push({ k: 'level', label: lvl.value });

        chipsWrap.innerHTML = chips.length
          ? chips.map(function (c) {
              return '<button type="button" class="chip chip--teal" data-clear="' + c.k + '">' +
                esc(c.label) + ' <span aria-hidden="true">&times;</span>' +
                '<span class="visually-hidden">Remove filter</span></button>';
            }).join('') +
            '<button type="button" class="chip" data-clear="all">Clear all</button>'
          : '';

        $$('[data-clear]', chipsWrap).forEach(function (b) {
          b.addEventListener('click', function () {
            var k = b.getAttribute('data-clear');
            if (k === 'all' || k === 'title') { if (q) q.value = ''; }
            if (k === 'all' || k === 'location') { if (loc) loc.value = ''; }
            if (k === 'all' || k === 'industry') { if (ind) ind.value = ''; }
            if (k === 'all' || k === 'type') { if (typ) typ.value = ''; }
            if (k === 'all' || k === 'level') { if (lvl) lvl.value = ''; }
            render();
          });
        });
      }
    }

    ['input', 'change'].forEach(function (evt) {
      [q, loc, ind, typ, lvl, sort].forEach(function (el) {
        if (el) el.addEventListener(evt, render);
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        [q, loc, ind, typ, lvl].forEach(function (el) { if (el) el.value = ''; });
        render();
      });
    }

    // Support deep links like find-a-job.html?q=accountant&location=Kampala
    var qs = new URLSearchParams(window.location.search);
    if (q && qs.get('q')) q.value = qs.get('q');
    if (loc && qs.get('location')) loc.value = qs.get('location');
    if (ind && qs.get('industry')) ind.value = qs.get('industry');
    if (typ && qs.get('type')) typ.value = qs.get('type');

    render();
  }

  /* ----------------------------------------------------------------------
     Home page quick search -> redirects to Find a Job with params
     ---------------------------------------------------------------------- */
  function initHomeSearch() {
    var form = $('#home-search');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var url = 'find-a-job.html';
      var p = new URLSearchParams();
      var t = $('#hs-title'), l = $('#hs-location'), i = $('#hs-industry'), e2 = $('#hs-type');
      if (t && t.value.trim()) p.set('q', t.value.trim());
      if (l && l.value.trim()) p.set('location', l.value.trim());
      if (i && i.value) p.set('industry', i.value);
      if (e2 && e2.value) p.set('type', e2.value);
      var qs = p.toString();
      window.location.href = qs ? url + '?' + qs : url;
    });

    // Populate the home search selects
    var hi = $('#hs-industry'), ht = $('#hs-type');
    if (hi) {
      hi.innerHTML = '<option value="">All industries</option>' + S.industries.map(function (x) {
        return '<option value="' + esc(x.name) + '">' + esc(x.name) + '</option>';
      }).join('');
    }
    if (ht) {
      ht.innerHTML = '<option value="">All employment types</option>' + S.employmentTypes.map(function (x) {
        return '<option value="' + esc(x) + '">' + esc(x) + '</option>';
      }).join('');
    }
  }

  /* ----------------------------------------------------------------------
     Job alerts
     ---------------------------------------------------------------------- */
  function fillSelect(sel, blankLabel, list) {
    if (!sel) return;
    sel.innerHTML = '<option value="">' + esc(blankLabel) + '</option>' +
      list.map(function (v) {
        var label = typeof v === 'string' ? v : v.name;
        return '<option value="' + esc(label) + '">' + esc(label) + '</option>';
      }).join('');
  }

  /* Every industry / employment-type select on the site is populated from data.js
     so option lists can never drift from the content model. */
  function fillAllSelects() {
    var indLabel = { 'v-industry': 'Select an industry', 'alert-industry': 'Any industry' };
    var typLabel = { 'alert-type': 'Any employment type', 'v-type': null, 'f-type': null };

    Object.keys(indLabel).forEach(function (id) {
      fillSelect($('#' + id), indLabel[id], S.industries);
    });
    if (typLabel['alert-type']) {
      fillSelect($('#alert-type'), typLabel['alert-type'], S.employmentTypes);
    }

    // Vacancy form employment type already lists options in markup; only add any
    // employment types that are missing so the two never diverge.
    var vt = $('#v-type');
    if (vt) {
      var have = $$('option', vt).map(function (o) { return o.value; });
      S.employmentTypes.forEach(function (t) {
        if (have.indexOf(t) === -1) {
          var o = document.createElement('option');
          o.value = t;
          o.textContent = t;
          vt.appendChild(o);
        }
      });
    }
  }

  function initAlerts() {
    var form = $('#alert-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validate(form)) return;
      var saved = persist({ kind: 'job-alert', at: new Date().toISOString(), data: formToObject(form) });
      var box = $('#alert-result');
      if (box) {
        box.hidden = false;
        box.innerHTML = saved
          ? '<div class="alert alert--success">' + icon('checkCircle') +
            '<div><b>Job alert saved</b>We will email matching vacancies to <strong>' +
            esc($('#alert-email', form) ? $('#alert-email', form).value : '') +
            '</strong> as they are posted. You can change or remove this alert at any time.</div></div>'
          : '<div class="alert alert--warn">' + icon('alert') +
            '<div><b>Could not save locally</b>Your browser is blocking local storage. Please email us at ' +
            esc(S.site.email) + ' and we will set the alert up for you.</div></div>';
        box.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
    clearErrors(form);
    $$('input, select, textarea', form).forEach(function (i) {
      i.addEventListener('input', function () {
        var f = i.closest('.field');
        if (f && f.classList.contains('has-error')) {
          f.classList.remove('has-error');
          i.classList.remove('is-invalid');
        }
      });
    });
  }

  /* ----------------------------------------------------------------------
     Render dynamic sections
     ---------------------------------------------------------------------- */
  function renderServices() {
    var host = $('#services-grid');
    if (host) {
      host.innerHTML = S.services.map(function (s) {
        return '<article class="card card--hover">' +
          '<div class="card__icon">' + icon(s.icon) + '</div>' +
          '<h3>' + esc(s.name) + '</h3>' +
          '<p>' + esc(s.blurb) + '</p>' +
          '<div class="card__foot"><a class="link-arrow" href="services.html#' + esc(s.slug) + '">Learn more' + icon('arrowRight') + '</a></div>' +
          '</article>';
      }).join('');
    }

    var detail = $('#services-detail');
    if (detail) {
      detail.innerHTML = S.services.map(function (s) {
        return '<article class="service-detail" id="' + esc(s.slug) + '">' +
          '<div class="split">' +
            '<div>' +
              '<div class="card__icon">' + icon(s.icon) + '</div>' +
              '<h2>' + esc(s.name) + '</h2>' +
              '<p class="lede">' + esc(s.blurb) + '</p>' +
              '<p class="text-muted"><strong>Best for:</strong> ' + esc(s.for) + '</p>' +
              '<div class="btn-row mt-3">' +
                '<a class="btn btn--primary" href="submit-vacancy.html">Submit a Vacancy' + icon('arrowRight') + '</a>' +
                '<a class="btn btn--outline" href="consultation.html">Request Consultation</a>' +
              '</div>' +
            '</div>' +
            '<div class="split__media">' +
              '<div class="media-card">' +
                '<h3>What is included</h3>' +
                '<ul class="check-list" style="margin-top:14px">' +
                  s.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') +
                '</ul>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<hr>' +
        '</article>';
      }).join('');
    }
  }

  function renderIndustries() {
    var host = $('#industries-grid');
    if (host) {
      host.innerHTML = S.industries.map(function (i) {
        return '<article class="card card--hover card--pad-sm">' +
          '<div class="card__icon card__icon--soft" style="width:44px;height:44px;margin-bottom:14px">' + icon(i.icon) + '</div>' +
          '<h3 style="font-size:1.02rem">' + esc(i.name) + '</h3>' +
          '<p style="font-size:.92rem">' + esc(i.blurb) + '</p>' +
          '<div class="card__foot">' +
            '<a class="link-arrow" href="find-a-job.html?industry=' + encodeURIComponent(i.name) + '">View openings' + icon('arrowRight') + '</a>' +
          '</div>' +
        '</article>';
      }).join('');
    }
  }

  function renderTeam() {
    var host = $('#team-grid');
    if (!host) return;
    host.innerHTML = S.team.map(function (m) {
      return '<article class="card team-card">' +
        '<div class="avatar" aria-hidden="true">' + esc(m.initials) + '</div>' +
        '<h3>' + esc(m.name) + '</h3>' +
        '<div class="team-card__role">' + esc(m.role) + '</div>' +
        '<p>' + esc(m.bio) + '</p>' +
        '<div class="team-card__tags">' +
          m.expertise.map(function (e) { return '<span class="chip">' + esc(e) + '</span>'; }).join('') +
        '</div>' +
      '</article>';
    }).join('');
  }

  function renderProcess() {
    function build(list) {
      return list.map(function (s, i) {
        return '<div class="step">' +
          '<div class="step__num">' + (i + 1) + '</div>' +
          '<h3>' + esc(s.n) + '</h3>' +
          '<p>' + esc(s.text) + '</p>' +
        '</div>';
      }).join('');
    }

    function buildVertical(list) {
      return list.map(function (s, i) {
        return '<div class="step">' +
          '<div class="step__num">' + (i + 1) + '</div>' +
          '<div><h3>' + esc(s.n) + '</h3><p>' + esc(s.text) + '</p></div>' +
        '</div>';
      }).join('');
    }

    var host = $('#process-steps');
    if (host) host.innerHTML = build(S.process);

    var vhost = $('#process-vertical');
    if (vhost) vhost.innerHTML = buildVertical(S.process);
  }

  function renderFaq() {
    function build(list, firstOpen) {
      return list.map(function (f, i) {
        return '<details class="accordion"' + ((firstOpen && i === 0) ? ' open' : '') + '>' +
          '<summary>' + esc(f.q) + icon('plus') + '</summary>' +
          '<div class="accordion__body"><p>' + esc(f.a) + '</p></div>' +
        '</details>';
      }).join('');
    }

    var c = $('#faq-list-candidates');
    if (c) c.innerHTML = build(S.faqs.candidates, true);
    var e = $('#faq-list-employers');
    if (e) e.innerHTML = build(S.faqs.employers, true);
    var g = $('#faq-list-general');
    if (g) g.innerHTML = build(S.faqs.general, true);

    // Backwards-compatible single list
    var all = $('#faq-list');
    if (all) {
      all.innerHTML = build(
        [].concat(S.faqs.candidates || [], S.faqs.employers || [], S.faqs.general || []),
        true
      );
    }
  }

  function renderLatestJobs() {
    var host = $('#latest-jobs');
    if (!host) return;
    var jobs = S.jobs.slice().sort(function (a, b) {
      return b.posted.localeCompare(a.posted);
    }).slice(0, 3);
    host.innerHTML = jobs.map(jobCard).join('');
  }

  /* ----------------------------------------------------------------------
     Job details page
     ---------------------------------------------------------------------- */
  function initJobDetails() {
    var host = $('#job-detail');
    if (!host) return;

    var id = param('id');
    var job = S.jobs.filter(function (j) { return j.id === id; })[0];

    if (!job) {
      host.innerHTML = '<div class="empty-state">' +
        '<div class="empty-state__icon">' + icon('search') + '</div>' +
        '<h2>Vacancy not found</h2>' +
        '<p class="text-muted">This vacancy may have been closed or the link is incorrect.</p>' +
        '<a class="btn btn--primary mt-3" href="find-a-job.html">Browse all vacancies' + icon('arrowRight') + '</a>' +
        '</div>';
      var crumb = $('#job-crumb-title');
      if (crumb) crumb.textContent = 'Vacancy not found';
      return;
    }

    document.title = job.title + ' at ' + job.org + ' | Smart Recruiters Limited';
    var crumb = $('#job-crumb-title');
    if (crumb) crumb.textContent = job.title;

    var days = daysFromNow(job.deadline);
    var urgent = days !== null && days <= 7;

    host.innerHTML = '' +
    '<section class="section job-hero">' +
      '<div class="container">' +
        '<div class="job-header">' +
          '<div class="job-header__logo" aria-hidden="true">' + esc(job.initials) + '</div>' +
          '<div>' +
            '<div class="chip-row mb-2">' +
              (job.featured ? '<span class="chip chip--teal">' + icon('sparkle') + 'Featured vacancy</span>' : '') +
              '<span class="chip chip--navy">' + esc(job.industry) + '</span>' +
              '<span class="chip chip--green">' + esc(job.type) + '</span>' +
            '</div>' +
            '<h1>' + esc(job.title) + '</h1>' +
            '<div class="job-card__org" style="font-size:1rem">' + icon('building') + esc(job.org) + '</div>' +
            '<div class="btn-row mt-2">' +
              '<a class="btn btn--primary" href="#apply">Apply Now' + icon('arrowRight') + '</a>' +
              '<button class="btn btn--outline" type="button" data-save-job> ' + icon('bookmark') + 'Save this job</button>' +
              '<button class="btn btn--outline" type="button" onclick="window.print()">' + icon('printer') + 'Print</button>' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<dl class="job-meta-grid">' +
          '<div><dt>Location</dt><dd>' + esc(job.location) + '</dd></div>' +
          '<div><dt>Employment type</dt><dd>' + esc(job.type) + '</dd></div>' +
          '<div><dt>Experience level</dt><dd>' + esc(job.level) + '</dd></div>' +
          '<div><dt>Industry</dt><dd>' + esc(job.industry) + '</dd></div>' +
          '<div><dt>Posted</dt><dd>' + fmtDate(job.posted) + '</dd></div>' +
          '<div><dt>Application deadline</dt><dd>' + fmtDate(job.deadline) + '</dd></div>' +
        '</dl>' +
      '</div>' +
    '</section>' +

    '<section class="section" id="apply">' +
      '<div class="container">' +
        '<div class="job-body">' +
          '<div class="prose">' +
            '<h2>Job overview</h2>' +
            '<p>' + esc(job.overview) + '</p>' +

            '<h2>Key responsibilities</h2>' +
            '<ul>' + job.responsibilities.map(function (r) {
              return '<li>' + esc(r) + '</li>';
            }).join('') + '</ul>' +

            '<h2>Qualifications and requirements</h2>' +
            '<ul>' + job.qualifications.map(function (r) {
              return '<li>' + esc(r) + '</li>';
            }).join('') + '</ul>' +

            '<h2>Skills required</h2>' +
            '<ul class="feature-list">' + job.skills.map(function (r) {
              return '<li>' + esc(r) + '</li>';
            }).join('') + '</ul>' +

            '<h2>What the employer offers</h2>' +
            '<ul class="check-list">' + job.offers.map(function (r) {
              return '<li>' + esc(r) + '</li>';
            }).join('') + '</ul>' +

            '<h2>How to apply</h2>' +
            '<p>' + esc(job.howToApply) + '</p>' +
            '<div class="timeline-note">' + icon('info') +
              ' Applications received after ' + fmtDate(job.deadline) + ' will not be considered.' +
            '</div>' +
          '</div>' +

          '<aside class="apply-panel">' +
            (urgent ? '<div class="deadline-flag deadline-flag--urgent">' + icon('alert') +
              'Closing soon — ' + days + ' day' + (days === 1 ? '' : 's') + ' left</div>'
              : '<div class="deadline-flag">' + icon('clock') + 'Closes ' + fmtDate(job.deadline) + '</div>') +
            '<h3>Apply for this position</h3>' +
            '<p class="text-muted" style="font-size:.92rem">It takes about 5 minutes. You will need an updated CV.</p>' +
            '<a class="btn btn--primary btn--lg btn--block" href="apply.html?id=' + encodeURIComponent(job.id) + '">Apply Now' + icon('arrowRight') + '</a>' +
            '<a class="btn btn--outline btn--block mt-2" href="submit-cv.html">Submit CV only</a>' +
            '<a class="btn btn--outline btn--block mt-2" href="job-alerts.html">Create job alert</a>' +
            '<p class="apply-panel__note">Your information is kept confidential and used only for this application.</p>' +
          '</aside>' +
        '</div>' +
      '</div>' +
    '</section>' +

    '<section class="section section--soft section--tight">' +
      '<div class="container">' +
        '<div class="section-head section-head--center">' +
          '<span class="eyebrow eyebrow--center">You may also like</span>' +
          '<h2>Other vacancies on our site</h2>' +
        '</div>' +
        '<div id="related-jobs"></div>' +
        '<div class="btn-row btn-row--center mt-4">' +
          '<a class="btn btn--navy" href="find-a-job.html">View all vacancies' + icon('arrowRight') + '</a>' +
        '</div>' +
      '</div>' +
    '</section>';

    var related = S.jobs.filter(function (j) {
      return j.id !== job.id && (j.industry === job.industry || j.level === job.level);
    }).slice(0, 3);
    if (related.length < 3) {
      S.jobs.forEach(function (j) {
        if (j.id !== job.id && related.indexOf(j) === -1 && related.length < 3) related.push(j);
      });
    }
    var rhost = $('#related-jobs');
    if (rhost) rhost.innerHTML = related.map(jobCard).join('');

    var saveBtn = $('[data-save-job]');
    if (saveBtn) {
      saveBtn.addEventListener('click', function () {
        var key = 'srl_saved_jobs';
        var saved = [];
        try { saved = JSON.parse(localStorage.getItem(key) || '[]'); } catch (e) {}
        var i = saved.indexOf(job.id);
        if (i > -1) {
          saved.splice(i, 1);
          saveBtn.innerHTML = icon('bookmark') + 'Save this job';
        } else {
          saved.push(job.id);
          saveBtn.innerHTML = icon('checkCircle') + 'Job saved';
        }
        try { localStorage.setItem(key, JSON.stringify(saved)); } catch (e) {}
      });
    }
  }

  /* Prefill the application form when arriving from a job detail page */
  function initApplyPrefill() {
    var appNote = $('#app-job-note');
    if (!appNote) return;

    var id = param('id');
    var job = S.jobs.filter(function (j) { return j.id === id; })[0];
    if (!job) return;

    var hidden = $('#app-job-id');
    if (hidden) hidden.value = job.id;
    var titleWrap = $('#app-job-wrap');
    if (titleWrap) titleWrap.hidden = false;

    appNote.innerHTML = icon('briefcase') +
      ' You are applying for <strong>' + esc(job.title) + '</strong> at <strong>' +
      esc(job.org) + '</strong>. Deadline: ' + fmtDate(job.deadline) + '.';

    var field = $('[data-apply-role]');
    if (field && !field.value) field.value = job.title;
  }

  /* ----------------------------------------------------------------------
     Boot
     ---------------------------------------------------------------------- */
  function boot() {
    initChrome();
    fillAllSelects();
    initHomeSearch();
    renderServices();
    renderIndustries();
    renderTeam();
    renderProcess();
    renderFaq();
    renderLatestJobs();
    initJobSearch();
    initJobDetails();
    initApplyPrefill();
    initForms();
    initAlerts();

    // Footer year
    $$('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();