import{b as k,a as s,t as _,f as d,c as v,q as L,s as w}from"./disclose-version.8cXmPj91.js";import{p as M,a as N,t as m,g as a,d as i}from"./runtime.tEJefHBO.js";import{s as O}from"./render.C1K3rtSi.js";import{i as f}from"./if.CTp5gYEz.js";import{s as y,a as A}from"./attributes.giDdLxsX.js";import{s as q}from"./style.iv2mhl8q.js";import{p as P}from"./props.B6XUCPZJ.js";const p={inform:{color:"var(--text_2)",icon:"✻"},help:{color:"var(--color_b_5)",icon:"➺"},error:{color:"var(--color_c_5)",icon:"!?"}};var Q=_('<div class="icon svelte-tarwjh"><!></div>'),R=_('<!> <div class="content svelte-tarwjh"><!></div>',1),S=_("<button><!></button>"),T=_("<div><!></div>");function tt(z,t){M(t,!0);const u=r=>{var o=R(),e=d(o);f(e,()=>t.icon!==null,I=>{var j=Q(),J=v(j);f(J,()=>!t.icon||typeof t.icon=="string",l=>{var c=L(l);m(()=>O(c,a(h))),s(l,c)},l=>{var c=k(),K=d(c);y(K,()=>t.icon,()=>a(h)),s(l,c)}),s(I,j)});var n=w(w(e,!0)),H=v(n);y(H,()=>t.children),s(r,o)},B=P(t,"status",3,"inform"),C=i(()=>p[B()]),D=i(()=>a(C)),b=i(()=>{let{color:r,icon:o}=a(D);return[r,o]}),E=i(()=>a(b)[0]),F=i(()=>a(b)[1]),g=i(()=>t.color??a(E)),h=i(()=>typeof t.icon=="string"?t.icon:a(F)??p.inform.icon);var x=k(),G=d(x);f(G,()=>t.onclick,r=>{var o=S();let e;var n=v(o);u(n),m(()=>{e=A(o,e,{class:"message",type:"button",onclick:t.onclick,disabled:t.disabled,...t.attrs},!0,"svelte-tarwjh"),q(o,"--text_color",a(g))}),s(r,o)},r=>{var o=T();let e;var n=v(o);u(n),m(()=>{e=A(o,e,{role:"alert",class:"message panel",...t.attrs},!0,"svelte-tarwjh"),q(o,"--text_color",a(g))}),s(r,o)}),s(z,x),N()}export{tt as A};
