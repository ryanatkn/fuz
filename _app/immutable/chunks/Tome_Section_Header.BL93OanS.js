import{a as n,t as u,g as A,c as B}from"./disclose-version.DkCpnmWz.js";import{p as k,t as g,a as T,c as v,r as h,f as y,s as C}from"./runtime.BsoL6_G0.js";import{s as F}from"./render.BhLz70Cz.js";import{i as G}from"./if.Bx1zmLIF.js";import{s as H,b as I,d as J}from"./attributes.BGcIkhL2.js";import{e as K}from"./svelte-element.B6PpBqMa.js";import{t as L}from"./class.DUdqnVba.js";import{p as M}from"./props.D6_ZrTZG.js";import{s as N,a as O,p as P}from"./stores.4b0rU2nE.js";import{o as Q}from"./index-client.BlXxpINk.js";import{b as R}from"./entry.Bt8_YNcg.js";import{s as U}from"./path.QeaNnfvq.js";import{a as V,i as W,H as X}from"./intersect.BqaEzIN6.js";import{c as Y}from"./context_helpers.CoN_yrMG.js";import{l as S}from"./library_helpers.svelte.Dzq7wcQC.js";const w=Y();var Z=u("<section><!></section>");function ut(_,t){k(t,!0);const m=S.get();let a;w.set(r=>{a=r});var e=Z();let s;var c=v(e);H(c,()=>t.children),h(e),g(()=>s=I(e,s,{...t.attrs})),V(e,(r,o)=>W(r,o),()=>({intersecting:r})=>{a&&(r?m.slugs_onscreen.add(a):m.slugs_onscreen.delete(a))}),n(_,e),T()}let $=0;var tt=u("<div><!></div> <!>",1),et=u("<header><!></header>");function pt(_,t){k(t,!0);const m=N(),a=()=>O(P,"$page",m),e=M(t,"tag",3,"h3"),s=U(t.text),c=w.get();if(!c)throw Error("Tome_Section_Header must be a child of Tome_Section");c(s);const r="tome_section_header_"+(($+=1)-1),o=S.get();a().url.pathname!==R+o.root_path&&(o.add(r,t.text,s,e()),Q(()=>{o.remove(r)}));var d=et(),D=v(d);K(D,e,!1,(p,E)=>{let b;g(()=>{b=J(p,b,{...t.attrs},"svelte-3vtdd8"),L(p,"tome_section_header",!0)});var x=tt(),l=y(x),j=v(l);G(j,()=>t.children,f=>{var i=B(),z=y(i);H(z,()=>t.children),n(f,i)},f=>{var i=A();g(()=>F(i,t.text)),n(f,i)}),h(l);var q=C(l,2);X(q,{slug:s}),n(E,x)}),h(d),n(_,d),T()}export{ut as T,pt as a};
