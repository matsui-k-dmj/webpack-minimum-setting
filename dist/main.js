(() => {
  'use strict';
  var e = {
      549: (e, t, n) => {
        n.d(t, { Z: () => i });
        var r = n(650),
          o = n.n(r),
          c = n(196),
          a = n.n(c)()(o());
        a.push([
          e.id,
          '#countUpButton {\n  color: white;\n  background-color: coral;\n  border: 2px solid coral;\n  border-radius: 10px;\n  cursor: pointer;\n}\n',
          '',
        ]);
        const i = a;
      },
      200: (e, t, n) => {
        n.d(t, { Z: () => i });
        var r = n(650),
          o = n.n(r),
          c = n(196),
          a = n.n(c)()(o());
        a.push([
          e.id,
          '.Hd77DTFfsSM2mzjx34a9 {\n  font-size: 2rem;\n  color: coral;\n}\n',
          '',
        ]),
          (a.locals = { double: 'Hd77DTFfsSM2mzjx34a9' });
        const i = a;
      },
      196: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = '',
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += '@supports ('.concat(t[4], ') {')),
                  t[2] && (n += '@media '.concat(t[2], ' {')),
                  r &&
                    (n += '@layer'.concat(
                      t[5].length > 0 ? ' '.concat(t[5]) : '',
                      ' {'
                    )),
                  (n += e(t)),
                  r && (n += '}'),
                  t[2] && (n += '}'),
                  t[4] && (n += '}'),
                  n
                );
              }).join('');
            }),
            (t.i = function (e, n, r, o, c) {
              'string' == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var s = this[i][0];
                  null != s && (a[s] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var l = [].concat(e[u]);
                (r && a[l[0]]) ||
                  (void 0 !== c &&
                    (void 0 === l[5] ||
                      (l[1] = '@layer'
                        .concat(l[5].length > 0 ? ' '.concat(l[5]) : '', ' {')
                        .concat(l[1], '}')),
                    (l[5] = c)),
                  n &&
                    (l[2]
                      ? ((l[1] = '@media '
                          .concat(l[2], ' {')
                          .concat(l[1], '}')),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = '@supports ('
                          .concat(l[4], ') {')
                          .concat(l[1], '}')),
                        (l[4] = o))
                      : (l[4] = ''.concat(o))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      650: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      62: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var c = {}, a = [], i = 0; i < e.length; i++) {
            var s = e[i],
              u = r.base ? s[0] + r.base : s[0],
              l = c[u] || 0,
              d = ''.concat(u, ' ').concat(l);
            c[u] = l + 1;
            var p = n(d),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) t[p].references++, t[p].updater(f);
            else {
              var m = o(f, r);
              (r.byIndex = i),
                t.splice(i, 0, { identifier: d, updater: m, references: 1 });
            }
            a.push(d);
          }
          return a;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var c = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < c.length; a++) {
              var i = n(c[a]);
              t[i].references--;
            }
            for (var s = r(e, o), u = 0; u < c.length; u++) {
              var l = n(c[u]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            c = s;
          };
        };
      },
      566: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      911: (e) => {
        e.exports = function (e) {
          var t = document.createElement('style');
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      107: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute('nonce', t);
        };
      },
      552: (e) => {
        e.exports = function (e) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = '';
                n.supports && (r += '@supports ('.concat(n.supports, ') {')),
                  n.media && (r += '@media '.concat(n.media, ' {'));
                var o = void 0 !== n.layer;
                o &&
                  (r += '@layer'.concat(
                    n.layer.length > 0 ? ' '.concat(n.layer) : '',
                    ' {'
                  )),
                  (r += n.css),
                  o && (r += '}'),
                  n.media && (r += '}'),
                  n.supports && (r += '}');
                var c = n.sourceMap;
                c &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(c)))),
                      ' */'
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      227: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var c = (t[r] = { id: r, exports: {} });
    return e[r](c, c.exports, n), c.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + '');
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName('script');
        if (r.length) for (var o = r.length - 1; o > -1 && !e; ) e = r[o--].src;
      }
      if (!e)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (n.p = e);
    })(),
    (n.nc = void 0),
    (() => {
      var e = n(62),
        t = n.n(e),
        r = n(552),
        o = n.n(r),
        c = n(566),
        a = n.n(c),
        i = n(107),
        s = n.n(i),
        u = n(911),
        l = n.n(u),
        d = n(227),
        p = n.n(d),
        f = n(549),
        m = {};
      (m.styleTagTransform = p()),
        (m.setAttributes = s()),
        (m.insert = a().bind(null, 'head')),
        (m.domAPI = o()),
        (m.insertStyleElement = l()),
        t()(f.Z, m),
        f.Z && f.Z.locals && f.Z.locals;
      var y = n(200),
        v = {};
      (v.styleTagTransform = p()),
        (v.setAttributes = s()),
        (v.insert = a().bind(null, 'head')),
        (v.domAPI = o()),
        (v.insertStyleElement = l()),
        t()(y.Z, v);
      const g = y.Z && y.Z.locals ? y.Z.locals : void 0,
        M = n.p + 'asset/PNG_transparency_demonstration_1.png';
      console.log('Hello World!'),
        console.log(g),
        (document.getElementById('double').className = g.double);
      const h = document.createElement('img');
      (h.src =
        'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgY29sb3I9IiMwMDAwMDAiPjxkZWZzPjxzdHlsZT4uY2xzLTYzY2U3NDQ0ZWE1N2VhNmM4MzgwMDVlZC0xe2ZpbGw6bm9uZTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS1taXRlcmxpbWl0OjEwO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTYzY2U3NDQ0ZWE1N2VhNmM4MzgwMDVlZC0xIiBkPSJNNi4yNywyMS41NUg4LjVsMi4zMy45NWg3LjkyYTIuODYsMi44NiwwLDAsMCwyLjg1LTIuNTlsLjg4LTkuMTNjMC0uMTQsMC0uMjgsMC0uNDJoMGEyLjE4LDIuMTgsMCwwLDAtMi4xOC0yLjE4SDE1LjYzbC41Mi0xLjA5YTYuMjcsNi4yNywwLDAsMCwuNjItMi43M2gwQTIuODYsMi44NiwwLDAsMCwxMy45MSwxLjVoMEExLjksMS45LDAsMCwwLDEyLDMuNDFoMGE2LDYsMCwwLDEtMS4yNSwzLjY2bC0yLjMzLDNINi4yNyI+PC9wYXRoPjxyZWN0IGNsYXNzPSJjbHMtNjNjZTc0NDRlYTU3ZWE2YzgzODAwNWVkLTEiIHg9IjEuNSIgeT0iOS4xNCIgd2lkdGg9IjQuNzciIGhlaWdodD0iMTMuMzYiPjwvcmVjdD48L3N2Zz4NCg=='),
        document.body.appendChild(h);
      const N = document.createElement('img');
      (N.src = M), document.body.appendChild(N);
      let b = new (class {
        constructor() {
          this.count = 0;
        }
        up() {
          this.count++;
        }
        getDouble() {
          return 2 * this.count;
        }
      })();
      document.getElementById('countUpButton').addEventListener('click', () => {
        b.up(),
          (document.getElementById('count').innerText = b.count),
          (document.getElementById('double').innerText = b.getDouble());
      });
    })();
})();
