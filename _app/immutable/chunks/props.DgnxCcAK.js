import{n as R,o as O,L as b,P as D,v as L,g as l,w as q,x,y as T,u as U,d as w,z as j,A as z,B,C as v}from"./runtime.BfbL1yzw.js";const C={get(n,t){let r=n.props.length;for(;r--;){let e=n.props[r];if(v(e)&&(e=e()),typeof e=="object"&&e!==null&&t in e)return e[t]}},getOwnPropertyDescriptor(n,t){let r=n.props.length;for(;r--;){let e=n.props[r];if(v(e)&&(e=e()),typeof e=="object"&&e!==null&&t in e)return R(e,t)}},has(n,t){for(let r of n.props)if(v(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(n){const t=[];for(let r of n.props){v(r)&&(r=r());for(const e in r)t.includes(e)||t.push(e)}return t}};function N(...n){return new Proxy({props:n},C)}function Y(n,t,r,e){var g;var h=(r&x)!==0,p=(r&T)!==0,y=(r&z)!==0,o=n[t],s=(g=R(n,t))==null?void 0:g.set,_=e,d=!0,I=()=>(y&&d&&(d=!1,_=U(e)),_);o===void 0&&e!==void 0&&(s&&p&&O(),o=I(),s&&s(o));var u;if(p)u=()=>{var a=n[t];return a===void 0?I():(d=!0,a)};else{var S=(h?w:j)(()=>n[t]);S.f|=b,u=()=>{var a=l(S);return a!==void 0&&(_=void 0),a===void 0?_:a}}if(!(r&D))return u;if(s){var A=n.$$legacy;return function(a,i){return arguments.length>0?((!p||!i||A)&&s(i?u():a),a):u()}}var c=!1,P=B(o),f=w(()=>{var a=u(),i=l(P);return c?(c=!1,i):P.v=a});return h||(f.equals=L),function(a,i){var E=l(f);if(arguments.length>0){const m=i?l(f):a;return f.equals(m)||(c=!0,q(P,m),l(f)),a}return E}}export{Y as p,N as s};
