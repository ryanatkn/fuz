import{a as f,t as w,b as c,r as v,s as b,f as h,c as m}from"./disclose-version.D581KuaV.js";import{r as y,h as x,p as j,t as q,a as z}from"./runtime.CkCVmNqE.js";import{i as g}from"./if.Chl1nh2x.js";import{s as l,b as p}from"./attributes.CMkiqDYj.js";import{t as A,s as B}from"./index.DZBlEnLB.js";import{p as C}from"./props.BxjGZrun.js";function P(s,a,t,r){a.addEventListener("input",()=>{r(a[s])}),y(()=>{var e=t();if(a[s]!==e)if(e==null){var i=a[s];r(i)}else a[s]=e+""})}function F(s,a,t,r,e){var i=()=>{r(t[s])};t.addEventListener(a,i),e?y(()=>{t[s]=e()}):i(),(t===document.body||t===window||t===document)&&x(()=>{t.removeEventListener(a,i)})}var G=w("<div><!></div>"),H=w("<details><summary><!></summary> <!></details>");function Q(s,a){j(a,!0);let t=C(a,"open",7);var r=H();let e;var i=m(r);let _;var E=m(i);l(E,()=>a.summary),v(i);var L=b(b(i,!0));g(L,()=>a.eager,n=>{var o=c(),u=h(o);l(u,()=>a.children),f(n,o)},n=>{var o=c(),u=h(o);g(u,t,D=>{var d=G();A(3,d,()=>B);var k=m(d);l(k,()=>a.children),v(d),f(D,d)},null,!0),f(n,o)}),v(r),q(()=>{e=p(r,e,{...a.attrs},!0,""),_=p(i,_,{...a.summary_attrs},!0,"")}),F("open","toggle",r,n=>t(n),t),f(s,r),z()}export{Q as D,P as b};
