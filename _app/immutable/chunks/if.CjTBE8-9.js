import{S as h,ah as F,ai as L,aj as Y,a5 as g,F as v,ak as d,C as T,g as m,V as C,al as K,am as M,Y as q,e as z,h as P,b as B,_ as H,$ as Q,z as U,R as j,T as A,i as I,k as S,j as V,Q as Z}from"./runtime.DbtEYBdD.js";function b(i,_=null,E){if(typeof i!="object"||i===null||h in i)return i;const y=M(i);if(y!==F&&y!==L)return i;var a=new Map,o=q(i),l=g(0),u;return new Proxy(i,{defineProperty(n,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&Y();var r=a.get(e);return r===void 0?(r=g(t.value),a.set(e,r)):v(r,b(t.value,u)),!0},deleteProperty(n,e){var t=a.get(e),r=t!==void 0?t.v!==d:e in n;return t!==void 0&&v(t,d),r&&D(l),r},get(n,e,t){var c;if(e===h)return i;var r=a.get(e),f=e in n;if(r===void 0&&(!f||(c=T(n,e))!=null&&c.writable)&&(r=g(b(f?n[e]:d,u)),a.set(e,r)),r!==void 0){var s=m(r);return s===d?void 0:s}return Reflect.get(n,e,t)},getOwnPropertyDescriptor(n,e){var t=Reflect.getOwnPropertyDescriptor(n,e);if(t&&"value"in t){var r=a.get(e);r&&(t.value=m(r))}else if(t===void 0){var f=a.get(e),s=f==null?void 0:f.v;if(f!==void 0&&s!==d)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return t},has(n,e){var s;if(e===h)return!0;var t=a.get(e),r=t!==void 0&&t.v!==d||Reflect.has(n,e);if(t!==void 0||C!==null&&(!r||(s=T(n,e))!=null&&s.writable)){t===void 0&&(t=g(r?b(n[e],u):d),a.set(e,t));var f=m(t);if(f===d)return!1}return r},set(n,e,t,r){var O;var f=a.get(e),s=e in n;if(f===void 0?(!s||(O=T(n,e))!=null&&O.writable)&&(f=g(void 0),v(f,b(t,u)),a.set(e,f)):(s=f.v!==d,v(f,b(t,u))),o&&e==="length")for(var c=t;c<n.length;c+=1){var N=a.get(c+"");N!==void 0&&v(N,d)}var w=Reflect.getOwnPropertyDescriptor(n,e);if(w!=null&&w.set&&w.set.call(r,t),!s){if(o&&typeof e=="string"){var x=a.get("length");if(x!==void 0){var R=Number(e);Number.isInteger(R)&&R>=x.v&&v(x,R+1)}}D(l)}return!0},ownKeys(n){m(l);var e=Reflect.ownKeys(n).filter(f=>{var s=a.get(f);return s===void 0||s.v!==d});for(var[t,r]of a)r.v!==d&&!(t in n)&&e.push(t);return e},setPrototypeOf(){K()}})}function D(i,_=1){v(i,i.v+_)}function k(i){return i!==null&&typeof i=="object"&&h in i?i[h]:i}function G(i,_){return Object.is(k(i),k(_))}function J(i,_,E,y=null,a=!1){P&&B();var o=i,l=null,u=null,n=null,e=a?Z:0;z(()=>{if(n===(n=!!_()))return;let t=!1;if(P){const r=o.data===H;n===r&&(o=Q(),U(o),j(!1),t=!0)}n?(l?A(l):l=I(()=>E(o)),u&&S(u,()=>{u=null})):(u?A(u):y&&(u=I(()=>y(o))),l&&S(l,()=>{l=null})),t&&j(!0)},e),P&&(o=V)}export{G as a,J as i,b as p};
