import{e as R,h as S,i as O,g as C,d as D,j as g,o as q,k as B}from"./disclose-version.BiO56WOZ.js";import{h as I,q as M,H as P,m as V,b as W,T as A,ae as H,af as k,ag as Y,ah as $,ai as z,aj as L,c as F,p as G,a as J,a1 as K}from"./runtime.4XppMexo.js";function Q(e,a,r,s){function t(n){if(s.capture||b(a,n),!n.cancelBubble)return r.call(this,n)}return e.startsWith("pointer")||e==="wheel"?M(()=>{a.addEventListener(e,t,s)}):a.addEventListener(e,t,s),t}function aa(e,a,r,s,t){var n={capture:s,passive:t},u=Q(e,a,r,n);(a===document.body||a===window||a===document)&&I(()=>{a.removeEventListener(e,u,n)})}function ea(e){for(var a=0;a<e.length;a++)N.add(e[a]);for(var r of w)r(e)}function b(e,a){var T;var r=e.ownerDocument,s=a.type,t=((T=a.composedPath)==null?void 0:T.call(a))||[],n=t[0]||a.target,u=0,l=a.__root;if(l){var h=t.indexOf(l);if(h!==-1&&(e===document||e===window)){a.__root=e;return}var y=t.indexOf(e);if(y===-1)return;h<=y&&(u=h+1)}n=t[u]||a.target,P(a,"currentTarget",{configurable:!0,get(){return n||r}});try{for(var d,f=[];n!==null;){var _=n.parentNode||n.host||null;try{var o=n["__"+s];if(o!==void 0&&!n.disabled)if(V(o)){var[p,...c]=o;p.apply(n,[a,...c])}else o.call(n,a)}catch(v){d?f.push(v):d=v}if(a.cancelBubble||_===e||_===null||n===e)break;n=_}if(d){for(let v of f)queueMicrotask(()=>{throw v});throw d}}finally{a.__root=e,n=e}}let i;function U(){i=void 0}function na(e){let a=null,r=S;var s;if(S){for(a=D,i===void 0&&(i=document.head.firstChild);i.nodeType!==8||i.data!==A;)i=i.nextSibling;i=O(i),i=i.nextSibling}else s=document.head.appendChild(R());try{W(()=>e(s))}finally{r&&C(a)}}const N=new Set,w=new Set;let m=!0;function ta(e){m=e}function ra(e,a){(e.__t??(e.__t=e.nodeValue))!==a&&(e.nodeValue=e.__t=a)}function X(e,a){const r=a.anchor??a.target.appendChild(R());return H(()=>j(e,{...a,anchor:r}),!1)}function sa(e,a){const r=a.target,s=D;try{return H(()=>{g(!0);for(var t=r.firstChild;t&&(t.nodeType!==8||t.data!==A);)t=t.nextSibling;if(!t)throw k;const n=O(t),u=j(e,{...a,anchor:n});return g(!1),u},!1)}catch(t){if(t===k)return a.recover===!1&&Y(),q(),B(r),g(!1),X(e,a);throw t}finally{g(!!s),C(s),U()}}function j(e,{target:a,anchor:r,props:s={},events:t,context:n,intro:u=!1}){q();const l=new Set,h=b.bind(null,a),y=b.bind(null,document),d=o=>{for(let p=0;p<o.length;p++){const c=o[p];l.has(c)||(l.add(c),a.addEventListener(c,h,L.includes(c)?{passive:!0}:void 0),document.addEventListener(c,y,L.includes(c)?{passive:!0}:void 0))}};d($(N)),w.add(d);let f;const _=z(()=>(F(()=>{if(n){G({});var o=K;o.c=n}t&&(s.$$events=t),m=u,f=e(r,s)||{},m=!0,n&&J()}),()=>{for(const o of l)a.removeEventListener(o,h);w.delete(d),E.delete(f)}));return E.set(f,_),f}let E=new WeakMap;function oa(e){const a=E.get(e);a==null||a()}export{ta as a,m as b,Q as c,ea as d,aa as e,na as f,sa as h,X as m,ra as s,oa as u};
