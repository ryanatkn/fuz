import{I as _,J as h}from"./scheduler.CgQa5F6Q.js";import{d as k}from"./variables.BVr8Jx1K.js";const y={name:"base",variables:[]},d=[y,{name:"low contrast",variables:[{name:"tint_saturation",light:"8%"},{name:"bg",light:"hsl(var(--tint_hue), var(--tint_saturation), 86%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 18%)"}]},{name:"high contrast",variables:[{name:"bg",light:"#fff",dark:"#000"},{name:"text_1",light:"hsl(var(--tint_hue), var(--tint_saturation), 8%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 90%)"},{name:"text_2",light:"hsl(var(--tint_hue), var(--tint_saturation), 16%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 83%)"},{name:"text_3",light:"hsl(var(--tint_hue), var(--tint_saturation), 24%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 75%)"}]}],S=["light","auto","dark"],I=t=>{t==="dark"||t!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},o="color-scheme",O=(t,e=o)=>{try{t===null?localStorage.removeItem(e):localStorage.setItem(e,t)}catch{}},L=(t="auto",e=o)=>{let a;try{a=localStorage.getItem(e)}catch{return t}return S.includes(a)?a:t},u="theme",M=(t,e=u)=>{try{t===null?localStorage.removeItem(e):localStorage.setItem(e,JSON.stringify(t))}catch{}},b=(t=d[0],e=u)=>{try{const a=localStorage.getItem(e),s=a===null?a:JSON.parse(a);if(s)return s}catch{}return t},x=(t="light",e=o)=>`
	try {
		let c = localStorage.getItem('${e}');
		if (c === 'auto' || (c !== 'dark' && c !== 'light')) {
			c = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}
		if (c === 'dark') document.documentElement.classList.add('dark');
	} catch (_) { ${t==="dark"?"document.documentElement.classList.add('dark');":""} }
`,C=t=>`<style nonce="%sveltekit.nonce%">
	${t}
</style>`,T=(t,e={})=>{const{comments:a=!1,id:s=null,empty_default_theme:v=!0,specificity:E=2}=e,r=t.name===d[0].name?v?null:k:t.variables;if(!(r!=null&&r.length))return"";const c=r.map(n=>m(n)).filter(Boolean),l=r.map(n=>m(n,!0,a)).filter(Boolean),i=(s?"#"+s:":root").repeat(E);return`${c.length?`${i} {
	${c.join(`
	`)}
}`:""}
${l.length?`${i}.dark {
	${l.join(`
	`)}
}`:""}
`.trim()},m=(t,e=!1,a=!0)=>{const s=e?t.dark:t.light;return s?"--"+t.name+": "+s+";"+(a&&t.summary?" /* "+t.summary+" */":""):""},g=Symbol("theme"),H=()=>_(g),K=t=>h(g,t),f=Symbol("color_scheme"),R=()=>_(f),Y=t=>h(f,t);export{y as D,R as a,Y as b,S as c,d,C as e,x as f,H as g,I as h,O as i,b as j,M as k,L as l,T as r,K as s};
