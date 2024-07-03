import{b as V,a as o,t as a,f as W,c as i,s as r}from"../chunks/disclose-version.E6IJI96N.js";import{p as X,a as Z}from"../chunks/runtime.BaU8wwyi.js";import{b as d}from"../chunks/entry.wxoZpuDd.js";import{C as s}from"../chunks/Code.w1TMYuNb.js";import{g as rr}from"../chunks/tome.BstDQqpu.js";import{C as l}from"../chunks/Card.CxqkKAsW.js";import{T as tr}from"../chunks/Tome_Detail.CH64J7xe.js";import{T as c}from"../chunks/Tome_Subheading.CW7bQpkU.js";var er=a("just<br> a card",1),or=a("📖",1),ar=a("custom<br> icon",1),nr=a("a<br> link",1),sr=a("href is<br> selected",1),ir=a("custom<br> tag",1),lr=a("align<br> icon right",1),cr=a("align<br> icon above",1),dr=a("align<br> icon below",1),ur=a("<section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!></section> <section><!> <!></section>",1);function Pr(j,B){X(B,!0);const N=rr("Card"),Y=`${d}/library`;var u=V(),z=W(u);tr(z,{tome:N,children:(D,_r)=>{var v=ur(),_=W(v),m=i(_);s(m,{content:"import Card from '@ryanatkn/fuz/Card.svelte';",lang:"ts"});var g=r(r(m,!0));s(g,{content:`<Card>
  just<br />
  a card
</Card>`});var H=r(r(g,!0));l(H,{children:(t,n)=>{var e=er();o(t,e)},$$slots:{default:!0}});var $=r(r(_,!0)),f=i($);c(f,{text:"With a custom icon",slug:"custom-icon"});var b=r(r(f,!0));s(b,{content:`<Card>
  custom<br />
  icon
  {#snippet icon()}📖{/snippet}
</Card>`});var S=r(r(b,!0));{var q=t=>{var n=or();o(t,n)};l(S,{icon:q,children:(t,n)=>{var e=ar();o(t,e)},$$slots:{default:!0}})}var p=r(r($,!0)),h=i(p);c(h,{text:"As a link",slug:"as-a-link"});var C=r(r(h,!0));s(C,{content:`<Card href="${d}/">
  a<br />
  link
</Card>`});var F=r(r(C,!0));l(F,{href:`${d??""}/`,children:(t,n)=>{var e=nr();o(t,e)},$$slots:{default:!0}});var P=r(r(p,!0)),k=i(P);c(k,{text:"As the selected link",slug:"as-selected-link"});var T=r(r(k,!0));s(T,{content:`<Card href="${d}/library/Card">
  href is<br />
  selected
</Card>`});var G=r(r(T,!0));l(G,{href:`${Y??""}/Card`,children:(t,n)=>{var e=sr();o(t,e)},$$slots:{default:!0}});var x=r(r(P,!0)),A=i(x);c(A,{text:"With a custom HTML tag",slug:"custom-html-tag"});var M=r(r(A,!0));s(M,{content:`<Card tag="button">
  custom<br />
  tag
</Card>`});var J=r(r(M,!0));l(J,{tag:"button",children:(t,n)=>{var e=ir();o(t,e)},$$slots:{default:!0}});var w=r(r(x,!0)),E=i(w);c(E,{text:"With custom alignment",slug:"custom-alignment"});var I=r(r(E,!0));s(I,{content:`<Card align="right">
  align<br />
  icon right
</Card>`});var K=r(r(I,!0));l(K,{align:"right",children:(t,n)=>{var e=lr();o(t,e)},$$slots:{default:!0}});var R=r(r(w,!0)),y=i(R);s(y,{content:`<Card align="above">
  align<br />
  icon above
</Card>`});var O=r(r(y,!0));l(O,{align:"above",children:(t,n)=>{var e=cr();o(t,e)},$$slots:{default:!0}});var Q=r(r(R,!0)),L=i(Q);s(L,{content:`<Card align="below">
  align<br />
  icon below
</Card>`});var U=r(r(L,!0));l(U,{align:"below",children:(t,n)=>{var e=dr();o(t,e)},$$slots:{default:!0}}),o(D,v)},$$slots:{default:!0}}),o(j,u),Z()}export{Pr as component};
