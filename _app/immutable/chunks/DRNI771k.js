import{k as w,t as b,a as v}from"./CbbyqTNh.js";import{p as C,l as d,a as I,k as g,t as T,g as o,d as S,s as F}from"./C9aPwLmV.js";import{s as j}from"./Bb4_Y-AM.js";import{e as q}from"./DT_pRE8c.js";import{b as h}from"./DGBAUQNC.js";import{t as z}from"./cfbZBCHI.js";import{p as _}from"./2t0GVDdd.js";import{s as x}from"./BPiabKK3.js";import{t as A,c as G,d as H}from"./D-lH3WCG.js";import{i as J}from"./DSlEI_lp.js";var K=(n,e,a)=>{x(n),e()(a)},L=b('<button type="button" class="color_scheme color_a svelte-mgi8g0" role="menuitemradio"><div class="content svelte-mgi8g0"> </div></button>'),M=b('<menu class="color_scheme_control unstyled svelte-mgi8g0"></menu>');function ae(n,e){C(e,!0);const a=_(e,"value",23,()=>A.get()),l=_(e,"onchange",3,c=>{a().color_scheme=c});var r=M();q(r,20,()=>G,c=>c,(c,s)=>{var t=L();const i=S(()=>s===a().color_scheme);t.__click=[K,l,s];var u=g(t),f=g(u,!0);d(u),d(t),T(()=>{h(t,"title",o(i)?`${s} color scheme is selected`:`select ${s} color scheme`),h(t,"aria-checked",o(i)),z(t,"selected",o(i)),j(f,s)}),v(c,t)}),d(r),v(n,r),I()}w(["click"]);var N=(n,e,a,l)=>{var r,c;x(n),((r=e())==null?void 0:r(o(a)))!==!1&&((c=l.onselect)==null||c.call(l,o(a)))},O=(n,e,a)=>{var l;x(n),(l=e.onedit)==null||l.call(e,o(a))},P=b('<button type="button" class="icon_button plain">•••</button>'),Q=b('<li class="row" role="none"><button type="button" class="theme_button color_a svelte-df411s" role="menuitemradio"> </button> <!></li>'),R=b('<menu class="theme_input unstyled"></menu>');function oe(n,e){C(e,!0);const a=_(e,"selected_theme",23,()=>A.get()),l=_(e,"themes",3,H),r=_(e,"enable_editing",3,!1),c=_(e,"select",3,t=>{a().theme=t});var s=R();q(s,21,l,t=>t.name,(t,i)=>{var u=Q();const f=S(()=>o(i).name===a().theme.name);var m=g(u);m.__click=[N,c,i,e];var B=g(m,!0);d(m);var D=F(m,2);{var E=k=>{var y=P();y.__click=[O,e,i],v(k,y)};J(D,k=>{r()&&k(E)})}d(u),T(()=>{h(m,"aria-label",`${o(i).name??""} theme`),h(m,"aria-checked",o(f)),z(m,"selected",o(f)),j(B,o(i).name)}),v(t,u)}),d(s),v(n,s),I()}w(["click"]);export{ae as C,oe as T};
