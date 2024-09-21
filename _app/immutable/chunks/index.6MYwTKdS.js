import{E as B,au as I,av as M,u as O,v as q,G as z,W as L,w as U,ah as F,aw as W,ax as G,ay as P}from"./runtime.CyUAaF6i.js";import{b as j}from"./render.CCgqK4Xj.js";import{c as K}from"./each.DbJxtm9_.js";const D=requestAnimationFrame,H=()=>performance.now(),y={tick:i=>D(i),now:()=>H(),tasks:new Set};function A(i){y.tasks.forEach(t=>{t.c(i)||(y.tasks.delete(t),t.f())}),y.tasks.size!==0&&y.tick(A)}function J(i){let t;return y.tasks.size===0&&y.tick(A),{promise:new Promise(e=>{y.tasks.add(t={c:i,f:e})}),abort(){y.tasks.delete(t)}}}function T(i,t){i.dispatchEvent(new CustomEvent(t))}function Q(i){const t=i.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join("")}function R(i){const t={},e=i.split(";");for(const d of e){const[a,o]=d.split(":");if(!a||o===void 0)break;const f=Q(a.trim());t[f]=o.trim()}return t}const V=i=>i;function tt(i,t,e){var d=K,a,o,f,h=null;d.a??(d.a={element:i,measure(){a=this.element.getBoundingClientRect()},apply(){if(f==null||f.abort(),o=this.element.getBoundingClientRect(),a.left!==o.left||a.right!==o.right||a.top!==o.top||a.bottom!==o.bottom){const v=t()(this.element,{from:a,to:o},e==null?void 0:e());f=E(this.element,v,void 0,1,()=>{f==null||f.abort(),f=void 0})}},fix(){if(!i.getAnimations().length){var{position:v,width:u,height:r}=getComputedStyle(i);if(v!=="absolute"&&v!=="fixed"){var n=i.style;h={position:n.position,width:n.width,height:n.height,transform:n.transform},n.position="absolute",n.width=u,n.height=r;var s=i.getBoundingClientRect();if(a.left!==s.left||a.top!==s.top){var _=`translate(${a.left-s.left}px, ${a.top-s.top}px)`;n.transform=n.transform?`${n.transform} ${_}`:_}}}},unfix(){if(h){var v=i.style;v.position=h.position,v.width=h.width,v.height=h.height,v.transform=h.transform}}}),d.a.element=i}function it(i,t,e,d){var a=(i&G)!==0,o=(i&P)!==0,f=a&&o,h=(i&W)!==0,v=f?"both":a?"in":"out",u,r=t.inert,n,s;function _(){return u??(u=e()(t,(d==null?void 0:d())??{},{direction:v}))}var g={is_global:h,in(){var l;if(t.inert=r,!a){s==null||s.abort(),(l=s==null?void 0:s.reset)==null||l.call(s);return}o||n==null||n.abort(),T(t,"introstart"),n=E(t,_(),s,1,()=>{T(t,"introend"),n==null||n.abort(),n=u=void 0})},out(l){if(!o){l==null||l(),u=void 0;return}t.inert=!0,T(t,"outrostart"),s=E(t,_(),n,0,()=>{T(t,"outroend"),l==null||l()})},stop:()=>{n==null||n.abort(),s==null||s.abort()}},p=z;if((p.transitions??(p.transitions=[])).push(g),a&&j){var m=h;if(!m){for(var c=p.parent;c&&c.f&B;)for(;(c=c.parent)&&!(c.f&I););m=!c||(c.f&M)!==0}m&&O(()=>{q(()=>g.in())})}}function E(i,t,e,d,a){var o=d===1;if(L(t)){var f,h=!1;return U(()=>{if(!h){var m=t({direction:o?"in":"out"});f=E(i,m,e,d,a)}}),{abort:()=>{h=!0,f==null||f.abort()},deactivate:()=>f.deactivate(),reset:()=>f.reset(),t:()=>f.t()}}if(e==null||e.deactivate(),!(t!=null&&t.duration))return a(),{abort:F,deactivate:F,reset:F,t:()=>d};const{delay:v=0,css:u,tick:r,easing:n=V}=t;var s=[];if(o&&e===void 0&&(r&&r(0,1),u)){var _=R(u(0,1));s.push(_,_)}var g=()=>1-d,p=i.animate(s,{duration:v});return p.onfinish=()=>{var m=(e==null?void 0:e.t())??1-d;e==null||e.abort();var c=d-m,l=t.duration*Math.abs(c),w=[];if(l>0){if(u)for(var x=Math.ceil(l/16.666666666666668),b=0;b<=x;b+=1){var $=m+c*n(b/x),C=u($,1-$);w.push(R(C))}g=()=>{var k=p.currentTime;return m+c*n(k/l)},r&&J(()=>{if(p.playState!=="running")return!1;var k=g();return r(k,1-k),!0})}p=i.animate(w,{duration:l,fill:"forwards"}),p.onfinish=()=>{g=()=>d,r==null||r(d,1-d),a()}},{abort:()=>{p&&(p.cancel(),p.effect=null)},deactivate:()=>{a=F},reset:()=>{d===0&&(r==null||r(1,0))},t:()=>g()}}function S(i){const t=i-1;return t*t*t+1}function rt(i,{delay:t=0,duration:e=400,easing:d=S,axis:a="y"}={}){const o=getComputedStyle(i),f=+o.opacity,h=a==="y"?"height":"width",v=parseFloat(o[h]),u=a==="y"?["top","bottom"]:["left","right"],r=u.map(c=>`${c[0].toUpperCase()}${c.slice(1)}`),n=parseFloat(o[`padding${r[0]}`]),s=parseFloat(o[`padding${r[1]}`]),_=parseFloat(o[`margin${r[0]}`]),g=parseFloat(o[`margin${r[1]}`]),p=parseFloat(o[`border${r[0]}Width`]),m=parseFloat(o[`border${r[1]}Width`]);return{delay:t,duration:e,easing:d,css:c=>`overflow: hidden;opacity: ${Math.min(c*20,1)*f};${h}: ${c*v}px;padding-${u[0]}: ${c*n}px;padding-${u[1]}: ${c*s}px;margin-${u[0]}: ${c*_}px;margin-${u[1]}: ${c*g}px;border-${u[0]}-width: ${c*p}px;border-${u[1]}-width: ${c*m}px;`}}function N(i,t){for(const e in t)i[e]=t[e];return i}function et({fallback:i,...t}){const e=new Map,d=new Map;function a(f,h,v){const{delay:u=0,duration:r=$=>Math.sqrt($)*30,easing:n=S}=N(N({},t),v),s=f.getBoundingClientRect(),_=h.getBoundingClientRect(),g=s.left-_.left,p=s.top-_.top,m=s.width/_.width,c=s.height/_.height,l=Math.sqrt(g*g+p*p),w=getComputedStyle(h),x=w.transform==="none"?"":w.transform,b=+w.opacity;return{delay:u,duration:typeof r=="function"?r(l):r,easing:n,css:($,C)=>`
			   opacity: ${$*b};
			   transform-origin: top left;
			   transform: ${x} translate(${C*g}px,${C*p}px) scale(${$+(1-$)*m}, ${$+(1-$)*c});
		   `}}function o(f,h,v){return(u,r)=>(f.set(r.key,u),()=>{if(h.has(r.key)){const n=h.get(r.key);return h.delete(r.key),a(n,u,r)}return f.delete(r.key),i&&i(u,r,v)})}return[o(d,e,!1),o(e,d,!0)]}export{tt as a,et as c,rt as s,it as t};
