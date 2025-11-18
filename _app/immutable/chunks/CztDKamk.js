import"./DsnmJJEf.js";import{j as Ne,k as ze,l as Be,B as Ce,p as Ee,c as Re,f as u,a as y,s as e,a7 as Se,b as v,d as _,n as j,r as n,i as d,u as je,aA as T,bn as te,ap as D,az as De,t as I,e as A}from"./CCvlg-B_.js";import{e as N,r as O,s as h,m as He,i as z}from"./B-Y-4wD6.js";import{b as Y}from"./8vez5z1n.js";import{C as k}from"./CrxF6GP3.js";import{g as Oe}from"./BM1lFVNV.js";import{i as B}from"./DEouryAk.js";import{T as Ye}from"./CHq7LPwo.js";import{T as C,a as E}from"./frVgudFr.js";import{M as Fe}from"./x1_9U9es.js";import{M as ye}from"./B5jLdF13.js";import{I as Ue}from"./DZ54a8Oo.js";function ee(L,x,ne){ze&&Be();var F=new Ce(L);Ne(()=>{var U=x();F.ensure(U,ne)})}var We=u('<li class="svelte-149pnxa"> </li>'),qe=u(`<!> <p>Triggers when the element enters the viewport by at least a pixel. Scroll to see items change
			state.</p> <!> <ul class="demo_list svelte-149pnxa"></ul>`,1),Ge=u('<li class="svelte-149pnxa"> </li>'),Je=u('<!> <p>Triggers when 50% of the element is visible.</p> <!> <ul class="demo_list svelte-149pnxa"></ul>',1),Ke=u('<li class="svelte-149pnxa"> </li>'),Qe=u('<!> <p>Triggers only when the element is fully visible.</p> <!> <ul class="demo_list svelte-149pnxa"></ul>',1),Ve=u('<li class="svelte-149pnxa"> </li>'),Xe=u('<ul class="demo_list svelte-149pnxa"></ul>'),Ze=(L,x)=>te(x),et=u(`<!> <p>Disconnects after the first intersection cycle (enter and leave). A <code>count</code> of <code>0</code> disables observation. Negative or <code>undefined</code> never disconnects. (the
			default)</p> <!> <!> <button type="button">reset</button>`,1),tt=u('<li class="svelte-149pnxa"> </li>'),nt=u('<ul class="demo_list svelte-149pnxa"></ul>'),ot=(L,x)=>te(x),st=u('<!> <p>Disconnects after two intersection cycles.</p> <!> <!> <button type="button">reset</button>',1),at=u('<li class="svelte-149pnxa"> </li>'),rt=u('<ul class="demo_list svelte-149pnxa"></ul>'),it=(L,x)=>te(x),lt=u(`<!> <p>Try different parameter combinations. Positive <code>count</code> values disconnect after N
			cycles. <code>0</code> disables observation. Negative or <code>undefined</code> never disconnects. (the
			default)</p> <div class="controls svelte-149pnxa"><label class="svelte-149pnxa"><code>count</code> <div class="control_inputs svelte-149pnxa"><input type="number" class="svelte-149pnxa"/> <input type="range" class="svelte-149pnxa"/></div></label> <label class="svelte-149pnxa"><code>options.threshold</code> <div class="control_inputs svelte-149pnxa"><input type="number" class="svelte-149pnxa"/> <input type="range" class="svelte-149pnxa"/></div></label> <label class="svelte-149pnxa"><code>options.rootMargin</code> <select><option>0px</option><option>50px</option><option>100px</option><option>-25px</option><option>-50px</option></select></label></div> <!> <button type="button">reset</button>`,1),ct=u(`<section><p>The <!> helper in <!> creates an attachment that observes when an element enters or leaves the viewport using the <!>.</p> <p>Uses the lazy function pattern to optimize reactivity: callbacks can update without recreating
			the observer, preserving state.</p></section> <section><!> <!> <p>The callback receives <code>intersecting</code> (boolean), <code>intersections</code> (number
			count), <code>el</code>, <code>observer</code>, and <code>disconnect</code>.</p></section> <!> <!> <!> <!> <!> <!> <p>Full API docs at <!>.</p>`,1);function yt(L,x){Ee(x,!0);const F=Oe("intersect"),U=()=>typeof window>"u"?15:Math.max(10,Math.floor(window.innerHeight/60)),w=je(()=>Array.from({length:U()},(re,ie)=>ie));let R=T(0),S=T(3),W=T("0px"),oe=T(0),se=T(0),ae=T(0);Ye(L,{get tome(){return F},children:(re,ie)=>{var le=ct(),q=y(le),ce=_(q),ve=e(_(ce));Ue(ve,{name:"intersect"});var _e=e(ve,2);ye(_e,{module_path:"intersect.svelte.ts"});var ke=e(_e,2);Fe(ke,{path:"Web/API/Intersection_Observer_API",children:(g,M)=>{j();var s=Se("Intersection Observer API");v(g,s)},$$slots:{default:!0}}),j(),n(ce),j(2),n(q);var G=e(q,2),de=_(G);k(de,{content:"import {intersect} from '@ryanatkn/fuz/intersect.svelte.js';",lang:"ts"});var Le=e(de,2);k(Le,{content:`<div {@attach intersect(() => ({intersecting}) => {
  console.log(intersecting ? 'entered' : 'left');
})}>
  scroll me into view
</div>`}),j(2),n(G);var pe=e(G,2);C(pe,{children:(g,M)=>{var s=qe(),l=y(s);E(l,{text:"threshold: 0 (default)"});var a=e(l,4);k(a,{content:`<div {@attach intersect(() => ({
  onintersect: ({intersecting, el}) => {
    el.classList.toggle('intersecting', intersecting);
  }
}))}>
  content
</div>`});var r=e(a,2);N(r,20,()=>d(w),i=>i,(i,p)=>{var t=We(),c=_(t);n(t),z(t,()=>B(()=>({onintersect:({intersecting:m,el:o})=>{o.classList.toggle("intersecting",m)}}))),I(()=>A(c,`item ${p??""}`)),v(i,t)}),n(r),v(g,s)},$$slots:{default:!0}});var ue=e(pe,2);C(ue,{children:(g,M)=>{var s=Je(),l=y(s);E(l,{text:"threshold: 0.5"});var a=e(l,4);k(a,{content:`<div {@attach intersect(() => ({
  onintersect: ({intersecting, el}) => {
    el.classList.toggle('intersecting', intersecting);
  },
  options: {threshold: 0.5}
}))}>
  content
</div>`});var r=e(a,2);N(r,20,()=>d(w),i=>i,(i,p)=>{var t=Ge(),c=_(t);n(t),z(t,()=>B(()=>({onintersect:({intersecting:m,el:o})=>{o.classList.toggle("intersecting",m)},options:{threshold:.5}}))),I(()=>A(c,`item ${p??""}`)),v(i,t)}),n(r),v(g,s)},$$slots:{default:!0}});var ge=e(ue,2);C(ge,{children:(g,M)=>{var s=Qe(),l=y(s);E(l,{text:"threshold: 1"});var a=e(l,4);k(a,{content:`<div {@attach intersect(() => ({
  onintersect: ({intersecting, el}) => {
    el.classList.toggle('intersecting', intersecting);
  },
  options: {threshold: 1}
}))}>
  content
</div>`});var r=e(a,2);N(r,20,()=>d(w),i=>i,(i,p)=>{var t=Ke(),c=_(t);n(t),z(t,()=>B(()=>({onintersect:({intersecting:m,el:o})=>{o.classList.toggle("intersecting",m)},options:{threshold:1}}))),I(()=>A(c,`item ${p??""}`)),v(i,t)}),n(r),v(g,s)},$$slots:{default:!0}});var me=e(ge,2);C(me,{children:(g,M)=>{var s=et(),l=y(s);E(l,{text:"count: 1"});var a=e(l,4);k(a,{content:`<div {@attach intersect(() => ({
  onintersect: ({intersecting, el}) => {
    el.classList.toggle('intersecting', intersecting);
  },
  count: 1
}))}>
  content
</div>`});var r=e(a,2);ee(r,()=>d(oe),p=>{var t=Xe();N(t,20,()=>d(w),c=>c,(c,m)=>{var o=Ve(),b=_(o);n(o),z(o,()=>B(()=>({onintersect:({intersecting:P,el:$})=>{$.classList.toggle("intersecting",P)},count:1}))),I(()=>A(b,`item ${m??""}`)),v(c,o)}),n(t),v(p,t)});var i=e(r,2);i.__click=[Ze,oe],v(g,s)},$$slots:{default:!0}});var he=e(me,2);C(he,{children:(g,M)=>{var s=st(),l=y(s);E(l,{text:"count: 2"});var a=e(l,4);k(a,{content:`<div {@attach intersect(() => ({
  onintersect: ({intersecting, el}) => {
    el.classList.toggle('intersecting', intersecting);
  },
  count: 2
}))}>
  content
</div>`});var r=e(a,2);ee(r,()=>d(se),p=>{var t=nt();N(t,20,()=>d(w),c=>c,(c,m)=>{var o=tt(),b=_(o);n(o),z(o,()=>B(()=>({onintersect:({intersecting:P,el:$})=>{$.classList.toggle("intersecting",P)},count:2}))),I(()=>A(b,`item ${m??""}`)),v(c,o)}),n(t),v(p,t)});var i=e(r,2);i.__click=[ot,se],v(g,s)},$$slots:{default:!0}});var fe=e(he,2);C(fe,{children:(g,M)=>{var s=lt(),l=y(s);E(l,{text:"Configurable"});var a=e(l,4),r=_(a),i=e(_(r),2),p=_(i);O(p),h(p,"min",-1),h(p,"max",3),h(p,"step",1);var t=e(p,2);O(t),h(t,"min",-1),h(t,"max",3),h(t,"step",1),n(i),n(r);var c=e(r,2),m=e(_(c),2),o=_(m);O(o),h(o,"step",.1),h(o,"min",0),h(o,"max",1);var b=e(o,2);O(b),h(b,"step",.1),h(b,"min",0),h(b,"max",1),n(m),n(c);var P=e(c,2),$=e(_(P),2),J=_($);J.value=J.__value="0px";var K=e(J);K.value=K.__value="50px";var Q=e(K);Q.value=Q.__value="100px";var V=e(Q);V.value=V.__value="-25px";var be=e(V);be.value=be.__value="-50px",n($),n(P),n(a);var $e=e(a,2);ee($e,()=>d(ae),f=>{var X=rt();N(X,20,()=>d(w),Z=>Z,(Z,Pe)=>{var H=at(),Te=_(H);n(H),z(H,()=>B(()=>({onintersect:({intersecting:Ie,el:Ae})=>{Ae.classList.toggle("intersecting",Ie)},count:d(S),options:{threshold:d(R),rootMargin:d(W)}}))),I(()=>A(Te,`item ${Pe??""}`)),v(Z,H)}),n(X),v(f,X)});var Me=e($e,2);Me.__click=[it,ae],Y(p,()=>d(S),f=>D(S,f)),Y(t,()=>d(S),f=>D(S,f)),Y(o,()=>d(R),f=>D(R,f)),Y(b,()=>d(R),f=>D(R,f)),He($,()=>d(W),f=>D(W,f)),v(g,s)},$$slots:{default:!0}});var xe=e(fe,2),we=e(_(xe));ye(we,{module_path:"intersect.svelte.ts"}),j(),n(xe),v(re,le)},$$slots:{default:!0}}),Re()}De(["click"]);export{yt as _,ee as k};
