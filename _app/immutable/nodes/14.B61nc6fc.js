import{b as X,a as e,t as n,f as W,s as r,c as s}from"../chunks/disclose-version.Ddj0amtR.js";import{p as Z,a as rr}from"../chunks/runtime.N2A2yyIi.js";import{a as j}from"../chunks/render.UwBO_r64.js";import{i as tr}from"../chunks/lifecycle.B02H3xRw.js";import{b as l}from"../chunks/entry.CNeS-VtA.js";import{C as i}from"../chunks/Code.DLdTgamv.js";import{g as ar}from"../chunks/tome.60teOZbE.js";import{C as d}from"../chunks/Card.BsQtGkh6.js";import{T as er}from"../chunks/Tome_Detail.ClDJyqdD.js";import{T as c}from"../chunks/Tome_Subheading.BwVkXJCM.js";var or=n("just<br> a card",1),nr=n("📖",1),ir=n("custom<br> icon",1),sr=n("a<br> link",1),dr=n("href is<br> selected",1),cr=n("custom<br> tag",1),lr=n("align<br> icon right",1),_r=n("align<br> icon above",1),vr=n("align<br> icon below",1),mr=n("<section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!></section> <section><!> <!></section>",1);function Ar(B,D){rr(D,!1);const N=ar("Card"),Y=`${l}/library`;tr();var _=X(),z=W(_);er(z,{tome:N,children:(H,gr)=>{var v=mr(),m=W(v),u=s(m);i(u,{content:"import Card from '@ryanatkn/fuz/Card.svelte';",lang:"ts"});var g=r(r(u,!0));i(g,{content:`<Card>
  just<br />
  a card
</Card>`});var S=r(r(g,!0));d(S,{children:(a,o)=>{var t=or();e(a,t)}});var f=r(r(m,!0)),p=s(f);c(p,{text:"With a custom icon",slug:"custom-icon"});var b=r(r(p,!0));i(b,{content:`<Card>
  custom<br />
  icon
  {#snippet icon()}📖{/snippet}
</Card>`});var q=r(r(b,!0));d(q,{icon:o=>{var t=nr();e(o,t)},children:(o,t)=>{var V=ir();e(o,V)}});var C=r(r(f,!0)),h=s(C);c(h,{text:"As a link",slug:"as-a-link"});var $=r(r(h,!0));i($,{content:`<Card href="${l}/">
  a<br />
  link
</Card>`});var F=r(r($,!0));d(F,{href:`${j(l)}/`,children:(a,o)=>{var t=sr();e(a,t)}});var P=r(r(C,!0)),T=s(P);c(T,{text:"As the selected link",slug:"as-selected-link"});var k=r(r(T,!0));i(k,{content:`<Card href="${l}/library/Card">
  href is<br />
  selected
</Card>`});var G=r(r(k,!0));d(G,{href:`${j(Y)}/Card`,children:(a,o)=>{var t=dr();e(a,t)}});var x=r(r(P,!0)),A=s(x);c(A,{text:"With a custom HTML tag",slug:"custom-html-tag"});var M=r(r(A,!0));i(M,{content:`<Card tag="button">
  custom<br />
  tag
</Card>`});var J=r(r(M,!0));d(J,{tag:"button",children:(a,o)=>{var t=cr();e(a,t)}});var w=r(r(x,!0)),y=s(w);c(y,{text:"With custom alignment",slug:"custom-alignment"});var E=r(r(y,!0));i(E,{content:`<Card align="right">
  align<br />
  icon right
</Card>`});var K=r(r(E,!0));d(K,{align:"right",children:(a,o)=>{var t=lr();e(a,t)}});var I=r(r(w,!0)),R=s(I);i(R,{content:`<Card align="above">
  align<br />
  icon above
</Card>`});var O=r(r(R,!0));d(O,{align:"above",children:(a,o)=>{var t=_r();e(a,t)}});var Q=r(r(I,!0)),L=s(Q);i(L,{content:`<Card align="below">
  align<br />
  icon below
</Card>`});var U=r(r(L,!0));d(U,{align:"below",children:(a,o)=>{var t=vr();e(a,t)}}),e(H,v)}}),e(B,_),Z()}export{Ar as component};
