import{h as t,u as s,r as _}from"./C9aPwLmV.js";import{l as c}from"./CbbyqTNh.js";function b(e,a,o=a){c(e,"input",r=>{var l=r?e.defaultValue:e.value;if(l=v(e)?f(l):l,o(l),l!==(l=a())){var u=e.selectionStart,n=e.selectionEnd;e.value=l??"",n!==null&&(e.selectionStart=u,e.selectionEnd=Math.min(n,e.value.length))}}),(t&&e.defaultValue!==e.value||s(a)==null&&e.value)&&o(v(e)?f(e.value):e.value),_(()=>{var r=a();v(e)&&r===f(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function v(e){var a=e.type;return a==="number"||a==="range"}function f(e){return e===""?null:+e}export{b};
