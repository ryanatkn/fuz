import{b as w,f,a as s,c as l,t as _,s as y,r as v,I as M}from"./disclose-version.rfpNPRPV.js";import{p as N,a as O,t as u,g as e,d as n}from"./runtime.BxFpMM5w.js";import{s as P}from"./render.CS4eACGI.js";import{i as b}from"./if.BEc--qLH.js";import{s as A,a as I}from"./attributes.B8BVxPeI.js";import{s as p}from"./style.Bk7ejTAN.js";import{p as Q}from"./props.CG8-7N7W.js";const q={inform:{color:"var(--text_color_3)",icon:"✻"},help:{color:"var(--color_b_5)",icon:"➺"},error:{color:"var(--color_c_5)",icon:"!?"}};var R=_('<div class="icon svelte-tarwjh"><!></div>'),S=_('<!> <div class="content svelte-tarwjh"><!></div>',1),T=_("<button><!></button>"),U=_("<div><!></div>");function ot(z,o){N(o,!0);const g=r=>{var t=S(),a=f(t);b(a,()=>o.icon!==null,J=>{var d=R(),K=l(d);b(K,()=>!o.icon||typeof o.icon=="string",m=>{var c=M();u(()=>P(c,e(j))),s(m,c)},m=>{var c=w(),L=f(c);A(L,()=>o.icon,()=>e(j)),s(m,c)}),v(d),s(J,d)});var i=y(y(a,!0)),H=l(i);A(H,()=>o.children),v(i),s(r,t)},B=Q(o,"status",3,"inform"),C=n(()=>q[B()]),D=n(()=>e(C)),h=n(()=>{let{color:r,icon:t}=e(D);return[r,t]}),E=n(()=>e(h)[0]),F=n(()=>e(h)[1]),x=n(()=>o.color??e(E)),j=n(()=>typeof o.icon=="string"?o.icon:e(F)??q.inform.icon);var k=w(),G=f(k);b(G,()=>o.onclick,r=>{var t=T();let a;var i=l(t);g(i),v(t),u(()=>{a=I(t,a,{class:"message",type:"button",onclick:o.onclick,disabled:o.disabled,...o.attrs},"svelte-tarwjh"),p(t,"--text_color",e(x),void 0,!0)}),s(r,t)},r=>{var t=U();let a;var i=l(t);g(i),v(t),u(()=>{a=I(t,a,{role:"alert",class:"message panel",...o.attrs},"svelte-tarwjh"),p(t,"--text_color",e(x),void 0,!0)}),s(r,t)}),s(z,k),O()}export{ot as A};
