import{b as P,$ as U,a as E,t as X,f as C,c as g,s as D}from"./disclose-version.E6IJI96N.js";import{p as j,a3 as F,w as c,g as i,t as G,a as H,I as w}from"./runtime.BaU8wwyi.js";import{d as J,e as K}from"./render.BOq403Mo.js";import{p as _}from"./proxy.D936owAO.js";import{i as M}from"./if.Cxoc_153.js";import{s as Q}from"./attributes.DNk-zn62.js";import{t as N}from"./class.BmmsmvgL.js";import{s as V}from"./style.iv2mhl8q.js";import{b as R}from"./this.BBxEWV3D.js";import{p as x}from"./props.kV--7V3-.js";import{T as W}from"./Teleport.ChC0xiZr.js";const Y=e=>{var s;if(!e)return!1;const{tagName:t}=e;if(t==="INPUT"){const{type:r}=e;return r==="text"||r==="number"||r==="password"||r==="email"||r==="search"||r==="url"}return t==="TEXTAREA"||!!((s=e.getAttribute)!=null&&s.call(e,"contenteditable"))&&e.getAttribute("contenteditable")!=="false"},ue=e=>{const t=e.closest("[contenteditable]");return t!==null&&t.getAttribute("contenteditable")!=="false"},Z=(e,t=!0,s=!0)=>(s&&e.preventDefault(),t?e.stopImmediatePropagation():e.stopPropagation(),e),_e=()=>{if(typeof window>"u")return!1;try{return window.self!==window.top}catch{return!1}},$=(e=0)=>new Promise(t=>setTimeout(t,e)),ve=e=>e&&typeof e.then=="function";var ee=(e,t,s)=>{e.target===i(t)&&s(e)},te=X('<div class="dialog svelte-n45e52" role="dialog" aria-modal="true" tabindex="-1"><div class="dialog_layout svelte-n45e52"><div class="dialog_wrapper svelte-n45e52"><div class="dialog_bg svelte-n45e52" aria-hidden="true"></div> <div class="dialog_content svelte-n45e52" role="none"><!></div></div></div></div>');function pe(e,t){j(t,!0);const s=x(t,"layout",3,"centered"),r=x(t,"index",3,0),k=x(t,"active",3,!0),T="body",A="fuz_dialog";let d=w(void 0);F(()=>{z(t.container)});const z=o=>{if(o)c(d,_(o));else{const a=document.getElementById(A);if(a)c(d,_(a));else{const n=document.querySelector(T);if(!n)throw Error(`Cannot find dialog root element with selector '${T}'`);c(d,_(document.createElement("div"))),i(d).id=A,i(d).style.display="contents",n.appendChild(i(d))}}};let v=w(void 0),y=w(void 0);const p=o=>{var a;o&&Z(o),(a=t.onclose)==null||a.call(t)},S=o=>{var a,n;if(o.key==="Escape"&&!Y(o.target)){const l=(a=i(v))==null?void 0:a.parentElement,f=(n=l==null?void 0:l.parentElement)==null?void 0:n.children,m=Array.prototype.indexOf.call(f,l);(!f||m===f.length-1||m===-1)&&p(o)}};let b=w(!1);var I=P();K("keydown",U,function(...o){const a=k()?S:void 0;return a==null?void 0:a.apply(this,o)},!1);var q=C(I);W(q,{get to(){return i(d)},onmove:async()=>{var o;await $(),c(b,!0),(o=i(v))==null||o.focus()},children:(o,a)=>{var n=te();R(n,u=>c(v,_(u)),()=>i(v));var l=g(n),f=g(l),m=g(f);m.__mousedown=p;var h=D(D(m,!0));R(h,u=>c(y,_(u)),()=>i(y)),h.__mousedown=[ee,y,p];var B=g(h);M(B,()=>i(b),u=>{var O=P(),L=C(O);Q(()=>t.children,L,()=>p),E(u,O)}),G(()=>{N(n,"ready",i(b)),N(n,"layout_page",s()==="page"),V(n,"z-index",100+r())}),E(o,n)},$$slots:{default:!0}}),E(e,I),H()}J(["mousedown"]);export{pe as D,ve as a,Y as b,ue as c,_e as i,Z as s};
