import{C as j,e as ee,a6 as P,h as g,y,b as ae,a7 as ne,a1 as Q,a8 as re,a9 as U,A as M,k as N,B as W,i as Z,j as ie,aa as L,q as te,D as X,ab as O,J as F,ac as m,ad as se,T as fe,ae as G,af as ue,a0 as le,ag as ve,v as oe,z as _e,_ as de,ah as ce,w as he,ai as Ee,aj as pe}from"./runtime.DaB_8cOj.js";let D=null;function Ie(n){D=n}function ge(n,e){return e}function xe(n,e,a,t){for(var l=[],o=e.length,u=0;u<o;u++)ue(e[u].e,l,!0);var x=o>0&&l.length===0&&a!==null;if(x){var E=a.parentNode;le(E),E.append(a),t.clear(),I(n,e[0].prev,e[o-1].next)}ve(l,()=>{for(var c=0;c<o;c++){var _=e[c];x||(t.delete(_.k),I(n,_.prev,_.next)),oe(_.e,!x)}})}function we(n,e,a,t,l,o=null){var u=n,x={flags:e,items:new Map,first:null},E=(e&P)!==0;if(E){var c=n;u=g?y(_e(c)):c.appendChild(j())}g&&ae();var _=null;ee(()=>{var r=a(),d=ne(r)?r:r==null?[]:Q(r),s=d.length;let v=!1;if(g){var p=u.data===re;p!==(s===0)&&(u=U(),y(u),M(!1),v=!0)}if(g){for(var A=null,T,h=0;h<s;h++){if(N.nodeType===8&&N.data===de){u=N,v=!0,M(!1);break}var i=d[h],f=t(i,h);T=$(N,x,A,null,i,f,h,l,e),x.items.set(f,T),A=T}s>0&&y(U())}g||Ae(d,x,u,l,e,t),o!==null&&(s===0?_?W(_):_=Z(()=>o(u)):_!==null&&ie(_,()=>{_=null})),v&&M(!0)}),g&&(u=N)}function Ae(n,e,a,t,l,o){var B,V,Y,z;var u=(l&ce)!==0,x=(l&(O|m))!==0,E=n.length,c=e.items,_=e.first,r=_,d,s=null,v,p=[],A=[],T,h,i,f;if(u)for(f=0;f<E;f+=1)T=n[f],h=o(T,f),i=c.get(h),i!==void 0&&((B=i.a)==null||B.measure(),(v??(v=new Set)).add(i));for(f=0;f<E;f+=1){if(T=n[f],h=o(T,f),i=c.get(h),i===void 0){var b=r?r.e.nodes_start:a;s=$(b,e,s,s===null?e.first:s.next,T,h,f,t,l),c.set(h,s),p=[],A=[],r=s.next;continue}if(x&&Te(i,T,f,l),i.e.f&L&&(W(i.e),u&&((V=i.a)==null||V.unfix(),(v??(v=new Set)).delete(i))),i!==r){if(d!==void 0&&d.has(i)){if(p.length<A.length){var S=A[0],C;s=S.prev;var q=p[0],H=p[p.length-1];for(C=0;C<p.length;C+=1)K(p[C],S,a);for(C=0;C<A.length;C+=1)d.delete(A[C]);I(e,q.prev,H.next),I(e,s,q),I(e,H,S),r=S,s=H,f-=1,p=[],A=[]}else d.delete(i),K(i,r,a),I(e,i.prev,i.next),I(e,i,s===null?e.first:s.next),I(e,s,i),s=i;continue}for(p=[],A=[];r!==null&&r.k!==h;)r.e.f&L||(d??(d=new Set)).add(r),A.push(r),r=r.next;if(r===null)continue;i=r}p.push(i),s=i,r=i.next}if(r!==null||d!==void 0){for(var w=d===void 0?[]:Q(d);r!==null;)r.e.f&L||w.push(r),r=r.next;var R=w.length;if(R>0){var k=l&P&&E===0?a:null;if(u){for(f=0;f<R;f+=1)(Y=w[f].a)==null||Y.measure();for(f=0;f<R;f+=1)(z=w[f].a)==null||z.fix()}xe(e,w,k,c)}}u&&te(()=>{var J;if(v!==void 0)for(i of v)(J=i.a)==null||J.apply()}),X.first=e.first&&e.first.e,X.last=s&&s.e}function Te(n,e,a,t){t&O&&F(n.v,e),t&m?F(n.i,a):n.i=a}function $(n,e,a,t,l,o,u,x,E){var c=D;try{var _=(E&O)!==0,r=(E&se)===0,d=_?r?fe(l):G(l):l,s=E&m?G(u):u,v={i:s,v:d,k:o,a:null,e:null,prev:a,next:t};return D=v,v.e=Z(()=>x(n,d,s),g),v.e.prev=a&&a.e,v.e.next=t&&t.e,a===null?e.first=v:(a.next=v,a.e.next=v.e),t!==null&&(t.prev=v,t.e.prev=v.e),v}finally{D=c}}function K(n,e,a){for(var t=n.next?n.next.e.nodes_start:a,l=e?e.e.nodes_start:a,o=n.e.nodes_start;o!==t;){var u=he(o);l.before(o),o=u}}function I(n,e,a){e===null?n.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function Ne(n){const e=Symbol(),a=()=>{const t=pe(e);return t===void 0?n==null?void 0:n():t};return{get:t=>{const l=a();if(l===void 0)throw Error(t??"context value is not set");return l},maybe_get:a,set:(t=n==null?void 0:n())=>Ee(e,t)}}export{D as a,Ne as c,we as e,ge as i,Ie as s};