import{a as i,t as u,g as J,c as K}from"./disclose-version.D7hgbcr2.js";import{p as B,a as C,c as g,g as m,r as v,d as h,f as E,t as D,s as F,ai as M,ah as N}from"./runtime.CyUAaF6i.js";import{i as I}from"./if.Df50zaIY.js";import{d as O,c as Q,s as w}from"./attributes.CECX38sg.js";import{H as S,a as L,i as R}from"./intersect.BMTFiLJI.js";import{p as V}from"./props.jEArgUtm.js";import{s as P,a as U,p as Y}from"./stores.D8h4cWjd.js";import{s as j}from"./path.QeaNnfvq.js";import{b as W}from"./entry.C4BhE2RE.js";import{s as X}from"./render.CCgqK4Xj.js";import{e as Z}from"./svelte-element.DhBWWgQa.js";import{o as $}from"./index-client.DwVNPtAC.js";import{b as ee,s as te}from"./tome.B3JncHe6.js";import{l as q,t as ae,D as se}from"./library_helpers.svelte.DZZVkuCQ.js";let re=0;var oe=u("<a><!></a>"),ne=u("<!> <!>",1),me=u("<header><!></header>");function ie(b,t){B(t,!0);const y=P(),x=()=>U(Y,"$page",y),d=(l,T=N)=>{M();var c=J();D(()=>X(c,T())),i(l,c)},a=ee(),o="tome_header_"+((re+=1)-1),_=q.get(),s=j(a.name);_.add(o,a.name,s),$(()=>{_.remove(o)});const n=h(()=>ae(s,x().url.pathname)),k=h(()=>m(n).path),p=h(()=>m(n).path_is_selected);var e=me(),r=g(e);Z(r,()=>m(p)?"h1":"h2",!1,(l,T)=>{O(l,null,{class:"tome_header"},"svelte-d05s6w");var c=ne(),A=E(c);I(A,()=>m(p),H=>{d(H,()=>a.name)},H=>{var f=oe(),G=g(f);d(G,()=>a.name),v(f),D(()=>Q(f,"href",m(k))),i(H,f)});var z=F(A,2);S(z,{slug:s}),i(T,c)}),v(e),i(b,e),C()}var _e=u('<section class="tome_content width_md mb_xl9"><header class="mb_xl3"><!></header> <!></section>');function He(b,t){B(t,!0);const y=P(),x=()=>U(Y,"$page",y),d=V(t,"library_path",3,se),a=q.get();te(t.tome);const o=j(t.tome.name),_=h(()=>x().url.pathname===W+d());var s=_e(),n=g(s),k=g(n);I(k,()=>t.header,e=>{var r=K(),l=E(r);w(l,()=>t.header),i(e,r)},e=>{ie(e,{})}),v(n);var p=F(n,2);w(p,()=>t.children),v(s),L(s,(e,r)=>R(e,r),()=>m(_)?({intersecting:e})=>{e?a.slugs_onscreen.add(o):a.slugs_onscreen.delete(o)}:null),L(n,(e,r)=>R(e,r),()=>m(_)?null:({intersecting:e})=>{e?a.slugs_onscreen.add(o):a.slugs_onscreen.delete(o)}),i(b,s),C()}export{He as T};
