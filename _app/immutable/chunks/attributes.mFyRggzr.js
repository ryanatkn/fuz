import{e as R,Q as S,i as q,B,h as l,j as C,A as I,a7 as M,w as P,ao as j,ap as F,W as G,am as N,aq as z}from"./runtime.DbtEYBdD.js";import{c as D,d as w,e as Q,n as U,f as V}from"./utils.C7dA-JMV.js";function x(s,t,...r){var i=s,a,_;R(()=>{a!==(a=t())&&(_&&(B(_),_=null),a&&(_=q(()=>a(i,...r))))},S),l&&(i=C)}function W(s,t){if(t){const r=document.body;s.autofocus=!0,P(()=>{document.activeElement===r&&s.focus()})}}function ss(s){l&&I(s)!==null&&M(s)}let T=!1;function Y(){T||(T=!0,document.addEventListener("reset",s=>{Promise.resolve().then(()=>{var t;if(!s.defaultPrevented)for(const r of s.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function rs(s){if(l){var t=!1,r=()=>{if(!t){if(t=!0,s.hasAttribute("value")){var i=s.value;d(s,"value",null),s.value=i}if(s.hasAttribute("checked")){var a=s.checked;d(s,"checked",null),s.checked=a}}};s.__on_r=r,F(r),Y()}}function ts(s,t){var r=s.__attributes??(s.__attributes={});r.value!==(r.value=t)&&(s.value=t)}function d(s,t,r,i){r=r==null?null:r+"";var a=s.__attributes??(s.__attributes={});l&&(a[t]=s.getAttribute(t),t==="src"||t==="href"||t==="srcset")||a[t]!==(a[t]=r)&&(t==="loading"&&(s[j]=r),r===null?s.removeAttribute(t):s.setAttribute(t,r))}function H(s,t,r){if(t in s){var i=s[t],a=typeof i=="boolean"&&r===""?!0:r;(typeof i!="object"||i!==a)&&(s[t]=a)}else d(s,t,r)}function J(s,t,r,i,a=!1,_){var o=t||{},$=s.tagName==="OPTION";for(var h in t)h in r||(r[h]=null);i!==void 0&&(r.class=r.class?r.class+" "+i:i);var g=k.get(s.nodeName);g||k.set(s.nodeName,g=X(s));var L=s.__attributes??(s.__attributes={}),b=[];for(const f in r){let e=r[f];if($&&f==="value"&&e==null){s.value=s.__value="",o[f]=e;continue}var A=o[f];if(e!==A){o[f]=e;var p=f[0]+f[1];if(p!=="$$")if(p==="on"){const n={},v="$$"+f;let u=f.slice(2);var y=V(u);if(D(u)&&(u=u.slice(0,-7),n.capture=!0),!y&&A){if(e!=null)continue;s.removeEventListener(u,o[v],n),o[v]=null}if(e!=null)if(y)s[`__${u}`]=e,Q([u]);else{let E=function(O){o[f].call(this,O)};t?o[v]=w(u,s,E,n):b.push([f,e,()=>o[v]=w(u,s,E,n)])}}else if(e==null)L[f]=null,s.removeAttribute(f);else if(f==="style")s.style.cssText=e+"";else if(f==="autofocus")W(s,!!e);else if(f==="__value"||f==="value")s.value=s[f]=s.__value=e;else{var c=f;a||(c=U(c)),g.includes(c)?l&&(c==="src"||c==="href"||c==="srcset")||(s[c]=e):typeof e!="function"&&d(s,c,e)}}}return t||P(()=>{if(s.isConnected)for(const[f,e,n]of b)o[f]===e&&n()}),o}function as(s,t,r,i){if(s.tagName.includes("-")){for(var a in t)a in r||(r[a]=null);i!==void 0&&(r.class=r.class?r.class+" "+i:i);for(a in r)H(s,a,r[a]);return r}return J(s,t,r,i,s.namespaceURI!==G)}var K=["width","height","draggable"],k=new Map;function X(s){for(var t=[],r,i=N(s);i.constructor.name!=="Element";){r=z(i);for(var a in r)r[a].set&&!K.includes(a)&&t.push(a);i=N(i)}return t}export{J as a,Y as b,d as c,as as d,ss as e,ts as f,rs as r,x as s};
