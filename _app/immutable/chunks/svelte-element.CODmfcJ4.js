import{b as O,m as x,c as S,K as g,j as v,e as j,M as w,N as K,O as M}from"./runtime.BaU8wwyi.js";import{h as a,p as T,e as q,g as z}from"./disclose-version.E6IJI96N.js";import{a as b}from"./render.BOq403Mo.js";import{s as y,c as k}from"./each.BFgiVuVq.js";function A(n,o,f){const s=n.dom;if(x(s)){for(let r=0;r<s.length;r++)if(s[r]===o){s[r]=f;break}}else s===o&&(n.dom=f)}function I(n,o,f,s,r,B){let c,i,e=a&&n.nodeType===1?n:null,N=a&&e?e.nextSibling:n,l;const m=v;if(a&&x(m.dom)){var u=m.dom.indexOf(e);u!==-1&&m.dom.splice(u,1)}let C=k;O(()=>{const p=v,t=o()||null,d=t==="svg"?M:null;if(t!==c){var E=k;return y(C),l&&(t===null?j(l,()=>{l=null,i=null,e==null||e.remove()}):t===i?w(l):(K(l),b(!1))),t&&t!==i&&(l=S(()=>{const _=e;if(e=a?e:d?document.createElementNS(d,t):document.createElement(t),_&&!a?(A(p,_,e),_.remove()):T(e,p),s){var h=a?e.lastChild:e.appendChild(q());a&&h&&z([...e.childNodes].slice(0,-1)),s(e,h)}return N.before(e),g})),c=t,c&&(i=c),b(!0),y(E),g}})}export{I as e};