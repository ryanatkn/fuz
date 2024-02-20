import{H as _,I as h}from"./scheduler.W3nk5cbG.js";import{d as k}from"./variables.DNAUXvb4.js";const y={name:"base",items:[]},d=[y,{name:"low contrast",items:[{name:"tint_saturation",light:"8%"},{name:"bg",light:"hsl(var(--tint_hue), var(--tint_saturation), 86%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 18%)"}]},{name:"high contrast",items:[{name:"bg",light:"#fff",dark:"#000"},{name:"text_1",light:"hsl(var(--tint_hue), var(--tint_saturation), 8%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 90%)"},{name:"text_2",light:"hsl(var(--tint_hue), var(--tint_saturation), 16%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 83%)"},{name:"text_3",light:"hsl(var(--tint_hue), var(--tint_saturation), 24%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 75%)"}]}],S=["light","auto","dark"],$="#257e25",I=t=>{t==="dark"||t!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},o="color-scheme",L=(t,e=o)=>{try{t===null?localStorage.removeItem(e):localStorage.setItem(e,t)}catch{}},M=(t="auto",e=o)=>{let a;try{a=localStorage.getItem(e)}catch{return t}return S.includes(a)?a:t},u="theme",T=(t,e=u)=>{try{t===null?localStorage.removeItem(e):localStorage.setItem(e,JSON.stringify(t))}catch{}},C=(t=d[0],e=u)=>{try{const a=localStorage.getItem(e),s=a===null?a:JSON.parse(a);if(s)return s}catch{}return t},H=(t="light",e=o)=>`
	try {
		let c = localStorage.getItem('${e}');
		if (c === 'auto' || (c !== 'dark' && c !== 'light')) {
			c = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}
		if (c === 'dark') document.documentElement.classList.add('dark');
	} catch (_) { ${t==="dark"?"document.documentElement.classList.add('dark');":""} }
`,x=t=>`<style nonce="%sveltekit.nonce%">
	${t}
</style>`,R=(t,e={})=>{const{comments:a=!1,id:s=null,empty_default_theme:E=!0,specificity:v=2}=e,r=t.name===d[0].name?E?null:k:t.items;if(!(r!=null&&r.length))return"";const c=r.map(n=>i(n)).filter(Boolean),l=r.map(n=>i(n,!0,a)).filter(Boolean),m=(s?"#"+s:":root").repeat(v);return`${c.length?`${m} {
	${c.join(`
	`)}
}`:""}
${l.length?`${m}.dark {
	${l.join(`
	`)}
}`:""}
`.trim()},i=(t,e=!1,a=!0)=>{const s=e?t.dark:t.light;return s?"--"+t.name+": "+s+";"+(a&&t.summary?" /* "+t.summary+" */":""):""},g=Symbol("theme"),K=()=>_(g),Y=t=>h(g,t),f=Symbol("color_scheme"),j=()=>_(f),A=t=>h(f,t);export{y as D,$ as T,K as a,A as b,S as c,d,x as e,H as f,j as g,I as h,L as i,C as j,T as k,M as l,R as r,Y as s};
