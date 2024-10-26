import{E as O,aA as q,aB as z,o as L,u as U,D as R,Z as W,q as D,a8 as C,aC as P,aD as A,M as N,aE as j,aF as G,V as K}from"./runtime.OOkXorm-.js";import{b as V}from"./render.B9704Zl5.js";import{a as Z}from"./context_helpers.BT2NswI4.js";const H=requestAnimationFrame,J=()=>performance.now(),w={tick:i=>H(i),now:()=>J(),tasks:new Set};function M(i){w.tasks.forEach(t=>{t.c(i)||(w.tasks.delete(t),t.f())}),w.tasks.size!==0&&w.tick(M)}function Q(i){let t;return w.tasks.size===0&&w.tick(M),{promise:new Promise(e=>{w.tasks.add(t={c:i,f:e})}),abort(){w.tasks.delete(t)}}}function T(i,t){i.dispatchEvent(new CustomEvent(t))}function X(i){if(i==="float")return"cssFloat";if(i==="offset")return"cssOffset";if(i.startsWith("--"))return i;const t=i.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join("")}function S(i){const t={},e=i.split(";");for(const c of e){const[n,o]=c.split(":");if(!n||o===void 0)break;const f=X(n.trim());t[f]=o.trim()}return t}const Y=i=>i;function et(i,t,e){var c=Z,n,o,f,v=null;c.a??(c.a={element:i,measure(){n=this.element.getBoundingClientRect()},apply(){if(f==null||f.abort(),o=this.element.getBoundingClientRect(),n.left!==o.left||n.right!==o.right||n.top!==o.top||n.bottom!==o.bottom){const h=t()(this.element,{from:n,to:o},e==null?void 0:e());f=E(this.element,h,void 0,1,()=>{f==null||f.abort(),f=void 0})}},fix(){if(!i.getAnimations().length){var{position:h,width:u,height:r}=getComputedStyle(i);if(h!=="absolute"&&h!=="fixed"){var a=i.style;v={position:a.position,width:a.width,height:a.height,transform:a.transform},a.position="absolute",a.width=u,a.height=r;var s=i.getBoundingClientRect();if(n.left!==s.left||n.top!==s.top){var _=`translate(${n.left-s.left}px, ${n.top-s.top}px)`;a.transform=a.transform?`${a.transform} ${_}`:_}}}},unfix(){if(v){var h=i.style;h.position=v.position,h.width=v.width,h.height=v.height,h.transform=v.transform}}}),c.a.element=i}function at(i,t,e,c){var n=(i&j)!==0,o=(i&G)!==0,f=n&&o,v=(i&P)!==0,h=f?"both":n?"in":"out",u,r=t.inert,a,s;function _(){var l=K,y=R;A(null),N(null);try{return u??(u=e()(t,(c==null?void 0:c())??{},{direction:h}))}finally{A(l),N(y)}}var g={is_global:v,in(){var l;if(t.inert=r,!n){s==null||s.abort(),(l=s==null?void 0:s.reset)==null||l.call(s);return}o||a==null||a.abort(),T(t,"introstart"),a=E(t,_(),s,1,()=>{T(t,"introend"),a==null||a.abort(),a=u=void 0})},out(l){if(!o){l==null||l(),u=void 0;return}t.inert=!0,T(t,"outrostart"),s=E(t,_(),a,0,()=>{T(t,"outroend"),l==null||l()})},stop:()=>{a==null||a.abort(),s==null||s.abort()}},p=R;if((p.transitions??(p.transitions=[])).push(g),n&&V){var $=v;if(!$){for(var d=p.parent;d&&d.f&O;)for(;(d=d.parent)&&!(d.f&q););$=!d||(d.f&z)!==0}$&&L(()=>{U(()=>g.in())})}}function E(i,t,e,c,n){var o=c===1;if(W(t)){var f,v=!1;return D(()=>{if(!v){var $=t({direction:o?"in":"out"});f=E(i,$,e,c,n)}}),{abort:()=>{v=!0,f==null||f.abort()},deactivate:()=>f.deactivate(),reset:()=>f.reset(),t:()=>f.t()}}if(e==null||e.deactivate(),!(t!=null&&t.duration))return n(),{abort:C,deactivate:C,reset:C,t:()=>c};const{delay:h=0,css:u,tick:r,easing:a=Y}=t;var s=[];if(o&&e===void 0&&(r&&r(0,1),u)){var _=S(u(0,1));s.push(_,_)}var g=()=>1-c,p=i.animate(s,{duration:h});return p.onfinish=()=>{var $=(e==null?void 0:e.t())??1-c;e==null||e.abort();var d=c-$,l=t.duration*Math.abs(d),y=[];if(l>0){if(u)for(var F=Math.ceil(l/16.666666666666668),b=0;b<=F;b+=1){var m=$+d*a(b/F),x=u(m,1-m);y.push(S(x))}g=()=>{var k=p.currentTime;return $+d*a(k/l)},r&&Q(()=>{if(p.playState!=="running")return!1;var k=g();return r(k,1-k),!0})}p=i.animate(y,{duration:l,fill:"forwards"}),p.onfinish=()=>{g=()=>c,r==null||r(c,1-c),n()}},{abort:()=>{p&&(p.cancel(),p.effect=null,p.onfinish=C)},deactivate:()=>{n=C},reset:()=>{c===0&&(r==null||r(1,0))},t:()=>g()}}function I(i){const t=i-1;return t*t*t+1}function nt(i,{delay:t=0,duration:e=400,easing:c=I,axis:n="y"}={}){const o=getComputedStyle(i),f=+o.opacity,v=n==="y"?"height":"width",h=parseFloat(o[v]),u=n==="y"?["top","bottom"]:["left","right"],r=u.map(d=>`${d[0].toUpperCase()}${d.slice(1)}`),a=parseFloat(o[`padding${r[0]}`]),s=parseFloat(o[`padding${r[1]}`]),_=parseFloat(o[`margin${r[0]}`]),g=parseFloat(o[`margin${r[1]}`]),p=parseFloat(o[`border${r[0]}Width`]),$=parseFloat(o[`border${r[1]}Width`]);return{delay:t,duration:e,easing:c,css:d=>`overflow: hidden;opacity: ${Math.min(d*20,1)*f};${v}: ${d*h}px;padding-${u[0]}: ${d*a}px;padding-${u[1]}: ${d*s}px;margin-${u[0]}: ${d*_}px;margin-${u[1]}: ${d*g}px;border-${u[0]}-width: ${d*p}px;border-${u[1]}-width: ${d*$}px;`}}function B(i,t){for(const e in t)i[e]=t[e];return i}function ot({fallback:i,...t}){const e=new Map,c=new Map;function n(f,v,h){const{delay:u=0,duration:r=m=>Math.sqrt(m)*30,easing:a=I}=B(B({},t),h),s=f.getBoundingClientRect(),_=v.getBoundingClientRect(),g=s.left-_.left,p=s.top-_.top,$=s.width/_.width,d=s.height/_.height,l=Math.sqrt(g*g+p*p),y=getComputedStyle(v),F=y.transform==="none"?"":y.transform,b=+y.opacity;return{delay:u,duration:typeof r=="function"?r(l):r,easing:a,css:(m,x)=>`
			   opacity: ${m*b};
			   transform-origin: top left;
			   transform: ${F} translate(${x*g}px,${x*p}px) scale(${m+(1-m)*$}, ${m+(1-m)*d});
		   `}}function o(f,v,h){return(u,r)=>(f.set(r.key,u),()=>{if(v.has(r.key)){const a=v.get(r.key);return v.delete(r.key),n(a,u,r)}return f.delete(r.key),i&&i(u,r,h)})}return[o(c,e,!1),o(e,c,!0)]}export{et as a,ot as c,nt as s,at as t};
