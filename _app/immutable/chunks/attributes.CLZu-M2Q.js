import{b as k,a4 as q,c as O,N as P,q as $,a7 as B,a8 as D,a9 as F,aa as I,ab as M,ac as S,J as N,ad as j,O as G,ae as J}from"./runtime.BfbL1yzw.js";import{h as v,l as U}from"./disclose-version.Cn34XsOG.js";import{c as T,d as Y}from"./render.C00J2V9t.js";function m(s,r,...t){var a,i;k(()=>{a!==(a=s())&&(i&&(P(i),i=null),a&&(i=O(()=>a(r,...t))))},q)}function z(s,r){if(r){const t=document.body;s.autofocus=!0,$(()=>{document.activeElement===t&&s.focus()})}}function ss(s){v&&s.firstChild!==null&&U(s)}let w=!1;function H(){w||(w=!0,document.addEventListener("reset",s=>{Promise.resolve().then(()=>{var r;if(!s.defaultPrevented)for(const t of s.target.elements)(r=t.__on_r)==null||r.call(t)})},{capture:!0}))}function ts(s){if(v){var r=!1,t=()=>{if(!r){if(r=!0,s.hasAttribute("value")){var a=s.value;l(s,"value",null),s.value=a}if(s.hasAttribute("checked")){var i=s.checked;l(s,"checked",null),s.checked=i}}};s.__on_r=t,D(t),H()}}function rs(s,r){var t=s.__attributes??(s.__attributes={});t.value!==(t.value=r)&&(s.value=r)}function l(s,r,t){t=t==null?null:t+"";var a=s.__attributes??(s.__attributes={});v&&(a[r]=s.getAttribute(r),r==="src"||r==="href"||r==="srcset")||a[r]!==(a[r]=t)&&(r==="loading"&&(s[B]=t),t===null?s.removeAttribute(r):s.setAttribute(r,t))}function K(s,r,t){if(r in s){var a=s[r],i=typeof a=="boolean"&&t===""?!0:t;(typeof a!="object"||a!==i)&&(s[r]=i)}else l(s,r,t)}function Q(s,r,t,a,i){var h=i.length!==0,u=r||{};for(var b in r)b in t||(t[b]=null);h&&!t.class&&(t.class="");var d=F(L,s.nodeName);d||I(L,s.nodeName,d=W(s));var C=s.__attributes??(s.__attributes={}),g=[];for(const e in t){let f=t[e];var A=u[e];if(f!==A){u[e]=f;var p=e[0]+e[1];if(p!=="$$")if(p==="on"){const _={},n="$$"+e;let c=e.slice(2);var y=j.includes(c);if(M(c)&&(c=c.slice(0,-7),_.capture=!0),!y&&A){if(f!=null)continue;s.removeEventListener(c,u[n],_),u[n]=null}if(f!=null)if(y)s[`__${c}`]=f,Y([c]);else{let E=function(R){u[e].call(this,R)};r?u[n]=T(c,s,E,_):g.push([e,f,()=>u[n]=T(c,s,E,_)])}}else if(f==null)C[e]=null,s.removeAttribute(e);else if(e==="style")s.style.cssText=f+"";else if(e==="autofocus")z(s,!!f);else if(e==="__value"||e==="value")s.value=s[e]=s.__value=f;else{var o=e;a&&(o=o.toLowerCase(),o=S[o]||o),d.includes(o)?v&&(o==="src"||o==="href"||o==="srcset")||(s[o]=f):typeof f!="function"&&(h&&o==="class"&&(f&&(f+=" "),f+=i),l(s,o,f))}}}return r||$(()=>{if(s.isConnected)for(const[e,f,_]of g)u[e]===f&&_()}),u}function as(s,r,t,a){if(s.tagName.includes("-")){for(var i in r)i in t||(t[i]=null);for(i in t)K(s,i,t[i]);return t}return Q(s,r,t,s.namespaceURI!==G,a)}var V=["width","height"],L=new Map;function W(s){for(var r=[],t,a=N(s);a.constructor.name!=="Element";){t=J(a);for(var i in t)t[i].set&&!V.includes(i)&&r.push(i);a=N(a)}return r}export{Q as a,l as b,H as c,as as d,ss as e,rs as f,ts as r,m as s};
