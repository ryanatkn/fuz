var re=Object.defineProperty;var se=(t,e,a)=>e in t?re(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var p=(t,e,a)=>se(t,typeof e!="symbol"?e+"":e,a);import{c as O,a as R,t as ie}from"./CbbyqTNh.js";import{p as oe,f as P,a as ue,t as X,N as le,k as de,l as ce,g as Z,d as B}from"./C9aPwLmV.js";import{i as ge}from"./DSlEI_lp.js";import{h as pe}from"./D4j1DIbA.js";import{a as Y,s as fe}from"./DGBAUQNC.js";import{e as _e}from"./D3Y0gN4q.js";import{t as H}from"./cfbZBCHI.js";import{p as I}from"./2t0GVDdd.js";class he{constructor(){p(this,"langs",{plaintext:{}});p(this,"plugins",{});p(this,"hooks_before_tokenize",[]);p(this,"hooks_after_tokenize",[]);p(this,"hooks_wrap",[])}add_lang(e,a,r){if(this.langs[e]=a,r!==void 0)for(var n of r)this.langs[n]=a}add_extended_lang(e,a,r,n){var s=this.extend_grammar(e,r);return this.add_lang(a,s,n),s}get_lang(e){var a=this.langs[e];if(a===void 0)throw Error(`The language "${e}" has no grammar.`);return a}stylize(e,a,r=this.get_lang(a)){var n={code:e,grammar:r,lang:a,tokens:void 0};return this.run_hook_before_tokenize(n),n.tokens=W(n.code,n.grammar),this.run_hook_after_tokenize(n),this.stringify_token(M(n.tokens),n.lang)}grammar_insert_before(e,a,r,n=this.langs){var s=n[e],i={};for(var u in s){if(u===a)for(var d in r)i[d]=r[d];Object.hasOwn(r,u)||(i[u]=s[u])}var c=n[e];return n[e]=i,j(this.langs,(_,b,v)=>{v===c&&b!==e&&(_[b]=i)}),i}stringify_token(e,a){if(typeof e=="string")return e;if(Array.isArray(e)){var r="";for(var n of e)r+=this.stringify_token(n,a);return r}var s={type:e.type,content:this.stringify_token(e.content,a),tag:"span",classes:["token",e.type],attributes:{},lang:a},i=e.alias;i&&(Array.isArray(i)?s.classes.push(...i):s.classes.push(i)),this.run_hook_wrap(s);var u="";for(var d in s.attributes)u+=" "+d+'="'+(s.attributes[d]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+u+">"+s.content+"</"+s.tag+">"}extend_grammar(e,a){return{...G(this.get_lang(e)),...a}}add_hook_before_tokenize(e){this.hooks_before_tokenize.push(e)}add_hook_after_tokenize(e){this.hooks_after_tokenize.push(e)}add_hook_wrap(e){this.hooks_wrap.push(e)}run_hook_before_tokenize(e){for(var a of this.hooks_before_tokenize)a(e)}run_hook_after_tokenize(e){for(var a of this.hooks_after_tokenize)a(e)}run_hook_wrap(e){for(var a of this.hooks_wrap)a(e)}}const W=(t,e)=>{var{rest:a}=e;if(a){for(var r in a)e[r]=a[r];e.rest=void 0}var n=new me;return C(n,n.head,t),ee(t,n,e,n.head,0),be(n)},j=(t,e,a=new Set)=>{for(var r in t){e(t,r,t[r]);var n=t[r];n&&typeof n=="object"&&!(n instanceof RegExp)&&!a.has(T(n))&&(a.add(T(n)),j(n,e,a))}};class y{constructor(e,a,r,n=""){p(this,"type");p(this,"content");p(this,"alias");p(this,"length");this.type=e,this.content=a,this.alias=r,this.length=n.length}}const J=(t,e,a,r)=>{t.lastIndex=e;var n=t.exec(a);if(n&&r&&n[1]){var s=n[1].length;n.index+=s,n[0]=n[0].substring(s)}return n},ee=(t,e,a,r,n,s)=>{for(var i in a){var u=a[i];if(u){u=Array.isArray(u)?u:[u];for(var d=0;d<u.length;++d){if(s&&s.cause===i+","+d)return;var c=u[d],_=c.inside,b=!!c.lookbehind,v=!!c.greedy,k=c.alias;if(v&&!c.pattern.global){var A=c.pattern.toString().match(/[imsuy]*$/)[0];c.pattern=RegExp(c.pattern.source,A+"g")}for(var S=c.pattern||c,o=r.next,f=n;o!==e.tail&&!(s&&f>=s.reach);f+=o.value.length,o=o.next){var g=o.value;if(e.length>t.length)return;if(!(g instanceof y)){var h=1,l;if(v){if(l=J(S,f,t,b),!l||l.index>=t.length)break;var z=l.index,ae=l.index+l[0].length,m=f;for(m+=o.value.length;z>=m;)o=o.next,m+=o.value.length;if(m-=o.value.length,f=m,o.value instanceof y)continue;for(var x=o;x!==e.tail&&(m<ae||typeof x.value=="string");x=x.next)h++,m+=x.value.length;h--,g=t.substring(f,m),l.index-=f}else if(l=J(S,0,g,b),!l)continue;var z=l.index,$=l[0],D=g.substring(0,z),V=g.substring(z+$.length),q=f+g.length;s&&q>s.reach&&(s.reach=q);var E=o.prev;D&&(E=C(e,E,D),f+=D.length),Fe(e,E,h);var ne=new y(i,_?W($,_):$,k,$);if(o=C(e,E,ne),V&&C(e,o,V),h>1){var N={cause:i+","+d,reach:q};ee(t,e,a,o.prev,f,N),s&&N.reach>s.reach&&(s.reach=N.reach)}}}}}}};class me{constructor(){p(this,"head");p(this,"tail");p(this,"length",0);this.head={value:null,prev:null,next:null},this.tail={value:null,prev:this.head,next:null},this.head.next=this.tail}}const C=(t,e,a)=>{var r=e.next,n={value:a,prev:e,next:r};return e.next=n,r.prev=n,t.length++,n},Fe=(t,e,a)=>{for(var r=e.next,n=0;n<a&&r!==t.tail;n++)r=r.next;e.next=r,r.prev=e,t.length-=n},be=t=>{for(var e=[],a=t.head.next;a!==t.tail;)e.push(a.value),a=a.next;return e};var ve=0;const M=t=>t instanceof y?new y(t.type,M(t.content),t.alias):Array.isArray(t)?t.map(M):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," "),L=Symbol("id"),T=t=>t[L]??(t[L]=++ve),G=(t,e=new Map)=>{var a,r,n;if(Array.isArray(t)){if(r=T(t),n=e.get(r),n)return n;a=[],e.set(r,a);for(var s=0;s<t.length;s++)a[s]=G(t[s],e);return a}else if(t&&typeof t=="object"&&!(t instanceof RegExp)){if(r=T(t),n=e.get(r),n)return n;a={},e.set(r,a);for(var i in t)a[i]=G(t[i],e);return a}else return t},ke=t=>{const e={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE.*>/i},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>/=$<%]+(?:\s(?:\s*[^\s>/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>/:]+:/}},special_attr:[],attr_value:{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr_equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],entity:void 0}},punctuation:/\/?>/,attr_name:{pattern:/[^\s>/]+/,inside:{namespace:/^[^\s>/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named_entity"},/&#x?[\da-f]{1,8};/i]};e.tag.inside.attr_value.inside.entity=e.entity,t.add_lang("markup",e,["html","mathml","svg"]),t.add_extended_lang("markup","xml",{},["ssml","atom","rss"])},U=(t,e,a,r="markup")=>{const n="lang_"+a;t.grammar_insert_before(r,"cdata",{[e]:{pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,()=>e),"i"),lookbehind:!0,greedy:!0,inside:{included_cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:{cdata:/^<!\[CDATA\[|\]\]>$/i,[n]:{pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.get_lang(a)}}},[n]:{pattern:/[\s\S]+/,inside:t.get_lang(a)}}}})},te=(t,e,a)=>{t.get_lang("markup").tag.inside.special_attr.push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{attr_name:/^[^\s=]+/,attr_value:{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[a,"lang_"+a],inside:t.get_lang(a)},punctuation:[{pattern:/^=/,alias:"attr_equals"},/"|'/]}}}})};var w=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;const xe=t=>{const e={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+w.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,selector_function_argument:{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+w.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+w.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+w.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:w,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/};e.atrule.inside.rest=e,t.add_lang("css",e),U(t,"style","css"),te(t,"style","css")},we=t=>{const e={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},class_name:{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};t.add_lang("clike",e)},ye=t=>{const e=t.get_lang("clike"),a=t.add_extended_lang("clike","js",{class_name:[e.class_name,{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});a.class_name[0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.grammar_insert_before("js","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{regex_source:{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"lang_regex",inside:t.langs.regex},regex_delimiter:/^\/|\/$/,regex_flags:/^[a-z]+$/}},function_variable:{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.grammar_insert_before("js","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},template_string:{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{template_punctuation:{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{interpolation_punctuation:{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a}},string:/[\s\S]+/}},string_property:{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.grammar_insert_before("js","operator",{literal_property:{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),U(t,"script","js"),te(t,/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"js")},Ae=t=>{const e=t.add_extended_lang("js","ts",{class_name:{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/});e.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[{*]|$))/),delete e.parameter,delete e.literal_property;var a=t.extend_grammar("ts",{});a.class_name=void 0,e.class_name.inside=a,t.grammar_insert_before("ts","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},generic_function:{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class_name",inside:a}}}})},K="(if|else if|await|then|catch|each|html|debug)",Se=t=>{const e=t.get_lang("ts"),a=t.add_extended_lang("markup","svelte",{each:{pattern:/{[#/]each(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*}/,inside:{lang_ts:[{pattern:/(as[\s\S]*)\([\s\S]*\)(?=\s*\})/,lookbehind:!0,inside:e},{pattern:/(as[\s]*)[\s\S]*(?=\s*)/,lookbehind:!0,inside:e},{pattern:/(#each[\s]*)[\s\S]*(?=as)/,lookbehind:!0,inside:e}],keyword:/[#/]each|as/,punctuation:/{|}/}},block:{pattern:new RegExp("{[#:/@]/s"+K+"(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{punctuation:/^{|}$/,keyword:[new RegExp("[#:/@]"+K+"( )*"),/as/,/then/],lang_ts:{pattern:/[\s\S]*/,inside:e}}},tag:{pattern:/<\/?(?!\d)[^\s>/=$<%]+(?:\s(?:\s*[^\s>/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?:"[^"]*"|'[^']*'|{[\s\S]+?}(?=[\s/>])))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>/:]+:/}},lang_ts:{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,inside:e},attr_value:{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],lang_ts:{pattern:/{[\s\S]+}/,inside:e}}},punctuation:/\/?>/,attr_name:{pattern:/[^\s>/]+/,inside:{namespace:/^[^\s>/:]+:/}}}},lang_ts:{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,lookbehind:!0,inside:e}});a.tag.inside.attr_value.inside.entity=a.entity,Q(t,"style","css"),Q(t,"script","ts")},Q=(t,e,a)=>{U(t,e,a,"svelte")},ze=t=>{const e={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};t.add_lang("json",e)},F=new he;ke(F);xe(F);we(F);ye(F);Ae(F);Se(F);ze(F);var $e=ie("<code><!></code>");function Pe(t,e){oe(e,!0);const a=I(e,"lang",3,"svelte"),r=I(e,"inline",3,!1),n=I(e,"syntax_styler",3,F),s=B(()=>a()===null||!e.content?null:n().stylize(e.content,a(),e.grammar)),i=B(()=>Z(s)??e.content),u=B(()=>r()?"span":"pre");var d=O(),c=P(d);_e(c,()=>Z(u),!1,(_,b)=>{let v;X(()=>{v=Y(_,v,{...e.pre_attrs,class:"code"},"svelte-yb12s5",_.namespaceURI===le,_.nodeName.includes("-")),H(_,"inline",r()),H(_,"pre",r())});var k=$e();let A;var S=de(k);{var o=g=>{var h=O(),l=P(h);fe(l,()=>e.children,()=>Z(i)),R(g,h)},f=g=>{var h=O(),l=P(h);pe(l,()=>Z(i),!1,!1),R(g,h)};ge(S,g=>{e.children?g(o):g(f,!1)})}ce(k),X(()=>A=Y(k,A,{...e.code_attrs},"svelte-yb12s5")),R(b,k)}),R(t,d),ue()}export{Pe as C};
