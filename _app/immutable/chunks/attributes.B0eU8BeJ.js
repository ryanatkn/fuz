import{b as F,P,c as k,j as q,q as R,R as I,T as j,F as T,U as B}from"./runtime.VNSPx__r.js";import{h as v,A as D,F as G,G as M,p as O,I as S}from"./disclose-version.BHqvyKx-.js";import{c as N,d as U}from"./render.BZs1ZF8H.js";function Z(s,r,...t){var i,a;F(()=>{i!==(i=r())&&(a&&(q(a),a=null),i&&(a=k(()=>i(s,...t))))},P)}function Y(s,r){if(r){const t=document.body;s.autofocus=!0,R(()=>{document.activeElement===t&&s.focus()})}}function x(s){v&&s.firstChild!==null&&D(s)}let w=!1;function z(){w||(w=!0,document.addEventListener("reset",s=>{Promise.resolve().then(()=>{var r;if(!s.defaultPrevented)for(const t of s.target.elements)(r=t.__on_r)==null||r.call(t)})},{capture:!0}))}function m(s){if(v){var r=!1,t=()=>{if(!r){if(r=!0,s.hasAttribute("value")){var i=s.value;l(s,"value",null),s.value=i}if(s.hasAttribute("checked")){var a=s.checked;l(s,"checked",null),s.checked=a}}};s.__on_r=t,j(t),z()}}function ss(s,r){var t=s.__attributes??(s.__attributes={});t.value!==(t.value=r)&&(s.value=r)}function l(s,r,t){t=t==null?null:t+"";var i=s.__attributes??(s.__attributes={});v&&(i[r]=s.getAttribute(r),r==="src"||r==="href"||r==="srcset")||i[r]!==(i[r]=t)&&(r==="loading"&&(s[I]=t),t===null?s.removeAttribute(r):s.setAttribute(r,t))}function H(s,r,t){if(r in s){var i=s[r],a=typeof i=="boolean"&&t===""?!0:t;(typeof i!="object"||i!==a)&&(s[r]=a)}else l(s,r,t)}function J(s,r,t,i,a){var h=a.length!==0,u=r||{};for(var b in r)b in t||(t[b]=null);h&&!t.class&&(t.class="");var d=L.get(s.nodeName);d||L.set(s.nodeName,d=Q(s));var $=s.__attributes??(s.__attributes={}),g=[];for(const e in t){let f=t[e];var A=u[e];if(f!==A){u[e]=f;var p=e[0]+e[1];if(p!=="$$")if(p==="on"){const _={},n="$$"+e;let c=e.slice(2);var y=S.includes(c);if(G(c)&&(c=c.slice(0,-7),_.capture=!0),!y&&A){if(f!=null)continue;s.removeEventListener(c,u[n],_),u[n]=null}if(f!=null)if(y)s[`__${c}`]=f,U([c]);else{let E=function(C){u[e].call(this,C)};r?u[n]=N(c,s,E,_):g.push([e,f,()=>u[n]=N(c,s,E,_)])}}else if(f==null)$[e]=null,s.removeAttribute(e);else if(e==="style")s.style.cssText=f+"";else if(e==="autofocus")Y(s,!!f);else if(e==="__value"||e==="value")s.value=s[e]=s.__value=f;else{var o=e;i&&(o=o.toLowerCase(),o=M[o]||o),d.includes(o)?v&&(o==="src"||o==="href"||o==="srcset")||(s[o]=f):typeof f!="function"&&(h&&o==="class"&&(f&&(f+=" "),f+=a),l(s,o,f))}}}return r||R(()=>{if(s.isConnected)for(const[e,f,_]of g)u[e]===f&&_()}),u}function ts(s,r,t,i){if(s.tagName.includes("-")){for(var a in r)a in t||(t[a]=null);for(a in t)H(s,a,t[a]);return t}return J(s,r,t,s.namespaceURI!==O,i)}var K=["width","height"],L=new Map;function Q(s){for(var r=[],t,i=T(s);i.constructor.name!=="Element";){t=B(i);for(var a in t)t[a].set&&!K.includes(a)&&r.push(a);i=T(i)}return r}export{J as a,l as b,z as c,ts as d,x as e,ss as f,m as r,Z as s};
