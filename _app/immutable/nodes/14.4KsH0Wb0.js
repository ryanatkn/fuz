import{b as X,a,t as o,f as W,c as i,s as r}from"../chunks/disclose-version.g1lNbIEt.js";import{p as Z,a as rr}from"../chunks/runtime.BNQUFw9P.js";import{a as j}from"../chunks/render.BfRz317k.js";import{i as tr}from"../chunks/lifecycle.j5_zaac2.js";import{b as c}from"../chunks/entry.BMtGUUxV.js";import{C as s}from"../chunks/Code.CmOe_vY5.js";import{g as er}from"../chunks/tome.BkNJ7AoT.js";import{C as d}from"../chunks/Card.MKS3QXTR.js";import{T as ar}from"../chunks/Tome_Detail.CHmQDcyr.js";import{T as l}from"../chunks/Tome_Subheading.2hHM1yla.js";var or=o("just<br> a card",1),nr=o("📖",1),sr=o("custom<br> icon",1),ir=o("a<br> link",1),dr=o("href is<br> selected",1),lr=o("custom<br> tag",1),cr=o("align<br> icon right",1),ur=o("align<br> icon above",1),_r=o("align<br> icon below",1),vr=o("<section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!></section> <section><!> <!></section>",1);function Ar(B,D){Z(D,!1);const N=er("Card"),Y=`${c}/library`;tr();var u=X(),z=W(u);ar(z,{tome:N,children:(H,fr)=>{var _=vr(),v=W(_),m=i(v);s(m,{content:"import Card from '@ryanatkn/fuz/Card.svelte';",lang:"ts"});var f=r(r(m,!0));s(f,{content:`<Card>
  just<br />
  a card
</Card>`});var S=r(r(f,!0));d(S,{children:(t,n)=>{var e=or();a(t,e)},$$slots:{default:!0}});var g=r(r(v,!0)),$=i(g);l($,{text:"With a custom icon",slug:"custom-icon"});var p=r(r($,!0));s(p,{content:`<Card>
  custom<br />
  icon
  {#snippet icon()}📖{/snippet}
</Card>`});var q=r(r(p,!0));{var F=t=>{var n=nr();a(t,n)};d(q,{icon:F,children:(t,n)=>{var e=sr();a(t,e)},$$slots:{default:!0}})}var b=r(r(g,!0)),C=i(b);l(C,{text:"As a link",slug:"as-a-link"});var h=r(r(C,!0));s(h,{content:`<Card href="${c}/">
  a<br />
  link
</Card>`});var G=r(r(h,!0));d(G,{href:`${j(c)}/`,children:(t,n)=>{var e=ir();a(t,e)},$$slots:{default:!0}});var P=r(r(b,!0)),T=i(P);l(T,{text:"As the selected link",slug:"as-selected-link"});var k=r(r(T,!0));s(k,{content:`<Card href="${c}/library/Card">
  href is<br />
  selected
</Card>`});var J=r(r(k,!0));d(J,{href:`${j(Y)}/Card`,children:(t,n)=>{var e=dr();a(t,e)},$$slots:{default:!0}});var x=r(r(P,!0)),A=i(x);l(A,{text:"With a custom HTML tag",slug:"custom-html-tag"});var M=r(r(A,!0));s(M,{content:`<Card tag="button">
  custom<br />
  tag
</Card>`});var K=r(r(M,!0));d(K,{tag:"button",children:(t,n)=>{var e=lr();a(t,e)},$$slots:{default:!0}});var w=r(r(x,!0)),y=i(w);l(y,{text:"With custom alignment",slug:"custom-alignment"});var E=r(r(y,!0));s(E,{content:`<Card align="right">
  align<br />
  icon right
</Card>`});var O=r(r(E,!0));d(O,{align:"right",children:(t,n)=>{var e=cr();a(t,e)},$$slots:{default:!0}});var I=r(r(w,!0)),R=i(I);s(R,{content:`<Card align="above">
  align<br />
  icon above
</Card>`});var Q=r(r(R,!0));d(Q,{align:"above",children:(t,n)=>{var e=ur();a(t,e)},$$slots:{default:!0}});var U=r(r(I,!0)),L=i(U);s(L,{content:`<Card align="below">
  align<br />
  icon below
</Card>`});var V=r(r(L,!0));d(V,{align:"below",children:(t,n)=>{var e=_r();a(t,e)},$$slots:{default:!0}}),a(H,_)},$$slots:{default:!0}}),a(B,u),rr()}export{Ar as component};
