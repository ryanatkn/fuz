import{b as k,a as n,t as _,f as d,c as v,l as M,s as A}from"./disclose-version.COjBdUkA.js";import{a as N,r as m,p as O,g as e,d as s}from"./runtime.BITJpo-a.js";import{s as P}from"./render.Z7Ne6upu.js";import{i as f}from"./if.C-SBJCAL.js";import{s as j,a as q}from"./attributes.CdOanwG5.js";import{s as w}from"./style.CN5pMWL6.js";import{p as Q}from"./props.CQvavPLi.js";const z={inform:{color:"var(--text_2)",icon:"✻"},help:{color:"var(--color_b_5)",icon:"➺"},error:{color:"var(--color_c_5)",icon:"!?"}};var R=_('<div class="icon svelte-1ymyy7n"><!></div>'),S=_('<!> <div class="content svelte-1ymyy7n"><!></div>',1),T=_("<button><!></button>"),U=_("<div><!></div>");function tt(B,t){N(t,!0);const C=Q(t,"status",3,"inform"),D=s(()=>z[C()]),E=s(()=>e(D)),u=s(()=>{let{color:r,icon:o}=e(E);return[r,o]}),F=s(()=>e(u)[0]),G=s(()=>e(u)[1]),y=s(()=>t.color??e(F)),b=s(()=>typeof t.icon=="string"?t.icon:e(G)??z.inform.icon);var g=k();function x(r){var o=S(),a=d(o);f(a,()=>t.icon!==null,J=>{var h=R(),K=v(h);f(K,()=>!t.icon||typeof t.icon=="string",l=>{var c=M(l);m(()=>P(c,e(b))),n(l,c)},l=>{var c=k(),L=d(c);j(()=>t.icon,L,()=>e(b)),n(l,c)}),n(J,h)});var i=A(A(a,!0)),I=v(i);j(()=>t.children,I),n(r,o)}var H=d(g);f(H,()=>t.onclick,r=>{var o=T();let a;var i=v(o);x(i),m(()=>{a=q(o,a,[{class:"message"},{type:"button"},{onclick:t.onclick},{disabled:t.disabled},t.attrs],!0,"svelte-1ymyy7n"),w(o,"--color",e(y))}),n(r,o)},r=>{var o=U();let a;var i=v(o);x(i),m(()=>{a=q(o,a,[{role:"alert"},{class:"message panel"},t.attrs],!0,"svelte-1ymyy7n"),w(o,"--color",e(y))}),n(r,o)}),n(B,g),O()}export{tt as A};
