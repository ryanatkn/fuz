import{s as l}from"./index.B5Dp4pE-.js";import{i as c,g as f,U as o,w as a,K as i,B as _,u as b}from"./runtime.TAR74xOU.js";function p(n,e,t){let s=t[e];const u=s===void 0;u&&(s={store:null,last_value:null,value:_(o),unsubscribe:i},t[e]=s),(u||s.store!==n)&&(s.unsubscribe(),s.store=n??null,s.unsubscribe=d(n,s.value));const r=f(s.value);return r===o?s.last_value:r}function d(n,e){return n==null?(a(e,void 0),i):l(n,t=>a(e,t))}function I(n,e){return n.set(e),e}function y(n){m(()=>{let e;for(e in n)n[e].unsubscribe()})}function m(n){c(()=>()=>b(n))}export{I as a,p as s,y as u};