import{U as $,e as j,a3 as Z,h as N,z as k,b as ee,A as ae,a2 as re,a4 as G,a5 as ne,a6 as m,R as D,j as R,a7 as le,T as J,i as K,k as fe,a8 as ie,w as ue,V as q,a9 as M,F as z,aa as L,ab as se,N as te,Z as F,ac as ve,ad as _e,ae as de,B as ce,af as oe,x as he}from"./runtime.CdlCIzqX.js";let H=null;function xe(l){H=l}function Ie(l,e){return e}function Ee(l,e,a,s){for(var v=[],_=e.length,u=0;u<_;u++)ve(e[u].e,v,!0);var A=_>0&&v.length===0&&a!==null;if(A){var E=a.parentNode;_e(E),E.append(a),s.clear(),C(l,e[0].prev,e[_-1].next)}de(v,()=>{for(var o=0;o<_;o++){var d=e[o];A||(s.delete(d.k),C(l,d.prev,d.next)),ce(d.e,!A)}})}function Ce(l,e,a,s,v,_=null){var u=l,A={flags:e,items:new Map,first:null},E=(e&Z)!==0;if(E){var o=l;u=N?k(ae(o)):o.appendChild($())}N&&ee();var d=null;j(()=>{var n=a(),c=re(n)?n:n==null?[]:G(n),f=c.length;let t=!1;if(N){var p=u.data===ne;p!==(f===0)&&(u=m(),k(u),D(!1),t=!0)}if(N){for(var T=null,x,h=0;h<f;h++){if(R.nodeType===8&&R.data===le){u=R,t=!0,D(!1);break}var r=c[h],i=s(r,h);x=P(R,A,T,null,r,i,h,v,e),A.items.set(i,x),T=x}f>0&&k(m())}N||pe(c,A,u,v,e,s),_!==null&&(f===0?d?J(d):d=K(()=>_(u)):d!==null&&fe(d,()=>{d=null})),t&&D(!0)}),N&&(u=R)}function pe(l,e,a,s,v,_){var V,y,B,U;var u=(v&oe)!==0,A=(v&(M|L))!==0,E=l.length,o=e.items,d=e.first,n=d,c,f=null,t,p=[],T=[],x,h,r,i;if(u)for(i=0;i<E;i+=1)x=l[i],h=_(x,i),r=o.get(h),r!==void 0&&((V=r.a)==null||V.measure(),(t??(t=new Set)).add(r));for(i=0;i<E;i+=1){if(x=l[i],h=_(x,i),r=o.get(h),r===void 0){var Q=n?n.e.nodes_start:a;f=P(Q,e,f,f===null?e.first:f.next,x,h,i,s,v),o.set(h,f),p=[],T=[],n=f.next;continue}if(A&&Ae(r,x,i,v),r.e.f&ie&&(J(r.e),u&&((y=r.a)==null||y.unfix(),(t??(t=new Set)).delete(r))),r!==n){if(c!==void 0&&c.has(r)){if(p.length<T.length){var g=T[0],I;f=g.prev;var O=p[0],S=p[p.length-1];for(I=0;I<p.length;I+=1)X(p[I],g,a);for(I=0;I<T.length;I+=1)c.delete(T[I]);C(e,O.prev,S.next),C(e,f,O),C(e,S,g),n=g,f=S,i-=1,p=[],T=[]}else c.delete(r),X(r,n,a),C(e,r.prev,r.next),C(e,r,f===null?e.first:f.next),C(e,f,r),f=r;continue}for(p=[],T=[];n!==null&&n.k!==h;)(c??(c=new Set)).add(n),T.push(n),n=n.next;if(n===null)continue;r=n}p.push(r),f=r,n=r.next}if(n!==null||c!==void 0){for(var w=c===void 0?[]:G(c);n!==null;)w.push(n),n=n.next;var b=w.length;if(b>0){var W=v&Z&&E===0?a:null;if(u){for(i=0;i<b;i+=1)(B=w[i].a)==null||B.measure();for(i=0;i<b;i+=1)(U=w[i].a)==null||U.fix()}Ee(e,w,W,o)}}u&&ue(()=>{var Y;if(t!==void 0)for(r of t)(Y=r.a)==null||Y.apply()}),q.first=e.first&&e.first.e,q.last=f&&f.e}function Ae(l,e,a,s){s&M&&z(l.v,e),s&L?z(l.i,a):l.i=a}function P(l,e,a,s,v,_,u,A,E){var o=H;try{var d=(E&M)!==0,n=(E&se)===0,c=d?n?te(v):F(v):v,f=E&L?F(u):u,t={i:f,v:c,k:_,a:null,e:null,prev:a,next:s};return H=t,t.e=K(()=>A(l,c,f),N),t.e.prev=a&&a.e,t.e.next=s&&s.e,a===null?e.first=t:(a.next=t,a.e.next=t.e),s!==null&&(s.prev=t,s.e.prev=t.e),t}finally{H=o}}function X(l,e,a){for(var s=l.next?l.next.e.nodes_start:a,v=e?e.e.nodes_start:a,_=l.e.nodes_start;_!==s;){var u=he(_);v.before(_),_=u}}function C(l,e,a){e===null?l.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}export{H as c,Ce as e,Ie as i,xe as s};
