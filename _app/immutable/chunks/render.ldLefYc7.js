import{e as R,h as S,i as O,g as C,d as D,j as g,o as q,k as B}from"./disclose-version.CSpVFLMe.js";import{h as I,q as M,H as P,m as V,b as W,T as A,ae as H,af as k,ag as Y,ah as $,ai as z,aj as L,c as F,p as G,a as J,a1 as K}from"./runtime.Dht6Pzrj.js";function Q(a,e,r,s){function t(n){if(s.capture||b(e,n),!n.cancelBubble)return r.call(this,n)}return a.startsWith("pointer")||a==="wheel"?M(()=>{e.addEventListener(a,t,s)}):e.addEventListener(a,t,s),t}function ee(a,e,r,s,t){var n={capture:s,passive:t},u=Q(a,e,r,n);(e===document.body||e===window||e===document)&&I(()=>{e.removeEventListener(a,u,n)})}function ae(a){for(var e=0;e<a.length;e++)N.add(a[e]);for(var r of w)r(a)}function b(a,e){var T;var r=a.ownerDocument,s=e.type,t=((T=e.composedPath)==null?void 0:T.call(e))||[],n=t[0]||e.target,u=0,l=e.__root;if(l){var h=t.indexOf(l);if(h!==-1&&(a===document||a===window)){e.__root=a;return}var y=t.indexOf(a);if(y===-1)return;h<=y&&(u=h)}if(n=t[u]||e.target,n!==a){P(e,"currentTarget",{configurable:!0,get(){return n||r}});try{for(var d,f=[];n!==null;){var _=n.parentNode||n.host||null;try{var o=n["__"+s];if(o!==void 0&&!n.disabled)if(V(o)){var[p,...c]=o;p.apply(n,[e,...c])}else o.call(n,e)}catch(v){d?f.push(v):d=v}if(e.cancelBubble||_===a||_===null)break;n=_}if(d){for(let v of f)queueMicrotask(()=>{throw v});throw d}}finally{e.__root=a,n=a}}}let i;function U(){i=void 0}function ne(a){let e=null,r=S;var s;if(S){for(e=D,i===void 0&&(i=document.head.firstChild);i.nodeType!==8||i.data!==A;)i=i.nextSibling;i=O(i),i=i.nextSibling}else s=document.head.appendChild(R());try{W(()=>a(s))}finally{r&&C(e)}}const N=new Set,w=new Set;let m=!0;function te(a){m=a}function re(a,e){(a.__t??(a.__t=a.nodeValue))!==e&&(a.nodeValue=a.__t=e)}function X(a,e){const r=e.anchor??e.target.appendChild(R());return H(()=>j(a,{...e,anchor:r}),!1)}function se(a,e){const r=e.target,s=D;try{return H(()=>{g(!0);for(var t=r.firstChild;t&&(t.nodeType!==8||t.data!==A);)t=t.nextSibling;if(!t)throw k;const n=O(t),u=j(a,{...e,anchor:n});return g(!1),u},!1)}catch(t){if(t===k)return e.recover===!1&&Y(),q(),B(r),g(!1),X(a,e);throw t}finally{g(!!s),C(s),U()}}function j(a,{target:e,anchor:r,props:s={},events:t,context:n,intro:u=!1}){q();const l=new Set,h=b.bind(null,e),y=b.bind(null,document),d=o=>{for(let p=0;p<o.length;p++){const c=o[p];l.has(c)||(l.add(c),e.addEventListener(c,h,L.includes(c)?{passive:!0}:void 0),document.addEventListener(c,y,L.includes(c)?{passive:!0}:void 0))}};d($(N)),w.add(d);let f;const _=z(()=>(F(()=>{if(n){G({});var o=K;o.c=n}t&&(s.$$events=t),m=u,f=a(r,s)||{},m=!0,n&&J()}),()=>{for(const o of l)e.removeEventListener(o,h);w.delete(d),E.delete(f)}));return E.set(f,_),f}let E=new WeakMap;function oe(a){const e=E.get(a);e==null||e()}export{te as a,m as b,Q as c,ae as d,ee as e,ne as f,se as h,X as m,re as s,oe as u};
