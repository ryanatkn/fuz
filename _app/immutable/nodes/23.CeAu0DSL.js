import"../chunks/DsnmJJEf.js";import{o as Ne,q as Be,m as Ce,B as Ee,p as Re,c as ze,f as u,a as y,s as e,am as Se,b as v,d as _,n as D,r as n,i as d,u as De,bn as te,l as T,k as H,aA as He,t as I,e as A}from"../chunks/BElm8bt9.js";import{e as N,r as Y,s as h,m as Oe,i as B}from"../chunks/C7GdCpii.js";import{b as j}from"../chunks/kQmtpI0O.js";import{C as k}from"../chunks/JTQcVK_f.js";import{g as Ye}from"../chunks/Xs07l9-Y.js";import{i as C}from"../chunks/YTN_5ir2.js";import{T as je}from"../chunks/CDAFVSKh.js";import{T as E,a as R}from"../chunks/B_SVV5nw.js";import{M as qe}from"../chunks/DbOKz4Im.js";import{M as ye}from"../chunks/tfCS8v1d.js";import{I as Fe}from"../chunks/B1Vw4Rd2.js";function ee(L,x,ne){Ne&&Be();var q=new Ee(L);Ce(()=>{var F=x();q.ensure(F,ne)})}var Ue=u('<li class="svelte-149pnxa"> </li>'),We=u(`<!> <p>Triggers when the element enters the viewport by at least a pixel. Scroll to see items change
			state.</p> <!> <ul class="demo_list svelte-149pnxa"></ul>`,1),Ge=u('<li class="svelte-149pnxa"> </li>'),Je=u('<!> <p>Triggers when 50% of the element is visible.</p> <!> <ul class="demo_list svelte-149pnxa"></ul>',1),Ke=u('<li class="svelte-149pnxa"> </li>'),Qe=u('<!> <p>Triggers only when the element is fully visible.</p> <!> <ul class="demo_list svelte-149pnxa"></ul>',1),Ve=u('<li class="svelte-149pnxa"> </li>'),Xe=u('<ul class="demo_list svelte-149pnxa"></ul>'),Ze=(L,x)=>te(x),et=u(`<!> <p>Disconnects after the first intersection cycle (enter and leave). A <code>count</code> of <code>0</code> disables observation. Negative or <code>undefined</code> never disconnects. (the
			default)</p> <!> <!> <button type="button">reset</button>`,1),tt=u('<li class="svelte-149pnxa"> </li>'),nt=u('<ul class="demo_list svelte-149pnxa"></ul>'),ot=(L,x)=>te(x),st=u('<!> <p>Disconnects after two intersection cycles.</p> <!> <!> <button type="button">reset</button>',1),rt=u('<li class="svelte-149pnxa"> </li>'),at=u('<ul class="demo_list svelte-149pnxa"></ul>'),it=(L,x)=>te(x),lt=u(`<!> <p>Try different parameter combinations. Positive <code>count</code> values disconnect after N
			cycles. <code>0</code> disables observation. Negative or <code>undefined</code> never disconnects. (the
			default)</p> <div class="controls svelte-149pnxa"><label class="svelte-149pnxa"><code>count</code> <div class="control_inputs svelte-149pnxa"><input type="number" class="svelte-149pnxa"/> <input type="range" class="svelte-149pnxa"/></div></label> <label class="svelte-149pnxa"><code>options.threshold</code> <div class="control_inputs svelte-149pnxa"><input type="number" class="svelte-149pnxa"/> <input type="range" class="svelte-149pnxa"/></div></label> <label class="svelte-149pnxa"><code>options.rootMargin</code> <select><option>0px</option><option>50px</option><option>100px</option><option>-25px</option><option>-50px</option></select></label></div> <!> <button type="button">reset</button>`,1),ct=u(`<section><p>The <!> helper in <!> creates an attachment that observes when an element enters or leaves the viewport using the <!>.</p> <p>Uses the lazy function pattern to optimize reactivity: callbacks can update without recreating
			the observer, preserving state.</p></section> <section><!> <!> <p>The callback receives <code>intersecting</code> (boolean), <code>intersections</code> (number
			count), <code>el</code>, <code>observer</code>, and <code>disconnect</code>.</p></section> <!> <!> <!> <!> <!> <!> <p>Full API docs at <!>.</p>`,1);function yt(L,x){Re(x,!0);const q=Ye("intersect"),F=()=>typeof window>"u"?15:Math.max(10,Math.floor(window.innerHeight/60)),w=De(()=>Array.from({length:F()},(ae,ie)=>ie));let z=T(0),S=T(3),U=T("0px"),oe=T(0),se=T(0),re=T(0);je(L,{get tome(){return q},children:(ae,ie)=>{var le=ct(),W=y(le),ce=_(W),ve=e(_(ce));Fe(ve,{name:"intersect"});var _e=e(ve,2);ye(_e,{module_path:"intersect.svelte.ts"});var ke=e(_e,2);qe(ke,{path:"Web/API/Intersection_Observer_API",children:(g,M)=>{D();var s=Se("Intersection Observer API");v(g,s)},$$slots:{default:!0}}),D(),n(ce),D(2),n(W);var G=e(W,2),de=_(G);k(de,{content:"import {intersect} from '@ryanatkn/fuz/intersect.svelte.js';",lang:"ts"});var Le=e(de,2);k(Le,{content:`<div {@attach intersect(() => ({intersecting}) => {
  console.log(intersecting ? 'entered' : 'left');
})}>
  scroll me into view
</div>`}),D(2),n(G);var pe=e(G,2);E(pe,{children:(g,M)=>{var s=We(),l=y(s);R(l,{text:"threshold: 0 (default)"});var r=e(l,4);k(r,{content:`<div {@attach intersect(() => ({
  onintersect: ({intersecting, el}) => {
    el.classList.toggle('intersecting', intersecting);
  }
}))}>
  content
</div>`});var a=e(r,2);N(a,20,()=>d(w),i=>i,(i,p)=>{var t=Ue(),c=_(t);n(t),B(t,()=>C(()=>({onintersect:({intersecting:m,el:o})=>{o.classList.toggle("intersecting",m)}}))),I(()=>A(c,`item ${p??""}`)),v(i,t)}),n(a),v(g,s)},$$slots:{default:!0}});var ue=e(pe,2);E(ue,{children:(g,M)=>{var s=Je(),l=y(s);R(l,{text:"threshold: 0.5"});var r=e(l,4);k(r,{content:`<div {@attach intersect(() => ({
  onintersect: ({intersecting, el}) => {
    el.classList.toggle('intersecting', intersecting);
  },
  options: {threshold: 0.5}
}))}>
  content
</div>`});var a=e(r,2);N(a,20,()=>d(w),i=>i,(i,p)=>{var t=Ge(),c=_(t);n(t),B(t,()=>C(()=>({onintersect:({intersecting:m,el:o})=>{o.classList.toggle("intersecting",m)},options:{threshold:.5}}))),I(()=>A(c,`item ${p??""}`)),v(i,t)}),n(a),v(g,s)},$$slots:{default:!0}});var ge=e(ue,2);E(ge,{children:(g,M)=>{var s=Qe(),l=y(s);R(l,{text:"threshold: 1"});var r=e(l,4);k(r,{content:`<div {@attach intersect(() => ({
  onintersect: ({intersecting, el}) => {
    el.classList.toggle('intersecting', intersecting);
  },
  options: {threshold: 1}
}))}>
  content
</div>`});var a=e(r,2);N(a,20,()=>d(w),i=>i,(i,p)=>{var t=Ke(),c=_(t);n(t),B(t,()=>C(()=>({onintersect:({intersecting:m,el:o})=>{o.classList.toggle("intersecting",m)},options:{threshold:1}}))),I(()=>A(c,`item ${p??""}`)),v(i,t)}),n(a),v(g,s)},$$slots:{default:!0}});var me=e(ge,2);E(me,{children:(g,M)=>{var s=et(),l=y(s);R(l,{text:"count: 1"});var r=e(l,4);k(r,{content:`<div {@attach intersect(() => ({
  onintersect: ({intersecting, el}) => {
    el.classList.toggle('intersecting', intersecting);
  },
  count: 1
}))}>
  content
</div>`});var a=e(r,2);ee(a,()=>d(oe),p=>{var t=Xe();N(t,20,()=>d(w),c=>c,(c,m)=>{var o=Ve(),b=_(o);n(o),B(o,()=>C(()=>({onintersect:({intersecting:P,el:$})=>{$.classList.toggle("intersecting",P)},count:1}))),I(()=>A(b,`item ${m??""}`)),v(c,o)}),n(t),v(p,t)});var i=e(a,2);i.__click=[Ze,oe],v(g,s)},$$slots:{default:!0}});var he=e(me,2);E(he,{children:(g,M)=>{var s=st(),l=y(s);R(l,{text:"count: 2"});var r=e(l,4);k(r,{content:`<div {@attach intersect(() => ({
  onintersect: ({intersecting, el}) => {
    el.classList.toggle('intersecting', intersecting);
  },
  count: 2
}))}>
  content
</div>`});var a=e(r,2);ee(a,()=>d(se),p=>{var t=nt();N(t,20,()=>d(w),c=>c,(c,m)=>{var o=tt(),b=_(o);n(o),B(o,()=>C(()=>({onintersect:({intersecting:P,el:$})=>{$.classList.toggle("intersecting",P)},count:2}))),I(()=>A(b,`item ${m??""}`)),v(c,o)}),n(t),v(p,t)});var i=e(a,2);i.__click=[ot,se],v(g,s)},$$slots:{default:!0}});var fe=e(he,2);E(fe,{children:(g,M)=>{var s=lt(),l=y(s);R(l,{text:"Configurable"});var r=e(l,4),a=_(r),i=e(_(a),2),p=_(i);Y(p),h(p,"min",-1),h(p,"max",3),h(p,"step",1);var t=e(p,2);Y(t),h(t,"min",-1),h(t,"max",3),h(t,"step",1),n(i),n(a);var c=e(a,2),m=e(_(c),2),o=_(m);Y(o),h(o,"step",.1),h(o,"min",0),h(o,"max",1);var b=e(o,2);Y(b),h(b,"step",.1),h(b,"min",0),h(b,"max",1),n(m),n(c);var P=e(c,2),$=e(_(P),2),J=_($);J.value=J.__value="0px";var K=e(J);K.value=K.__value="50px";var Q=e(K);Q.value=Q.__value="100px";var V=e(Q);V.value=V.__value="-25px";var be=e(V);be.value=be.__value="-50px",n($),n(P),n(r);var $e=e(r,2);ee($e,()=>d(re),f=>{var X=at();N(X,20,()=>d(w),Z=>Z,(Z,Pe)=>{var O=rt(),Te=_(O);n(O),B(O,()=>C(()=>({onintersect:({intersecting:Ie,el:Ae})=>{Ae.classList.toggle("intersecting",Ie)},count:d(S),options:{threshold:d(z),rootMargin:d(U)}}))),I(()=>A(Te,`item ${Pe??""}`)),v(Z,O)}),n(X),v(f,X)});var Me=e($e,2);Me.__click=[it,re],j(p,()=>d(S),f=>H(S,f)),j(t,()=>d(S),f=>H(S,f)),j(o,()=>d(z),f=>H(z,f)),j(b,()=>d(z),f=>H(z,f)),Oe($,()=>d(U),f=>H(U,f)),v(g,s)},$$slots:{default:!0}});var xe=e(fe,2),we=e(_(xe));ye(we,{module_path:"intersect.svelte.ts"}),D(),n(xe),v(ae,le)},$$slots:{default:!0}}),ze()}He(["click"]);export{yt as component};
