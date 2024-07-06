import{a,t as n,c as i,s as t,f as O}from"../chunks/disclose-version.BHqvyKx-.js";import{p as Q,a as U}from"../chunks/runtime.VNSPx__r.js";import{b as d}from"../chunks/entry.CZtv1j5q.js";import{C as s}from"../chunks/Code.DpsevpDf.js";import{g as V}from"../chunks/tome.BuafWkLb.js";import{C as c}from"../chunks/Card.DC38W8n_.js";import{T as X}from"../chunks/Tome_Detail.C03oix-c.js";import{T as l}from"../chunks/Tome_Subheading.DLxyl89r.js";var Z=n("just<br> a card",1),tt=n("📖",1),rt=n("custom<br> icon",1),et=n("a<br> link",1),ot=n("href is<br> selected",1),at=n("custom<br> tag",1),nt=n("align<br> icon right",1),st=n("align<br> icon above",1),it=n("align<br> icon below",1),ct=n("<section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!></section> <section><!> <!></section>",1);function pt(L,W){Q(W,!0);const j=V("Card"),B=`${d}/library`;X(L,{tome:j,children:(N,dt)=>{var u=ct(),_=O(u),v=i(_);s(v,{content:"import Card from '@ryanatkn/fuz/Card.svelte';",lang:"ts"});var m=t(t(v,!0));s(m,{content:`<Card>
  just<br />
  a card
</Card>`});var Y=t(t(m,!0));c(Y,{children:(e,o)=>{var r=Z();a(e,r)},$$slots:{default:!0}});var g=t(t(_,!0)),$=i(g);l($,{text:"With a custom icon",slug:"custom-icon"});var f=t(t($,!0));s(f,{content:`<Card>
  custom<br />
  icon
  {#snippet icon()}📖{/snippet}
</Card>`});var z=t(t(f,!0));c(z,{icon:o=>{var r=tt();a(o,r)},children:(o,r)=>{var K=rt();a(o,K)},$$slots:{default:!0}});var b=t(t(g,!0)),p=i(b);l(p,{text:"As a link",slug:"as-a-link"});var h=t(t(p,!0));s(h,{content:`<Card href="${d}/">
  a<br />
  link
</Card>`});var D=t(t(h,!0));c(D,{href:`${d??""}/`,children:(e,o)=>{var r=et();a(e,r)},$$slots:{default:!0}});var C=t(t(b,!0)),P=i(C);l(P,{text:"As the selected link",slug:"as-selected-link"});var k=t(t(P,!0));s(k,{content:`<Card href="${d}/library/Card">
  href is<br />
  selected
</Card>`});var H=t(t(k,!0));c(H,{href:`${B??""}/Card`,children:(e,o)=>{var r=ot();a(e,r)},$$slots:{default:!0}});var T=t(t(C,!0)),x=i(T);l(x,{text:"With a custom HTML tag",slug:"custom-html-tag"});var A=t(t(x,!0));s(A,{content:`<Card tag="button">
  custom<br />
  tag
</Card>`});var S=t(t(A,!0));c(S,{tag:"button",children:(e,o)=>{var r=at();a(e,r)},$$slots:{default:!0}});var M=t(t(T,!0)),w=i(M);l(w,{text:"With custom alignment",slug:"custom-alignment"});var E=t(t(w,!0));s(E,{content:`<Card align="right">
  align<br />
  icon right
</Card>`});var q=t(t(E,!0));c(q,{align:"right",children:(e,o)=>{var r=nt();a(e,r)},$$slots:{default:!0}});var I=t(t(M,!0)),R=i(I);s(R,{content:`<Card align="above">
  align<br />
  icon above
</Card>`});var F=t(t(R,!0));c(F,{align:"above",children:(e,o)=>{var r=st();a(e,r)},$$slots:{default:!0}});var G=t(t(I,!0)),y=i(G);s(y,{content:`<Card align="below">
  align<br />
  icon below
</Card>`});var J=t(t(y,!0));c(J,{align:"below",children:(e,o)=>{var r=it();a(e,r)},$$slots:{default:!0}}),a(N,u)},$$slots:{default:!0}}),U()}export{pt as component};
