import{e as I,O as R,i as S,am as q,w as C,h as v,k as M,A as j,ab as B,v as L,ap as F,aq as G,a0 as E,V,ar as z}from"./runtime.TFn0e1ji.js";import{j as D,k,l as K,m as U,o as Y}from"./disclose-version.7b59C0PR.js";function ss(s,a,...r){var i=s,t=q,_;I(()=>{t!==(t=a())&&(_&&(C(_),_=null),_=S(()=>t(i,...r)))},R),v&&(i=M)}function H(s,a){if(a){const r=document.body;s.autofocus=!0,L(()=>{document.activeElement===r&&s.focus()})}}function rs(s){v&&j(s)!==null&&B(s)}let w=!1;function J(){w||(w=!0,document.addEventListener("reset",s=>{Promise.resolve().then(()=>{var a;if(!s.defaultPrevented)for(const r of s.target.elements)(a=r.__on_r)==null||a.call(r)})},{capture:!0}))}function as(s){if(v){var a=!1,r=()=>{if(!a){if(a=!0,s.hasAttribute("value")){var i=s.value;l(s,"value",null),s.value=i}if(s.hasAttribute("checked")){var t=s.checked;l(s,"checked",null),s.checked=t}}};s.__on_r=r,G(r),J()}}function ts(s,a){var r=s.__attributes??(s.__attributes={});r.value!==(r.value=a)&&(s.value=a)}function l(s,a,r,i){r=r==null?null:r+"";var t=s.__attributes??(s.__attributes={});v&&(t[a]=s.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&s.nodeName==="LINK")||t[a]!==(t[a]=r)&&(a==="loading"&&(s[F]=r),r===null?s.removeAttribute(a):s.setAttribute(a,r))}function Q(s,a,r){if(a in s){try{var i=s[a]}catch{l(s,a,r);return}var t=typeof i=="boolean"&&r===""?!0:r;(typeof i!="object"||i!==t)&&(s[a]=t)}else l(s,a,r)}function W(s,a,r,i,t=!1,_){var o=a||{},O=s.tagName==="OPTION";for(var h in a)h in r||(r[h]=null);i!==void 0&&(r.class=r.class?r.class+" "+i:i);var g=T.get(s.nodeName);g||T.set(s.nodeName,g=Z(s));var P=s.__attributes??(s.__attributes={}),b=[];for(const f in r){let e=r[f];if(O&&f==="value"&&e==null){s.value=s.__value="",o[f]=e;continue}var A=o[f];if(e!==A){o[f]=e;var y=f[0]+f[1];if(y!=="$$")if(y==="on"){const n={},d="$$"+f;let u=f.slice(2);var N=Y(u);if(D(u)&&(u=u.slice(0,-7),n.capture=!0),!N&&A){if(e!=null)continue;s.removeEventListener(u,o[d],n),o[d]=null}if(e!=null)if(N)s[`__${u}`]=e,K([u]);else{let p=function($){o[f].call(this,$)};a?o[d]=k(u,s,p,n):b.push([f,e,()=>o[d]=k(u,s,p,n)])}}else if(e==null)P[f]=null,s.removeAttribute(f);else if(f==="style")s.style.cssText=e+"";else if(f==="autofocus")H(s,!!e);else if(f==="__value"||f==="value")s.value=s[f]=s.__value=e;else{var c=f;t||(c=U(c)),g.includes(c)?v&&(c==="src"||c==="href"||c==="srcset")||(s[c]=e):typeof e!="function"&&l(s,c,e)}}}return a||L(()=>{if(s.isConnected)for(const[f,e,n]of b)o[f]===e&&n()}),o}function is(s,a,r,i){if(s.tagName.includes("-")){for(var t in a)t in r||(r[t]=null);i!==void 0&&(r.class=r.class?r.class+" "+i:i);for(t in r)Q(s,t,r[t]);return r}return W(s,a,r,i,s.namespaceURI!==V)}var X=["width","height","draggable"],T=new Map;function Z(s){for(var a=[],r,i=E(s);i.constructor.name!=="Element";){r=z(i);for(var t in r)r[t].set&&!X.includes(t)&&a.push(t);i=E(i)}return a}export{W as a,J as b,l as c,is as d,rs as e,ts as f,as as r,ss as s};
