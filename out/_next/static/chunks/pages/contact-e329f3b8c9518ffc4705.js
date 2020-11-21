_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [12],
  {
    '0Aie': function (e, t, n) {
      'use strict';
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function i(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) {
              var n = [],
                r = !0,
                i = !1,
                a = void 0;
              try {
                for (
                  var o, c = e[Symbol.iterator]();
                  !(r = (o = c.next()).done) &&
                  (n.push(o.value), !t || n.length !== t);
                  r = !0
                );
              } catch (s) {
                (i = !0), (a = s);
              } finally {
                try {
                  r || null == c.return || c.return();
                } finally {
                  if (i) throw a;
                }
              }
              return n;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ('string' === typeof e) return r(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? r(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      n.r(t);
      var a = n('rePB'),
        o = n('nKUr'),
        c = n('q1tI'),
        s = n.n(c),
        l = n('vOnD'),
        u = n('+ego'),
        m = n('oIEm'),
        b = n('ZMKu'),
        p = n('UYbT');
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var y,
        f = l.d.form.withConfig({
          displayName: 'contact__Form',
          componentId: 'sc-66tq17-0',
        })([
          'margin-top:4rem;max-width:600px;> div{margin-bottom:2rem;}label{display:block;}input,textarea{padding:0.25rem;}textarea{resize:vertical;width:100%;}',
        ]);
      !(function (e) {
        (e.changeField = 'CHANGE_FIELD'),
          (e.submit = 'SUBMIT'),
          (e.receiveResponse = 'RECEIVE_RESPONSE'),
          (e.error = 'ERROR');
      })(y || (y = {}));
      var h = {
        isSubmitting: !1,
        hasError: !1,
        didSucceed: !1,
        name: '',
        email: '',
        message: '',
      };
      function O(e, t) {
        switch (t.type) {
          case y.changeField:
            return j(
              j({}, e),
              Object(a.a)({}, t.payload.name, t.payload.value)
            );
          case y.submit:
            return j(j({}, e), {}, { isSubmitting: !0, hasError: !1 });
          case y.receiveResponse:
            return j(j({}, h), {}, { didSucceed: !0 });
          case y.error:
            return j(j({}, e), {}, { isSubmitting: !1, hasError: !0 });
        }
      }
      t.default = function () {
        var e = i(s.a.useReducer(O, h), 2),
          t = e[0],
          n = e[1],
          r = function (e) {
            n({
              type: y.changeField,
              payload: { name: e.target.name, value: e.target.value },
            });
          };
        return Object(o.jsxs)(u.a, {
          children: [
            Object(o.jsx)(p.a, {
              title: 'Contact',
              description: 'Get in touch',
            }),
            Object(o.jsxs)(m.a, {
              children: [
                Object(o.jsx)(b.b.h1, { variants: m.b, children: 'Contact' }),
                Object(o.jsx)(b.b.p, {
                  variants: m.b,
                  children:
                    "If you'd like to get in touch regarding an opportunity, or would just like to ask a question, I'm happy to respond to inquiries from this form.",
                }),
                Object(o.jsxs)(f, {
                  as: b.b.form,
                  variants: m.b,
                  name: 'contact',
                  method: 'POST',
                  'data-netlify': 'true',
                  'netlify-honeypot': 'bot-field',
                  onSubmit: function (e) {
                    e.preventDefault(), n({ type: y.submit });
                    var r;
                    fetch('/', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                      },
                      body:
                        ((r = j({ 'form-name': 'contact' }, t)),
                        Object.keys(r)
                          .map(function (e) {
                            return (
                              encodeURIComponent(e) +
                              '=' +
                              encodeURIComponent(r[e])
                            );
                          })
                          .join('&')),
                    })
                      .then(function () {
                        n({ type: y.receiveResponse });
                      })
                      .catch(function (e) {
                        console.error(e), n({ type: y.error });
                      });
                  },
                  children: [
                    Object(o.jsx)('input', {
                      type: 'hidden',
                      name: 'form-name',
                      value: 'contact',
                    }),
                    Object(o.jsx)('input', {
                      name: 'bot-field',
                      style: { display: 'none' },
                    }),
                    Object(o.jsxs)(b.b.div, {
                      variants: m.b,
                      children: [
                        Object(o.jsx)('label', { children: 'Your Name' }),
                        Object(o.jsx)('input', {
                          type: 'text',
                          name: 'name',
                          required: !0,
                          value: t.name,
                          onChange: r,
                        }),
                      ],
                    }),
                    Object(o.jsxs)(b.b.div, {
                      variants: m.b,
                      children: [
                        Object(o.jsx)('label', { children: 'Your Email' }),
                        Object(o.jsx)('input', {
                          type: 'email',
                          name: 'email',
                          required: !0,
                          value: t.email,
                          onChange: r,
                        }),
                      ],
                    }),
                    Object(o.jsxs)(b.b.div, {
                      variants: m.b,
                      children: [
                        Object(o.jsx)('label', { children: 'Message' }),
                        Object(o.jsx)('textarea', {
                          name: 'message',
                          rows: 10,
                          required: !0,
                          value: t.message,
                          onChange: r,
                        }),
                      ],
                    }),
                    t.didSucceed &&
                      Object(o.jsx)('p', {
                        children: 'Your inquiry has been received. Thank you.',
                      }),
                    Object(o.jsx)(b.b.div, {
                      variants: m.b,
                      children: Object(o.jsx)('button', {
                        type: 'submit',
                        children: 'Send',
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    QLSJ: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/contact',
        function () {
          return n('0Aie');
        },
      ]);
    },
    UYbT: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return m;
      });
      var r = n('nKUr'),
        i = n('nOHt'),
        a = (n('q1tI'), n('qhky')),
        o = 'https://www.kylepollich.com',
        c = '%s | Kyle Pollich',
        s = '',
        l = 'Lancaster, PA Full Stack Developer',
        u = '@kylepollich',
        m = function (e) {
          var t = e.title,
            n = e.description,
            m = e.image,
            b = e.article,
            p = void 0 !== b && b,
            d = Object(i.useRouter)().pathname,
            j = {
              title: t || c,
              description: n || l,
              image: ''.concat(o).concat(m || s),
              url: ''.concat(o).concat(d),
            };
          return Object(r.jsxs)(a.a, {
            title: j.title,
            titleTemplate: c,
            children: [
              Object(r.jsx)('meta', {
                name: 'description',
                content: j.description,
              }),
              Object(r.jsx)('meta', { name: 'image', content: j.image }),
              j.url &&
                Object(r.jsx)('meta', { property: 'og:url', content: j.url }),
              !p
                ? null
                : Object(r.jsx)('meta', {
                    property: 'og:type',
                    content: 'article',
                  }),
              j.title &&
                Object(r.jsx)('meta', {
                  property: 'og:title',
                  content: j.title,
                }),
              j.description &&
                Object(r.jsx)('meta', {
                  property: 'og:description',
                  content: j.description,
                }),
              j.image &&
                Object(r.jsx)('meta', {
                  property: 'og:image',
                  content: j.image,
                }),
              Object(r.jsx)('meta', {
                name: 'twitter:card',
                content: 'summary_large_image',
              }),
              u &&
                Object(r.jsx)('meta', { name: 'twitter:creator', content: u }),
              j.title &&
                Object(r.jsx)('meta', {
                  name: 'twitter:title',
                  content: j.title,
                }),
              j.description &&
                Object(r.jsx)('meta', {
                  name: 'twitter:description',
                  content: j.description,
                }),
              j.image &&
                Object(r.jsx)('meta', {
                  name: 'twitter:image',
                  content: j.image,
                }),
            ],
          });
        };
    },
    rePB: function (e, t, n) {
      'use strict';
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
  },
  [['QLSJ', 0, 2, 4, 1, 3, 5]],
]);
