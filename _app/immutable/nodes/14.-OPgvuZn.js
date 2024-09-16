import{a as n,t as i,e as U}from"../chunks/disclose-version.CrWEZmgI.js";import{p as V,a as X,f as Z,c,s as t,n as r,r as l}from"../chunks/runtime.CdlCIzqX.js";import{b as v}from"../chunks/entry.oqYmBKB8.js";import{C as s}from"../chunks/Code.hhPvhWFM.js";import{g as tt}from"../chunks/tome.C1MEJAP2.js";import{C as d}from"../chunks/Card.DKMIsK2E.js";import{T as rt}from"../chunks/Tome_Content.DRK-DhLL.js";import{T as _}from"../chunks/Tome_Subheading.BKOfBgK9.js";var ot=i("just<br> a card",1),at=i("custom<br> icon",1),et=i("a<br> link",1),nt=i("href is<br> selected",1),st=i("custom<br> tag",1),it=i("align<br> icon right",1),ct=i("align<br> icon above",1),lt=i("align<br> icon below",1),dt=i("<section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!></section> <section><!> <!></section>",1);function Ct(B,N){V(N,!0);const Y=tt("Card"),z=`${v}/library`;rt(B,{tome:Y,children:(H,vt)=>{var h=dt(),m=Z(h),C=c(m);s(C,{content:"import Card from '@ryanatkn/fuz/Card.svelte';",lang:"ts"});var x=t(C,2);s(x,{content:`<Card>
  just<br />
  a card
</Card>`});var S=t(x,2);d(S,{children:(a,e)=>{r();var o=ot();r(2),n(a,o)},$$slots:{default:!0}}),l(m);var g=t(m,2),P=c(g);_(P,{text:"With a custom icon",slug:"custom-icon"});var k=t(P,2);s(k,{content:`<Card>
  custom<br />
  icon
  {#snippet icon()}📖{/snippet}
</Card>`});var q=t(k,2);d(q,{icon:e=>{r();var o=U("📖");n(e,o)},children:(e,o)=>{r();var Q=at();r(2),n(e,Q)},$$slots:{default:!0}}),l(g);var u=t(g,2),T=c(u);_(T,{text:"As a link",slug:"as-a-link"});var A=t(T,2);s(A,{content:`<Card href="${v}/">
  a<br />
  link
</Card>`});var D=t(A,2);d(D,{href:`${v??""}/`,children:(a,e)=>{r();var o=et();r(2),n(a,o)},$$slots:{default:!0}}),l(u);var $=t(u,2),M=c($);_(M,{text:"As the selected link",slug:"as-selected-link"});var w=t(M,2);s(w,{content:`<Card href="${v}/library/Card">
  href is<br />
  selected
</Card>`});var F=t(w,2);d(F,{href:`${z??""}/Card`,children:(a,e)=>{r();var o=nt();r(2),n(a,o)},$$slots:{default:!0}}),l($);var f=t($,2),E=c(f);_(E,{text:"With a custom HTML tag",slug:"custom-html-tag"});var I=t(E,2);s(I,{content:`<Card tag="button">
  custom<br />
  tag
</Card>`});var G=t(I,2);d(G,{tag:"button",children:(a,e)=>{r();var o=st();r(2),n(a,o)},$$slots:{default:!0}}),l(f);var b=t(f,2),R=c(b);_(R,{text:"With custom alignment",slug:"custom-alignment"});var y=t(R,2);s(y,{content:`<Card align="right">
  align<br />
  icon right
</Card>`});var J=t(y,2);d(J,{align:"right",children:(a,e)=>{r();var o=it();r(2),n(a,o)},$$slots:{default:!0}}),l(b);var p=t(b,2),L=c(p);s(L,{content:`<Card align="above">
  align<br />
  icon above
</Card>`});var K=t(L,2);d(K,{align:"above",children:(a,e)=>{r();var o=ct();r(2),n(a,o)},$$slots:{default:!0}}),l(p);var W=t(p,2),j=c(W);s(j,{content:`<Card align="below">
  align<br />
  icon below
</Card>`});var O=t(j,2);d(O,{align:"below",children:(a,e)=>{r();var o=lt();r(2),n(a,o)},$$slots:{default:!0}}),l(W),n(H,h)},$$slots:{default:!0}}),X()}export{Ct as component};
