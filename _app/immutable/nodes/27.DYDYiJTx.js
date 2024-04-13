import{b as te,a as r,t as i,f as vt,s as t,c as n}from"../chunks/disclose-version.COjBdUkA.js";import{p as ee,a as oe,g as e,r as mt,q as g,m as R,d as pt,$ as ne}from"../chunks/runtime.BITJpo-a.js";import{d as se,s as m,b as d}from"../chunks/render.Z7Ne6upu.js";import{i as gt}from"../chunks/if.C-SBJCAL.js";import{e as ae,i as ce}from"../chunks/each.Bo18fhyf.js";import{t as o,s as p}from"../chunks/class.xOCMzRrt.js";import{t as be,s as ue}from"../chunks/index.n8cLYxRO.js";import{C as a}from"../chunks/Code.CAGfF-1b.js";import{T as le}from"../chunks/Tome_Detail.Bv5GFb6O.js";import{g as de}from"../chunks/tome.DbsBumql.js";import{C as re}from"../chunks/Color_Scheme_Input.DNeaKdFq.js";import{T as C}from"../chunks/Tome_Subheading.BQSEHhY3.js";var ie=(_,c)=>g(c,!e(c)),_e=i("<div>clicked a button</div>"),ve=i("<section><!> <button> </button> <button disabled> </button> <button> </button> <button disabled> </button> <button> </button> <button disabled> </button></section>"),me=i("With <code>.selected</code>",1),pe=(_,c)=>g(c,0),ge=(_,c)=>g(c,1),fe=(_,c)=>g(c,2),xe=(_,c)=>g(c,!e(c)),he=i("<code>.selected</code>"),$e=i("unselected",1),ke=i("With <code>.plain</code> and <code>.icon_button</code>",1),we=i(`<section><div class="mb_lg"><!> <button>a button</button> <!></div> <p>Buttons have a <code>.selected</code> state that can be used for various UI purposes, like
			showing a selected item in a menu or a styling button's <code>aria-pressed</code> state. Instead
			of having two distinct styles of buttons with outlined and filled variants, Fuz makes filled buttons
			the default, and selected buttons are outlined.</p> <button disabled>disabled button</button> <button class="selected">button.selected</button> <button class="selected" disabled>disabled button.selected</button> <button class="selected deselectable">button.selected.deselectable</button> <button class="selected deselectable" disabled>disabled button.selected.deselectable</button></section> <section><!> <!> <div class="box w_100 mb_lg"><!></div></section> <!> <section><!> <button disabled>:|</button></section> <section><!> <button disabled>a bigger disabled button</button></section> <section><!> <nav><button>button 0</button> <button>button 1</button> <button>button 2</button></nav></section> <section><!> <button class="w_100 selected">a button with <code>.selected</code></button></section> <section><p><code>.selected</code> buttons with <code>.deselectable</code> continue to be clickable when selected:</p> <!></section> <section><button class="w_100 deselectable">a <code>.deselectable</code> <!> button</button> <button class="w_100 selected deselectable" disabled>disabled <code>.deselectable</code> <code>.selected</code></button></section> <section><!> <!> <button class="plain">+</button> <button class="plain mb_lg" disabled>+</button> <!> <button class="icon_button">+</button> <button class="icon_button mb_lg" disabled>+</button> <!> <button class="plain icon_button">+</button> <button class="plain icon_button" disabled>+</button> <h4><code>.selected</code> variants</h4> <!> <button class="plain selected mb_lg">+</button> <!> <button class="icon_button selected mb_lg">+</button> <!> <button class="plain icon_button selected">+</button> <h4><code>.selected</code> and <code>.deselectable</code> variants</h4> <!> <button class="plain selected deselectable mb_lg">+</button> <!> <button class="icon_button selected deselectable mb_lg">+</button> <!> <button class="plain icon_button selected deselectable">+</button></section>`,1);function Ne(_,c){oe(c,!0);const ft=de("buttons");let S=R(!1),v=R(1),W=R(!0);const xt=["a","b","c","d","e","f","g"],s=!0;var y=te(),ht=vt(y);le(ht,{tome:ft,children:($t,Ie)=>{var B=we(),P=vt(B),D=n(P),L=n(D);a(L,{content:"<button>a button</button>"});var N=t(t(L,!0));N.__click=[ie,S];var kt=t(t(N,!0));gt(kt,()=>e(S),u=>{var l=_e();be(3,l,()=>ue),r(u,l)});var wt=t(t(D,!0)),Y=t(t(wt,!0));o(Y,"mb_xs",s);var q=t(t(Y,!0));o(q,"mb_xs",s);var z=t(t(q,!0));o(z,"mb_xs",s);var F=t(t(z,!0));o(F,"mb_xs",s);var Tt=t(t(F,!0));o(Tt,"mb_xs",s);var U=t(t(P,!0)),j=n(U);C(j,{text:"Colorful buttons",slug:"colorful-buttons"});var G=t(t(j,!0));ae(G,65,()=>xt,ce,(u,l,h)=>{var it=ve();const b=pt(()=>`color_${ne(l)}`);var _t=n(it),Jt=pt(()=>`<button class="${e(b)}">`);a(_t,{get content(){return e(Jt)}});var $=t(t(_t,!0)),Kt=n($),k=t(t($,!0)),Ot=n(k),w=t(t(k,!0)),Qt=n(w),T=t(t(w,!0)),Vt=n(T),I=t(t(T,!0)),Xt=n(I),M=t(t(I,!0)),Zt=n(M);mt(()=>{p($,e(b)),o($,"mb_xs",s),m(Kt,`.${d(e(b))}`),p(k,e(b)),o(k,"mb_xs",s),m(Ot,`disabled .${d(e(b))}`),p(w,`${d(e(b))} selected`),o(w,"mb_xs",s),m(Qt,`.${d(e(b))}.selected`),p(T,`${d(e(b))} selected`),o(T,"mb_xs",s),m(Vt,`disabled .${d(e(b))}.selected`),p(I,`${d(e(b))} selected deselectable`),o(I,"mb_xs",s),m(Xt,`.${d(e(b))}.selected.deselectable`),p(M,`${d(e(b))} selected deselectable`),o(M,"mb_xs",s),m(Zt,`disabled .${d(e(b))}.selected.deselectable`)}),r(u,it)});var It=t(t(G,!0)),Ct=n(It);re(Ct,{});var H=t(t(U,!0));C(H,{text:"With disabled attribute",slug:"disabled-attribute"});var J=t(t(H,!0)),Wt=n(J);a(Wt,{content:`<button disabled>
	:|
</button>`});var K=t(t(J,!0)),At=n(K);a(At,{content:`<button disabled>
	a bigger disabled button
</button>`});var O=t(t(K,!0)),Q=n(O);C(Q,{text:"With .selected",slug:"selected-class",children:(u,l)=>{var h=me();r(u,h)}});var Et=t(t(Q,!0)),f=n(Et);f.__click=[pe,v],o(f,"mb_xs",s);var x=t(t(f,!0));x.__click=[ge,v],o(x,"mb_xs",s);var A=t(t(x,!0));A.__click=[fe,v],o(A,"mb_xs",s);var V=t(t(O,!0)),Mt=n(V);a(Mt,{content:'<button class="selected">...</button>'});var X=t(t(V,!0)),Rt=n(X),St=t(t(Rt,!0));a(St,{content:`<button class="selected deselectable">
	...
</button>`});var Z=t(t(X,!0)),E=n(Z);E.__click=[xe,W];var yt=t(n(E)),Bt=t(t(yt,!0));gt(Bt,()=>e(W),u=>{var l=he();r(u,l)},u=>{var l=$e();r(u,l)});var Pt=t(t(Z,!0)),tt=n(Pt);C(tt,{text:"With .plain and .icon_button",slug:"plain-and-icon_button",children:(u,l)=>{var h=ke();r(u,h)}});var et=t(t(tt,!0));a(et,{content:`<button class="plain">
	+
</button>`});var ot=t(t(et,!0));o(ot,"mb_xs",s);var Dt=t(t(ot,!0)),nt=t(t(Dt,!0));a(nt,{content:`<button class="icon_button">
	+
</button>`});var st=t(t(nt,!0));o(st,"mb_xs",s);var Lt=t(t(st,!0)),at=t(t(Lt,!0));a(at,{content:`<button class="plain icon_button">
	+
</button>`});var ct=t(t(at,!0));o(ct,"mb_xs",s);var Nt=t(t(ct,!0)),Yt=t(t(Nt,!0)),bt=t(t(Yt,!0));a(bt,{content:`<button class="plain selected">
	+
</button>`});var qt=t(t(bt,!0)),ut=t(t(qt,!0));a(ut,{content:`<button class="icon_button selected">
	+
</button>`});var zt=t(t(ut,!0)),lt=t(t(zt,!0));a(lt,{content:`<button class="plain icon_button selected">
	+
</button>`});var Ft=t(t(lt,!0)),Ut=t(t(Ft,!0)),dt=t(t(Ut,!0));a(dt,{content:`<button class="plain selected deselectable">
	+
</button>`});var jt=t(t(dt,!0)),rt=t(t(jt,!0));a(rt,{content:`<button class="icon_button selected deselectable">
	+
</button>`});var Gt=t(t(rt,!0)),Ht=t(t(Gt,!0));a(Ht,{content:`<button class="plain icon_button selected deselectable">
	+
</button>`}),mt(()=>{o(f,"selected",e(v)===0),o(x,"selected",e(v)===1),o(A,"selected",e(v)===2),o(E,"selected",e(W))}),r($t,B)}}),r(_,y),ee()}se(["click"]);export{Ne as component};
