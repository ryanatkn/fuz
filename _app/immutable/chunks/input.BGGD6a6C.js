import{n as u,h as v}from"./runtime.bViC5kxD.js";import{l as f}from"./shared.DHq1EVvn.js";function m(e,r,l){f(e,"input",()=>{l(n(e)?t(e.value):e.value)}),u(()=>{var a=r();if(v&&e.defaultValue!==e.value){l(e.value);return}n(e)&&a===t(e.value)||e.type==="date"&&!a&&!e.value||(e.value=a??"")})}function n(e){var r=e.type;return r==="number"||r==="range"}function t(e){return e===""?null:+e}export{m as b};