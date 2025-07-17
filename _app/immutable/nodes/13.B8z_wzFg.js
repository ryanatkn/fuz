import"../chunks/CWj6FrbW.js";import{p as G,c as J,f as d,s as r,a as m,d as C,b as a,an as o,r as P,am as K,h as B,u as H}from"../chunks/DpDn43ma.js";import{b as x}from"../chunks/Tz-7uae8.js";import{C as c}from"../chunks/CGW2Az-c.js";import{g as O}from"../chunks/C6cJycfR.js";import{C as $}from"../chunks/BgQ2XkmG.js";import{T as Q}from"../chunks/BiCD2hV9.js";import{T as g,a as p}from"../chunks/KlNnSGvU.js";var U=d("just<br/> a card",1),V=d("custom<br/> icon",1),X=d("<!> <!> <!>",1),Z=d("a<br/> link",1),rr=d("<!> <!> <!>",1),tr=d("href is<br/> selected",1),or=d("<!> <!> <!>",1),er=d("custom<br/> tag",1),ar=d("<!> <!> <!>",1),nr=d("align<br/> icon right",1),sr=d("<!> <!> <!>",1),dr=d("align<br/> icon above",1),ir=d("align<br/> icon below",1),lr=d("<section><aside>⚠️ This API is unfinished and will likely change.</aside></section> <section><!> <!> <!></section> <!> <!> <!> <!> <!> <section><!> <!></section> <section><!> <!></section>",1);function br(N,S){G(S,!0);const Y=O("Card"),T=`${x}/docs`;Q(N,{get tome(){return Y},children:(z,_r)=>{var A=lr(),h=r(m(A),2),k=C(h);c(k,{content:"import Card from '@ryanatkn/fuz/Card.svelte';",lang:"ts"});var w=r(k,2);c(w,{content:`<Card>
  just<br />
  a card
</Card>`});var q=r(w,2);$(q,{children:(e,u)=>{o();var t=U();o(2),a(e,t)},$$slots:{default:!0}}),P(h);var I=r(h,2);g(I,{children:(e,u)=>{var t=X(),n=m(t);p(n,{text:"With a custom icon"});var s=r(n,2);c(s,{content:`<Card>
  custom<br />
  icon
  {#snippet icon()}📖{/snippet}
</Card>`});var i=r(s,2);$(i,{icon:l=>{o();var v=K("📖");a(l,v)},children:(l,v)=>{o();var f=V();o(2),a(l,f)},$$slots:{icon:!0,default:!0}}),a(e,t)},$$slots:{default:!0}});var M=r(I,2);g(M,{children:(e,u)=>{var t=rr(),n=m(t);p(n,{text:"As a link"});var s=r(n,2);const i=H(()=>`<Card href="${x}/">
  a<br />
  link
</Card>`);c(s,{get content(){return B(i)}});var _=r(s,2);$(_,{get href(){return`${x??""}/`},children:(l,v)=>{o();var f=Z();o(2),a(l,f)},$$slots:{default:!0}}),a(e,t)},$$slots:{default:!0}});var E=r(M,2);g(E,{children:(e,u)=>{var t=or(),n=m(t);p(n,{text:"As the selected link"});var s=r(n,2);const i=H(()=>`<Card href="${T}/card">
  href is<br />
  selected
</Card>`);c(s,{get content(){return B(i)}});var _=r(s,2);$(_,{get href(){return`${T}/card`},children:(l,v)=>{o();var f=tr();o(2),a(l,f)},$$slots:{default:!0}}),a(e,t)},$$slots:{default:!0}});var R=r(E,2);g(R,{children:(e,u)=>{var t=ar(),n=m(t);p(n,{text:"With a custom HTML tag"});var s=r(n,2);c(s,{content:`<Card tag="button">
  custom<br />
  tag
</Card>`});var i=r(s,2);$(i,{tag:"button",children:(_,l)=>{o();var v=er();o(2),a(_,v)},$$slots:{default:!0}}),a(e,t)},$$slots:{default:!0}});var y=r(R,2);g(y,{children:(e,u)=>{var t=sr(),n=m(t);p(n,{text:"With custom alignment"});var s=r(n,2);c(s,{content:`<Card align="right">
  align<br />
  icon right
</Card>`});var i=r(s,2);$(i,{align:"right",children:(_,l)=>{o();var v=nr();o(2),a(_,v)},$$slots:{default:!0}}),a(e,t)},$$slots:{default:!0}});var b=r(y,2),L=C(b);c(L,{content:`<Card align="above">
  align<br />
  icon above
</Card>`});var D=r(L,2);$(D,{align:"above",children:(e,u)=>{o();var t=dr();o(2),a(e,t)},$$slots:{default:!0}}),P(b);var W=r(b,2),j=C(W);c(j,{content:`<Card align="below">
  align<br />
  icon below
</Card>`});var F=r(j,2);$(F,{align:"below",children:(e,u)=>{o();var t=ir();o(2),a(e,t)},$$slots:{default:!0}}),P(W),a(z,A)},$$slots:{default:!0}}),J()}export{br as component};
