_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [9],
  {
    0: function (e, t, n) {
      n('74v/'), (e.exports = n('nOHt'));
    },
    '74v/': function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n('hUgY');
        },
      ]);
    },
    hUgY: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('rePB'),
        o = n('nKUr'),
        c = (n('nwS1'), n('tMgT'));
      n('zlK1');
      function i(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      t.default = function (e) {
        var t = e.Component,
          n = e.pageProps;
        return Object(o.jsx)(c.a, { children: Object(o.jsx)(t, u({}, n)) });
      };
    },
    nwS1: function (e, t, n) {},
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
    tMgT: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      }),
        n.d(t, 'b', function () {
          return u;
        });
      var r = n('nKUr'),
        o = n('q1tI'),
        c = n.n(o).a.createContext(void 0),
        i = function (e) {
          var t = e.children,
            n = Object(o.useState)(null),
            i = n[0],
            u = n[1];
          return (
            Object(o.useEffect)(function () {
              var e = window.__theme;
              u(e || 'dark'),
                (window.__onThemeChange = function () {
                  u(window.__theme);
                });
            }, []),
            Object(o.useEffect)(
              function () {
                null !== i &&
                  (window.localStorage.setItem('theme', i),
                  (document.body.className = ''),
                  (document.body.className = i));
              },
              [i]
            ),
            Object(r.jsx)(c.Provider, {
              value: { colorTheme: i, setColorTheme: u },
              children: t,
            })
          );
        };
      function u() {
        var e = Object(o.useContext)(c);
        if (void 0 === e)
          throw new Error(
            'useColorTheme must be called inside a ColorThemeProvider'
          );
        return e;
      }
    },
    zlK1: function (e, t, n) {},
  },
  [[0, 0, 2, 1]],
]);
