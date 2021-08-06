import {
  S as t,
  i as s,
  s as e,
  e as a,
  k as l,
  c as n,
  a as c,
  n as r,
  d as o,
  b as i,
  f as d,
  E as u,
  r as h,
  u as m,
  w as f,
  x as p,
  H as g,
  V as $,
  a2 as v,
  a3 as x,
  j as b,
  l as E,
  m as N,
  o as S,
  v as I,
  t as y,
  g as w,
  h as L,
  F as k,
  G as T,
} from './vendor-09e2d04d.js';
import { g as V } from './stores-68f61374.js';
function D(t) {
  let s, e, a, n;
  function c(t, s) {
    return t[4] ? G : B;
  }
  (s = new x({
    props: {
      interval: 100,
      cursor: !1,
      $$slots: { default: [z] },
      $$scope: { ctx: t },
    },
  })),
    s.$on('done', t[6]);
  let i = c(t),
    u = i(t);
  return {
    c() {
      b(s.$$.fragment), (e = l()), u.c(), (a = E());
    },
    l(t) {
      N(s.$$.fragment, t), (e = r(t)), u.l(t), (a = E());
    },
    m(t, l) {
      S(s, t, l), d(t, e, l), u.m(t, l), d(t, a, l), (n = !0);
    },
    p(t, e) {
      const l = {};
      520 & e && (l.$$scope = { dirty: e, ctx: t }),
        s.$set(l),
        i === (i = c(t)) && u
          ? u.p(t, e)
          : (u.d(1), (u = i(t)), u && (u.c(), u.m(a.parentNode, a)));
    },
    i(t) {
      n || (p(s.$$.fragment, t), (n = !0));
    },
    o(t) {
      m(s.$$.fragment, t), (n = !1);
    },
    d(t) {
      I(s, t), t && o(e), u.d(t), t && o(a);
    },
  };
}
function P(t) {
  let s,
    e,
    g,
    $,
    v,
    x,
    b,
    E,
    N,
    S,
    I,
    L = t[5].finishedTutorial && M(t),
    T = t[5].enteredNotes.length >= 3 && t[5].canPresent && j(t),
    V = t[5].enteredNotes.length < 3 && A(t);
  return {
    c() {
      L && L.c(),
        (s = l()),
        (e = a('img')),
        ($ = l()),
        T && T.c(),
        (v = l()),
        V && V.c(),
        (x = l()),
        (b = a('button')),
        (E = y('next')),
        this.h();
    },
    l(t) {
      L && L.l(t),
        (s = r(t)),
        (e = n(t, 'IMG', { id: !0, src: !0, alt: !0, class: !0 })),
        ($ = r(t)),
        T && T.l(t),
        (v = r(t)),
        V && V.l(t),
        (x = r(t)),
        (b = n(t, 'BUTTON', { id: !0, class: !0 }));
      var a = c(b);
      (E = w(a, 'next')), a.forEach(o), this.h();
    },
    h() {
      i(e, 'id', 'player-img'),
        e.src !== (g = '/bard-io/static/assets/favicon.png') &&
          i(e, 'src', '/bard-io/static/assets/favicon.png'),
        i(e, 'alt', ''),
        i(e, 'class', 'svelte-13u630l'),
        i(b, 'id', 'next-button'),
        i(b, 'class', 'hidden svelte-13u630l');
    },
    m(a, l) {
      L && L.m(a, l),
        d(a, s, l),
        d(a, e, l),
        d(a, $, l),
        T && T.m(a, l),
        d(a, v, l),
        V && V.m(a, l),
        d(a, x, l),
        d(a, b, l),
        u(b, E),
        (N = !0),
        S || ((I = k(b, 'click', t[7])), (S = !0));
    },
    p(t, e) {
      t[5].finishedTutorial
        ? L
          ? L.p(t, e)
          : ((L = M(t)), L.c(), L.m(s.parentNode, s))
        : L && (L.d(1), (L = null)),
        t[5].enteredNotes.length >= 3 && t[5].canPresent
          ? T || ((T = j(t)), T.c(), T.m(v.parentNode, v))
          : T && (T.d(1), (T = null)),
        t[5].enteredNotes.length < 3
          ? V
            ? (V.p(t, e), 32 & e && p(V, 1))
            : ((V = A(t)), V.c(), p(V, 1), V.m(x.parentNode, x))
          : V &&
            (h(),
            m(V, 1, 1, () => {
              V = null;
            }),
            f());
    },
    i(t) {
      N || (p(V), (N = !0));
    },
    o(t) {
      m(V), (N = !1);
    },
    d(t) {
      L && L.d(t),
        t && o(s),
        t && o(e),
        t && o($),
        T && T.d(t),
        t && o(v),
        V && V.d(t),
        t && o(x),
        t && o(b),
        (S = !1),
        I();
    },
  };
}
function z(t) {
  let s, e;
  return {
    c() {
      (s = a('p')), (e = y(t[3])), this.h();
    },
    l(a) {
      s = n(a, 'P', { class: !0 });
      var l = c(s);
      (e = w(l, t[3])), l.forEach(o), this.h();
    },
    h() {
      i(s, 'class', 'msg-txt svelte-13u630l');
    },
    m(t, a) {
      d(t, s, a), u(s, e);
    },
    p(t, s) {
      8 & s && L(e, t[3]);
    },
    d(t) {
      t && o(s);
    },
  };
}
function B(t) {
  let s, e;
  return {
    c() {
      (s = a('img')), this.h();
    },
    l(t) {
      (s = n(t, 'IMG', { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      s.src !== (e = `/bard-io/static/forest-of-letters/${t[2]}-${t[1]}.png`) &&
        i(s, 'src', e),
        i(s, 'alt', ''),
        i(s, 'class', 'svelte-13u630l');
    },
    m(t, e) {
      d(t, s, e);
    },
    p(t, a) {
      6 & a &&
        s.src !== (e = `/bard-io/static/forest-of-letters/${t[2]}-${t[1]}.png`) &&
        i(s, 'src', e);
    },
    d(t) {
      t && o(s);
    },
  };
}
function G(t) {
  let s, e;
  return {
    c() {
      (s = a('img')), this.h();
    },
    l(t) {
      (s = n(t, 'IMG', { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      s.src !== (e = '/bard-io/static/scale-the-mountain/monk.png') &&
        i(s, 'src', '/bard-io/static/scale-the-mountain/monk.png'),
        i(s, 'alt', ''),
        i(s, 'class', 'svelte-13u630l');
    },
    m(t, e) {
      d(t, s, e);
    },
    p: T,
    d(t) {
      t && o(s);
    },
  };
}
function M(t) {
  let s,
    e,
    l = `${t[5].gold} gold`;
  return {
    c() {
      (s = a('span')), (e = y(l)), this.h();
    },
    l(t) {
      s = n(t, 'SPAN', { class: !0 });
      var a = c(s);
      (e = w(a, l)), a.forEach(o), this.h();
    },
    h() {
      i(s, 'class', 'gold-count svelte-13u630l');
    },
    m(t, a) {
      d(t, s, a), u(s, e);
    },
    p(t, s) {
      32 & s && l !== (l = `${t[5].gold} gold`) && L(e, l);
    },
    d(t) {
      t && o(s);
    },
  };
}
function j(t) {
  let s, e, l, r;
  return {
    c() {
      (s = a('button')), (e = y('present chord')), this.h();
    },
    l(t) {
      s = n(t, 'BUTTON', { class: !0 });
      var a = c(s);
      (e = w(a, 'present chord')), a.forEach(o), this.h();
    },
    h() {
      i(s, 'class', 'check-btn svelte-13u630l');
    },
    m(a, n) {
      d(a, s, n), u(s, e), l || ((r = k(s, 'click', t[8])), (l = !0));
    },
    d(t) {
      t && o(s), (l = !1), r();
    },
  };
}
function A(t) {
  let s, e;
  return (
    (s = new x({
      props: {
        interval: 100,
        cursor: !1,
        $$slots: { default: [O] },
        $$scope: { ctx: t },
      },
    })),
    s.$on('done', t[6]),
    {
      c() {
        b(s.$$.fragment);
      },
      l(t) {
        N(s.$$.fragment, t);
      },
      m(t, a) {
        S(s, t, a), (e = !0);
      },
      p(t, e) {
        const a = {};
        520 & e && (a.$$scope = { dirty: e, ctx: t }), s.$set(a);
      },
      i(t) {
        e || (p(s.$$.fragment, t), (e = !0));
      },
      o(t) {
        m(s.$$.fragment, t), (e = !1);
      },
      d(t) {
        I(s, t);
      },
    }
  );
}
function O(t) {
  let s, e;
  return {
    c() {
      (s = a('p')), (e = y(t[3])), this.h();
    },
    l(a) {
      s = n(a, 'P', { class: !0 });
      var l = c(s);
      (e = w(l, t[3])), l.forEach(o), this.h();
    },
    h() {
      i(s, 'class', 'msg-txt svelte-13u630l');
    },
    m(t, a) {
      d(t, s, a), u(s, e);
    },
    p(t, s) {
      8 & s && L(e, t[3]);
    },
    d(t) {
      t && o(s);
    },
  };
}
function U(t) {
  let s, e, g, $, v, x, b, E, N, S, I, y;
  const w = [P, D],
    L = [];
  function k(t, s) {
    return t[0] ? 0 : 1;
  }
  return (
    (e = k(t)),
    (g = L[e] = w[e](t)),
    {
      c() {
        (s = a('div')),
          g.c(),
          ($ = l()),
          (v = a('div')),
          (x = l()),
          (b = a('div')),
          (E = l()),
          (N = a('div')),
          (S = l()),
          (I = a('div')),
          this.h();
      },
      l(t) {
        s = n(t, 'DIV', { class: !0 });
        var e = c(s);
        g.l(e),
          ($ = r(e)),
          (v = n(e, 'DIV', { class: !0 })),
          c(v).forEach(o),
          (x = r(e)),
          (b = n(e, 'DIV', { class: !0 })),
          c(b).forEach(o),
          (E = r(e)),
          (N = n(e, 'DIV', { class: !0 })),
          c(N).forEach(o),
          (S = r(e)),
          (I = n(e, 'DIV', { class: !0 })),
          c(I).forEach(o),
          e.forEach(o),
          this.h();
      },
      h() {
        i(v, 'class', 'box b1 svelte-13u630l'),
          i(b, 'class', 'box b2 svelte-13u630l'),
          i(N, 'class', 'box b3 svelte-13u630l'),
          i(I, 'class', 'box b4 svelte-13u630l'),
          i(s, 'class', 'message-box svelte-13u630l');
      },
      m(t, a) {
        d(t, s, a),
          L[e].m(s, null),
          u(s, $),
          u(s, v),
          u(s, x),
          u(s, b),
          u(s, E),
          u(s, N),
          u(s, S),
          u(s, I),
          (y = !0);
      },
      p(t, [a]) {
        let l = e;
        (e = k(t)),
          e === l
            ? L[e].p(t, a)
            : (h(),
              m(L[l], 1, 1, () => {
                L[l] = null;
              }),
              f(),
              (g = L[e]),
              g ? g.p(t, a) : ((g = L[e] = w[e](t)), g.c()),
              p(g, 1),
              g.m(s, $));
      },
      i(t) {
        y || (p(g), (y = !0));
      },
      o(t) {
        m(g), (y = !1);
      },
      d(t) {
        t && o(s), L[e].d();
      },
    }
  );
}
function F(t, s, e) {
  let a;
  g(t, V, (t) => e(5, (a = t)));
  let { player: l = !1 } = s,
    { mood: n = 'sad' } = s,
    { noteLetter: c = 'c' } = s,
    { message: r = 'YALLS' } = s,
    { wizard: o = !1 } = s;
  return (
    (t.$$set = (t) => {
      'player' in t && e(0, (l = t.player)),
        'mood' in t && e(1, (n = t.mood)),
        'noteLetter' in t && e(2, (c = t.noteLetter)),
        'message' in t && e(3, (r = t.message)),
        'wizard' in t && e(4, (o = t.wizard));
    }),
    [
      l,
      n,
      c,
      r,
      o,
      a,
      () => {
        0 !== a.tutorialState &&
          4 !== a.tutorialState &&
          5 !== a.tutorialState &&
          6 !== a.tutorialState &&
          7 !== a.tutorialState &&
          8 !== a.tutorialState &&
          (console.log('showing btn'),
          document.getElementById('next-button').classList.remove('hidden'));
      },
      () => {
        document.getElementById('next-button').classList.add('hidden'),
          4 !== a.tutorialState && $(V, (a.tutorialState += 1), a);
      },
      function (s) {
        v.call(this, t, s);
      },
    ]
  );
}
class H extends t {
  constructor(t) {
    super(),
      s(this, t, F, U, e, {
        player: 0,
        mood: 1,
        noteLetter: 2,
        message: 3,
        wizard: 4,
      });
  }
}
export { H as M };
