import Tt, { useState as ft } from "react";
var Pe = { exports: {} }, G = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function Or() {
  if (dt)
    return G;
  dt = 1;
  var e = Tt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, h, y) {
    var p, f = {}, O = null, N = null;
    y !== void 0 && (O = "" + y), h.key !== void 0 && (O = "" + h.key), h.ref !== void 0 && (N = h.ref);
    for (p in h)
      n.call(h, p) && !i.hasOwnProperty(p) && (f[p] = h[p]);
    if (l && l.defaultProps)
      for (p in h = l.defaultProps, h)
        f[p] === void 0 && (f[p] = h[p]);
    return { $$typeof: t, type: l, key: O, ref: N, props: f, _owner: s.current };
  }
  return G.Fragment = r, G.jsx = a, G.jsxs = a, G;
}
var X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pt;
function Tr() {
  return pt || (pt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Tt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), m = Symbol.iterator, E = "@@iterator";
    function C(o) {
      if (o === null || typeof o != "object")
        return null;
      var u = m && o[m] || o[E];
      return typeof u == "function" ? u : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(o) {
      {
        for (var u = arguments.length, d = new Array(u > 1 ? u - 1 : 0), b = 1; b < u; b++)
          d[b - 1] = arguments[b];
        D("error", o, d);
      }
    }
    function D(o, u, d) {
      {
        var b = _.ReactDebugCurrentFrame, S = b.getStackAddendum();
        S !== "" && (u += "%s", d = d.concat([S]));
        var v = d.map(function(w) {
          return String(w);
        });
        v.unshift("Warning: " + u), Function.prototype.apply.call(console[o], console, v);
      }
    }
    var ye = !1, Jt = !1, Yt = !1, Kt = !1, Gt = !1, $e;
    $e = Symbol.for("react.module.reference");
    function Xt(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === n || o === i || Gt || o === s || o === y || o === p || Kt || o === N || ye || Jt || Yt || typeof o == "object" && o !== null && (o.$$typeof === O || o.$$typeof === f || o.$$typeof === a || o.$$typeof === l || o.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === $e || o.getModuleId !== void 0));
    }
    function Qt(o, u, d) {
      var b = o.displayName;
      if (b)
        return b;
      var S = u.displayName || u.name || "";
      return S !== "" ? d + "(" + S + ")" : d;
    }
    function qe(o) {
      return o.displayName || "Context";
    }
    function B(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case s:
          return "StrictMode";
        case y:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case l:
            var u = o;
            return qe(u) + ".Consumer";
          case a:
            var d = o;
            return qe(d._context) + ".Provider";
          case h:
            return Qt(o, o.render, "ForwardRef");
          case f:
            var b = o.displayName || null;
            return b !== null ? b : B(o.type) || "Memo";
          case O: {
            var S = o, v = S._payload, w = S._init;
            try {
              return B(w(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, Y = 0, He, We, Ve, ze, Je, Ye, Ke;
    function Ge() {
    }
    Ge.__reactDisabledLog = !0;
    function Zt() {
      {
        if (Y === 0) {
          He = console.log, We = console.info, Ve = console.warn, ze = console.error, Je = console.group, Ye = console.groupCollapsed, Ke = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: Ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        Y++;
      }
    }
    function er() {
      {
        if (Y--, Y === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, o, {
              value: He
            }),
            info: H({}, o, {
              value: We
            }),
            warn: H({}, o, {
              value: Ve
            }),
            error: H({}, o, {
              value: ze
            }),
            group: H({}, o, {
              value: Je
            }),
            groupCollapsed: H({}, o, {
              value: Ye
            }),
            groupEnd: H({}, o, {
              value: Ke
            })
          });
        }
        Y < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ee = _.ReactCurrentDispatcher, be;
    function re(o, u, d) {
      {
        if (be === void 0)
          try {
            throw Error();
          } catch (S) {
            var b = S.stack.trim().match(/\n( *(at )?)/);
            be = b && b[1] || "";
          }
        return `
` + be + o;
      }
    }
    var Re = !1, ne;
    {
      var tr = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new tr();
    }
    function Xe(o, u) {
      if (!o || Re)
        return "";
      {
        var d = ne.get(o);
        if (d !== void 0)
          return d;
      }
      var b;
      Re = !0;
      var S = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = Ee.current, Ee.current = null, Zt();
      try {
        if (u) {
          var w = function() {
            throw Error();
          };
          if (Object.defineProperty(w.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(w, []);
            } catch (I) {
              b = I;
            }
            Reflect.construct(o, [], w);
          } else {
            try {
              w.call();
            } catch (I) {
              b = I;
            }
            o.call(w.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            b = I;
          }
          o();
        }
      } catch (I) {
        if (I && b && typeof I.stack == "string") {
          for (var R = I.stack.split(`
`), j = b.stack.split(`
`), A = R.length - 1, x = j.length - 1; A >= 1 && x >= 0 && R[A] !== j[x]; )
            x--;
          for (; A >= 1 && x >= 0; A--, x--)
            if (R[A] !== j[x]) {
              if (A !== 1 || x !== 1)
                do
                  if (A--, x--, x < 0 || R[A] !== j[x]) {
                    var F = `
` + R[A].replace(" at new ", " at ");
                    return o.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", o.displayName)), typeof o == "function" && ne.set(o, F), F;
                  }
                while (A >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        Re = !1, Ee.current = v, er(), Error.prepareStackTrace = S;
      }
      var V = o ? o.displayName || o.name : "", lt = V ? re(V) : "";
      return typeof o == "function" && ne.set(o, lt), lt;
    }
    function rr(o, u, d) {
      return Xe(o, !1);
    }
    function nr(o) {
      var u = o.prototype;
      return !!(u && u.isReactComponent);
    }
    function oe(o, u, d) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return Xe(o, nr(o));
      if (typeof o == "string")
        return re(o);
      switch (o) {
        case y:
          return re("Suspense");
        case p:
          return re("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case h:
            return rr(o.render);
          case f:
            return oe(o.type, u, d);
          case O: {
            var b = o, S = b._payload, v = b._init;
            try {
              return oe(v(S), u, d);
            } catch {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, Qe = {}, Ze = _.ReactDebugCurrentFrame;
    function ie(o) {
      if (o) {
        var u = o._owner, d = oe(o.type, o._source, u ? u.type : null);
        Ze.setExtraStackFrame(d);
      } else
        Ze.setExtraStackFrame(null);
    }
    function or(o, u, d, b, S) {
      {
        var v = Function.call.bind(se);
        for (var w in o)
          if (v(o, w)) {
            var R = void 0;
            try {
              if (typeof o[w] != "function") {
                var j = Error((b || "React class") + ": " + d + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              R = o[w](u, w, b, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (A) {
              R = A;
            }
            R && !(R instanceof Error) && (ie(S), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", d, w, typeof R), ie(null)), R instanceof Error && !(R.message in Qe) && (Qe[R.message] = !0, ie(S), T("Failed %s type: %s", d, R.message), ie(null));
          }
      }
    }
    var sr = Array.isArray;
    function we(o) {
      return sr(o);
    }
    function ir(o) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, d = u && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return d;
      }
    }
    function ar(o) {
      try {
        return et(o), !1;
      } catch {
        return !0;
      }
    }
    function et(o) {
      return "" + o;
    }
    function tt(o) {
      if (ar(o))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ir(o)), et(o);
    }
    var K = _.ReactCurrentOwner, cr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rt, nt, ge;
    ge = {};
    function ur(o) {
      if (se.call(o, "ref")) {
        var u = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function lr(o) {
      if (se.call(o, "key")) {
        var u = Object.getOwnPropertyDescriptor(o, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function fr(o, u) {
      if (typeof o.ref == "string" && K.current && u && K.current.stateNode !== u) {
        var d = B(K.current.type);
        ge[d] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(K.current.type), o.ref), ge[d] = !0);
      }
    }
    function dr(o, u) {
      {
        var d = function() {
          rt || (rt = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        d.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function pr(o, u) {
      {
        var d = function() {
          nt || (nt = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        d.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var hr = function(o, u, d, b, S, v, w) {
      var R = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: u,
        ref: d,
        props: w,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(R, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.defineProperty(R, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    };
    function mr(o, u, d, b, S) {
      {
        var v, w = {}, R = null, j = null;
        d !== void 0 && (tt(d), R = "" + d), lr(u) && (tt(u.key), R = "" + u.key), ur(u) && (j = u.ref, fr(u, S));
        for (v in u)
          se.call(u, v) && !cr.hasOwnProperty(v) && (w[v] = u[v]);
        if (o && o.defaultProps) {
          var A = o.defaultProps;
          for (v in A)
            w[v] === void 0 && (w[v] = A[v]);
        }
        if (R || j) {
          var x = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          R && dr(w, x), j && pr(w, x);
        }
        return hr(o, R, j, S, b, K.current, w);
      }
    }
    var Se = _.ReactCurrentOwner, ot = _.ReactDebugCurrentFrame;
    function W(o) {
      if (o) {
        var u = o._owner, d = oe(o.type, o._source, u ? u.type : null);
        ot.setExtraStackFrame(d);
      } else
        ot.setExtraStackFrame(null);
    }
    var ve;
    ve = !1;
    function Oe(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function st() {
      {
        if (Se.current) {
          var o = B(Se.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function yr(o) {
      {
        if (o !== void 0) {
          var u = o.fileName.replace(/^.*[\\\/]/, ""), d = o.lineNumber;
          return `

Check your code at ` + u + ":" + d + ".";
        }
        return "";
      }
    }
    var it = {};
    function Er(o) {
      {
        var u = st();
        if (!u) {
          var d = typeof o == "string" ? o : o.displayName || o.name;
          d && (u = `

Check the top-level render call using <` + d + ">.");
        }
        return u;
      }
    }
    function at(o, u) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var d = Er(u);
        if (it[d])
          return;
        it[d] = !0;
        var b = "";
        o && o._owner && o._owner !== Se.current && (b = " It was passed a child from " + B(o._owner.type) + "."), W(o), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, b), W(null);
      }
    }
    function ct(o, u) {
      {
        if (typeof o != "object")
          return;
        if (we(o))
          for (var d = 0; d < o.length; d++) {
            var b = o[d];
            Oe(b) && at(b, u);
          }
        else if (Oe(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var S = C(o);
          if (typeof S == "function" && S !== o.entries)
            for (var v = S.call(o), w; !(w = v.next()).done; )
              Oe(w.value) && at(w.value, u);
        }
      }
    }
    function br(o) {
      {
        var u = o.type;
        if (u == null || typeof u == "string")
          return;
        var d;
        if (typeof u == "function")
          d = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === f))
          d = u.propTypes;
        else
          return;
        if (d) {
          var b = B(u);
          or(d, o.props, "prop", b, o);
        } else if (u.PropTypes !== void 0 && !ve) {
          ve = !0;
          var S = B(u);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", S || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rr(o) {
      {
        for (var u = Object.keys(o.props), d = 0; d < u.length; d++) {
          var b = u[d];
          if (b !== "children" && b !== "key") {
            W(o), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), W(null);
            break;
          }
        }
        o.ref !== null && (W(o), T("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    function ut(o, u, d, b, S, v) {
      {
        var w = Xt(o);
        if (!w) {
          var R = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (R += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = yr(S);
          j ? R += j : R += st();
          var A;
          o === null ? A = "null" : we(o) ? A = "array" : o !== void 0 && o.$$typeof === t ? (A = "<" + (B(o.type) || "Unknown") + " />", R = " Did you accidentally export a JSX literal instead of a component?") : A = typeof o, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", A, R);
        }
        var x = mr(o, u, d, S, v);
        if (x == null)
          return x;
        if (w) {
          var F = u.children;
          if (F !== void 0)
            if (b)
              if (we(F)) {
                for (var V = 0; V < F.length; V++)
                  ct(F[V], o);
                Object.freeze && Object.freeze(F);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ct(F, o);
        }
        return o === n ? Rr(x) : br(x), x;
      }
    }
    function wr(o, u, d) {
      return ut(o, u, d, !0);
    }
    function gr(o, u, d) {
      return ut(o, u, d, !1);
    }
    var Sr = gr, vr = wr;
    X.Fragment = n, X.jsx = Sr, X.jsxs = vr;
  }()), X;
}
process.env.NODE_ENV === "production" ? Pe.exports = Or() : Pe.exports = Tr();
var q = Pe.exports;
function _t(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: _r } = Object.prototype, { getPrototypeOf: De } = Object, fe = /* @__PURE__ */ ((e) => (t) => {
  const r = _r.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), U = (e) => (e = e.toLowerCase(), (t) => fe(t) === e), de = (e) => (t) => typeof t === e, { isArray: J } = Array, Z = de("undefined");
function Ar(e) {
  return e !== null && !Z(e) && e.constructor !== null && !Z(e.constructor) && k(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const At = U("ArrayBuffer");
function xr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && At(e.buffer), t;
}
const Pr = de("string"), k = de("function"), xt = de("number"), pe = (e) => e !== null && typeof e == "object", Cr = (e) => e === !0 || e === !1, ae = (e) => {
  if (fe(e) !== "object")
    return !1;
  const t = De(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Nr = U("Date"), jr = U("File"), Fr = U("Blob"), kr = U("FileList"), Dr = (e) => pe(e) && k(e.pipe), Lr = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || k(e.append) && ((t = fe(e)) === "formdata" || // detect form-data instance
  t === "object" && k(e.toString) && e.toString() === "[object FormData]"));
}, Ur = U("URLSearchParams"), Br = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ee(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), J(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let l;
    for (n = 0; n < a; n++)
      l = i[n], t.call(null, e[l], l, e);
  }
}
function Pt(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const Ct = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Nt = (e) => !Z(e) && e !== Ct;
function Ce() {
  const { caseless: e } = Nt(this) && this || {}, t = {}, r = (n, s) => {
    const i = e && Pt(t, s) || s;
    ae(t[i]) && ae(n) ? t[i] = Ce(t[i], n) : ae(n) ? t[i] = Ce({}, n) : J(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && ee(arguments[n], r);
  return t;
}
const Ir = (e, t, r, { allOwnKeys: n } = {}) => (ee(t, (s, i) => {
  r && k(s) ? e[i] = _t(s, r) : e[i] = s;
}, { allOwnKeys: n }), e), Mr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), $r = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, qr = (e, t, r, n) => {
  let s, i, a;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      a = s[i], (!n || n(a, e, t)) && !l[a] && (t[a] = e[a], l[a] = !0);
    e = r !== !1 && De(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Hr = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Wr = (e) => {
  if (!e)
    return null;
  if (J(e))
    return e;
  let t = e.length;
  if (!xt(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Vr = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && De(Uint8Array)), zr = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, Jr = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Yr = U("HTMLFormElement"), Kr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), ht = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Gr = U("RegExp"), jt = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  ee(r, (s, i) => {
    let a;
    (a = t(s, i, e)) !== !1 && (n[i] = a || s);
  }), Object.defineProperties(e, n);
}, Xr = (e) => {
  jt(e, (t, r) => {
    if (k(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (k(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Qr = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((i) => {
      r[i] = !0;
    });
  };
  return J(e) ? n(e) : n(String(e).split(t)), r;
}, Zr = () => {
}, en = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Te = "abcdefghijklmnopqrstuvwxyz", mt = "0123456789", Ft = {
  DIGIT: mt,
  ALPHA: Te,
  ALPHA_DIGIT: Te + Te.toUpperCase() + mt
}, tn = (e = 16, t = Ft.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function rn(e) {
  return !!(e && k(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const nn = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (pe(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const i = J(n) ? [] : {};
        return ee(n, (a, l) => {
          const h = r(a, s + 1);
          !Z(h) && (i[l] = h);
        }), t[s] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, on = U("AsyncFunction"), sn = (e) => e && (pe(e) || k(e)) && k(e.then) && k(e.catch), c = {
  isArray: J,
  isArrayBuffer: At,
  isBuffer: Ar,
  isFormData: Lr,
  isArrayBufferView: xr,
  isString: Pr,
  isNumber: xt,
  isBoolean: Cr,
  isObject: pe,
  isPlainObject: ae,
  isUndefined: Z,
  isDate: Nr,
  isFile: jr,
  isBlob: Fr,
  isRegExp: Gr,
  isFunction: k,
  isStream: Dr,
  isURLSearchParams: Ur,
  isTypedArray: Vr,
  isFileList: kr,
  forEach: ee,
  merge: Ce,
  extend: Ir,
  trim: Br,
  stripBOM: Mr,
  inherits: $r,
  toFlatObject: qr,
  kindOf: fe,
  kindOfTest: U,
  endsWith: Hr,
  toArray: Wr,
  forEachEntry: zr,
  matchAll: Jr,
  isHTMLForm: Yr,
  hasOwnProperty: ht,
  hasOwnProp: ht,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: jt,
  freezeMethods: Xr,
  toObjectSet: Qr,
  toCamelCase: Kr,
  noop: Zr,
  toFiniteNumber: en,
  findKey: Pt,
  global: Ct,
  isContextDefined: Nt,
  ALPHABET: Ft,
  generateString: tn,
  isSpecCompliantForm: rn,
  toJSONObject: nn,
  isAsyncFn: on,
  isThenable: sn
};
function g(e, t, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s);
}
c.inherits(g, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: c.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const kt = g.prototype, Dt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Dt[e] = { value: e };
});
Object.defineProperties(g, Dt);
Object.defineProperty(kt, "isAxiosError", { value: !0 });
g.from = (e, t, r, n, s, i) => {
  const a = Object.create(kt);
  return c.toFlatObject(e, a, function(h) {
    return h !== Error.prototype;
  }, (l) => l !== "isAxiosError"), g.call(a, e.message, t, r, n, s), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
};
const an = null;
function Ne(e) {
  return c.isPlainObject(e) || c.isArray(e);
}
function Lt(e) {
  return c.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function yt(e, t, r) {
  return e ? e.concat(t).map(function(s, i) {
    return s = Lt(s), !r && i ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function cn(e) {
  return c.isArray(e) && !e.some(Ne);
}
const un = c.toFlatObject(c, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function he(e, t, r) {
  if (!c.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = c.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(E, C) {
    return !c.isUndefined(C[E]);
  });
  const n = r.metaTokens, s = r.visitor || p, i = r.dots, a = r.indexes, h = (r.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(t);
  if (!c.isFunction(s))
    throw new TypeError("visitor must be a function");
  function y(m) {
    if (m === null)
      return "";
    if (c.isDate(m))
      return m.toISOString();
    if (!h && c.isBlob(m))
      throw new g("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(m) || c.isTypedArray(m) ? h && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function p(m, E, C) {
    let _ = m;
    if (m && !C && typeof m == "object") {
      if (c.endsWith(E, "{}"))
        E = n ? E : E.slice(0, -2), m = JSON.stringify(m);
      else if (c.isArray(m) && cn(m) || (c.isFileList(m) || c.endsWith(E, "[]")) && (_ = c.toArray(m)))
        return E = Lt(E), _.forEach(function(D, ye) {
          !(c.isUndefined(D) || D === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? yt([E], ye, i) : a === null ? E : E + "[]",
            y(D)
          );
        }), !1;
    }
    return Ne(m) ? !0 : (t.append(yt(C, E, i), y(m)), !1);
  }
  const f = [], O = Object.assign(un, {
    defaultVisitor: p,
    convertValue: y,
    isVisitable: Ne
  });
  function N(m, E) {
    if (!c.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      f.push(m), c.forEach(m, function(_, T) {
        (!(c.isUndefined(_) || _ === null) && s.call(
          t,
          _,
          c.isString(T) ? T.trim() : T,
          E,
          O
        )) === !0 && N(_, E ? E.concat(T) : [T]);
      }), f.pop();
    }
  }
  if (!c.isObject(e))
    throw new TypeError("data must be an object");
  return N(e), t;
}
function Et(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Le(e, t) {
  this._pairs = [], e && he(e, this, t);
}
const Ut = Le.prototype;
Ut.append = function(t, r) {
  this._pairs.push([t, r]);
};
Ut.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Et);
  } : Et;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function ln(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Bt(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || ln, s = r && r.serialize;
  let i;
  if (s ? i = s(t, r) : i = c.isURLSearchParams(t) ? t.toString() : new Le(t, r).toString(n), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class bt {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    c.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const It = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, fn = typeof URLSearchParams < "u" ? URLSearchParams : Le, dn = typeof FormData < "u" ? FormData : null, pn = typeof Blob < "u" ? Blob : null, hn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: fn,
    FormData: dn,
    Blob: pn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Mt = typeof window < "u" && typeof document < "u", mn = ((e) => Mt && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), yn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", En = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Mt,
  hasStandardBrowserEnv: mn,
  hasStandardBrowserWebWorkerEnv: yn
}, Symbol.toStringTag, { value: "Module" })), L = {
  ...En,
  ...hn
};
function bn(e, t) {
  return he(e, new L.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, i) {
      return L.isNode && c.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Rn(e) {
  return c.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function wn(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let i;
  for (n = 0; n < s; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function $t(e) {
  function t(r, n, s, i) {
    let a = r[i++];
    if (a === "__proto__")
      return !0;
    const l = Number.isFinite(+a), h = i >= r.length;
    return a = !a && c.isArray(s) ? s.length : a, h ? (c.hasOwnProp(s, a) ? s[a] = [s[a], n] : s[a] = n, !l) : ((!s[a] || !c.isObject(s[a])) && (s[a] = []), t(r, n, s[a], i) && c.isArray(s[a]) && (s[a] = wn(s[a])), !l);
  }
  if (c.isFormData(e) && c.isFunction(e.entries)) {
    const r = {};
    return c.forEachEntry(e, (n, s) => {
      t(Rn(n), s, r, 0);
    }), r;
  }
  return null;
}
function gn(e, t, r) {
  if (c.isString(e))
    try {
      return (t || JSON.parse)(e), c.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Ue = {
  transitional: It,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, i = c.isObject(t);
    if (i && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t))
      return s ? JSON.stringify($t(t)) : t;
    if (c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t))
      return t;
    if (c.isArrayBufferView(t))
      return t.buffer;
    if (c.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return bn(t, this.formSerializer).toString();
      if ((l = c.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return he(
          l ? { "files[]": t } : t,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return i || s ? (r.setContentType("application/json", !1), gn(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Ue.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (t && c.isString(t) && (n && !this.responseType || s)) {
      const a = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (a)
          throw l.name === "SyntaxError" ? g.from(l, g.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: L.classes.FormData,
    Blob: L.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
c.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ue.headers[e] = {};
});
const Be = Ue, Sn = c.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), vn = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(a) {
    s = a.indexOf(":"), r = a.substring(0, s).trim().toLowerCase(), n = a.substring(s + 1).trim(), !(!r || t[r] && Sn[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Rt = Symbol("internals");
function Q(e) {
  return e && String(e).trim().toLowerCase();
}
function ce(e) {
  return e === !1 || e == null ? e : c.isArray(e) ? e.map(ce) : String(e);
}
function On(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Tn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function _e(e, t, r, n, s) {
  if (c.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!c.isString(t)) {
    if (c.isString(n))
      return t.indexOf(n) !== -1;
    if (c.isRegExp(n))
      return n.test(t);
  }
}
function _n(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function An(e, t) {
  const r = c.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(s, i, a) {
        return this[n].call(this, t, s, i, a);
      },
      configurable: !0
    });
  });
}
class me {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function i(l, h, y) {
      const p = Q(h);
      if (!p)
        throw new Error("header name must be a non-empty string");
      const f = c.findKey(s, p);
      (!f || s[f] === void 0 || y === !0 || y === void 0 && s[f] !== !1) && (s[f || h] = ce(l));
    }
    const a = (l, h) => c.forEach(l, (y, p) => i(y, p, h));
    return c.isPlainObject(t) || t instanceof this.constructor ? a(t, r) : c.isString(t) && (t = t.trim()) && !Tn(t) ? a(vn(t), r) : t != null && i(r, t, n), this;
  }
  get(t, r) {
    if (t = Q(t), t) {
      const n = c.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return On(s);
        if (c.isFunction(r))
          return r.call(this, s, n);
        if (c.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Q(t), t) {
      const n = c.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || _e(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function i(a) {
      if (a = Q(a), a) {
        const l = c.findKey(n, a);
        l && (!r || _e(n, n[l], l, r)) && (delete n[l], s = !0);
      }
    }
    return c.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || _e(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return c.forEach(this, (s, i) => {
      const a = c.findKey(n, i);
      if (a) {
        r[a] = ce(s), delete r[i];
        return;
      }
      const l = t ? _n(i) : String(i).trim();
      l !== i && delete r[i], r[l] = ce(s), n[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return c.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && c.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((s) => n.set(s)), n;
  }
  static accessor(t) {
    const n = (this[Rt] = this[Rt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(a) {
      const l = Q(a);
      n[l] || (An(s, a), n[l] = !0);
    }
    return c.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
me.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.reduceDescriptors(me.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
c.freezeMethods(me);
const M = me;
function Ae(e, t) {
  const r = this || Be, n = t || r, s = M.from(n.headers);
  let i = n.data;
  return c.forEach(e, function(l) {
    i = l.call(r, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function qt(e) {
  return !!(e && e.__CANCEL__);
}
function te(e, t, r) {
  g.call(this, e ?? "canceled", g.ERR_CANCELED, t, r), this.name = "CanceledError";
}
c.inherits(te, g, {
  __CANCEL__: !0
});
function xn(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new g(
    "Request failed with status code " + r.status,
    [g.ERR_BAD_REQUEST, g.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Pn = L.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, s, i) {
      const a = [e + "=" + encodeURIComponent(t)];
      c.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), c.isString(n) && a.push("path=" + n), c.isString(s) && a.push("domain=" + s), i === !0 && a.push("secure"), document.cookie = a.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Cn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Nn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ht(e, t) {
  return e && !Cn(t) ? Nn(e, t) : t;
}
const jn = L.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function s(i) {
      let a = i;
      return t && (r.setAttribute("href", a), a = r.href), r.setAttribute("href", a), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = s(window.location.href), function(a) {
      const l = c.isString(a) ? s(a) : a;
      return l.protocol === n.protocol && l.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function Fn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function kn(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, i = 0, a;
  return t = t !== void 0 ? t : 1e3, function(h) {
    const y = Date.now(), p = n[i];
    a || (a = y), r[s] = h, n[s] = y;
    let f = i, O = 0;
    for (; f !== s; )
      O += r[f++], f = f % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), y - a < t)
      return;
    const N = p && y - p;
    return N ? Math.round(O * 1e3 / N) : void 0;
  };
}
function wt(e, t) {
  let r = 0;
  const n = kn(50, 250);
  return (s) => {
    const i = s.loaded, a = s.lengthComputable ? s.total : void 0, l = i - r, h = n(l), y = i <= a;
    r = i;
    const p = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: l,
      rate: h || void 0,
      estimated: h && a && y ? (a - i) / h : void 0,
      event: s
    };
    p[t ? "download" : "upload"] = !0, e(p);
  };
}
const Dn = typeof XMLHttpRequest < "u", Ln = Dn && function(e) {
  return new Promise(function(r, n) {
    let s = e.data;
    const i = M.from(e.headers).normalize();
    let { responseType: a, withXSRFToken: l } = e, h;
    function y() {
      e.cancelToken && e.cancelToken.unsubscribe(h), e.signal && e.signal.removeEventListener("abort", h);
    }
    let p;
    if (c.isFormData(s)) {
      if (L.hasStandardBrowserEnv || L.hasStandardBrowserWebWorkerEnv)
        i.setContentType(!1);
      else if ((p = i.getContentType()) !== !1) {
        const [E, ...C] = p ? p.split(";").map((_) => _.trim()).filter(Boolean) : [];
        i.setContentType([E || "multipart/form-data", ...C].join("; "));
      }
    }
    let f = new XMLHttpRequest();
    if (e.auth) {
      const E = e.auth.username || "", C = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(E + ":" + C));
    }
    const O = Ht(e.baseURL, e.url);
    f.open(e.method.toUpperCase(), Bt(O, e.params, e.paramsSerializer), !0), f.timeout = e.timeout;
    function N() {
      if (!f)
        return;
      const E = M.from(
        "getAllResponseHeaders" in f && f.getAllResponseHeaders()
      ), _ = {
        data: !a || a === "text" || a === "json" ? f.responseText : f.response,
        status: f.status,
        statusText: f.statusText,
        headers: E,
        config: e,
        request: f
      };
      xn(function(D) {
        r(D), y();
      }, function(D) {
        n(D), y();
      }, _), f = null;
    }
    if ("onloadend" in f ? f.onloadend = N : f.onreadystatechange = function() {
      !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(N);
    }, f.onabort = function() {
      f && (n(new g("Request aborted", g.ECONNABORTED, e, f)), f = null);
    }, f.onerror = function() {
      n(new g("Network Error", g.ERR_NETWORK, e, f)), f = null;
    }, f.ontimeout = function() {
      let C = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const _ = e.transitional || It;
      e.timeoutErrorMessage && (C = e.timeoutErrorMessage), n(new g(
        C,
        _.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,
        e,
        f
      )), f = null;
    }, L.hasStandardBrowserEnv && (l && c.isFunction(l) && (l = l(e)), l || l !== !1 && jn(O))) {
      const E = e.xsrfHeaderName && e.xsrfCookieName && Pn.read(e.xsrfCookieName);
      E && i.set(e.xsrfHeaderName, E);
    }
    s === void 0 && i.setContentType(null), "setRequestHeader" in f && c.forEach(i.toJSON(), function(C, _) {
      f.setRequestHeader(_, C);
    }), c.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials), a && a !== "json" && (f.responseType = e.responseType), typeof e.onDownloadProgress == "function" && f.addEventListener("progress", wt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && f.upload && f.upload.addEventListener("progress", wt(e.onUploadProgress)), (e.cancelToken || e.signal) && (h = (E) => {
      f && (n(!E || E.type ? new te(null, e, f) : E), f.abort(), f = null);
    }, e.cancelToken && e.cancelToken.subscribe(h), e.signal && (e.signal.aborted ? h() : e.signal.addEventListener("abort", h)));
    const m = Fn(O);
    if (m && L.protocols.indexOf(m) === -1) {
      n(new g("Unsupported protocol " + m + ":", g.ERR_BAD_REQUEST, e));
      return;
    }
    f.send(s || null);
  });
}, je = {
  http: an,
  xhr: Ln
};
c.forEach(je, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const gt = (e) => `- ${e}`, Un = (e) => c.isFunction(e) || e === null || e === !1, Wt = {
  getAdapter: (e) => {
    e = c.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const s = {};
    for (let i = 0; i < t; i++) {
      r = e[i];
      let a;
      if (n = r, !Un(r) && (n = je[(a = String(r)).toLowerCase()], n === void 0))
        throw new g(`Unknown adapter '${a}'`);
      if (n)
        break;
      s[a || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(s).map(
        ([l, h]) => `adapter ${l} ` + (h === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? i.length > 1 ? `since :
` + i.map(gt).join(`
`) : " " + gt(i[0]) : "as no adapter specified";
      throw new g(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: je
};
function xe(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new te(null, e);
}
function St(e) {
  return xe(e), e.headers = M.from(e.headers), e.data = Ae.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Wt.getAdapter(e.adapter || Be.adapter)(e).then(function(n) {
    return xe(e), n.data = Ae.call(
      e,
      e.transformResponse,
      n
    ), n.headers = M.from(n.headers), n;
  }, function(n) {
    return qt(n) || (xe(e), n && n.response && (n.response.data = Ae.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = M.from(n.response.headers))), Promise.reject(n);
  });
}
const vt = (e) => e instanceof M ? { ...e } : e;
function z(e, t) {
  t = t || {};
  const r = {};
  function n(y, p, f) {
    return c.isPlainObject(y) && c.isPlainObject(p) ? c.merge.call({ caseless: f }, y, p) : c.isPlainObject(p) ? c.merge({}, p) : c.isArray(p) ? p.slice() : p;
  }
  function s(y, p, f) {
    if (c.isUndefined(p)) {
      if (!c.isUndefined(y))
        return n(void 0, y, f);
    } else
      return n(y, p, f);
  }
  function i(y, p) {
    if (!c.isUndefined(p))
      return n(void 0, p);
  }
  function a(y, p) {
    if (c.isUndefined(p)) {
      if (!c.isUndefined(y))
        return n(void 0, y);
    } else
      return n(void 0, p);
  }
  function l(y, p, f) {
    if (f in t)
      return n(y, p);
    if (f in e)
      return n(void 0, y);
  }
  const h = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (y, p) => s(vt(y), vt(p), !0)
  };
  return c.forEach(Object.keys(Object.assign({}, e, t)), function(p) {
    const f = h[p] || s, O = f(e[p], t[p], p);
    c.isUndefined(O) && f !== l || (r[p] = O);
  }), r;
}
const Vt = "1.6.8", Ie = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ie[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ot = {};
Ie.transitional = function(t, r, n) {
  function s(i, a) {
    return "[Axios v" + Vt + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
  }
  return (i, a, l) => {
    if (t === !1)
      throw new g(
        s(a, " has been removed" + (r ? " in " + r : "")),
        g.ERR_DEPRECATED
      );
    return r && !Ot[a] && (Ot[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, a, l) : !0;
  };
};
function Bn(e, t, r) {
  if (typeof e != "object")
    throw new g("options must be an object", g.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const i = n[s], a = t[i];
    if (a) {
      const l = e[i], h = l === void 0 || a(l, i, e);
      if (h !== !0)
        throw new g("option " + i + " must be " + h, g.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new g("Unknown option " + i, g.ERR_BAD_OPTION);
  }
}
const Fe = {
  assertOptions: Bn,
  validators: Ie
}, $ = Fe.validators;
class le {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new bt(),
      response: new bt()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        n.stack ? i && !String(n.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + i) : n.stack = i;
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = z(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: i } = r;
    n !== void 0 && Fe.assertOptions(n, {
      silentJSONParsing: $.transitional($.boolean),
      forcedJSONParsing: $.transitional($.boolean),
      clarifyTimeoutError: $.transitional($.boolean)
    }, !1), s != null && (c.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : Fe.assertOptions(s, {
      encode: $.function,
      serialize: $.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a = i && c.merge(
      i.common,
      i[r.method]
    );
    i && c.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete i[m];
      }
    ), r.headers = M.concat(a, i);
    const l = [];
    let h = !0;
    this.interceptors.request.forEach(function(E) {
      typeof E.runWhen == "function" && E.runWhen(r) === !1 || (h = h && E.synchronous, l.unshift(E.fulfilled, E.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(E) {
      y.push(E.fulfilled, E.rejected);
    });
    let p, f = 0, O;
    if (!h) {
      const m = [St.bind(this), void 0];
      for (m.unshift.apply(m, l), m.push.apply(m, y), O = m.length, p = Promise.resolve(r); f < O; )
        p = p.then(m[f++], m[f++]);
      return p;
    }
    O = l.length;
    let N = r;
    for (f = 0; f < O; ) {
      const m = l[f++], E = l[f++];
      try {
        N = m(N);
      } catch (C) {
        E.call(this, C);
        break;
      }
    }
    try {
      p = St.call(this, N);
    } catch (m) {
      return Promise.reject(m);
    }
    for (f = 0, O = y.length; f < O; )
      p = p.then(y[f++], y[f++]);
    return p;
  }
  getUri(t) {
    t = z(this.defaults, t);
    const r = Ht(t.baseURL, t.url);
    return Bt(r, t.params, t.paramsSerializer);
  }
}
c.forEach(["delete", "get", "head", "options"], function(t) {
  le.prototype[t] = function(r, n) {
    return this.request(z(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, a, l) {
      return this.request(z(l || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  le.prototype[t] = r(), le.prototype[t + "Form"] = r(!0);
});
const ue = le;
class Me {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners)
        return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const a = new Promise((l) => {
        n.subscribe(l), i = l;
      }).then(s);
      return a.cancel = function() {
        n.unsubscribe(i);
      }, a;
    }, t(function(i, a, l) {
      n.reason || (n.reason = new te(i, a, l), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Me(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const In = Me;
function Mn(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function $n(e) {
  return c.isObject(e) && e.isAxiosError === !0;
}
const ke = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ke).forEach(([e, t]) => {
  ke[t] = e;
});
const qn = ke;
function zt(e) {
  const t = new ue(e), r = _t(ue.prototype.request, t);
  return c.extend(r, ue.prototype, t, { allOwnKeys: !0 }), c.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return zt(z(e, s));
  }, r;
}
const P = zt(Be);
P.Axios = ue;
P.CanceledError = te;
P.CancelToken = In;
P.isCancel = qt;
P.VERSION = Vt;
P.toFormData = he;
P.AxiosError = g;
P.Cancel = P.CanceledError;
P.all = function(t) {
  return Promise.all(t);
};
P.spread = Mn;
P.isAxiosError = $n;
P.mergeConfig = z;
P.AxiosHeaders = M;
P.formToJSON = (e) => $t(c.isHTMLForm(e) ? new FormData(e) : e);
P.getAdapter = Wt.getAdapter;
P.HttpStatusCode = qn;
P.default = P;
const Hn = (e) => {
  const [t, r] = ft(null), [n, s] = ft(!1), i = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], a = async (l) => {
    r(l);
    try {
      const h = await P.get(
        `https://100035.pythonanywhere.com/addons/create-response/?workspace_id=${e.workspace_id}&username=${e.username}&scale_id=${e.scale_id}&item=${l}`
      );
      console.log(h), s(!0);
    } catch (h) {
      console.error("Error:", h);
    } finally {
      r(null);
    }
  };
  return /* @__PURE__ */ q.jsxs("div", { children: [
    /* @__PURE__ */ q.jsx("h2", { className: "heading", children: "On a scale of 0-10, how likely are you to recommend the product to a friend or a colleague?" }),
    n ? /* @__PURE__ */ q.jsx("div", { className: "response-message", children: "Thanks for your response!" }) : /* @__PURE__ */ q.jsx("div", { className: "button-container", children: i.map((l) => /* @__PURE__ */ q.jsx(
      "button",
      {
        className: "button",
        style: { backgroundColor: e.buttonColor },
        onClick: () => a(l),
        disabled: t === l,
        children: t === l ? /* @__PURE__ */ q.jsx("div", { className: "spinner" }) : l
      },
      l
    )) })
  ] });
};
function Vn({
  workspace_id: e,
  username: t,
  scale_id: r,
  buttonColor: n,
  scale_type: s
}) {
  return /* @__PURE__ */ q.jsx("div", { className: "container", children: s === "nps" && /* @__PURE__ */ q.jsx(
    Hn,
    {
      workspace_id: e,
      username: t,
      scale_id: r,
      buttonColor: n
    }
  ) });
}
export {
  Vn as default
};
