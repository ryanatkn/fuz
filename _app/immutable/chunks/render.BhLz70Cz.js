import{C as L,Y as p,z as N,Z as O,w as Y,H as v,A as c,y as b,b as I,k as f,_ as V,x as $,$ as k,a0 as C,a1 as M,a2 as S,i as z,p as W,h as m,D as Z,a as j,V as q}from"./runtime.BsoL6_G0.js";import{e as B,r as A,f as F,h,b as G,i as J}from"./disclose-version.DkCpnmWz.js";let w=!0;function U(t){w=t}function X(t,e){e!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=e,t.nodeValue=e==null?"":e+"")}function K(t,e){const n=e.anchor??e.target.appendChild(L());return D(t,{...e,anchor:n})}function x(t,e){p(),e.intro=e.intro??!1;const n=e.target,_=m,u=f;try{for(var a=N(n);a&&(a.nodeType!==8||a.data!==O);)a=Y(a);if(!a)throw v;c(!0),b(a),I();const d=D(t,{...e,anchor:a});if(f===null||f.nodeType!==8||f.data!==V)throw $(),v;return c(!1),d}catch(d){if(d===v)return e.recover===!1&&k(),p(),C(n),c(!1),K(t,e);throw d}finally{c(_),b(u),F()}}const o=new Map;function D(t,{target:e,anchor:n,props:_={},events:u,context:a,intro:d=!0}){p();var g=new Set,y=r=>{for(var i=0;i<r.length;i++){var s=r[i];if(!g.has(s)){g.add(s);var T=J(s);e.addEventListener(s,h,{passive:T});var E=o.get(s);E===void 0?(document.addEventListener(s,h,{passive:T}),o.set(s,1)):o.set(s,E+1)}}};y(M(B)),A.add(y);var l=void 0,H=S(()=>(z(()=>{if(a){W({});var r=q;r.c=a}u&&(_.$$events=u),m&&G(n,null),w=d,l=t(n,_)||{},w=!0,m&&(Z.nodes_end=f),a&&j()}),()=>{for(var r of g){e.removeEventListener(r,h);var i=o.get(r);--i===0?(document.removeEventListener(r,h),o.delete(r)):o.set(r,i)}A.delete(y),R.delete(l)}));return R.set(l,H),l}let R=new WeakMap;function ee(t){const e=R.get(t);e&&e()}export{U as a,w as b,x as h,K as m,X as s,ee as u};
