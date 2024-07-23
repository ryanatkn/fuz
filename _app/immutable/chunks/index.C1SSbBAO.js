import{V as F,G as q,_ as z,$ as L,i as U,E as G,u as P,w as W,q as M}from"./runtime.CLWtUI7-.js";import{b as j}from"./render.DYN3TrTz.js";import{c as D}from"./each.BqXyQR24.js";import{T as K,N as V,O as H}from"./disclose-version.D-YpP91c.js";const S=typeof window<"u",J=S?requestAnimationFrame:F,Q=S?()=>performance.now():()=>Date.now(),b={tick:e=>J(e),now:()=>Q(),tasks:new Set};function B(e){b.tasks.forEach(t=>{t.c(e)||(b.tasks.delete(t),t.f())}),b.tasks.size!==0&&b.tick(B)}function X(e){let t;return b.tasks.size===0&&b.tick(B),{promise:new Promise(d=>{b.tasks.add(t={c:e,f:d})}),abort(){b.tasks.delete(t)}}}function T(e,t){e.dispatchEvent(new CustomEvent(t))}function Y(e){const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(d=>d[0].toUpperCase()+d.slice(1)).join("")}function k(e){const t={},d=e.split(";");for(const f of d){const[r,o]=f.split(":");if(!r||o===void 0)break;const c=Y(r.trim());t[c]=o.trim()}return t}const Z=e=>e;function at(e,t,d){var f=D,r,o,c,u=null;f.a??(f.a={element:e,measure(){r=this.element.getBoundingClientRect()},apply(){if(c==null||c.abort(),o=this.element.getBoundingClientRect(),r.left!==o.left||r.right!==o.right||r.top!==o.top||r.bottom!==o.bottom){const l=t()(this.element,{from:r,to:o},d==null?void 0:d());c=E(this.element,l,void 0,1,()=>{c==null||c.abort(),c=void 0},void 0)}},fix(){if(!e.getAnimations().length){var{position:l,width:p,height:i}=getComputedStyle(e);if(l!=="absolute"&&l!=="fixed"){var n=e.style;u={position:n.position,width:n.width,height:n.height,transform:n.transform},n.position="absolute",n.width=p,n.height=i;var a=e.getBoundingClientRect();if(r.left!==a.left||r.top!==a.top){var v=`translate(${r.left-a.left}px, ${r.top-a.top}px)`;n.transform=n.transform?`${n.transform} ${v}`:v}}}},unfix(){if(u){var l=e.style;l.position=u.position,l.width=u.width,l.height=u.height,l.transform=u.transform}}}),f.a.element=e}function nt(e,t,d,f){var r=(e&V)!==0,o=(e&H)!==0,c=r&&o,u=(e&K)!==0,l=c?"both":r?"in":"out",p,i=t.inert,n,a,v;function $(){return p??(p=d()(t,f==null?void 0:f(),{direction:l}))}var m={is_global:u,in(){t.inert=i,a==null||a.abort(),n==null||n.abort(),r?(T(t,"introstart"),n=E(t,$(),a,1,()=>{T(t,"introend"),n=p=void 0},c?void 0:()=>{n=p=void 0})):v==null||v()},out(h){a==null||a.abort(),o?(t.inert=!0,T(t,"outrostart"),a=E(t,$(),n,0,()=>{T(t,"outroend"),a=p=void 0,h==null||h()},c?void 0:()=>{a=p=void 0}),v=a.reset):h==null||h()},stop:()=>{n==null||n.abort(),a==null||a.abort()}},y=G;if((y.transitions??(y.transitions=[])).push(m),r&&j){let h=u;if(!h){for(var s=y.parent;s&&s.f&q;)for(;(s=s.parent)&&!(s.f&z););h=!s||(s.f&L)!==0}h&&U(()=>{P(()=>m.in())})}}function E(e,t,d,f,r,o){var c=f===1;if(W(t)){var u;return M(()=>{var g=t({direction:c?"in":"out"});u=E(e,g,d,f,r,o)}),{abort:()=>u.abort(),deactivate:()=>u.deactivate(),reset:()=>u.reset(),t:g=>u.t(g)}}if(d==null||d.deactivate(),!(t!=null&&t.duration))return r==null||r(),{abort:F,deactivate:F,reset:F,t:()=>f};const{delay:l=0,css:p,tick:i,easing:n=Z}=t;var a=b.now()+l,v=(d==null?void 0:d.t(a))??1-f,$=f-v,m=t.duration*Math.abs($),y=a+m,s,h;return p?M(()=>{var g=[],_=Math.ceil(m/16.666666666666668);if(c&&l>0){let N=Math.ceil(l/16.666666666666668),O=k(p(0,1));for(let R=0;R<N;R+=1)g.push(O)}for(var x=0;x<=_;x+=1){var w=v+$*n(x/_),C=p(w,1-w);g.push(k(C))}s=e.animate(g,{delay:c?0:l,duration:m+(c?l:0),easing:"linear",fill:"forwards"}),s.finished.then(()=>{r==null||r(),f===1&&s.cancel()}).catch(N=>{if(s.startTime!==null&&s.currentTime!==null)throw N})}):(v===0&&(i==null||i(0,1)),h=X(g=>{if(g>=y)return i==null||i(f,1-f),r==null||r(),!1;if(g>=a){var _=v+$*n((g-a)/m);i==null||i(_,1-_)}return!0})),{abort:()=>{s==null||s.cancel(),h==null||h.abort(),o==null||o()},deactivate:()=>{r=void 0,o=void 0},reset:()=>{f===0&&(i==null||i(1,0))},t:g=>{var _=v+$*n((g-a)/m);return Math.min(1,Math.max(0,_))}}}function I(e){const t=e-1;return t*t*t+1}function ot(e,{delay:t=0,duration:d=400,easing:f=I,axis:r="y"}={}){const o=getComputedStyle(e),c=+o.opacity,u=r==="y"?"height":"width",l=parseFloat(o[u]),p=r==="y"?["top","bottom"]:["left","right"],i=p.map(s=>`${s[0].toUpperCase()}${s.slice(1)}`),n=parseFloat(o[`padding${i[0]}`]),a=parseFloat(o[`padding${i[1]}`]),v=parseFloat(o[`margin${i[0]}`]),$=parseFloat(o[`margin${i[1]}`]),m=parseFloat(o[`border${i[0]}Width`]),y=parseFloat(o[`border${i[1]}Width`]);return{delay:t,duration:d,easing:f,css:s=>`overflow: hidden;opacity: ${Math.min(s*20,1)*c};${u}: ${s*l}px;padding-${p[0]}: ${s*n}px;padding-${p[1]}: ${s*a}px;margin-${p[0]}: ${s*v}px;margin-${p[1]}: ${s*$}px;border-${p[0]}-width: ${s*m}px;border-${p[1]}-width: ${s*y}px;`}}function A(e,t){for(const d in t)e[d]=t[d];return e}function st({fallback:e,...t}){const d=new Map,f=new Map;function r(c,u,l){const{delay:p=0,duration:i=w=>Math.sqrt(w)*30,easing:n=I}=A(A({},t),l),a=c.getBoundingClientRect(),v=u.getBoundingClientRect(),$=a.left-v.left,m=a.top-v.top,y=a.width/v.width,s=a.height/v.height,h=Math.sqrt($*$+m*m),g=getComputedStyle(u),_=g.transform==="none"?"":g.transform,x=+g.opacity;return{delay:p,duration:typeof i=="function"?i(h):i,easing:n,css:(w,C)=>`
			   opacity: ${w*x};
			   transform-origin: top left;
			   transform: ${_} translate(${C*$}px,${C*m}px) scale(${w+(1-w)*y}, ${w+(1-w)*s});
		   `}}function o(c,u,l){return(p,i)=>(c.set(i.key,p),()=>{if(u.has(i.key)){const n=u.get(i.key);return u.delete(i.key),r(n,p,i)}return c.delete(i.key),e&&e(p,i,l)})}return[o(f,d,!1),o(d,f,!0)]}export{at as a,st as c,ot as s,nt as t};