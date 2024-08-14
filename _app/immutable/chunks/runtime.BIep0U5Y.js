var rn=Array.isArray,en=Array.from,un=Object.isFrozen,ln=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,bt=Object.getOwnPropertyDescriptors,on=Object.prototype,fn=Array.prototype,Rt=Object.getPrototypeOf;function an(t){return typeof t=="function"}const _n=()=>{};function et(t){for(var n=0;n<t.length;n++)t[n]()}const g=2,ut=4,F=8,lt=16,w=32,$=64,T=128,M=256,d=512,m=1024,D=2048,C=4096,b=8192,Nt=16384,st=32768,cn=65536,jt=1<<18,Q=Symbol("$state"),vn=Symbol("");function ot(t){return t===this.v}function It(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function it(t){return!It(t,this.v)}function Mt(t){throw new Error("effect_in_teardown")}function Lt(){throw new Error("effect_in_unowned_derived")}function Pt(t){throw new Error("effect_orphan")}function Yt(){throw new Error("effect_update_depth_exceeded")}function pn(){throw new Error("hydration_failed")}function hn(t){throw new Error("props_invalid_value")}function Bt(){throw new Error("state_unsafe_mutation")}function ft(t){return{f:0,v:t,reactions:null,equals:ot,version:0}}function dn(t){var r;const n=ft(t);return n.equals=it,i!==null&&i.l!==null&&((r=i.l).s??(r.s=[])).push(n),n}function Ht(t,n){return f!==null&&G()&&f.f&g&&Bt(),t.equals(n)||(t.v=n,t.version=xt(),at(t,m),G()&&a!==null&&a.f&d&&!(a.f&w)&&(c!==null&&c.includes(t)?(h(a,m),U(a)):y===null?Jt([t]):y.push(t))),n}function at(t,n){var r=t.reactions;if(r!==null){var e=G();for(var u of r){var l=u.f;l&m||!e&&u===a||(h(u,n),l&(d|T)&&(l&g?at(u,D):U(u)))}}}function _t(t){a===null&&f===null&&Pt(),f!==null&&f.f&T&&Lt(),W&&Mt()}function X(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function R(t,n,r,e=!0){var u=(t&$)!==0,l=a,s={ctx:i,deps:null,nodes:null,f:t|m,first:null,fn:n,last:null,next:null,parent:u?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var o=A;try{Z(!0),H(s),s.f|=Nt}catch(_){throw Y(s),_}finally{Z(o)}}else n!==null&&U(s);var p=r&&s.deps===null&&s.first===null&&s.nodes===null&&s.teardown===null;return!p&&!u&&e&&(l!==null&&X(s,l),f!==null&&f.f&g&&X(s,f)),s}function wn(t){const n=R(F,null,!1);return h(n,d),n.teardown=t,n}function En(t){_t();var n=a!==null&&(a.f&F)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push(t)}else{var e=ct(t);return e}}function yn(t){return _t(),vt(t)}function mn(t){const n=R($,t,!0);return()=>{Y(n)}}function ct(t){return R(ut,t,!1)}function vt(t){return R(F,t,!0)}function kn(t){return vt(t)}function gn(t,n=0){return R(F|lt|n,t,!0)}function Tn(t,n=!0){return R(F|w,t,!0,n)}function pt(t){var n=t.teardown;if(n!==null){const r=W,e=f;tt(!0),nt(null);try{n.call(null)}finally{tt(r),nt(e)}}}function Y(t,n=!0){var r=!1;if((n||t.f&jt)&&t.nodes!==null){for(var e=t.nodes.start,u=t.nodes.end;e!==null;){var l=e===u?null:e.nextSibling;e.remove(),e=l}r=!0}if(J(t,n&&!r),B(t,0),h(t,b),t.transitions)for(const o of t.transitions)o.stop();pt(t);var s=t.parent;s!==null&&t.f&w&&s.first!==null&&ht(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes=null}function ht(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function xn(t,n){var r=[];dt(t,r,!0),Ut(r,()=>{Y(t),n&&n()})}function Ut(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var u of t)u.out(e)}else n()}function dt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var u=e.next,l=(e.f&st)!==0||(e.f&w)!==0;dt(e,n,l?r:!1),e=u}}}function qn(t){wt(t,!0)}function wt(t,n){if(t.f&C){t.f^=C,j(t)&&H(t);for(var r=t.first;r!==null;){var e=r.next,u=(r.f&st)!==0||(r.f&w)!==0;wt(r,u?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const zt=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let L=!1,P=!1,z=[],K=[];function Et(){L=!1;const t=z.slice();z=[],et(t)}function yt(){P=!1;const t=K.slice();K=[],et(t)}function Sn(t){L||(L=!0,queueMicrotask(Et)),z.push(t)}function An(t){P||(P=!0,zt(yt)),K.push(t)}function Kt(){L&&Et(),P&&yt()}function Gt(t){let n=g|m;a===null&&(n|=T);const r={deps:null,deriveds:null,equals:ot,f:n,first:null,fn:t,last:null,reactions:null,v:null,version:0};if(f!==null&&f.f&g){var e=f;e.deriveds===null?e.deriveds=[r]:e.deriveds.push(r)}return r}function On(t){const n=Gt(t);return n.equals=it,n}function mt(t){J(t);var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)Vt(n[r])}}function kt(t){var n;mt(t),n=qt(t);var r=(S||t.f&T)&&t.deps!==null?D:d;h(t,r),t.equals(n)||(t.v=n,t.version=xt())}function Vt(t){mt(t),B(t,0),h(t,b),t.first=t.last=t.deps=t.reactions=t.fn=null}function $t(t){throw new Error("lifecycle_outside_component")}const gt=0,Wt=1;let I=gt,N=!1,A=!1,W=!1;function Z(t){A=t}function tt(t){W=t}let k=[],O=0,f=null;function nt(t){f=t}let a=null,c=null,v=0,y=null;function Jt(t){y=t}let Tt=0,S=!1,i=null;function xt(){return Tt++}function G(){return i!==null&&i.l===null}function j(t){var s,o;var n=t.f;if(n&m)return!0;if(n&D){var r=t.deps,e=(n&T)!==0;if(r!==null){var u;if(n&M){for(u=0;u<r.length;u++)((s=r[u]).reactions??(s.reactions=new Set)).add(t);t.f^=M}for(u=0;u<r.length;u++){var l=r[u];if(j(l)&&kt(l),l.version>t.version)return!0;e&&!S&&!((o=l==null?void 0:l.reactions)!=null&&o.has(t))&&(l.reactions??(l.reactions=new Set)).add(t)}}e||h(t,d)}return!1}function Qt(t,n,r){throw t}function qt(t){var E;var n=c,r=v,e=y,u=f,l=S;c=null,v=0,y=null,f=t.f&(w|$)?null:t,S=!A&&(t.f&T)!==0;try{var s=(0,t.fn)(),o=t.deps;if(c!==null){var p,_;if(o!==null){var x=v===0?c:o.slice(0,v).concat(c),q=x.length>16?new Set(x):null;for(_=v;_<o.length;_++)p=o[_],(q!==null?!q.has(p):!x.includes(p))&&St(t,p)}if(o!==null&&v>0)for(o.length=v+c.length,_=0;_<c.length;_++)o[v+_]=c[_];else t.deps=o=c;if(!S)for(_=v;_<o.length;_++)((E=o[_]).reactions??(E.reactions=new Set)).add(t)}else o!==null&&v<o.length&&(B(t,v),o.length=v);return s}finally{c=n,v=r,y=e,f=u,S=l}}function St(t,n){let r=n.reactions;r!==null&&(r.delete(t),r.size===0&&(r=n.reactions=null)),r===null&&n.f&g&&(h(n,D),n.f&(T|M)||(n.f^=M),B(n,0))}function B(t,n){var r=t.deps;if(r!==null)for(var e=n===0?null:r.slice(0,n),u=new Set,l=n;l<r.length;l++){var s=r[l];u.has(s)||(u.add(s),(e===null||!e.includes(s))&&St(t,s))}}function J(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;Y(r,n),r=e}}function H(t){var n=t.f;if(!(n&b)){h(t,d);var r=t.ctx,e=a,u=i;a=t,i=r;try{n&lt||J(t),pt(t);var l=qt(t);t.teardown=typeof l=="function"?l:null,t.version=Tt}catch(s){Qt(s)}finally{a=e,i=u}}}function At(){O>1e3&&(O=0,Yt()),O++}function Ot(t){var n=t.length;if(n!==0){At();var r=A;A=!0;try{for(var e=0;e<n;e++){var u=t[e];if(u.first===null&&!(u.f&w))rt([u]);else{var l=[];Ct(u,l),rt(l)}}}finally{A=r}}}function rt(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(b|C))&&j(e)&&(H(e),e.deps===null&&e.first===null&&e.nodes===null&&(e.teardown===null?ht(e):e.fn=null))}}function Xt(){if(N=!1,O>1001)return;const t=k;k=[],Ot(t),N||(O=0)}function U(t){I===gt&&(N||(N=!0,queueMicrotask(Xt)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&w){if(!(r&d))return;h(n,D)}}k.push(n)}function Ct(t,n){var r=t.first,e=[];t:for(;r!==null;){var u=r.f,l=(u&(b|C))===0,s=u&w,o=(u&d)!==0,p=r.first;if(l&&(!s||!o)){if(s&&h(r,d),u&F){if(!s&&j(r)&&(H(r),p=r.first),p!==null){r=p;continue}}else if(u&ut)if(s||o){if(p!==null){r=p;continue}}else e.push(r)}var _=r.next;if(_===null){let E=r.parent;for(;E!==null;){if(t===E)break t;var x=E.next;if(x!==null){r=x;continue t}E=E.parent}}r=_}for(var q=0;q<e.length;q++)p=e[q],n.push(p),Ct(p,n)}function Ft(t){var n=I,r=k;try{At();const u=[];I=Wt,k=u,N=!1,Ot(r);var e=t==null?void 0:t();return Kt(),(k.length>0||u.length>0)&&Ft(),O=0,e}finally{I=n,k=r}}async function Cn(){await Promise.resolve(),Ft()}function Zt(t){var n=t.f;if(n&b)return t.v;if(f!==null){var r=f.deps;c===null&&r!==null&&r[v]===t?v++:(r===null||v===0||r[v-1]!==t)&&(c===null?c=[t]:c[c.length-1]!==t&&c.push(t)),y!==null&&a!==null&&a.f&d&&!(a.f&w)&&y.includes(t)&&(h(a,m),U(a))}if(n&g){var e=t;j(e)&&kt(e)}return t.v}function Fn(t){const n=f;try{return f=null,t()}finally{f=n}}const tn=~(m|D|d);function h(t,n){t.f=t.f&tn|n}function Dn(t){return Dt().get(t)}function bn(t,n){return Dt().set(t,n),n}function Dt(t){return i===null&&$t(),i.c??(i.c=new Map(nn(i)||void 0))}function nn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function Rn(t,n=1){var r=+Zt(t);return Ht(t,r+n),r}function Nn(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},n||(i.l={s:null,u:null,r1:[],r2:ft(!1)})}function jn(t){const n=i;if(n!==null){t!==void 0&&(n.x=t);const e=n.e;if(e!==null){n.e=null;for(var r=0;r<e.length;r++)ct(e[r])}i=n.p,n.m=!0}return t||{}}function In(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Q in t)V(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&Q in r&&V(r)}}}function V(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{V(t[e],n)}catch{}const r=Rt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=bt(r);for(let u in e){const l=e[u].get;if(l)try{l.call(t)}catch{}}}}}export{Cn as $,ft as A,dt as B,Ut as C,i as D,st as E,$t as F,En as G,pn as H,C as I,en as J,mn as K,cn as L,un as M,on as N,fn as O,ln as P,Rt as Q,_n as R,Q as S,vn as T,An as U,bt as V,jt as W,lt as X,Nt as Y,Ft as Z,yn as _,jn as a,It as a0,Rn as a1,In as a2,gn as b,Tn as c,Gt as d,xn as e,Dn as f,Zt as g,wn as h,ct as i,Y as j,sn as k,hn as l,it as m,Ht as n,On as o,Nn as p,Sn as q,vt as r,bn as s,kn as t,Fn as u,dn as v,an as w,qn as x,a as y,rn as z};
