import{K as o}from"./runtime.B6fxmSPv.js";function p(e,t,s){if(e==null)return t(void 0),o;const u=e.subscribe(t,s);return u.unsubscribe?()=>u.unsubscribe():u}const i=[];function _(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function g(e,t=o){let s=null;const u=new Set;function c(r){if(_(e,r)&&(e=r,s)){const f=!i.length;for(const n of u)n[1](),i.push(n,e);if(f){for(let n=0;n<i.length;n+=2)i[n][0](i[n+1]);i.length=0}}}function b(r){c(r(e))}function l(r,f=o){const n=[r,f];return u.add(n),u.size===1&&(s=t(c,b)||o),r(e),()=>{u.delete(n),u.size===0&&s&&(s(),s=null)}}return{set:c,update:b,subscribe:l}}function h(e){let t;return p(e,s=>t=s)(),t}export{h as g,p as s,g as w};
