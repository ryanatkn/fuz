import{q as _,p as h}from"./scheduler.3NqSqmLv.js";import{d as k}from"./variables.B2VCmkM1.js";const p={name:"base",items:[]},d=[p,{name:"low contrast",items:[{name:"tint_saturation",light:"8%"},{name:"bg",light:"hsl(var(--tint_hue), var(--tint_saturation), 86%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 18%)"}]},{name:"high contrast",items:[{name:"bg",light:"#fff",dark:"#000"},{name:"text_1",light:"hsl(var(--tint_hue), var(--tint_saturation), 8%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 90%)"},{name:"text_2",light:"hsl(var(--tint_hue), var(--tint_saturation), 16%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 83%)"},{name:"text_3",light:"hsl(var(--tint_hue), var(--tint_saturation), 24%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 75%)"}]}],y=["light","auto","dark"],O=t=>{t==="dark"||t!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},o="color-scheme",I=(t,e=o)=>{try{t===null?localStorage.removeItem(e):localStorage.setItem(e,t)}catch{}},L=(t="auto",e=o)=>{let a;try{a=localStorage.getItem(e)}catch{return t}return y.includes(a)?a:t},u="theme",M=(t,e=u)=>{try{t===null?localStorage.removeItem(e):localStorage.setItem(e,JSON.stringify(t))}catch{}},x=(t=d[0],e=u)=>{try{const a=localStorage.getItem(e),s=a===null?a:JSON.parse(a);if(s)return s}catch{}return t},C=(t="light",e=o)=>`
	try {
		let c = localStorage.getItem('${e}');
		if (c === 'auto' || (c !== 'dark' && c !== 'light')) {
			c = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}
		if (c === 'dark') document.documentElement.classList.add('dark');
	} catch (_) { ${t==="dark"?"document.documentElement.classList.add('dark');":""} }
`,T=t=>`<style nonce="%sveltekit.nonce%">
	${t}
</style>`,H=(t,e={})=>{const{comments:a=!1,id:s=null,empty_default_theme:v=!0,specificity:E=2}=e,r=t.name===d[0].name?v?null:k:t.items;if(!(r!=null&&r.length))return"";const c=r.map(n=>i(n)).filter(Boolean),l=r.map(n=>i(n,!0,a)).filter(Boolean),m=(s?"#"+s:":root").repeat(E);return`${c.length?`${m} {
	${c.join(`
	`)}
}`:""}
${l.length?`${m}.dark {
	${l.join(`
	`)}
}`:""}
`.trim()},i=(t,e=!1,a=!0)=>{const s=e?t.dark:t.light;return s?"--"+t.name+": "+s+";"+(a&&t.summary?" /* "+t.summary+" */":""):""},g=Symbol("theme"),K=()=>_(g),R=t=>h(g,t),f=Symbol("color_scheme"),Y=()=>_(f),j=t=>h(f,t);export{p as D,K as a,j as b,y as c,d,T as e,C as f,Y as g,O as h,I as i,x as j,M as k,L as l,H as r,R as s};
