import{G as O,I as D,L,P as q,J as T,g as _,K as U,M as x,O as B,Q as M,u as N,d as R,R as j,T as G,U as K,V as d}from"./runtime.bViC5kxD.js";import{p as V}from"./if.xjYjBMBU.js";const Y={get(n,a){let r=n.props.length;for(;r--;){let e=n.props[r];if(d(e)&&(e=e()),typeof e=="object"&&e!==null&&a in e)return e[a]}},getOwnPropertyDescriptor(n,a){let r=n.props.length;for(;r--;){let e=n.props[r];if(d(e)&&(e=e()),typeof e=="object"&&e!==null&&a in e){const u=O(e,a);return u&&!u.configurable&&(u.configurable=!0),u}}},has(n,a){for(let r of n.props)if(d(r)&&(r=r()),r!=null&&a in r)return!0;return!1},ownKeys(n){const a=[];for(let r of n.props){d(r)&&(r=r());for(const e in r)a.includes(e)||a.push(e)}return a}};function C(...n){return new Proxy({props:n},Y)}function J(n,a,r,e){var m;var u=(r&x)!==0,p=(r&B)!==0,E=(r&M)!==0,w=(r&G)!==0,v=n[a],l=(m=O(n,a))==null?void 0:m.set,i=e,c=!0,P=!1,b=()=>(P=!0,c&&(c=!1,w?i=N(e):i=e),i);v===void 0&&e!==void 0&&(l&&p&&D(),v=b(),l&&l(v));var s;if(p)s=()=>{var t=n[a];return t===void 0?b():(c=!0,P=!1,t)};else{var g=(u?R:j)(()=>n[a]);g.f|=L,s=()=>{var t=_(g);return t!==void 0&&(i=void 0),t===void 0?i:t}}if(!(r&q))return s;if(l){var y=n.$$legacy;return function(t,f){return arguments.length>0?((!p||!f||y)&&l(f?s():t),t):s()}}var I=!1,h=K(v),o=R(()=>{var t=s(),f=_(h);return I?(I=!1,f):h.v=t});return u||(o.equals=T),function(t,f){var A=_(o);if(arguments.length>0){const S=f?_(o):p&&E?V(t):t;return o.equals(S)||(I=!0,U(h,S),P&&i!==void 0&&(i=S),_(o)),t}return A}}export{J as p,C as s};