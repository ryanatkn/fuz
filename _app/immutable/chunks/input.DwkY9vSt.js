import{r as f}from"./runtime.Dht6Pzrj.js";import{l as o}from"./shared.BBr0r38U.js";import{h as u}from"./disclose-version.CSpVFLMe.js";function s(e,r,l){o(e,"input",()=>{l(t(e)?n(e.value):e.value)}),f(()=>{var a=r();if(u&&e.defaultValue!==e.value){l(e.value);return}t(e)&&a===n(e.value)||e.type==="date"&&!a&&!e.value||(e.value=a??"")})}function t(e){var r=e.type;return r==="number"||r==="range"}function n(e){return e===""?null:+e}export{s as b};