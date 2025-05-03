import{t as d,a as e,k as q}from"../chunks/BVHb_Il8.js";import{p as D,a as F,s as r,f as m,c as b,V as o,r as C}from"../chunks/KxkgHfFn.js";import{b as P}from"../chunks/CpAr8hgE.js";import{C as c}from"../chunks/CpSl352H.js";import{g as G}from"../chunks/BX3qNz_R.js";import{C as v}from"../chunks/CeD83fVI.js";import{T as J}from"../chunks/BTlz4Yzt.js";import{T as u,a as g}from"../chunks/2hVXGWJe.js";var K=d("just<br> a card",1),O=d("custom<br> icon",1),Q=d("<!> <!> <!>",1),U=d("a<br> link",1),X=d("<!> <!> <!>",1),Z=d("href is<br> selected",1),rr=d("<!> <!> <!>",1),tr=d("custom<br> tag",1),or=d("<!> <!> <!>",1),ar=d("align<br> icon right",1),er=d("<!> <!> <!>",1),nr=d("align<br> icon above",1),sr=d("align<br> icon below",1),dr=d("<section><aside>⚠️ This API is unfinished and will likely change.</aside></section> <section><!> <!> <!></section> <!> <!> <!> <!> <!> <section><!> <!></section> <section><!> <!></section>",1);function pr(j,B){D(B,!0);const H=G("Card"),x=`${P}/docs`;J(j,{tome:H,children:(N,lr)=>{var T=dr(),p=r(m(T),2),k=b(p);c(k,{content:"import Card from '@ryanatkn/fuz/Card.svelte';",lang:"ts"});var A=r(k,2);c(A,{content:`<Card>
  just<br />
  a card
</Card>`});var S=r(A,2);v(S,{children:(a,$)=>{o();var t=K();o(2),e(a,t)},$$slots:{default:!0}}),C(p);var w=r(p,2);u(w,{children:(a,$)=>{var t=Q(),n=m(t);g(n,{text:"With a custom icon"});var s=r(n,2);c(s,{content:`<Card>
  custom<br />
  icon
  {#snippet icon()}📖{/snippet}
</Card>`});var l=r(s,2);v(l,{icon:f=>{o();var i=q("📖");e(f,i)},children:(f,i)=>{o();var V=O();o(2),e(f,V)},$$slots:{icon:!0,default:!0}}),e(a,t)},$$slots:{default:!0}});var I=r(w,2);u(I,{children:(a,$)=>{var t=X(),n=m(t);g(n,{text:"As a link"});var s=r(n,2);c(s,{content:`<Card href="${P}/">
  a<br />
  link
</Card>`});var l=r(s,2);v(l,{href:`${P??""}/`,children:(_,f)=>{o();var i=U();o(2),e(_,i)},$$slots:{default:!0}}),e(a,t)},$$slots:{default:!0}});var M=r(I,2);u(M,{children:(a,$)=>{var t=rr(),n=m(t);g(n,{text:"As the selected link"});var s=r(n,2);c(s,{content:`<Card href="${x}/card">
  href is<br />
  selected
</Card>`});var l=r(s,2);v(l,{href:`${x}/card`,children:(_,f)=>{o();var i=Z();o(2),e(_,i)},$$slots:{default:!0}}),e(a,t)},$$slots:{default:!0}});var E=r(M,2);u(E,{children:(a,$)=>{var t=or(),n=m(t);g(n,{text:"With a custom HTML tag"});var s=r(n,2);c(s,{content:`<Card tag="button">
  custom<br />
  tag
</Card>`});var l=r(s,2);v(l,{tag:"button",children:(_,f)=>{o();var i=tr();o(2),e(_,i)},$$slots:{default:!0}}),e(a,t)},$$slots:{default:!0}});var R=r(E,2);u(R,{children:(a,$)=>{var t=er(),n=m(t);g(n,{text:"With custom alignment"});var s=r(n,2);c(s,{content:`<Card align="right">
  align<br />
  icon right
</Card>`});var l=r(s,2);v(l,{align:"right",children:(_,f)=>{o();var i=ar();o(2),e(_,i)},$$slots:{default:!0}}),e(a,t)},$$slots:{default:!0}});var h=r(R,2),y=b(h);c(y,{content:`<Card align="above">
  align<br />
  icon above
</Card>`});var Y=r(y,2);v(Y,{align:"above",children:(a,$)=>{o();var t=nr();o(2),e(a,t)},$$slots:{default:!0}}),C(h);var L=r(h,2),W=b(L);c(W,{content:`<Card align="below">
  align<br />
  icon below
</Card>`});var z=r(W,2);v(z,{align:"below",children:(a,$)=>{o();var t=sr();o(2),e(a,t)},$$slots:{default:!0}}),C(L),e(N,T)},$$slots:{default:!0}}),F()}export{pr as component};
