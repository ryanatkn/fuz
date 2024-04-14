import{a as e,t,s as d,f as l}from"./disclose-version.COjBdUkA.js";import{a as b,p as u,g as _,d as h}from"./runtime.BITJpo-a.js";import{C as f}from"./Code.CAGfF-1b.js";import{B as v}from"./Breadcrumb.CB9DHL14.js";var B=t(".",1),g=t('<span class="size_xl">🔡</span>'),x=t("<!> <!>",1);function j(n,a){b(a,!0);var s=x(),p=l(s),c=h(()=>`<Breadcrumb
	path="/a/b/c/d"
	selected_path="${a.selected_path}"
	base_path="/library/Breadcrumb"	
>
	<span class="size_xl">🔡</span>
	{#snippet separator()}.{/snippet}
</Breadcrumb>`);f(p,{get content(){return _(c)}});var m=d(d(p,!0));v(m,{path:"/a/b/c/d",get selected_path(){return a.selected_path},base_path:"/library/Breadcrumb",separator:r=>{var o=B();e(r,o)},children:(r,o)=>{var i=g();e(r,i)}}),e(n,s),u()}export{j as B};
