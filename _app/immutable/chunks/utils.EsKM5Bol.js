import{q as S,w as k,as as A,a2 as L,U as x,e as D,at as I,h,ak as N,x as w,R as v,z as E,j as b,A as O}from"./runtime.CdlCIzqX.js";const R=new Set,V=new Set;function q(e,t,i,n){function o(a){if(n.capture||B.call(t,a),!a.cancelBubble)return i.call(this,a)}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?k(()=>{t.addEventListener(e,o,n)}):t.addEventListener(e,o,n),o}function z(e,t,i,n,o){var a={capture:n,passive:o},s=q(e,t,i,a);(t===document.body||t===window||t===document)&&S(()=>{t.removeEventListener(e,s,a)})}function F(e){for(var t=0;t<e.length;t++)R.add(e[t]);for(var i of V)i(e)}function B(e){var g;var t=this,i=t.ownerDocument,n=e.type,o=((g=e.composedPath)==null?void 0:g.call(e))||[],a=o[0]||e.target,s=0,_=e.__root;if(_){var d=o.indexOf(_);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var p=o.indexOf(t);if(p===-1)return;d<=p&&(s=d)}if(a=o[s]||e.target,a!==t){A(e,"currentTarget",{configurable:!0,get(){return a||i}});try{for(var u,y=[];a!==null;){var f=a.assignedSlot||a.parentNode||a.host||null;try{var l=a["__"+n];if(l!==void 0&&!a.disabled)if(L(l)){var[T,...m]=l;T.apply(a,[e,...m])}else l.call(a,e)}catch(c){u?y.push(c):u=c}if(e.cancelBubble||f===t||f===null)break;a=f}if(u){for(let c of y)queueMicrotask(()=>{throw c});throw u}}finally{e.__root=t,delete e.currentTarget}}}let r;function H(){r=void 0}function P(e){let t=null,i=h;var n;if(h){for(t=b,r===void 0&&(r=O(document.head));r!==null&&(r.nodeType!==8||r.data!==N);)r=w(r);r===null?v(!1):r=E(w(r))}h||(n=document.head.appendChild(x()));try{D(()=>e(n),I)}finally{i&&(v(!0),r=b,E(t))}}function U(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const C=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function G(e){return C.includes(e)}const M={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function Y(e){return e=e.toLowerCase(),M[e]??e}const W=["wheel","mousewheel","touchstart","touchmove"];function J(e){return W.includes(e)}export{R as a,H as b,U as c,q as d,F as e,G as f,z as g,B as h,J as i,P as j,Y as n,V as r};
