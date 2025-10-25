import"../chunks/DsnmJJEf.js";import{p as G,c as J,f as d,s as r,a as f,d as C,b as a,ad as e,r as P,ac as K,h as x,u as T}from"../chunks/B7qs8f6Z.js";import{r as A}from"../chunks/C-ntJF85.js";import{C as _}from"../chunks/DpqcPF0n.js";import{g as O}from"../chunks/nG03buWK.js";import{C as $}from"../chunks/2eVPO2Rd.js";import{T as Q}from"../chunks/IB8S2XmH.js";import{T as m,a as g}from"../chunks/CM5LAOTA.js";var U=d("just<br/> a card",1),V=d("custom<br/> icon",1),X=d("<!> <!> <!>",1),Z=d("a<br/> link",1),rr=d("<!> <!> <!>",1),tr=d("href is<br/> selected",1),er=d("<!> <!> <!>",1),or=d("custom<br/> tag",1),ar=d("<!> <!> <!>",1),nr=d("align<br/> icon right",1),sr=d("<!> <!> <!>",1),dr=d("align<br/> icon above",1),lr=d("align<br/> icon below",1),ir=d("<section><aside>⚠️ This API is unfinished and will likely change.</aside></section> <section><!> <!> <!></section> <!> <!> <!> <!> <!> <section><!> <!></section> <section><!> <!></section>",1);function br(N,S){G(S,!0);const Y=O("Card"),k=A("/docs");Q(N,{get tome(){return Y},children:(z,_r)=>{var w=ir(),h=r(f(w),2),I=C(h);_(I,{content:"import Card from '@ryanatkn/fuz/Card.svelte';",lang:"ts"});var M=r(I,2);_(M,{content:`<Card>
  just<br />
  a card
</Card>`});var q=r(M,2);$(q,{children:(o,u)=>{e();var t=U();e(2),a(o,t)},$$slots:{default:!0}}),P(h);var E=r(h,2);m(E,{children:(o,u)=>{var t=X(),n=f(t);g(n,{text:"With a custom icon"});var s=r(n,2);_(s,{content:`<Card>
  custom<br />
  icon
  {#snippet icon()}📖{/snippet}
</Card>`});var i=r(s,2);$(i,{icon:v=>{e();var c=K("📖");a(v,c)},children:(v,c)=>{e();var b=V();e(2),a(v,b)},$$slots:{icon:!0,default:!0}}),a(o,t)},$$slots:{default:!0}});var R=r(E,2);m(R,{children:(o,u)=>{var t=rr(),n=f(t);g(n,{text:"As a link"});var s=r(n,2);{let l=T(()=>`<Card href="${A("/")}">
  a<br />
  link
</Card>`);_(s,{get content(){return x(l)}})}var i=r(s,2);{let l=T(()=>A("/"));$(i,{get href(){return x(l)},children:(v,c)=>{e();var b=Z();e(2),a(v,b)},$$slots:{default:!0}})}a(o,t)},$$slots:{default:!0}});var y=r(R,2);m(y,{children:(o,u)=>{var t=er(),n=f(t);g(n,{text:"As the selected link"});var s=r(n,2);{let l=T(()=>`<Card href="${k}/card">
  href is<br />
  selected
</Card>`);_(s,{get content(){return x(l)}})}var i=r(s,2);$(i,{get href(){return`${k??""}/card`},children:(l,v)=>{e();var c=tr();e(2),a(l,c)},$$slots:{default:!0}}),a(o,t)},$$slots:{default:!0}});var L=r(y,2);m(L,{children:(o,u)=>{var t=ar(),n=f(t);g(n,{text:"With a custom HTML tag"});var s=r(n,2);_(s,{content:`<Card tag="button">
  custom<br />
  tag
</Card>`});var i=r(s,2);$(i,{tag:"button",children:(l,v)=>{e();var c=or();e(2),a(l,c)},$$slots:{default:!0}}),a(o,t)},$$slots:{default:!0}});var W=r(L,2);m(W,{children:(o,u)=>{var t=sr(),n=f(t);g(n,{text:"With custom alignment"});var s=r(n,2);_(s,{content:`<Card align="right">
  align<br />
  icon right
</Card>`});var i=r(s,2);$(i,{align:"right",children:(l,v)=>{e();var c=nr();e(2),a(l,c)},$$slots:{default:!0}}),a(o,t)},$$slots:{default:!0}});var p=r(W,2),j=C(p);_(j,{content:`<Card align="above">
  align<br />
  icon above
</Card>`});var D=r(j,2);$(D,{align:"above",children:(o,u)=>{e();var t=dr();e(2),a(o,t)},$$slots:{default:!0}}),P(p);var B=r(p,2),H=C(B);_(H,{content:`<Card align="below">
  align<br />
  icon below
</Card>`});var F=r(H,2);$(F,{align:"below",children:(o,u)=>{e();var t=lr();e(2),a(o,t)},$$slots:{default:!0}}),P(B),a(z,w)},$$slots:{default:!0}}),J()}export{br as component};
