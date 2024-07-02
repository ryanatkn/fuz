import{b as V,a as o,t as n,f as W,c as i,s as r}from"../chunks/disclose-version.8cXmPj91.js";import{p as X,a as Z}from"../chunks/runtime.tEJefHBO.js";import{b as d}from"../chunks/entry.BAn_KITh.js";import{C as s}from"../chunks/Code.BzCvvdEf.js";import{g as rr}from"../chunks/tome.BiCC_aSq.js";import{C as c}from"../chunks/Card.Bix5Lyg9.js";import{T as tr}from"../chunks/Tome_Detail.Dh6A_FIj.js";import{T as l}from"../chunks/Tome_Subheading.CZpUcrxS.js";var er=n("just<br> a card",1),or=n("📖",1),ar=n("custom<br> icon",1),nr=n("a<br> link",1),sr=n("href is<br> selected",1),ir=n("custom<br> tag",1),cr=n("align<br> icon right",1),lr=n("align<br> icon above",1),dr=n("align<br> icon below",1),ur=n("<section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!></section> <section><!> <!></section>",1);function Pr(j,B){X(B,!0);const N=rr("Card"),Y=`${d}/library`;var u=V(!0),z=W(u);tr(z,{tome:N,children:(D,vr)=>{var _=ur(),v=W(_),m=i(v);s(m,{content:"import Card from '@ryanatkn/fuz/Card.svelte';",lang:"ts"});var g=r(r(m,!0));s(g,{content:`<Card>
  just<br />
  a card
</Card>`});var H=r(r(g,!0));c(H,{children:(e,a)=>{var t=er();o(e,t)},$$slots:{default:!0}});var $=r(r(v,!0)),f=i($);l(f,{text:"With a custom icon",slug:"custom-icon"});var b=r(r(f,!0));s(b,{content:`<Card>
  custom<br />
  icon
  {#snippet icon()}📖{/snippet}
</Card>`});var S=r(r(b,!0));c(S,{icon:a=>{var t=or();o(a,t)},children:(a,t)=>{var U=ar();o(a,U)},$$slots:{default:!0}});var p=r(r($,!0)),h=i(p);l(h,{text:"As a link",slug:"as-a-link"});var C=r(r(h,!0));s(C,{content:`<Card href="${d}/">
  a<br />
  link
</Card>`});var q=r(r(C,!0));c(q,{href:`${d??""}/`,children:(e,a)=>{var t=nr();o(e,t)},$$slots:{default:!0}});var P=r(r(p,!0)),k=i(P);l(k,{text:"As the selected link",slug:"as-selected-link"});var T=r(r(k,!0));s(T,{content:`<Card href="${d}/library/Card">
  href is<br />
  selected
</Card>`});var F=r(r(T,!0));c(F,{href:`${Y??""}/Card`,children:(e,a)=>{var t=sr();o(e,t)},$$slots:{default:!0}});var x=r(r(P,!0)),A=i(x);l(A,{text:"With a custom HTML tag",slug:"custom-html-tag"});var M=r(r(A,!0));s(M,{content:`<Card tag="button">
  custom<br />
  tag
</Card>`});var G=r(r(M,!0));c(G,{tag:"button",children:(e,a)=>{var t=ir();o(e,t)},$$slots:{default:!0}});var w=r(r(x,!0)),E=i(w);l(E,{text:"With custom alignment",slug:"custom-alignment"});var I=r(r(E,!0));s(I,{content:`<Card align="right">
  align<br />
  icon right
</Card>`});var J=r(r(I,!0));c(J,{align:"right",children:(e,a)=>{var t=cr();o(e,t)},$$slots:{default:!0}});var R=r(r(w,!0)),y=i(R);s(y,{content:`<Card align="above">
  align<br />
  icon above
</Card>`});var K=r(r(y,!0));c(K,{align:"above",children:(e,a)=>{var t=lr();o(e,t)},$$slots:{default:!0}});var O=r(r(R,!0)),L=i(O);s(L,{content:`<Card align="below">
  align<br />
  icon below
</Card>`});var Q=r(r(L,!0));c(Q,{align:"below",children:(e,a)=>{var t=dr();o(e,t)},$$slots:{default:!0}}),o(D,_)},$$slots:{default:!0}}),o(j,u),Z()}export{Pr as component};
