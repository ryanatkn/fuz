import{a,t as n,c,s as t,d as s,r as l,f as U}from"../chunks/disclose-version.D-YpP91c.js";import{p as V,a as X}from"../chunks/runtime.CLWtUI7-.js";import{b as _}from"../chunks/entry.Dmd2x59i.js";import{C as i}from"../chunks/Code.CB3bu1ip.js";import{g as Z}from"../chunks/tome.BEaQ-Zqd.js";import{C as d}from"../chunks/Card.BvurD649.js";import{T as tt}from"../chunks/Tome_Detail.mIKFiUpF.js";import{T as u}from"../chunks/Tome_Subheading.ChLNFAXc.js";var rt=n("just<br> a card",1),et=n("📖",1),ot=n("custom<br> icon",1),at=n("a<br> link",1),nt=n("href is<br> selected",1),st=n("custom<br> tag",1),it=n("align<br> icon right",1),ct=n("align<br> icon above",1),lt=n("align<br> icon below",1),dt=n("<section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!></section> <section><!> <!></section>",1);function Ct(B,N){V(N,!0);const Y=Z("Card"),z=`${_}/library`;tt(B,{tome:Y,children:(D,_t)=>{var h=dt(),v=U(h),C=c(v);i(C,{content:"import Card from '@ryanatkn/fuz/Card.svelte';",lang:"ts"});var P=t(t(C,!0));i(P,{content:`<Card>
  just<br />
  a card
</Card>`});var H=t(t(P,!0));d(H,{children:(e,o)=>{var r=rt();s(),a(e,r)},$$slots:{default:!0}}),l(v);var m=t(t(v,!0)),k=c(m);u(k,{text:"With a custom icon",slug:"custom-icon"});var x=t(t(k,!0));i(x,{content:`<Card>
  custom<br />
  icon
  {#snippet icon()}📖{/snippet}
</Card>`});var S=t(t(x,!0));d(S,{icon:o=>{s();var r=et();a(o,r)},children:(o,r)=>{var Q=ot();s(),a(o,Q)},$$slots:{default:!0}}),l(m);var g=t(t(m,!0)),T=c(g);u(T,{text:"As a link",slug:"as-a-link"});var A=t(t(T,!0));i(A,{content:`<Card href="${_}/">
  a<br />
  link
</Card>`});var q=t(t(A,!0));d(q,{href:`${_??""}/`,children:(e,o)=>{var r=at();s(),a(e,r)},$$slots:{default:!0}}),l(g);var $=t(t(g,!0)),M=c($);u(M,{text:"As the selected link",slug:"as-selected-link"});var w=t(t(M,!0));i(w,{content:`<Card href="${_}/library/Card">
  href is<br />
  selected
</Card>`});var F=t(t(w,!0));d(F,{href:`${z??""}/Card`,children:(e,o)=>{var r=nt();s(),a(e,r)},$$slots:{default:!0}}),l($);var f=t(t($,!0)),E=c(f);u(E,{text:"With a custom HTML tag",slug:"custom-html-tag"});var I=t(t(E,!0));i(I,{content:`<Card tag="button">
  custom<br />
  tag
</Card>`});var G=t(t(I,!0));d(G,{tag:"button",children:(e,o)=>{var r=st();s(),a(e,r)},$$slots:{default:!0}}),l(f);var b=t(t(f,!0)),R=c(b);u(R,{text:"With custom alignment",slug:"custom-alignment"});var y=t(t(R,!0));i(y,{content:`<Card align="right">
  align<br />
  icon right
</Card>`});var J=t(t(y,!0));d(J,{align:"right",children:(e,o)=>{var r=it();s(),a(e,r)},$$slots:{default:!0}}),l(b);var p=t(t(b,!0)),L=c(p);i(L,{content:`<Card align="above">
  align<br />
  icon above
</Card>`});var K=t(t(L,!0));d(K,{align:"above",children:(e,o)=>{var r=ct();s(),a(e,r)},$$slots:{default:!0}}),l(p);var W=t(t(p,!0)),j=c(W);i(j,{content:`<Card align="below">
  align<br />
  icon below
</Card>`});var O=t(t(j,!0));d(O,{align:"below",children:(e,o)=>{var r=lt();s(),a(e,r)},$$slots:{default:!0}}),l(W),a(D,h)},$$slots:{default:!0}}),X()}export{Ct as component};
