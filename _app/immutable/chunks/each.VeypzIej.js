import{b as J,Q as U,m as P,R as j,k as ee,T as ae,M as W,c as Z,e as re,V as te,q as ne,W as b,w as Q,X as L,Y as h,B as se,I as X,Z as fe,_ as le,N as ve,$ as ie,D as ue,S as oe,a0 as _e}from"./runtime.Dht6Pzrj.js";import{e as $,h as w,i as z,j as k,k as de,d as pe,l as Ee}from"./disclose-version.CSpVFLMe.js";let D=null;function Ie(e){D=e}function me(e,t){return t}function xe(e,t,i){for(var o=[],l=e.length,_=0;_<l;_++)fe(e[_].e,o,!0);var u=l>0&&o.length===0&&t!==null;if(u){var S=t.parentNode;de(S),S.append(t),i.clear(),m(e[0].prev,e[l-1].next)}le(o,()=>{for(var d=0;d<l;d++){var v=e[d];u||(i.delete(v.k),v.o.remove(),m(v.prev,v.next)),ve(v.e,!u)}})}function ye(e,t,i,o,l,_=null){var u={flags:t,items:new Map,next:null},S=(t&U)!==0;if(S){var d=e;e=w?z(d.firstChild):d.appendChild($())}var v=null;J(()=>{var g=i(),r=P(g)?g:g==null?[]:Array.from(g),p=r.length,n=u.flags;n&h&&!ue(r)&&!(oe in r)&&(n^=h,n&_e&&!(n&b)&&(n^=b));let E=!1;if(w){var x=e.data===j;x!==(p===0)&&(ee(pe),k(!1),E=!0)}if(w){for(var f=Ee,T=u,A,a=0;a<p;a++){if(f.nodeType!==8||f.data!==ae){E=!0,k(!1);break}var s=f;f=z(f);var C=r[a],N=o(C,a);A=F(s,f,T,null,C,N,a,l,n),u.items.set(N,A),f=f.nextSibling,T=A}if(p>0)for(;f!==e;){var y=f.nextSibling;f.remove(),f=y}}w||Ae(r,u,e,l,n,o),_!==null&&(p===0?v?W(v):v=Z(()=>_(e)):v!==null&&re(v,()=>{v=null})),E&&k(!0)})}function Ae(e,t,i,o,l,_){var O,Y,V,q;var u=(l&ie)!==0,S=(l&(b|L))!==0,d=e.length,v=t.items,g=t.next,r=g,p=new Set,n=t,E=new Set,x=[],f=[],T,A,a,s;if(u)for(s=0;s<d;s+=1)T=e[s],A=_(T,s),a=v.get(A),a!==void 0&&((O=a.a)==null||O.measure(),E.add(a));for(s=0;s<d;s+=1){if(T=e[s],A=_(T,s),a=v.get(A),a===void 0){var C=$(),N=r?r.o:i;N.before(C),n=F(C,N,n,n.next,T,A,s,o,l),v.set(A,n),x=[],f=[],r=n.next;continue}if(S&&Te(a,T,s,l),a.e.f&te&&(W(a.e),u&&((Y=a.a)==null||Y.unfix(),E.delete(a))),a!==r){if(p.has(a)){if(x.length<f.length){var y=f[0],I;n=y.prev;var M=x[0],H=x[x.length-1];for(I=0;I<x.length;I+=1)K(x[I],y,i);for(I=0;I<f.length;I+=1)p.delete(f[I]);m(M.prev,H.next),m(n,M),m(H,y),r=y,n=H,s-=1,x=[],f=[]}else p.delete(a),K(a,r,i),m(a.prev,a.next),m(a,n.next),m(n,a),n=a;continue}for(x=[],f=[];r!==null&&r.k!==A;)p.add(r),f.push(r),r=r.next;if(r===null)continue;a=r}x.push(a),n=a,r=a.next}const R=Array.from(p);for(;r!==null;)R.push(r),r=r.next;var c=R.length;if(c>0){var G=l&U&&d===0?i:null;if(u){for(s=0;s<c;s+=1)(V=R[s].a)==null||V.measure();for(s=0;s<c;s+=1)(q=R[s].a)==null||q.fix()}xe(R,G,v)}u&&ne(()=>{var B;for(a of E)(B=a.a)==null||B.apply()})}function Te(e,t,i,o){o&b&&Q(e.v,t),o&L?Q(e.i,i):e.i=i}function F(e,t,i,o,l,_,u,S,d){var v=D;try{var g=(d&b)!==0,r=(d&h)===0,p=g?r?se(l):X(l):l,n=d&L?X(u):u,E={i:n,v:p,k:_,a:null,e:null,o:e,prev:i,next:o};return i.next=E,o!==null&&(o.prev=E),D=E,E.e=Z(()=>S(t,p,n)),E}finally{D=v}}function K(e,t,i){for(var o=e.next?e.next.o:i,l=t?t.o:i,_=e.o;_!==o;){var u=_.nextSibling;l.before(_),_=u}}function m(e,t){e.next=t,t!==null&&(t.prev=e)}export{D as c,ye as e,me as i,Ie as s};
