import{S as h,ak as L,al as M,a4 as _,am as Y,M as c,I as T,an as u,g as x,G as C,ao as F,ap as K,Y as q,e as B,h as E,b as G,_ as H,$ as U,A as Z,C as N,D as O,i as D,j as S,k as $,E as z}from"./runtime.CyUAaF6i.js";function b(r,y=null,P){if(typeof r!="object"||r===null||h in r)return r;const g=K(r);if(g!==L&&g!==M)return r;var i=new Map,d=q(r),v=_(0);d&&i.set("length",_(r.length));var l;return new Proxy(r,{defineProperty(n,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&Y();var f=i.get(e);return f===void 0?(f=_(t.value),i.set(e,f)):c(f,b(t.value,l)),!0},deleteProperty(n,e){var t=i.get(e);return t===void 0?e in n&&i.set(e,_(u)):(c(t,u),j(v)),!0},get(n,e,t){var o;if(e===h)return r;var f=i.get(e),a=e in n;if(f===void 0&&(!a||(o=T(n,e))!=null&&o.writable)&&(f=_(b(a?n[e]:u,l)),i.set(e,f)),f!==void 0){var s=x(f);return s===u?void 0:s}return Reflect.get(n,e,t)},getOwnPropertyDescriptor(n,e){var t=Reflect.getOwnPropertyDescriptor(n,e);if(t&&"value"in t){var f=i.get(e);f&&(t.value=x(f))}else if(t===void 0){var a=i.get(e),s=a==null?void 0:a.v;if(a!==void 0&&s!==u)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return t},has(n,e){var s;if(e===h)return!0;var t=i.get(e),f=t!==void 0&&t.v!==u||Reflect.has(n,e);if(t!==void 0||C!==null&&(!f||(s=T(n,e))!=null&&s.writable)){t===void 0&&(t=_(f?b(n[e],l):u),i.set(e,t));var a=x(t);if(a===u)return!1}return f},set(n,e,t,f){var I;var a=i.get(e),s=e in n;if(d&&e==="length")for(var o=t;o<a.v;o+=1){var w=i.get(o+"");w!==void 0?c(w,u):o in n&&(w=_(u),i.set(o+"",w))}a===void 0?(!s||(I=T(n,e))!=null&&I.writable)&&(a=_(void 0),c(a,b(t,l)),i.set(e,a)):(s=a.v!==u,c(a,b(t,l)));var m=Reflect.getOwnPropertyDescriptor(n,e);if(m!=null&&m.set&&m.set.call(f,t),!s){if(d&&typeof e=="string"){var A=i.get("length"),R=Number(e);Number.isInteger(R)&&R>=A.v&&c(A,R+1)}j(v)}return!0},ownKeys(n){x(v);var e=Reflect.ownKeys(n).filter(a=>{var s=i.get(a);return s===void 0||s.v!==u});for(var[t,f]of i)f.v!==u&&!(t in n)&&e.push(t);return e},setPrototypeOf(){F()}})}function j(r,y=1){c(r,r.v+y)}function k(r){return r!==null&&typeof r=="object"&&h in r?r[h]:r}function Q(r,y){return Object.is(k(r),k(y))}function V(r,y,P,g=null,i=!1){E&&G();var d=r,v=null,l=null,n=null,e=i?z:0;B(()=>{if(n===(n=!!y()))return;let t=!1;if(E){const f=d.data===H;n===f&&(d=U(),Z(d),N(!1),t=!0)}n?(v?O(v):v=D(()=>P(d)),l&&S(l,()=>{l=null})):(l?O(l):g&&(l=D(()=>g(d))),v&&S(v,()=>{v=null})),t&&N(!0)},e),E&&(d=$)}export{Q as a,V as i,b as p};
