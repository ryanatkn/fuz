import{b as k,a as r,t as n,f as d,s as e,c as i}from"../chunks/disclose-version.Dxr0gsna.js";import{p as C,a as H}from"../chunks/runtime.jOsey7ll.js";import{i as N}from"../chunks/lifecycle.9rCdOzSM.js";import{C as m}from"../chunks/Code.BVkDTZyU.js";import{T as O}from"../chunks/Tome_Detail.Biv7CnIw.js";import{D}from"../chunks/Details.tiBT3sy7.js";import{g as S}from"../chunks/tome.B0jujVAD.js";import{M as T}from"../chunks/Mdn_Link.D8ArhA4m.js";import{T as c}from"../chunks/Tome_Subheading.BFc2_PoY.js";var Y=n("summary content",1),U=n("lazy children content",1),X=n("summary content",1),j=n("eager children content",1),q=n("With the base <!> element",1),F=n(`<section><p>The <code>Details</code> component is an alternative to the <!> element. By default it's lazy, and you can pass <code>eager</code> to render the children immediately
			like the base element.</p> <p>Benefits of lazy children:</p> <ul><li>children are transitioned in/out with an animation (TODO this may be doable with eager
				children, if so it would probably be the better default, and then the prop should be swapped
				to <code>lazy</code>)</li> <li>improved performance, can significantly improve UX in some cases</li></ul> <p>Tradeoffs:</p> <ul><li><code>ctrl+f</code> does not work to find text and auto-open the details</li> <li>you may desire some behavior caused by mounting the children</li></ul></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <details><summary>a summary element instead of a snippet</summary> the plain details</details></section>`,1);function oe(M,z){C(z,!1);const E=S("Details");N();var u=k(),W=d(u);O(W,{tome:E,children:(w,J)=>{var p=F(),f=d(p),x=i(f),L=e(i(x)),A=e(e(L,!0));T(A,{href:"Web/HTML/Element/details"});var h=e(e(f,!0)),_=i(h);c(_,{text:"With lazy rendering by default",slug:"lazy-rendering-by-default"});var v=e(e(_,!0));m(v,{content:`<Details>
  {#snippet summary()}summary content{/snippet}
  lazy children content
</Details>`});var B=e(e(v,!0));{var s=o=>{var t=Y();r(o,t)};D(B,{summary:s,children:(o,t)=>{var a=U();r(o,a)},$$slots:{default:!0}})}var y=e(e(h,!0)),g=i(y);c(g,{text:"With eager rendering",slug:"eager-rendering"});var b=e(e(g,!0));m(b,{content:`<Details eager>
  {#snippet summary()}summary content{/snippet}
  eager children content
</Details>`});var I=e(e(b,!0));{var s=t=>{var a=X();r(t,a)};D(I,{eager:!0,summary:s,children:(t,a)=>{var l=j();r(t,l)},$$slots:{default:!0}})}var P=e(e(y,!0)),$=i(P);c($,{text:"With the base details element",slug:"base-details-element",children:(o,t)=>{var a=q(),l=e(d(a,!0));T(l,{href:"Web/HTML/Element/details"}),r(o,a)},$$slots:{default:!0}});var R=e(e($,!0));m(R,{content:`<details>
  <summary>a summary element instead of a snippet</summary>
  the plain details
</details>`}),r(w,p)},$$slots:{default:!0}}),r(M,u),H()}export{oe as component};
