import{n as D,q as V,aD as g,M as y,aJ as B,ac as W,V as I,D as E,B as m,e as q,aM as F,h as d,a2 as H,v as M,C as k,x as T,j as o,y as _,aN as U,aO as $,b as j,a8 as S,u as G,Y as J,g as Y,J as z}from"./runtime.OOkXorm-.js";const K=new Set,Q=new Set;function X(e,r,t,n){function u(a){if(n.capture||Z.call(r,a),!a.cancelBubble){var s=I,f=E;g(null),y(null);try{return t.call(this,a)}finally{g(s),y(f)}}}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?V(()=>{r.addEventListener(e,u,n)}):r.addEventListener(e,u,n),u}function se(e,r,t,n,u){var a={capture:n,passive:u},s=X(e,r,t,a);(r===document.body||r===window||r===document)&&D(()=>{r.removeEventListener(e,s,a)})}function ie(e){for(var r=0;r<e.length;r++)K.add(e[r]);for(var t of Q)t(e)}function Z(e){var L;var r=this,t=r.ownerDocument,n=e.type,u=((L=e.composedPath)==null?void 0:L.call(e))||[],a=u[0]||e.target,s=0,f=e.__root;if(f){var c=u.indexOf(f);if(c!==-1&&(r===document||r===window)){e.__root=r;return}var N=u.indexOf(r);if(N===-1)return;c<=N&&(s=c)}if(a=u[s]||e.target,a!==r){B(e,"currentTarget",{configurable:!0,get(){return a||t}});var x=I,C=E;g(null),y(null);try{for(var p,A=[];a!==null;){var w=a.assignedSlot||a.parentNode||a.host||null;try{var v=a["__"+n];if(v!==void 0&&!a.disabled)if(W(v)){var[P,...R]=v;P.apply(a,[e,...R])}else v.call(a,e)}catch(h){p?A.push(h):p=h}if(e.cancelBubble||w===r||w===null)break;a=w}if(p){for(let h of A)queueMicrotask(()=>{throw h});throw p}}finally{e.__root=r,delete e.currentTarget,g(x),y(C)}}}let i;function oe(){i=void 0}function ce(e){let r=null,t=d;var n;if(d){for(r=o,i===void 0&&(i=_(document.head));i!==null&&(i.nodeType!==8||i.data!==H);)i=M(i);i===null?k(!1):i=T(M(i))}d||(n=document.head.appendChild(m()));try{q(()=>e(n),F)}finally{t&&(k(!0),i=o,T(r))}}function O(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function l(e,r){var t=E;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function le(e,r){var t=(r&U)!==0,n=(r&$)!==0,u,a=!e.startsWith("<!>");return()=>{if(d)return l(o,null),o;u===void 0&&(u=O(a?e:"<!>"+e),t||(u=_(u)));var s=n?document.importNode(u,!0):u.cloneNode(!0);if(t){var f=_(s),c=s.lastChild;l(f,c)}else l(s,s);return s}}function fe(e,r,t="svg"){var n=!e.startsWith("<!>"),u=`<${t}>${n?e:"<!>"+e}</${t}>`,a;return()=>{if(d)return l(o,null),o;if(!a){var s=O(u),f=_(s);a=_(f)}var c=a.cloneNode(!0);return l(c,c),c}}function de(e=""){if(!d){var r=m(e+"");return l(r,r),r}var t=o;return t.nodeType!==3&&(t.before(t=m()),T(t)),l(t,t),t}function _e(){if(d)return l(o,null),o;var e=document.createDocumentFragment(),r=document.createComment(""),t=m();return e.append(r,t),l(r,t),e}function pe(e,r){if(d){E.nodes_end=o,j();return}e!==null&&e.before(r)}function ve(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ee=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function he(e){return ee.includes(e)}const re={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function be(e){return e=e.toLowerCase(),re[e]??e}const te=["touchstart","touchmove"];function ge(e){return te.includes(e)}function ne(e,r,t){if(e==null)return r(void 0),S;const n=G(()=>e.subscribe(r,t));return n.unsubscribe?()=>n.unsubscribe():n}let b=!1;function ye(e,r,t){const n=t[r]??(t[r]={store:null,source:J(void 0),unsubscribe:S});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=S;else{var u=!0;n.unsubscribe=ne(e,a=>{u?n.source.v=a:z(n.source,a)}),u=!1}return Y(n.source)}function me(){const e={};return D(()=>{for(var r in e)e[r].unsubscribe()}),e}function Ee(e){var r=b;try{return b=!1,[e(),b]}finally{b=r}}const ae="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ae);export{pe as a,ye as b,_e as c,l as d,O as e,Ee as f,K as g,oe as h,Z as i,ge as j,de as k,ve as l,ie as m,fe as n,be as o,he as p,X as q,Q as r,me as s,le as t,se as u,ce as v};
