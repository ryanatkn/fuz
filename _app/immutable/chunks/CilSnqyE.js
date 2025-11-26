import"./DsnmJJEf.js";import{m as Ne,n as Ce,V as De,_ as Ee,p as Re,c as je,f as u,a as $,s as e,a9 as ze,b as v,d,aj as j,r as n,t as M,e as P,i as p,u as Be,an as T,bp as ee,am as z,al as Se}from"./DxN3B-L-.js";import{g as A,j as I,r as S,s as h,m as He}from"./aN8nENvo.js";import{b as H}from"./CLUMzhOY.js";import{C as y}from"./DzUQ2yVy.js";import{g as Oe}from"./B-TZ2_9p.js";import{i as N}from"./UzqfpZZz.js";import{T as Ye}from"./QiVcDW7A.js";import{T as C,a as D}from"./BKfd8VNR.js";import{M as Fe}from"./CGu-reRY.js";import{M as ye}from"./AilhXFY0.js";import{D as Ue}from"./Z1y5xKr4.js";function te(O,Y,ne){Ce&&De();var F=new Ee(O);Ne(()=>{var U=Y();F.ensure(U,ne)})}var Ve=u('<li class="svelte-149pnxa"> </li>'),We=u(`<!> <p>Triggers when the element enters the viewport by at least a pixel. Scroll to see items change
			state.</p> <!> <ul class="demo_list svelte-149pnxa"></ul>`,1),qe=u('<li class="svelte-149pnxa"> </li>'),Ge=u('<!> <p>Triggers when 50% of the element is visible.</p> <!> <ul class="demo_list svelte-149pnxa"></ul>',1),Je=u('<li class="svelte-149pnxa"> </li>'),Ke=u('<!> <p>Triggers only when the element is fully visible.</p> <!> <ul class="demo_list svelte-149pnxa"></ul>',1),Qe=u('<li class="svelte-149pnxa"> </li>'),Xe=u('<ul class="demo_list svelte-149pnxa"></ul>'),Ze=u(`<!> <p>Disconnects after the first intersection cycle (enter and leave). A <code>count</code> of <code>0</code> disables observation. Negative or <code>undefined</code> never disconnects. (the
			default)</p> <!> <!> <button type="button">reset</button>`,1),et=u('<li class="svelte-149pnxa"> </li>'),tt=u('<ul class="demo_list svelte-149pnxa"></ul>'),nt=u('<!> <p>Disconnects after two intersection cycles.</p> <!> <!> <button type="button">reset</button>',1),ot=u('<li class="svelte-149pnxa"> </li>'),st=u('<ul class="demo_list svelte-149pnxa"></ul>'),at=u(`<!> <p>Try different parameter combinations. Positive <code>count</code> values disconnect after N
			cycles. <code>0</code> disables observation. Negative or <code>undefined</code> never disconnects. (the
			default)</p> <div class="controls svelte-149pnxa"><label class="svelte-149pnxa"><code>count</code> <div class="control_inputs svelte-149pnxa"><input type="number" class="svelte-149pnxa"/> <input type="range" class="svelte-149pnxa"/></div></label> <label class="svelte-149pnxa"><code>options.threshold</code> <div class="control_inputs svelte-149pnxa"><input type="number" class="svelte-149pnxa"/> <input type="range" class="svelte-149pnxa"/></div></label> <label class="svelte-149pnxa"><code>options.rootMargin</code> <select><option>0px</option><option>50px</option><option>100px</option><option>-25px</option><option>-50px</option></select></label></div> <!> <button type="button">reset</button>`,1),rt=u(`<section><p>The <!> helper in <!> creates an attachment that observes when an element enters or leaves the viewport using the <!>.</p> <p>Uses the lazy function pattern to optimize reactivity: callbacks can update without recreating
			the observer, preserving state.</p></section> <section><!> <!> <p>The callback receives <code>intersecting</code> (boolean), <code>intersections</code> (number
			count), <code>el</code>, <code>observer</code>, and <code>disconnect</code>.</p></section> <!> <!> <!> <!> <!> <!> <p>Full API docs at <!>.</p>`,1);function xt(O,Y){Re(Y,!0);const F=Oe("intersect"),U=()=>typeof window>"u"?15:Math.max(10,Math.floor(window.innerHeight/60)),k=Be(()=>Array.from({length:U()},(re,ie)=>ie));let E=T(0),R=T(3),V=T("0px"),oe=T(0),se=T(0),ae=T(0);Ye(O,{get tome(){return F},children:(re,ie)=>{var le=rt(),W=$(le),ce=d(W),ve=e(d(ce));Ue(ve,{name:"intersect"});var de=e(ve,2);ye(de,{module_path:"intersect.svelte.ts"});var ke=e(de,2);Fe(ke,{path:"Web/API/Intersection_Observer_API",children:(g,L)=>{j();var s=ze("Intersection Observer API");v(g,s)},$$slots:{default:!0}}),j(),n(ce),j(2),n(W);var q=e(W,2),pe=d(q);y(pe,{content:"import {intersect} from '@ryanatkn/fuz/intersect.svelte.js';",lang:"ts"});var Le=e(pe,2);y(Le,{content:`<div {@attach intersect(() => ({intersecting}) => {
  console.log(intersecting ? 'entered' : 'left');
})}>
  scroll me into view
</div>`}),j(2),n(q);var _e=e(q,2);C(_e,{children:(g,L)=>{var s=We(),l=$(s);D(l,{text:"threshold: 0 (default)"});var a=e(l,4);y(a,{content:`<div {@attach intersect(() => ({
  onintersect: ({intersecting, el}) => {
    el.classList.toggle('intersecting', intersecting);
  }
}))}>
  content
</div>`});var r=e(a,2);A(r,20,()=>p(k),i=>i,(i,_)=>{var t=Ve(),c=d(t);n(t),I(t,()=>N(()=>({onintersect:({intersecting:m,el:o})=>{o.classList.toggle("intersecting",m)}}))),M(()=>P(c,`item ${_??""}`)),v(i,t)}),n(r),v(g,s)},$$slots:{default:!0}});var ue=e(_e,2);C(ue,{children:(g,L)=>{var s=Ge(),l=$(s);D(l,{text:"threshold: 0.5"});var a=e(l,4);y(a,{content:`<div {@attach intersect(() => ({
  onintersect: ({intersecting, el}) => {
    el.classList.toggle('intersecting', intersecting);
  },
  options: {threshold: 0.5}
}))}>
  content
</div>`});var r=e(a,2);A(r,20,()=>p(k),i=>i,(i,_)=>{var t=qe(),c=d(t);n(t),I(t,()=>N(()=>({onintersect:({intersecting:m,el:o})=>{o.classList.toggle("intersecting",m)},options:{threshold:.5}}))),M(()=>P(c,`item ${_??""}`)),v(i,t)}),n(r),v(g,s)},$$slots:{default:!0}});var ge=e(ue,2);C(ge,{children:(g,L)=>{var s=Ke(),l=$(s);D(l,{text:"threshold: 1"});var a=e(l,4);y(a,{content:`<div {@attach intersect(() => ({
  onintersect: ({intersecting, el}) => {
    el.classList.toggle('intersecting', intersecting);
  },
  options: {threshold: 1}
}))}>
  content
</div>`});var r=e(a,2);A(r,20,()=>p(k),i=>i,(i,_)=>{var t=Je(),c=d(t);n(t),I(t,()=>N(()=>({onintersect:({intersecting:m,el:o})=>{o.classList.toggle("intersecting",m)},options:{threshold:1}}))),M(()=>P(c,`item ${_??""}`)),v(i,t)}),n(r),v(g,s)},$$slots:{default:!0}});var me=e(ge,2);C(me,{children:(g,L)=>{var s=Ze(),l=$(s);D(l,{text:"count: 1"});var a=e(l,4);y(a,{content:`<div {@attach intersect(() => ({
  onintersect: ({intersecting, el}) => {
    el.classList.toggle('intersecting', intersecting);
  },
  count: 1
}))}>
  content
</div>`});var r=e(a,2);te(r,()=>p(oe),_=>{var t=Xe();A(t,20,()=>p(k),c=>c,(c,m)=>{var o=Qe(),x=d(o);n(o),I(o,()=>N(()=>({onintersect:({intersecting:w,el:b})=>{b.classList.toggle("intersecting",w)},count:1}))),M(()=>P(x,`item ${m??""}`)),v(c,o)}),n(t),v(_,t)});var i=e(r,2);i.__click=()=>ee(oe),v(g,s)},$$slots:{default:!0}});var he=e(me,2);C(he,{children:(g,L)=>{var s=nt(),l=$(s);D(l,{text:"count: 2"});var a=e(l,4);y(a,{content:`<div {@attach intersect(() => ({
  onintersect: ({intersecting, el}) => {
    el.classList.toggle('intersecting', intersecting);
  },
  count: 2
}))}>
  content
</div>`});var r=e(a,2);te(r,()=>p(se),_=>{var t=tt();A(t,20,()=>p(k),c=>c,(c,m)=>{var o=et(),x=d(o);n(o),I(o,()=>N(()=>({onintersect:({intersecting:w,el:b})=>{b.classList.toggle("intersecting",w)},count:2}))),M(()=>P(x,`item ${m??""}`)),v(c,o)}),n(t),v(_,t)});var i=e(r,2);i.__click=()=>ee(se),v(g,s)},$$slots:{default:!0}});var fe=e(he,2);C(fe,{children:(g,L)=>{var s=at(),l=$(s);D(l,{text:"Configurable"});var a=e(l,4),r=d(a),i=e(d(r),2),_=d(i);S(_),h(_,"min",-1),h(_,"max",3),h(_,"step",1);var t=e(_,2);S(t),h(t,"min",-1),h(t,"max",3),h(t,"step",1),n(i),n(r);var c=e(r,2),m=e(d(c),2),o=d(m);S(o),h(o,"step",.1),h(o,"min",0),h(o,"max",1);var x=e(o,2);S(x),h(x,"step",.1),h(x,"min",0),h(x,"max",1),n(m),n(c);var w=e(c,2),b=e(d(w),2),G=d(b);G.value=G.__value="0px";var J=e(G);J.value=J.__value="50px";var K=e(J);K.value=K.__value="100px";var Q=e(K);Q.value=Q.__value="-25px";var be=e(Q);be.value=be.__value="-50px",n(b),n(w),n(a);var $e=e(a,2);te($e,()=>p(ae),f=>{var X=st();A(X,20,()=>p(k),Z=>Z,(Z,Pe)=>{var B=ot(),Te=d(B);n(B),I(B,()=>N(()=>({onintersect:({intersecting:Ae,el:Ie})=>{Ie.classList.toggle("intersecting",Ae)},count:p(R),options:{threshold:p(E),rootMargin:p(V)}}))),M(()=>P(Te,`item ${Pe??""}`)),v(Z,B)}),n(X),v(f,X)});var Me=e($e,2);Me.__click=()=>ee(ae),H(_,()=>p(R),f=>z(R,f)),H(t,()=>p(R),f=>z(R,f)),H(o,()=>p(E),f=>z(E,f)),H(x,()=>p(E),f=>z(E,f)),He(b,()=>p(V),f=>z(V,f)),v(g,s)},$$slots:{default:!0}});var xe=e(fe,2),we=e(d(xe));ye(we,{module_path:"intersect.svelte.ts"}),j(),n(xe),v(re,le)},$$slots:{default:!0}}),je()}Se(["click"]);export{xt as _,te as k};
