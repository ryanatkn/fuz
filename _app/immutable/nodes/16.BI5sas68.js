import{b as l,a as s,t as z}from"../chunks/disclose-version.DcVMHsl4.js";import{p as R,a as k,f as T,s as e,c as r,n as t,r as i}from"../chunks/runtime.DbtEYBdD.js";import{C as u}from"../chunks/Code.BKk6RzAF.js";import{T as C}from"../chunks/Tome_Detail.BzZiyWnL.js";import{D}from"../chunks/Details.Dqz8ymwp.js";import{g as H}from"../chunks/tome.DTaX32zK.js";import{M}from"../chunks/Mdn_Link.nqWMrUci.js";import{T as h}from"../chunks/Tome_Subheading.COH5dvT_.js";var N=z("With the base <!> element",1),O=z(`<section><p>The <code>Details</code> component is an alternative to the <!> element. By default it's lazy, and you can pass <code>eager</code> to render the children immediately
			like the base element.</p> <p>Benefits of lazy children:</p> <ul><li>children are transitioned in/out with an animation (TODO this may be doable with eager
				children, if so it would probably be the better default, and then the prop should be swapped
				to <code>lazy</code>)</li> <li>improved performance, can significantly improve UX in some cases</li></ul> <p>Tradeoffs:</p> <ul><li><code>ctrl+f</code> does not work to find text and auto-open the details</li> <li>you may desire some behavior caused by mounting the children</li></ul></section> <section><!> <!> <!></section> <section><!> <!> <!></section> <section><!> <!> <details><summary>a summary element instead of a snippet</summary> the plain details</details></section>`,1);function Q(E,W){R(W,!0);const w=H("Details");C(E,{tome:w,children:(L,S)=>{var y=O(),d=T(y),f=r(d),A=e(r(f),3);M(A,{path:"Web/HTML/Element/details"}),t(3),i(f),t(8),i(d);var m=e(d,2),_=r(m);h(_,{text:"With lazy rendering by default",slug:"lazy-rendering-by-default"});var v=e(_,2);u(v,{content:`<Details>
  {#snippet summary()}summary content{/snippet}
  lazy children content
</Details>`});var B=e(v,2);D(B,{summary:a=>{t();var n=l("summary content");s(a,n)},children:(a,n)=>{t();var o=l("lazy children content");s(a,o)},$$slots:{default:!0}}),i(m);var c=e(m,2),g=r(c);h(g,{text:"With eager rendering",slug:"eager-rendering"});var b=e(g,2);u(b,{content:`<Details eager>
  {#snippet summary()}summary content{/snippet}
  eager children content
</Details>`});var I=e(b,2);D(I,{eager:!0,summary:a=>{t();var n=l("summary content");s(a,n)},children:(a,n)=>{t();var o=l("eager children content");s(a,o)},$$slots:{default:!0}}),i(c);var $=e(c,2),x=r($);h(x,{text:"With the base details element",slug:"base-details-element",children:(p,a)=>{t();var n=N(),o=e(T(n));M(o,{path:"Web/HTML/Element/details"}),t(),s(p,n)},$$slots:{default:!0}});var P=e(x,2);u(P,{content:`<details>
  <summary>a summary element instead of a snippet</summary>
  the plain details
</details>`}),t(2),i($),s(L,y)},$$slots:{default:!0}}),k()}export{Q as component};
