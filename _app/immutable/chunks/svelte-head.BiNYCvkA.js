import{h as T,q as S,B as k,D as q,b as D,Z as x}from"./runtime.CLWtUI7-.js";import{q as A,h,F as B,p as b,j as w,g as m}from"./disclose-version.D-YpP91c.js";function R(a){console.warn("hydration_mismatch")}const C=new Set,F=new Set;function L(a,r,o,n){function i(t){if(n.capture||O.call(r,t),!t.cancelBubble)return o.call(this,t)}return a.startsWith("pointer")||a==="wheel"?S(()=>{r.addEventListener(a,i,n)}):r.addEventListener(a,i,n),i}function j(a,r,o,n,i){var t={capture:n,passive:i},l=L(a,r,o,t);(r===document.body||r===window||r===document)&&T(()=>{r.removeEventListener(a,l,t)})}function I(a){for(var r=0;r<a.length;r++)C.add(a[r]);for(var o of F)o(a)}function O(a){var g;var r=this,o=r.ownerDocument,n=a.type,i=((g=a.composedPath)==null?void 0:g.call(a))||[],t=i[0]||a.target,l=0,_=a.__root;if(_){var u=i.indexOf(_);if(u!==-1&&(r===document||r===window)){a.__root=r;return}var p=i.indexOf(r);if(p===-1)return;u<=p&&(l=u)}if(t=i[l]||a.target,t!==r){k(a,"currentTarget",{configurable:!0,get(){return t||o}});try{for(var s,y=[];t!==null;){var c=t.parentNode||t.host||null;try{var f=t["__"+n];if(f!==void 0&&!t.disabled)if(q(f)){var[v,...E]=f;v.apply(t,[a,...E])}else f.call(t,a)}catch(d){s?y.push(d):s=d}if(a.cancelBubble||c===r||c===null)break;t=c}if(s){for(let d of y)queueMicrotask(()=>{throw d});throw s}}finally{a.__root=r,t=r}}}let e;function M(){e=void 0}function P(a){let r=null,o=h;var n;if(h){for(r=m,e===void 0&&(e=document.head.firstChild);e!==null&&(e.nodeType!==8||e.data!==B);)e=e.nextSibling;e===null?b(!1):e=w(e.nextSibling)}h||(n=document.head.appendChild(A()));try{D(()=>a(n),x)}finally{o&&(b(!0),e=m,w(r))}}export{C as a,M as b,O as c,L as d,I as e,j as f,P as g,R as h,F as r};