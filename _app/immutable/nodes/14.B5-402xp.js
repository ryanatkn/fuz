import{a as e,t as d,k as D}from"../chunks/disclose-version.BmNp8pRT.js";import{f as m,p as F,a as G,s as r,c as b,a4 as o,r as C}from"../chunks/runtime.CTRYSQ17.js";import{b as P}from"../chunks/entry.Dri9TUrf.js";import{C as c}from"../chunks/Code.DpTM-mqG.js";import{g as J}from"../chunks/tome.BYs3grEm.js";import{C as v}from"../chunks/Card.D0wrmvwR.js";import{T as K}from"../chunks/Tome_Content.Tkto06Z1.js";import{T as u,a as g}from"../chunks/Tome_Section_Header.BJ3GVLrw.js";var O=d("just<br> a card",1),Q=d("custom<br> icon",1),U=d("<!> <!> <!>",1),V=d("a<br> link",1),X=d("<!> <!> <!>",1),Z=d("href is<br> selected",1),rr=d("<!> <!> <!>",1),tr=d("custom<br> tag",1),or=d("<!> <!> <!>",1),ar=d("align<br> icon right",1),er=d("<!> <!> <!>",1),nr=d("align<br> icon above",1),sr=d("align<br> icon below",1),dr=d("<section><!> <!> <!></section> <!> <!> <!> <!> <!> <section><!> <!></section> <section><!> <!></section>",1);function pr(j,B){G(B,!0);const H=J("Card"),x=`${P}/library`;K(j,{tome:H,children:(N,ir)=>{var T=dr(),p=m(T),k=b(p);c(k,{content:"import Card from '@ryanatkn/fuz/Card.svelte';",lang:"ts"});var A=r(k,2);c(A,{content:`<Card>
  just<br />
  a card
</Card>`});var S=r(A,2);v(S,{children:(a,$)=>{o();var t=O();o(2),e(a,t)},$$slots:{default:!0}}),C(p);var M=r(p,2);u(M,{children:(a,$)=>{var t=U(),n=m(t);g(n,{text:"With a custom icon"});var s=r(n,2);c(s,{content:`<Card>
  custom<br />
  icon
  {#snippet icon()}📖{/snippet}
</Card>`});var i=r(s,2);v(i,{icon:f=>{o();var l=D("📖");e(f,l)},children:(f,l)=>{o();var q=Q();o(2),e(f,q)},$$slots:{icon:!0,default:!0}}),e(a,t)},$$slots:{default:!0}});var w=r(M,2);u(w,{children:(a,$)=>{var t=X(),n=m(t);g(n,{text:"As a link"});var s=r(n,2);c(s,{content:`<Card href="${P}/">
  a<br />
  link
</Card>`});var i=r(s,2);v(i,{href:`${P??""}/`,children:(_,f)=>{o();var l=V();o(2),e(_,l)},$$slots:{default:!0}}),e(a,t)},$$slots:{default:!0}});var E=r(w,2);u(E,{children:(a,$)=>{var t=rr(),n=m(t);g(n,{text:"As the selected link"});var s=r(n,2);c(s,{content:`<Card href="${x}/card">
  href is<br />
  selected
</Card>`});var i=r(s,2);v(i,{href:`${x??""}/card`,children:(_,f)=>{o();var l=Z();o(2),e(_,l)},$$slots:{default:!0}}),e(a,t)},$$slots:{default:!0}});var I=r(E,2);u(I,{children:(a,$)=>{var t=or(),n=m(t);g(n,{text:"With a custom HTML tag"});var s=r(n,2);c(s,{content:`<Card tag="button">
  custom<br />
  tag
</Card>`});var i=r(s,2);v(i,{tag:"button",children:(_,f)=>{o();var l=tr();o(2),e(_,l)},$$slots:{default:!0}}),e(a,t)},$$slots:{default:!0}});var R=r(I,2);u(R,{children:(a,$)=>{var t=er(),n=m(t);g(n,{text:"With custom alignment"});var s=r(n,2);c(s,{content:`<Card align="right">
  align<br />
  icon right
</Card>`});var i=r(s,2);v(i,{align:"right",children:(_,f)=>{o();var l=ar();o(2),e(_,l)},$$slots:{default:!0}}),e(a,t)},$$slots:{default:!0}});var h=r(R,2),y=b(h);c(y,{content:`<Card align="above">
  align<br />
  icon above
</Card>`});var Y=r(y,2);v(Y,{align:"above",children:(a,$)=>{o();var t=nr();o(2),e(a,t)},$$slots:{default:!0}}),C(h);var L=r(h,2),W=b(L);c(W,{content:`<Card align="below">
  align<br />
  icon below
</Card>`});var z=r(W,2);v(z,{align:"below",children:(a,$)=>{o();var t=sr();o(2),e(a,t)},$$slots:{default:!0}}),C(L),e(N,T)},$$slots:{default:!0}}),F()}export{pr as component};
