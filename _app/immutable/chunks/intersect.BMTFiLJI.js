import{u as b,v as p,o as k,az as g,aA as x,p as H,f as h,c as I,r as q,s as w,t as y,a as z}from"./runtime.CyUAaF6i.js";import{g as A,a as d,c as O,t as j}from"./disclose-version.D7hgbcr2.js";import{i as B}from"./if.Df50zaIY.js";import{s as C,c as m}from"./attributes.CECX38sg.js";function K(f,o,e){b(()=>{var t=p(()=>o(f,e==null?void 0:e())||{});if(e&&(t!=null&&t.update)){var r=!1,c={};k(()=>{var s=e();g(s),r&&x(c,s)&&(c=s,t.update(s))}),r=!0}if(t!=null&&t.destroy)return()=>t.destroy()})}var D=j('<a class="hashlink svelte-1tcongx" aria-label="hashlink"><!></a> <span class="hashlink_scroll_target svelte-1tcongx" aria-hidden="true"></span>',1);function L(f,o){H(o,!0);var e=D(),t=h(e),r=I(t);B(r,()=>o.children,s=>{var a=O(),i=h(a);C(i,()=>o.children),d(s,a)},s=>{var a=A("#");d(s,a)}),q(t);var c=w(t,2);y(()=>{m(t,"href",`#${o.slug??""}`),m(c,"id",o.slug)}),d(f,e),z()}const M=(f,o)=>{let e,t,r,c,s,a,i,u;const v=n=>{u=n,a=0,typeof n=="function"?(e=n,t=void 0,r=void 0,c=void 0):n&&(e=n.onintersect,t=n.ondisconnect,r=n.count,c=n.options),_()},_=()=>{i&&l(),!(u===null||r===0)&&(i=new IntersectionObserver(n=>{s=n[0].isIntersecting,e&&i&&e({intersecting:s,intersections:a,el:f,observer:i,disconnect:l}),s?a++:r&&r>0&&a>=r&&l()},c),i.observe(f))},l=()=>{i&&(i.disconnect(),t&&t({intersecting:s,intersections:a,el:f,observer:i}),i=null)};return v(o),{update:n=>{v(n)},destroy:l}};export{L as H,K as a,M as i};
