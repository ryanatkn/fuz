import{n as f,o,h as t}from"./runtime.CyUAaF6i.js";import{l as _}from"./shared.DY_qQw99.js";function d(e,a,l=a){var v=f();_(e,"input",()=>{var r=n(e)?u(e.value):e.value;l(r),v&&r!==(r=a())&&(e.value=r??"")}),o(()=>{var r=a();if(t&&e.defaultValue!==e.value){l(e.value);return}n(e)&&r===u(e.value)||e.type==="date"&&!r&&!e.value||(e.value=r??"")})}function n(e){var a=e.type;return a==="number"||a==="range"}function u(e){return e===""?null:+e}export{d as b};
