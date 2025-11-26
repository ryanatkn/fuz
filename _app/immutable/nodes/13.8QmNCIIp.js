import"../chunks/DsnmJJEf.js";import{p as F,c as G,f as d,s as r,a as m,d as C,b as a,aj as e,r as P,a9 as J,i as T,u as x}from"../chunks/DxN3B-L-.js";import{r as S,a as W}from"../chunks/eds1OIEY.js";import{C as _}from"../chunks/DzUQ2yVy.js";import{g as K}from"../chunks/BDw_OH6I.js";import{C as $}from"../chunks/D06tSC6y.js";import{T as Q}from"../chunks/CEmwgsYO.js";import{T as f,a as g}from"../chunks/LeWosURZ.js";var U=d("just<br/> a card",1),V=d("custom<br/> icon",1),X=d("<!> <!> <!>",1),Z=d("a<br/> link",1),rr=d("<!> <!> <!>",1),tr=d("href is<br/> selected",1),er=d("<!> <!> <!>",1),or=d("custom<br/> tag",1),ar=d("<!> <!> <!>",1),nr=d("align<br/> icon right",1),sr=d("<!> <!> <!>",1),dr=d("align<br/> icon above",1),lr=d("align<br/> icon below",1),ir=d("<section><aside>⚠️ This API is unfinished and will likely change.</aside></section> <section><!> <!> <!></section> <!> <!> <!> <!> <!> <section><!> <!></section> <section><!> <!></section>",1);function br(B,N){F(N,!0);const Y=K("Card");Q(B,{get tome(){return Y},children:(z,_r)=>{var A=ir(),p=r(m(A),2),k=C(p);_(k,{content:"import Card from '@ryanatkn/fuz/Card.svelte';",lang:"ts"});var w=r(k,2);_(w,{content:`<Card>
  just<br />
  a card
</Card>`});var D=r(w,2);$(D,{children:(o,u)=>{e();var t=U();e(2),a(o,t)},$$slots:{default:!0}}),P(p);var I=r(p,2);f(I,{children:(o,u)=>{var t=X(),n=m(t);g(n,{text:"With a custom icon"});var s=r(n,2);_(s,{content:`<Card>
  custom<br />
  icon
  {#snippet icon()}📖{/snippet}
</Card>`});var i=r(s,2);$(i,{icon:v=>{e();var c=J("📖");a(v,c)},children:(v,c)=>{e();var b=V();e(2),a(v,b)},$$slots:{icon:!0,default:!0}}),a(o,t)},$$slots:{default:!0}});var M=r(I,2);f(M,{children:(o,u)=>{var t=rr(),n=m(t);g(n,{text:"As a link"});var s=r(n,2);{let l=x(()=>`<Card href="${S("/")}">
  a<br />
  link
</Card>`);_(s,{get content(){return T(l)}})}var i=r(s,2);{let l=x(()=>S("/"));$(i,{get href(){return T(l)},children:(v,c)=>{e();var b=Z();e(2),a(v,b)},$$slots:{default:!0}})}a(o,t)},$$slots:{default:!0}});var E=r(M,2);f(E,{children:(o,u)=>{var t=er(),n=m(t);g(n,{text:"As the selected link"});var s=r(n,2);{let l=x(()=>`<Card href="${W}/Card">
  href is<br />
  selected
</Card>`);_(s,{get content(){return T(l)}})}var i=r(s,2);$(i,{get href(){return`${W??""}/Card`},children:(l,v)=>{e();var c=tr();e(2),a(l,c)},$$slots:{default:!0}}),a(o,t)},$$slots:{default:!0}});var R=r(E,2);f(R,{children:(o,u)=>{var t=ar(),n=m(t);g(n,{text:"With a custom HTML tag"});var s=r(n,2);_(s,{content:`<Card tag="button">
  custom<br />
  tag
</Card>`});var i=r(s,2);$(i,{tag:"button",children:(l,v)=>{e();var c=or();e(2),a(l,c)},$$slots:{default:!0}}),a(o,t)},$$slots:{default:!0}});var j=r(R,2);f(j,{children:(o,u)=>{var t=sr(),n=m(t);g(n,{text:"With custom alignment"});var s=r(n,2);_(s,{content:`<Card align="right">
  align<br />
  icon right
</Card>`});var i=r(s,2);$(i,{align:"right",children:(l,v)=>{e();var c=nr();e(2),a(l,c)},$$slots:{default:!0}}),a(o,t)},$$slots:{default:!0}});var h=r(j,2),y=C(h);_(y,{content:`<Card align="above">
  align<br />
  icon above
</Card>`});var O=r(y,2);$(O,{align:"above",children:(o,u)=>{e();var t=dr();e(2),a(o,t)},$$slots:{default:!0}}),P(h);var H=r(h,2),L=C(H);_(L,{content:`<Card align="below">
  align<br />
  icon below
</Card>`});var q=r(L,2);$(q,{align:"below",children:(o,u)=>{e();var t=lr();e(2),a(o,t)},$$slots:{default:!0}}),P(H),a(z,A)},$$slots:{default:!0}}),G()}export{br as component};
