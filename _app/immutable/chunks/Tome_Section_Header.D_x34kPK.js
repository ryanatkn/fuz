import{a as m,t as u,g as j,c as q}from"./disclose-version.D7hgbcr2.js";import{p as k,t as g,a as S,l as z,m as A,c as h,r as v,f as y,s as B}from"./runtime.CyUAaF6i.js";import{s as F}from"./render.CCgqK4Xj.js";import{i as G}from"./if.Df50zaIY.js";import{s as T,a as I,d as J}from"./attributes.CECX38sg.js";import{e as L}from"./svelte-element.DhBWWgQa.js";import{t as M}from"./class.BkFrtDpl.js";import{p as N}from"./props.jEArgUtm.js";import{s as O,a as P,p as Q}from"./stores.D8h4cWjd.js";import{o as R}from"./index-client.DwVNPtAC.js";import{b as U}from"./entry.C4BhE2RE.js";import{s as V}from"./path.QeaNnfvq.js";import{a as W,i as X,H as Z}from"./intersect.BMTFiLJI.js";import{l as H}from"./library_helpers.svelte.DZZVkuCQ.js";const C=Symbol("register_section_header"),$=()=>A(C),tt=o=>z(C,o);var et=u("<section><!></section>");function bt(o,t){k(t,!0);const _=H.get();let r;tt(s=>{r=s});var e=et();let a;var c=h(e);T(c,()=>t.children),v(e),g(()=>a=I(e,a,{...t.attrs})),W(e,(s,i)=>X(s,i),()=>({intersecting:s})=>{r&&(s?_.slugs_onscreen.add(r):_.slugs_onscreen.delete(r))}),m(o,e),S()}let st=0;var rt=u("<div><!></div> <!>",1),at=u("<header><!></header>");function xt(o,t){k(t,!0);const _=O(),r=()=>P(Q,"$page",_),e=N(t,"tag",3,"h3"),a=V(t.text),c=$();if(!c)throw Error("Tome_Section_Header must be a child of Tome_Section");c(a);const s="tome_section_header_"+((st+=1)-1),i=H.get();r().url.pathname!==U+i.root_path&&(i.add(s,t.text,a,e()),R(()=>{i.remove(s)}));var d=at(),E=h(d);L(E,e,!1,(p,w)=>{let b;g(()=>{b=J(p,b,{...t.attrs},"svelte-3vtdd8"),M(p,"tome_section_header",!0)});var x=rt(),l=y(x),D=h(l);G(D,()=>t.children,f=>{var n=q(),Y=y(n);T(Y,()=>t.children),m(f,n)},f=>{var n=j();g(()=>F(n,t.text)),m(f,n)}),v(l);var K=B(l,2);Z(K,{slug:a}),m(w,x)}),v(d),m(o,d),S()}export{bt as T,xt as a};
