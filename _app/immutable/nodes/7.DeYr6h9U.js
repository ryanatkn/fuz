import{a as o,t as p,c as i}from"../chunks/disclose-version.C6CaZEXV.js";import{p as b,a as k,f as _,s as z,c as d,r as f}from"../chunks/runtime.BlvMpPMl.js";import{i as u}from"../chunks/if.CeQEPai8.js";import{e as A}from"../chunks/context_helpers.DDG-D7cC.js";import{s as h}from"../chunks/attributes.B1MIqu8U.js";import{c as C}from"../chunks/svelte-component.DFcG984l.js";import{P as L}from"../chunks/Package_Summary.C8sPqsK4.js";import{t as S}from"../chunks/tome.CXLJaD6y.js";import{p as j}from"../chunks/pkg.C2_9jRER.js";var q=p('<div class="box mb_xl5"><!></div>'),B=p('<div class="width_md"><!> <div><!></div></div>');function D(v,e){b(e,!0);var m=B(),n=d(m);u(n,()=>e.header,r=>{var a=i(),t=_(a);h(t,()=>e.header),o(r,a)},r=>{var a=q(),t=d(a);L(t,{get pkg(){return e.pkg},get repo_name(){return e.repo_name}}),f(a),o(r,a)});var s=z(n,2),g=d(s);u(g,()=>e.content,r=>{var a=i(),t=_(a);h(t,()=>e.content),o(r,a)},r=>{var a=i(),t=_(a);A(t,16,()=>e.tomes,c=>c,(c,x)=>{var l=i(),y=_(l);C(y,()=>x.component,(P,w)=>{w(P,{})}),o(c,l)}),o(r,a)}),f(s),f(m),o(v,m),k()}var E=p('<h1 class="mb_sm">fuz</h1>');function Q(v,e){b(e,!0);const m=S.get(),n=Array.from(m.values()),s=j.get();D(v,{tomes:n,pkg:s,repo_name:r=>{var a=E();o(r,a)},$$slots:{repo_name:!0}}),k()}export{Q as component};