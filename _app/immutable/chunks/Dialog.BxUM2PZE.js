import{l as S,p as q,c as B,a as O,t as L}from"./disclose-version.7b59C0PR.js";import{p as U,ah as X,E as f,g as i,as as j,c as g,s as F,f as G,r as w,t as H,a as J,ao as y}from"./runtime.TFn0e1ji.js";import{i as K}from"./if.BCWWcCm1.js";import{s as M}from"./attributes.BZkAnuRC.js";import{t as P}from"./class.D7hBhbh-.js";import{s as Q}from"./style.Bk7ejTAN.js";import{p as x}from"./proxy.D6d6jnBM.js";import{b as k}from"./this.ajt3TWDz.js";import{p as E}from"./props.DGMTMomc.js";import{T as V}from"./Teleport.BU6DLklz.js";const W=e=>{var s;if(!e)return!1;const{tagName:t}=e;if(t==="INPUT"){const{type:r}=e;return r==="text"||r==="number"||r==="password"||r==="email"||r==="search"||r==="url"}return t==="TEXTAREA"||!!((s=e.getAttribute)!=null&&s.call(e,"contenteditable"))&&e.getAttribute("contenteditable")!=="false"},fe=e=>{const t=e.closest("[contenteditable]");return t!==null&&t.getAttribute("contenteditable")!=="false"},Y=(e,t=!0,s=!0)=>(s&&e.preventDefault(),t?e.stopImmediatePropagation():e.stopPropagation(),e),ue=()=>{if(typeof window>"u")return!1;try{return window.self!==window.top}catch{return!1}},Z=(e=0)=>new Promise(t=>setTimeout(t,e)),me=e=>e&&typeof e.then=="function";var $=(e,t,s)=>{e.target===i(t)&&s(e)},ee=L('<div class="dialog svelte-2t3xer" role="dialog" aria-modal="true" tabindex="-1"><div class="dialog_layout svelte-2t3xer"><div class="dialog_wrapper svelte-2t3xer"><div class="dialog_bg svelte-2t3xer" aria-hidden="true"></div> <div class="dialog_content svelte-2t3xer" role="none"><!></div></div></div></div>');function _e(e,t){U(t,!0);const s=E(t,"layout",3,"centered"),r=E(t,"index",3,0),C=E(t,"active",3,!0),T="body",A="fuz_dialog";let d=y(void 0);X(()=>{D(t.container)});const D=o=>{if(o)f(d,x(o));else{const n=document.getElementById(A);if(n)f(d,x(n));else{const a=document.querySelector(T);if(!a)throw Error(`Cannot find dialog root element with selector '${T}'`);f(d,x(document.createElement("div"))),i(d).id=A,i(d).style.display="contents",a.appendChild(i(d))}}};let _=y(void 0),b=y(void 0);const p=o=>{var n;o&&Y(o),(n=t.onclose)==null||n.call(t)},N=o=>{var n,a;if(o.key==="Escape"&&!W(o.target)){const l=(n=i(_))==null?void 0:n.parentElement,c=(a=l==null?void 0:l.parentElement)==null?void 0:a.children,u=Array.prototype.indexOf.call(c,l);(!c||u===c.length-1||u===-1)&&p(o)}};let h=y(!1);q("keydown",j,function(...o){var n;(n=C()?N:void 0)==null||n.apply(this,o)}),V(e,{get to(){return i(d)},onmove:async()=>{var o;await Z(),f(h,!0),(o=i(_))==null||o.focus()},children:(o,n)=>{var a=ee();k(a,m=>f(_,m),()=>i(_));var l=g(a),c=g(l),u=g(c);u.__mousedown=p;var v=F(u,2);k(v,m=>f(b,m),()=>i(b)),v.__mousedown=[$,b,p];var R=g(v);K(R,()=>i(h),m=>{var I=B(),z=G(I);M(z,()=>t.children,()=>p),O(m,I)}),w(v),w(c),w(l),w(a),H(()=>{P(a,"ready",i(h)),P(a,"layout_page",s()==="page"),Q(a,"z-index",100+r())}),O(o,a)},$$slots:{default:!0}}),J()}S(["mousedown"]);export{_e as D,me as a,W as b,fe as c,ue as i,Y as s};
