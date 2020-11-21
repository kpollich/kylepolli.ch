_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [14],
  {
    '0FOq': function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, '__N_SSG', function () {
          return j;
        });
      var r = n('nKUr'),
        o = n('sWYD'),
        c = n('ZMKu'),
        i = n('Aiso'),
        a = n.n(i),
        l = n('vOnD'),
        u = n('J3Rv'),
        s = n.n(u),
        d = n('oIEm'),
        p = n('UYbT'),
        f = n('+ego'),
        m = l.d.article.withConfig({
          displayName: 'slug__MarkdownContentWrapper',
          componentId: 'sc-1xb780y-0',
        })(['img{width:100%;}ul{word-break:break-all;}']),
        b = l.d.div.withConfig({
          displayName: 'slug__Banner',
          componentId: 'sc-1xb780y-1',
        })(['margin-bottom:2rem;.credit{color:', ';}'], function (e) {
          return e.theme.colors.darkgrey;
        }),
        y = l.d.h1.withConfig({
          displayName: 'slug__Title',
          componentId: 'sc-1xb780y-2',
        })(['margin-bottom:0.75rem;']),
        O = l.d.h3.withConfig({
          displayName: 'slug__Subtitle',
          componentId: 'sc-1xb780y-3',
        })(['margin-top:0;']),
        j = !0;
      t.default = function (e) {
        var t = e.content,
          n = e.frontMatter,
          i = s()(t, { components: {} });
        return Object(r.jsxs)(f.a, {
          children: [
            Object(r.jsx)(p.a, {
              title: n.title,
              description: n.subtitle,
              image: n.image,
              article: !0,
            }),
            Object(r.jsxs)(d.a, {
              children: [
                Object(r.jsxs)('section', {
                  children: [
                    n.image &&
                      Object(r.jsxs)(b, {
                        as: c.b.div,
                        variants: d.b,
                        children: [
                          Object(r.jsx)(a.a, {
                            src: n.image,
                            alt: n.imageAlt,
                            height: 576,
                            width: 1024,
                          }),
                          n.imageCreditText &&
                            Object(r.jsxs)('em', {
                              className: 'credit',
                              children: [
                                'Photo by',
                                ' ',
                                Object(r.jsx)('a', {
                                  href: n.imageCreditLink,
                                  children: n.imageCreditText,
                                }),
                              ],
                            }),
                        ],
                      }),
                    Object(r.jsxs)(c.b.div, {
                      variants: d.b,
                      children: [
                        Object(r.jsx)(y, { children: n.title }),
                        Object(r.jsx)(O, { children: n.subtitle }),
                        Object(r.jsx)('time', {
                          children: Object(o.a)(
                            new Date(n.datePublished),
                            'MMMM do, yyyy'
                          ),
                        }),
                        Object(r.jsx)('hr', {}),
                      ],
                    }),
                  ],
                }),
                Object(r.jsx)(c.b.div, {
                  variants: d.b,
                  children: Object(r.jsx)(m, { children: i }),
                }),
              ],
            }),
          ],
        });
      };
    },
    '7ljp': function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'MDXContext', function () {
          return s;
        }),
        n.d(t, 'MDXProvider', function () {
          return f;
        }),
        n.d(t, 'mdx', function () {
          return y;
        }),
        n.d(t, 'useMDXComponents', function () {
          return p;
        }),
        n.d(t, 'withMDXComponents', function () {
          return d;
        });
      var r = n('q1tI'),
        o = n.n(r);
      function c(e, t, n) {
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
      function i() {
        return (i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function a(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                c(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function u(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              c = Object.keys(e);
            for (r = 0; r < c.length; r++)
              (n = c[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (r = 0; r < c.length; r++)
            (n = c[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var s = o.a.createContext({}),
        d = function (e) {
          return function (t) {
            var n = p(t.components);
            return o.a.createElement(e, i({}, t, { components: n }));
          };
        },
        p = function (e) {
          var t = o.a.useContext(s),
            n = t;
          return e && (n = 'function' === typeof e ? e(t) : l(l({}, t), e)), n;
        },
        f = function (e) {
          var t = p(e.components);
          return o.a.createElement(s.Provider, { value: t }, e.children);
        },
        m = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return o.a.createElement(o.a.Fragment, {}, t);
          },
        },
        b = o.a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            c = e.originalType,
            i = e.parentName,
            a = u(e, ['components', 'mdxType', 'originalType', 'parentName']),
            s = p(n),
            d = r,
            f = s[''.concat(i, '.').concat(d)] || s[d] || m[d] || c;
          return n
            ? o.a.createElement(f, l(l({ ref: t }, a), {}, { components: n }))
            : o.a.createElement(f, l({ ref: t }, a));
        });
      function y(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ('string' === typeof e || r) {
          var c = n.length,
            i = new Array(c);
          i[0] = b;
          var a = {};
          for (var l in t) hasOwnProperty.call(t, l) && (a[l] = t[l]);
          (a.originalType = e),
            (a.mdxType = 'string' === typeof e ? e : r),
            (i[1] = a);
          for (var u = 2; u < c; u++) i[u] = n[u];
          return o.a.createElement.apply(null, i);
        }
        return o.a.createElement.apply(null, n);
      }
      b.displayName = 'MDXCreateElement';
    },
    J3Rv: function (e, t, n) {
      n('aoOK');
      const r = n('q1tI'),
        { mdx: o, MDXProvider: c } = n('7ljp'),
        { useEffect: i } = n('q1tI');
      e.exports = function (
        { compiledSource: e, renderedOutput: t, scope: n = {} },
        { components: a } = {}
      ) {
        const [l, u] = r.useState(
          r.createElement('span', { dangerouslySetInnerHTML: { __html: t } })
        );
        return (
          'undefined' === typeof window ||
            i(() => {
              const t = window.requestIdleCallback(() => {
                const i = { mdx: o, ...a, ...n },
                  l = Object.keys(i),
                  s = Object.values(i),
                  d = new Function(
                    'React',
                    ...l,
                    e + '\n      return React.createElement(MDXContent, {});'
                  )(r, ...s),
                  p = r.createElement(c, { components: a }, d);
                u(p), window.cancelIdleCallback(t);
              });
            }, [e]),
          l
        );
      };
    },
    ZW3T: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/posts/[slug]',
        function () {
          return n('0FOq');
        },
      ]);
    },
    aoOK: function (e, t) {
      'undefined' !== typeof window &&
        ((window.requestIdleCallback =
          window.requestIdleCallback ||
          function (e) {
            var t = Date.now();
            return setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          }),
        (window.cancelIdleCallback =
          window.cancelIdleCallback ||
          function (e) {
            clearTimeout(e);
          }));
    },
  },
  [['ZW3T', 0, 2, 4, 1, 3, 5, 6]],
]);
