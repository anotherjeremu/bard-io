import {
  S as s,
  i as e,
  s as a,
  e as t,
  t as l,
  k as c,
  c as r,
  a as h,
  g as i,
  d as o,
  n,
  b as v,
  D as u,
  f,
  E as d,
  F as m,
  l as p,
  G as g,
  H as $,
  I as x,
  j as E,
  m as b,
  o as k,
  J as A,
  x as I,
  u as L,
  v as j,
} from '../chunks/vendor-09e2d04d.js';
import { p as H } from '../chunks/stores-479d6723.js';
import { g as N } from '../chunks/stores-68f61374.js';
function M(s) {
  let e, a, u, p, $, x, E, b, k;
  return {
    c() {
      (e = t('nav')),
        (a = t('button')),
        (u = t('img')),
        ($ = c()),
        (x = t('h1')),
        (E = l('bard.io')),
        this.h();
    },
    l(s) {
      e = r(s, 'NAV', { id: !0, class: !0 });
      var t = h(e);
      a = r(t, 'BUTTON', { class: !0 });
      var l = h(a);
      (u = r(l, 'IMG', { src: !0, alt: !0, id: !0, class: !0 })),
        l.forEach(o),
        ($ = n(t)),
        (x = r(t, 'H1', { class: !0 }));
      var c = h(x);
      (E = i(c, 'bard.io')), c.forEach(o), t.forEach(o), this.h();
    },
    h() {
      u.src !== (p = '/bard-io/static/assets/menu-icon-mobile.png') &&
        v(u, 'src', '/bard-io/static/assets/menu-icon-mobile.png'),
        v(u, 'alt', 'Menu Button'),
        v(u, 'id', 'menu-icon'),
        v(u, 'class', 'svelte-xghg25'),
        v(a, 'class', 'svelte-xghg25'),
        v(x, 'class', 'svelte-xghg25'),
        v(e, 'id', 'mobile-nav'),
        v(e, 'class', 'svelte-xghg25');
    },
    m(t, l) {
      f(t, e, l),
        d(e, a),
        d(a, u),
        d(e, $),
        d(e, x),
        d(x, E),
        b || ((k = m(a, 'click', s[3])), (b = !0));
    },
    p: g,
    d(s) {
      s && o(e), (b = !1), k();
    },
  };
}
function S(s) {
  let e,
    a,
    p,
    g,
    $,
    x,
    E,
    b,
    k,
    A,
    I,
    L,
    j = s[2].tutorialState >= 7 && B(s);
  return {
    c() {
      (e = t('div')),
        (a = t('ul')),
        (p = t('li')),
        (g = t('a')),
        ($ = l('Home')),
        (x = c()),
        j && j.c(),
        (E = c()),
        (b = t('li')),
        (k = t('a')),
        (A = l('About')),
        this.h();
    },
    l(s) {
      e = r(s, 'DIV', { id: !0, class: !0 });
      var t = h(e);
      a = r(t, 'UL', { id: !0, class: !0 });
      var l = h(a);
      p = r(l, 'LI', { class: !0 });
      var c = h(p);
      g = r(c, 'A', { 'sveltekit:prefetch': !0, href: !0, class: !0 });
      var v = h(g);
      ($ = i(v, 'Home')),
        v.forEach(o),
        c.forEach(o),
        (x = n(l)),
        j && j.l(l),
        (E = n(l)),
        (b = r(l, 'LI', { class: !0 }));
      var u = h(b);
      k = r(u, 'A', { 'sveltekit:prefetch': !0, href: !0, class: !0 });
      var f = h(k);
      (A = i(f, 'About')),
        f.forEach(o),
        u.forEach(o),
        l.forEach(o),
        t.forEach(o),
        this.h();
    },
    h() {
      v(g, 'sveltekit:prefetch', ''),
        v(g, 'href', '/'),
        v(g, 'class', 'svelte-xghg25'),
        v(p, 'class', 'svelte-xghg25'),
        u(p, 'active', '/' === s[1].path),
        v(k, 'sveltekit:prefetch', ''),
        v(k, 'href', '/about'),
        v(k, 'class', 'svelte-xghg25'),
        v(b, 'class', 'svelte-xghg25'),
        u(b, 'active', '/about' === s[1].path),
        v(a, 'id', 'modal-inner'),
        v(a, 'class', 'svelte-xghg25'),
        v(e, 'id', 'modal'),
        v(e, 'class', 'svelte-xghg25');
    },
    m(t, l) {
      f(t, e, l),
        d(e, a),
        d(a, p),
        d(p, g),
        d(g, $),
        d(a, x),
        j && j.m(a, null),
        d(a, E),
        d(a, b),
        d(b, k),
        d(k, A),
        I || ((L = m(e, 'click', s[4])), (I = !0));
    },
    p(s, e) {
      2 & e && u(p, 'active', '/' === s[1].path),
        s[2].tutorialState >= 7
          ? j
            ? j.p(s, e)
            : ((j = B(s)), j.c(), j.m(a, E))
          : j && (j.d(1), (j = null)),
        2 & e && u(b, 'active', '/about' === s[1].path);
    },
    d(s) {
      s && o(e), j && j.d(), (I = !1), L();
    },
  };
}
function B(s) {
  let e, a, c;
  return {
    c() {
      (e = t('li')), (a = t('a')), (c = l('Levels')), this.h();
    },
    l(s) {
      e = r(s, 'LI', { class: !0 });
      var t = h(e);
      a = r(t, 'A', { 'sveltekit:prefetch': !0, href: !0, class: !0 });
      var l = h(a);
      (c = i(l, 'Levels')), l.forEach(o), t.forEach(o), this.h();
    },
    h() {
      v(a, 'sveltekit:prefetch', ''),
        v(a, 'href', '/levels'),
        v(a, 'class', 'svelte-xghg25'),
        v(e, 'class', 'svelte-xghg25'),
        u(e, 'active', '/levels' === s[1].path);
    },
    m(s, t) {
      f(s, e, t), d(e, a), d(a, c);
    },
    p(s, a) {
      2 & a && u(e, 'active', '/levels' === s[1].path);
    },
    d(s) {
      s && o(e);
    },
  };
}
function D(s) {
  let e, a;
  let t = M(s),
    l = s[0] && S(s);
  return {
    c() {
      t.c(), (e = c()), l && l.c(), (a = p());
    },
    l(s) {
      t.l(s), (e = n(s)), l && l.l(s), (a = p());
    },
    m(s, c) {
      t.m(s, c), f(s, e, c), l && l.m(s, c), f(s, a, c);
    },
    p(s, [e]) {
      t.p(s, e),
        s[0]
          ? l
            ? l.p(s, e)
            : ((l = S(s)), l.c(), l.m(a.parentNode, a))
          : l && (l.d(1), (l = null));
    },
    i: g,
    o: g,
    d(s) {
      t.d(s), s && o(e), l && l.d(s), s && o(a);
    },
  };
}
function G(s, e, a) {
  let t, l;
  $(s, H, (s) => a(1, (t = s))), $(s, N, (s) => a(2, (l = s)));
  let c = !1;
  return [
    c,
    t,
    l,
    () => {
      a(0, (c = !0));
    },
    () => {
      a(0, (c = !1));
    },
  ];
}
class T extends s {
  constructor(s) {
    super(), e(this, s, G, D, a, {});
  }
}
function U(s) {
  let e, a, l, i;
  e = new T({});
  const u = s[1].default,
    d = x(u, s, s[0], null);
  return {
    c() {
      E(e.$$.fragment), (a = c()), (l = t('main')), d && d.c(), this.h();
    },
    l(s) {
      b(e.$$.fragment, s), (a = n(s)), (l = r(s, 'MAIN', { class: !0 }));
      var t = h(l);
      d && d.l(t), t.forEach(o), this.h();
    },
    h() {
      v(l, 'class', 'svelte-tu8il');
    },
    m(s, t) {
      k(e, s, t), f(s, a, t), f(s, l, t), d && d.m(l, null), (i = !0);
    },
    p(s, [e]) {
      d && d.p && (!i || 1 & e) && A(d, u, s, s[0], i ? e : -1, null, null);
    },
    i(s) {
      i || (I(e.$$.fragment, s), I(d, s), (i = !0));
    },
    o(s) {
      L(e.$$.fragment, s), L(d, s), (i = !1);
    },
    d(s) {
      j(e, s), s && o(a), s && o(l), d && d.d(s);
    },
  };
}
function V(s, e, a) {
  let { $$slots: t = {}, $$scope: l } = e;
  return (
    (s.$$set = (s) => {
      '$$scope' in s && a(0, (l = s.$$scope));
    }),
    [l, t]
  );
}
class w extends s {
  constructor(s) {
    super(), e(this, s, V, U, a, {});
  }
}
export { w as default };
