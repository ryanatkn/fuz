import{t as l,a as e,j as D}from"../chunks/DoRN4M-o.js";import{p as F,a as G,f as m,k as b,s as r,a2 as o,l as C}from"../chunks/CLNC1iHR.js";import{b as P}from"../chunks/BVTOkN14.js";import{C as c}from"../chunks/BoMopUYx.js";import{g as J}from"../chunks/Byhhl2lW.js";import{C as v}from"../chunks/Ba-pKRW5.js";import{T as K}from"../chunks/Cm-3a8xf.js";import{T as u,a as g}from"../chunks/B4AQypHu.js";var O=l("just<br> a card",1),Q=l("custom<br> icon",1),U=l("<!> <!> <!>",1),V=l("a<br> link",1),X=l("<!> <!> <!>",1),Z=l("href is<br> selected",1),rr=l("<!> <!> <!>",1),tr=l("custom<br> tag",1),or=l("<!> <!> <!>",1),ar=l("align<br> icon right",1),er=l("<!> <!> <!>",1),nr=l("align<br> icon above",1),sr=l("align<br> icon below",1),lr=l("<section><!> <!> <!></section> <!> <!> <!> <!> <!> <section><!> <!></section> <section><!> <!></section>",1);function pr(W,B){F(B,!0);const H=J("Card"),x=`${P}/library`;K(W,{tome:H,children:(N,ir)=>{var T=lr(),p=m(T),k=b(p);c(k,{content:"import Card from '@ryanatkn/fuz/Card.svelte';",lang:"ts"});var A=r(k,2);c(A,{content:`<Card>
  just<br />
  a card
</Card>`});var S=r(A,2);v(S,{children:(a,$)=>{o();var t=O();o(2),e(a,t)},$$slots:{default:!0}}),C(p);var M=r(p,2);u(M,{children:(a,$)=>{var t=U(),n=m(t);g(n,{text:"With a custom icon"});var s=r(n,2);c(s,{content:`<Card>
  custom<br />
  icon
  {#snippet icon()}📖{/snippet}
</Card>`});var i=r(s,2);v(i,{icon:f=>{o();var d=D("📖");e(f,d)},children:(f,d)=>{o();var q=Q();o(2),e(f,q)},$$slots:{icon:!0,default:!0}}),e(a,t)},$$slots:{default:!0}});var w=r(M,2);u(w,{children:(a,$)=>{var t=X(),n=m(t);g(n,{text:"As a link"});var s=r(n,2);c(s,{content:`<Card href="${P}/">
  a<br />
  link
</Card>`});var i=r(s,2);v(i,{href:`${P??""}/`,children:(_,f)=>{o();var d=V();o(2),e(_,d)},$$slots:{default:!0}}),e(a,t)},$$slots:{default:!0}});var E=r(w,2);u(E,{children:(a,$)=>{var t=rr(),n=m(t);g(n,{text:"As the selected link"});var s=r(n,2);c(s,{content:`<Card href="${x}/card">
  href is<br />
  selected
</Card>`});var i=r(s,2);v(i,{href:`${x??""}/card`,children:(_,f)=>{o();var d=Z();o(2),e(_,d)},$$slots:{default:!0}}),e(a,t)},$$slots:{default:!0}});var I=r(E,2);u(I,{children:(a,$)=>{var t=or(),n=m(t);g(n,{text:"With a custom HTML tag"});var s=r(n,2);c(s,{content:`<Card tag="button">
  custom<br />
  tag
</Card>`});var i=r(s,2);v(i,{tag:"button",children:(_,f)=>{o();var d=tr();o(2),e(_,d)},$$slots:{default:!0}}),e(a,t)},$$slots:{default:!0}});var R=r(I,2);u(R,{children:(a,$)=>{var t=er(),n=m(t);g(n,{text:"With custom alignment"});var s=r(n,2);c(s,{content:`<Card align="right">
  align<br />
  icon right
</Card>`});var i=r(s,2);v(i,{align:"right",children:(_,f)=>{o();var d=ar();o(2),e(_,d)},$$slots:{default:!0}}),e(a,t)},$$slots:{default:!0}});var h=r(R,2),j=b(h);c(j,{content:`<Card align="above">
  align<br />
  icon above
</Card>`});var Y=r(j,2);v(Y,{align:"above",children:(a,$)=>{o();var t=nr();o(2),e(a,t)},$$slots:{default:!0}}),C(h);var y=r(h,2),L=b(y);c(L,{content:`<Card align="below">
  align<br />
  icon below
</Card>`});var z=r(L,2);v(z,{align:"below",children:(a,$)=>{o();var t=sr();o(2),e(a,t)},$$slots:{default:!0}}),C(y),e(N,T)},$$slots:{default:!0}}),G()}export{pr as component};
