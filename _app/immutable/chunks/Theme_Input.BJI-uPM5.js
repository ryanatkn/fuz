import{a as d,t as v,c as h,s as w}from"./disclose-version.BHqvyKx-.js";import{p as C,a as I,Q as o,t as T,g as _,d as p}from"./runtime.VNSPx__r.js";import{d as Q,s as S}from"./render.BZs1ZF8H.js";import{p as j}from"./proxy.CO2BnZf8.js";import{e as q}from"./each._S1x_LPC.js";import{b as k}from"./attributes.B0eU8BeJ.js";import{t as z}from"./class.CETg5euJ.js";import{p as u}from"./props.BOsT0QGW.js";import{s as x}from"./Dialog.DrTNLJIy.js";import{g as A,c as F,d as G}from"./theme.svelte.CGNSrzbj.js";import{i as H}from"./if.Dmk6Jy1T.js";var J=(i,e,t,s)=>{e(i),t()(o(s))},K=v('<button class="color_scheme svelte-mgi8g0" type="button" role="menuitemradio"><div class="content svelte-mgi8g0"> </div></button>'),L=v('<menu class="color_scheme_control unstyled svelte-mgi8g0"></menu>');function ne(i,e){C(e,!0);const t=u(e,"value",15,()=>j(A())),s=u(e,"onchange",3,c=>{t().color_scheme=c});var l=L();q(l,76,()=>F,(c,n)=>o(c),(c,n,m)=>{var a=K();const b=p(()=>o(n)===t().color_scheme);a.__click=[J,x,s,n];var f=h(a),g=h(f);T(()=>{k(a,"title",_(b)?`${o(n)} color scheme is selected`:`select ${o(n)} color scheme`),k(a,"aria-checked",_(b)),z(a,"selected",_(b)),S(g,o(n))}),d(c,a)}),d(i,l),I()}Q(["click"]);var M=(i,e,t,s,l)=>{var c,n;e(i),((c=t())==null?void 0:c(o(s)))!==!1&&((n=l.onselect)==null||n.call(l,o(s)))},N=(i,e,t,s)=>{var l;e(i),(l=t.onedit)==null||l.call(t,o(s))},O=v('<button type="button" class="icon_button plain">•••</button>'),P=v('<li class="row" role="none"><button type="button" class="theme_button svelte-df411s" role="menuitemradio"> </button> <!></li>'),R=v('<menu class="theme_input unstyled"></menu>');function le(i,e){C(e,!0);const t=u(e,"selected_theme",15,()=>j(A())),s=u(e,"themes",3,G),l=u(e,"enable_editing",3,!1),c=u(e,"select",3,m=>{t().theme=m});var n=R();q(n,77,s,(m,a)=>o(m).name,(m,a,b)=>{var f=P();const g=p(()=>o(a).name===t().theme.name);var r=h(f);r.__click=[M,x,c,a,e];var B=h(r),D=w(w(r,!0));H(D,l,E=>{var y=O();y.__click=[N,x,e,a],d(E,y)}),T(()=>{k(r,"aria-label",`${o(a).name??""} theme`),k(r,"aria-checked",_(g)),z(r,"selected",_(g)),S(B,o(a).name)}),d(m,f)}),d(i,n),I()}Q(["click"]);export{ne as C,le as T};
