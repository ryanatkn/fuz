import{b as T,a as h,f as L,s as k,t as D,O as B}from"../chunks/disclose-version.BHqvyKx-.js";import{O,p as z,a as j,g as r,d as y,t as W,Q as x}from"../chunks/runtime.VNSPx__r.js";import{f as I}from"../chunks/render.BZs1ZF8H.js";import{s as R}from"../chunks/attributes.B0eU8BeJ.js";import{a as M,s as A}from"../chunks/string.ZJuK4sHN.js";import{i as H}from"../chunks/if.Dmk6Jy1T.js";import{h as w}from"../chunks/html._C517k8v.js";import{p as _}from"../chunks/props.BOsT0QGW.js";import{s as Z,a as U,l as Y,b as K,e as Q,f as J,T as q,D as V,r as X,h as $,i as ee}from"../chunks/theme.svelte.CGNSrzbj.js";import{s as te}from"../chunks/pkg.CGMd8mYi.js";import{e as se}from"../chunks/each._S1x_LPC.js";import{s as le}from"../chunks/style.iv2mhl8q.js";import{S as ne}from"../chunks/Spider.DZ1cmDRj.js";const ae=!0,Ee=Object.freeze(Object.defineProperty({__proto__:null,prerender:ae},Symbol.toStringTag,{value:"Module"})),ie=(t,e,s)=>{const{name:a}=e,i=(g=>g?A(M(A(g,".git"),"git+"),"/"):null)(e.repository?typeof e.repository=="string"?e.repository:e.repository.url:null),o=e.homepage??null,n=!e.private&&!!e.exports&&e.version!=="0.0.1",d=n?"https://www.npmjs.com/package/"+e.name:null,v=n&&i?i+"/blob/main/CHANGELOG.md":null,u=oe(a),c=i?M(i,"https://github.com/").split("/")[0]:null;return{url:t,package_json:e,src_json:s,name:a,repo_name:u,repo_url:i,owner_name:c,homepage_url:o,npm_url:d,changelog_url:v,published:n}},oe=t=>t[0]==="@"?t.split("/")[1]:t,S=(t,e=1)=>{let s=!0,a=0;O(()=>{t(s),s&&++a>=e&&(s=!1)})};var de=D("<!> <!>",1);function re(t,e){z(e,!0);const s=_(e,"sync_color_scheme",3,U),a=_(e,"load_color_scheme",3,Y),l=_(e,"save_color_scheme",3,K),i=_(e,"load_theme",3,Q),o=_(e,"save_theme",3,J),n=_(e,"themer",11,()=>new q(i()(e.theme_fallback),a()(e.color_scheme_fallback)));Z(n());const d=y(()=>n().theme.name),v=y(()=>r(d)===V.name?null:X(n().theme)),u=y(()=>r(v)?$(r(v)):null),c=y(()=>ee(e.color_scheme_fallback));S(p=>{const m=n().color_scheme;p||s()(m)}),S(p=>{const m=n().color_scheme;p||l()(m)}),S(p=>{const m=n().theme;p||o()(m)});var g=T();I(p=>{var m=de(),E=L(m);H(E,()=>r(u),b=>{var f=T(),C=L(f);w(C,()=>r(u),!1,!1),h(b,f)});var G=k(k(E,!0));H(G,()=>r(c),b=>{var f=T(),C=L(f);w(C,()=>r(c),!1,!1),h(b,f)}),h(p,m)});var N=L(g);R(N,()=>e.children,n,()=>r(v),()=>r(u),()=>r(c)),h(t,g),j()}const F={name:"@ryanatkn/fuz",version:"0.108.0",description:"Svelte UI library",motto:"friendly user zystem",glyph:"🧶",logo:"logo.svg",logo_alt:"a friendly brown spider facing you",public:!0,license:"MIT",homepage:"https://www.fuz.dev/",author:{name:"Ryan Atkinson",email:"mail@ryanatkn.com",url:"https://www.ryanatkn.com/"},repository:{type:"git",url:"git+https://github.com/ryanatkn/fuz.git"},bugs:"https://github.com/ryanatkn/fuz/issues",funding:"https://www.ryanatkn.com/funding",scripts:{start:"gro dev",dev:"gro dev",build:"gro build",check:"gro check",test:"gro test",preview:"vite preview",deploy:"gro deploy"},type:"module",engines:{node:">=20.12"},peerDependencies:{"@ryanatkn/belt":"*","@ryanatkn/moss":"*","@sveltejs/kit":"^2",svelte:"^5.0.0-next.0"},devDependencies:{"@changesets/changelog-git":"^0.2.0","@ryanatkn/belt":"^0.24.1","@ryanatkn/eslint-config":"^0.4.0","@ryanatkn/fuz_code":"^0.15.0","@ryanatkn/gro":"^0.129.0","@ryanatkn/moss":"^0.7.0","@sveltejs/adapter-static":"^3.0.2","@sveltejs/kit":"^2.5.18","@sveltejs/package":"^2.3.2","@sveltejs/vite-plugin-svelte":"^3.1.1","@types/node":"^20.14.8","@types/prismjs":"^1.26.4",eslint:"^9.6.0","eslint-plugin-svelte":"^2.41.0","esm-env":"^1.0.0",prettier:"^3.3.2","prettier-plugin-svelte":"^3.2.5","prism-svelte":"^0.5.0",prismjs:"^1.29.0",svelte:"^5.0.0-next.175","svelte-check":"^3.8.2",tslib:"^2.6.3",typescript:"^5.5.2","typescript-eslint":"^8.0.0-alpha.39",uvu:"^0.5.6"},prettier:{plugins:["prettier-plugin-svelte"],useTabs:!0,printWidth:100,singleQuote:!0,bracketSpacing:!1,overrides:[{files:"package.json",options:{useTabs:!1}}]},sideEffects:["**/*.css"],files:["dist"],exports:{"./package.json":"./package.json","./Alert.svelte":{types:"./dist/Alert.svelte.d.ts",svelte:"./dist/Alert.svelte",default:"./dist/Alert.svelte"},"./alert.js":{types:"./dist/alert.d.ts",default:"./dist/alert.js"},"./Breadcrumb.svelte":{types:"./dist/Breadcrumb.svelte.d.ts",svelte:"./dist/Breadcrumb.svelte",default:"./dist/Breadcrumb.svelte"},"./Card.svelte":{types:"./dist/Card.svelte.d.ts",svelte:"./dist/Card.svelte",default:"./dist/Card.svelte"},"./Color_Scheme_Input.svelte":{types:"./dist/Color_Scheme_Input.svelte.d.ts",svelte:"./dist/Color_Scheme_Input.svelte",default:"./dist/Color_Scheme_Input.svelte"},"./Community_Links_Panel.svelte":{types:"./dist/Community_Links_Panel.svelte.d.ts",svelte:"./dist/Community_Links_Panel.svelte",default:"./dist/Community_Links_Panel.svelte"},"./Community_Links.svelte":{types:"./dist/Community_Links.svelte.d.ts",svelte:"./dist/Community_Links.svelte",default:"./dist/Community_Links.svelte"},"./config.js":{types:"./dist/config.d.ts",default:"./dist/config.js"},"./Contextmenu_Entry.svelte":{types:"./dist/Contextmenu_Entry.svelte.d.ts",svelte:"./dist/Contextmenu_Entry.svelte",default:"./dist/Contextmenu_Entry.svelte"},"./contextmenu_helpers.svelte.js":{types:"./dist/contextmenu_helpers.svelte.d.ts",default:"./dist/contextmenu_helpers.svelte.js"},"./Contextmenu_Link_Entry.svelte":{types:"./dist/Contextmenu_Link_Entry.svelte.d.ts",svelte:"./dist/Contextmenu_Link_Entry.svelte",default:"./dist/Contextmenu_Link_Entry.svelte"},"./Contextmenu_Root.svelte":{types:"./dist/Contextmenu_Root.svelte.d.ts",svelte:"./dist/Contextmenu_Root.svelte",default:"./dist/Contextmenu_Root.svelte"},"./Contextmenu_Submenu.svelte":{types:"./dist/Contextmenu_Submenu.svelte.d.ts",svelte:"./dist/Contextmenu_Submenu.svelte",default:"./dist/Contextmenu_Submenu.svelte"},"./Contextmenu_Text_Entry.svelte":{types:"./dist/Contextmenu_Text_Entry.svelte.d.ts",svelte:"./dist/Contextmenu_Text_Entry.svelte",default:"./dist/Contextmenu_Text_Entry.svelte"},"./Contextmenu.svelte":{types:"./dist/Contextmenu.svelte.d.ts",svelte:"./dist/Contextmenu.svelte",default:"./dist/Contextmenu.svelte"},"./Copy_To_Clipboard.svelte":{types:"./dist/Copy_To_Clipboard.svelte.d.ts",svelte:"./dist/Copy_To_Clipboard.svelte",default:"./dist/Copy_To_Clipboard.svelte"},"./Details.svelte":{types:"./dist/Details.svelte.d.ts",svelte:"./dist/Details.svelte",default:"./dist/Details.svelte"},"./Dialog.svelte":{types:"./dist/Dialog.svelte.d.ts",svelte:"./dist/Dialog.svelte",default:"./dist/Dialog.svelte"},"./dialog.js":{types:"./dist/dialog.d.ts",default:"./dist/dialog.js"},"./Dialogs.svelte":{types:"./dist/Dialogs.svelte.d.ts",svelte:"./dist/Dialogs.svelte",default:"./dist/Dialogs.svelte"},"./dimensions.svelte.js":{types:"./dist/dimensions.svelte.d.ts",default:"./dist/dimensions.svelte.js"},"./Fuz_Logo.svelte":{types:"./dist/Fuz_Logo.svelte.d.ts",svelte:"./dist/Fuz_Logo.svelte",default:"./dist/Fuz_Logo.svelte"},"./Fuzling.svelte":{types:"./dist/Fuzling.svelte.d.ts",svelte:"./dist/Fuzling.svelte",default:"./dist/Fuzling.svelte"},"./Github_Logo.svelte":{types:"./dist/Github_Logo.svelte.d.ts",svelte:"./dist/Github_Logo.svelte",default:"./dist/Github_Logo.svelte"},"./Gro_Logo.svelte":{types:"./dist/Gro_Logo.svelte.d.ts",svelte:"./dist/Gro_Logo.svelte",default:"./dist/Gro_Logo.svelte"},"./Hashlink.svelte":{types:"./dist/Hashlink.svelte.d.ts",svelte:"./dist/Hashlink.svelte",default:"./dist/Hashlink.svelte"},"./Hidden_Personal_Links.svelte":{types:"./dist/Hidden_Personal_Links.svelte.d.ts",svelte:"./dist/Hidden_Personal_Links.svelte",default:"./dist/Hidden_Personal_Links.svelte"},"./Hue_Input.svelte":{types:"./dist/Hue_Input.svelte.d.ts",svelte:"./dist/Hue_Input.svelte",default:"./dist/Hue_Input.svelte"},"./Library_Content.svelte":{types:"./dist/Library_Content.svelte.d.ts",svelte:"./dist/Library_Content.svelte",default:"./dist/Library_Content.svelte"},"./Library_Footer.svelte":{types:"./dist/Library_Footer.svelte.d.ts",svelte:"./dist/Library_Footer.svelte",default:"./dist/Library_Footer.svelte"},"./library_helpers.svelte.js":{types:"./dist/library_helpers.svelte.d.ts",default:"./dist/library_helpers.svelte.js"},"./Library_Menu.svelte":{types:"./dist/Library_Menu.svelte.d.ts",svelte:"./dist/Library_Menu.svelte",default:"./dist/Library_Menu.svelte"},"./Library_Page_Links.svelte":{types:"./dist/Library_Page_Links.svelte.d.ts",svelte:"./dist/Library_Page_Links.svelte",default:"./dist/Library_Page_Links.svelte"},"./Library_Primary_Nav.svelte":{types:"./dist/Library_Primary_Nav.svelte.d.ts",svelte:"./dist/Library_Primary_Nav.svelte",default:"./dist/Library_Primary_Nav.svelte"},"./Library_Secondary_Nav.svelte":{types:"./dist/Library_Secondary_Nav.svelte.d.ts",svelte:"./dist/Library_Secondary_Nav.svelte",default:"./dist/Library_Secondary_Nav.svelte"},"./Library_Tertiary_Nav.svelte":{types:"./dist/Library_Tertiary_Nav.svelte.d.ts",svelte:"./dist/Library_Tertiary_Nav.svelte",default:"./dist/Library_Tertiary_Nav.svelte"},"./Library.svelte":{types:"./dist/Library.svelte.d.ts",svelte:"./dist/Library.svelte",default:"./dist/Library.svelte"},"./Mdn_Link.svelte":{types:"./dist/Mdn_Link.svelte.d.ts",svelte:"./dist/Mdn_Link.svelte",default:"./dist/Mdn_Link.svelte"},"./Mdn_Logo.svelte":{types:"./dist/Mdn_Logo.svelte.d.ts",svelte:"./dist/Mdn_Logo.svelte",default:"./dist/Mdn_Logo.svelte"},"./Moss_Logo.svelte":{types:"./dist/Moss_Logo.svelte.d.ts",svelte:"./dist/Moss_Logo.svelte",default:"./dist/Moss_Logo.svelte"},"./Package_Detail.svelte":{types:"./dist/Package_Detail.svelte.d.ts",svelte:"./dist/Package_Detail.svelte",default:"./dist/Package_Detail.svelte"},"./Package_Summary.svelte":{types:"./dist/Package_Summary.svelte.d.ts",svelte:"./dist/Package_Summary.svelte",default:"./dist/Package_Summary.svelte"},"./Pending_Animation.svelte":{types:"./dist/Pending_Animation.svelte.d.ts",svelte:"./dist/Pending_Animation.svelte",default:"./dist/Pending_Animation.svelte"},"./Pending_Button.svelte":{types:"./dist/Pending_Button.svelte.d.ts",svelte:"./dist/Pending_Button.svelte",default:"./dist/Pending_Button.svelte"},"./Redirect.svelte":{types:"./dist/Redirect.svelte.d.ts",svelte:"./dist/Redirect.svelte",default:"./dist/Redirect.svelte"},"./rune_helpers.svelte.js":{types:"./dist/rune_helpers.svelte.d.ts",default:"./dist/rune_helpers.svelte.js"},"./Spider.svelte":{types:"./dist/Spider.svelte.d.ts",svelte:"./dist/Spider.svelte",default:"./dist/Spider.svelte"},"./Spiders.svelte":{types:"./dist/Spiders.svelte.d.ts",svelte:"./dist/Spiders.svelte",default:"./dist/Spiders.svelte"},"./Spiderspace_Logo.svelte":{types:"./dist/Spiderspace_Logo.svelte.d.ts",svelte:"./dist/Spiderspace_Logo.svelte",default:"./dist/Spiderspace_Logo.svelte"},"./Teleport.svelte":{types:"./dist/Teleport.svelte.d.ts",svelte:"./dist/Teleport.svelte",default:"./dist/Teleport.svelte"},"./Theme_Input.svelte":{types:"./dist/Theme_Input.svelte.d.ts",svelte:"./dist/Theme_Input.svelte",default:"./dist/Theme_Input.svelte"},"./theme.svelte.js":{types:"./dist/theme.svelte.d.ts",default:"./dist/theme.svelte.js"},"./Themed.svelte":{types:"./dist/Themed.svelte.d.ts",svelte:"./dist/Themed.svelte",default:"./dist/Themed.svelte"},"./Tome_Detail.svelte":{types:"./dist/Tome_Detail.svelte.d.ts",svelte:"./dist/Tome_Detail.svelte",default:"./dist/Tome_Detail.svelte"},"./Tome_Link.svelte":{types:"./dist/Tome_Link.svelte.d.ts",svelte:"./dist/Tome_Link.svelte",default:"./dist/Tome_Link.svelte"},"./Tome_Subheading.svelte":{types:"./dist/Tome_Subheading.svelte.d.ts",svelte:"./dist/Tome_Subheading.svelte",default:"./dist/Tome_Subheading.svelte"},"./Tome_Title.svelte":{types:"./dist/Tome_Title.svelte.d.ts",svelte:"./dist/Tome_Title.svelte",default:"./dist/Tome_Title.svelte"},"./tome.js":{types:"./dist/tome.d.ts",default:"./dist/tome.js"},"./Webdevladder_Logo.svelte":{types:"./dist/Webdevladder_Logo.svelte.d.ts",svelte:"./dist/Webdevladder_Logo.svelte",default:"./dist/Webdevladder_Logo.svelte"},"./Zzz_Logo.svelte":{types:"./dist/Zzz_Logo.svelte.d.ts",svelte:"./dist/Zzz_Logo.svelte",default:"./dist/Zzz_Logo.svelte"}}},ve={name:"@ryanatkn/fuz",version:"0.108.0",modules:{"./package.json":{path:"package.json",declarations:[]},"./Alert.svelte":{path:"Alert.svelte",declarations:[]},"./alert.js":{path:"alert.ts",declarations:[{name:"Alert_Status",kind:"type"},{name:"Alert_Status_Options",kind:"type"},{name:"alert_status_options",kind:"variable"}]},"./Breadcrumb.svelte":{path:"Breadcrumb.svelte",declarations:[]},"./Card.svelte":{path:"Card.svelte",declarations:[]},"./Color_Scheme_Input.svelte":{path:"Color_Scheme_Input.svelte",declarations:[]},"./Community_Links_Panel.svelte":{path:"Community_Links_Panel.svelte",declarations:[]},"./Community_Links.svelte":{path:"Community_Links.svelte",declarations:[]},"./config.js":{path:"config.ts",declarations:[{name:"Fuz_Config",kind:"variable"},{name:"load_fuz_config",kind:"function"}]},"./Contextmenu_Entry.svelte":{path:"Contextmenu_Entry.svelte",declarations:[]},"./contextmenu_helpers.svelte.js":{path:"contextmenu_helpers.svelte.ts",declarations:[{name:"Contextmenu_Params",kind:"type"},{name:"Item_State",kind:"type"},{name:"Entry_State",kind:"class"},{name:"Submenu_State",kind:"class"},{name:"Root_Menu_State",kind:"class"},{name:"Contextmenu_Run",kind:"type"},{name:"Contextmenu_Store_Options",kind:"type"},{name:"Contextmenu_Store",kind:"class"},{name:"contextmenu_action",kind:"function"},{name:"open_contextmenu",kind:"function"},{name:"set_contextmenu",kind:"function"},{name:"get_contextmenu",kind:"function"},{name:"set_contextmenu_submenu",kind:"function"},{name:"get_contextmenu_submenu",kind:"function"},{name:"set_contextmenu_dimensions",kind:"function"},{name:"get_contextmenu_dimensions",kind:"function"}]},"./Contextmenu_Link_Entry.svelte":{path:"Contextmenu_Link_Entry.svelte",declarations:[]},"./Contextmenu_Root.svelte":{path:"Contextmenu_Root.svelte",declarations:[]},"./Contextmenu_Submenu.svelte":{path:"Contextmenu_Submenu.svelte",declarations:[]},"./Contextmenu_Text_Entry.svelte":{path:"Contextmenu_Text_Entry.svelte",declarations:[]},"./Contextmenu.svelte":{path:"Contextmenu.svelte",declarations:[]},"./Copy_To_Clipboard.svelte":{path:"Copy_To_Clipboard.svelte",declarations:[]},"./Details.svelte":{path:"Details.svelte",declarations:[]},"./Dialog.svelte":{path:"Dialog.svelte",declarations:[]},"./dialog.js":{path:"dialog.ts",declarations:[{name:"to_dialog_params",kind:"function"},{name:"Dialog_Params",kind:"type"},{name:"Dialog_Layout",kind:"type"},{name:"dialog_layouts",kind:"variable"}]},"./Dialogs.svelte":{path:"Dialogs.svelte",declarations:[]},"./dimensions.svelte.js":{path:"dimensions.svelte.ts",declarations:[{name:"Dimensions",kind:"class"}]},"./Fuz_Logo.svelte":{path:"Fuz_Logo.svelte",declarations:[]},"./Fuzling.svelte":{path:"Fuzling.svelte",declarations:[]},"./Github_Logo.svelte":{path:"Github_Logo.svelte",declarations:[]},"./Gro_Logo.svelte":{path:"Gro_Logo.svelte",declarations:[]},"./Hashlink.svelte":{path:"Hashlink.svelte",declarations:[]},"./Hidden_Personal_Links.svelte":{path:"Hidden_Personal_Links.svelte",declarations:[]},"./Hue_Input.svelte":{path:"Hue_Input.svelte",declarations:[]},"./Library_Content.svelte":{path:"Library_Content.svelte",declarations:[]},"./Library_Footer.svelte":{path:"Library_Footer.svelte",declarations:[]},"./library_helpers.svelte.js":{path:"library_helpers.svelte.ts",declarations:[{name:"DEFAULT_LIBRARY_PATH",kind:"variable"},{name:"to_library_path_info",kind:"function"},{name:"set_library_links",kind:"function"},{name:"get_library_links",kind:"function"},{name:"Library_Link_Tag",kind:"type"},{name:"Library_Link_Data",kind:"type"},{name:"Library_Links",kind:"class"}]},"./Library_Menu.svelte":{path:"Library_Menu.svelte",declarations:[]},"./Library_Page_Links.svelte":{path:"Library_Page_Links.svelte",declarations:[]},"./Library_Primary_Nav.svelte":{path:"Library_Primary_Nav.svelte",declarations:[]},"./Library_Secondary_Nav.svelte":{path:"Library_Secondary_Nav.svelte",declarations:[]},"./Library_Tertiary_Nav.svelte":{path:"Library_Tertiary_Nav.svelte",declarations:[]},"./Library.svelte":{path:"Library.svelte",declarations:[]},"./Mdn_Link.svelte":{path:"Mdn_Link.svelte",declarations:[]},"./Mdn_Logo.svelte":{path:"Mdn_Logo.svelte",declarations:[]},"./Moss_Logo.svelte":{path:"Moss_Logo.svelte",declarations:[]},"./Package_Detail.svelte":{path:"Package_Detail.svelte",declarations:[]},"./Package_Summary.svelte":{path:"Package_Summary.svelte",declarations:[]},"./Pending_Animation.svelte":{path:"Pending_Animation.svelte",declarations:[]},"./Pending_Button.svelte":{path:"Pending_Button.svelte",declarations:[]},"./Redirect.svelte":{path:"Redirect.svelte",declarations:[]},"./rune_helpers.svelte.js":{path:"rune_helpers.svelte.ts",declarations:[{name:"effect_skip",kind:"function"}]},"./Spider.svelte":{path:"Spider.svelte",declarations:[]},"./Spiders.svelte":{path:"Spiders.svelte",declarations:[]},"./Spiderspace_Logo.svelte":{path:"Spiderspace_Logo.svelte",declarations:[]},"./Teleport.svelte":{path:"Teleport.svelte",declarations:[]},"./Theme_Input.svelte":{path:"Theme_Input.svelte",declarations:[]},"./theme.svelte.js":{path:"theme.svelte.ts",declarations:[{name:"Themer",kind:"class"},{name:"Themer_Json",kind:"type"},{name:"get_themer",kind:"function"},{name:"set_themer",kind:"function"},{name:"sync_color_scheme",kind:"function"},{name:"COLOR_SCHEME_STORAGE_KEY",kind:"variable"},{name:"save_color_scheme",kind:"function"},{name:"load_color_scheme",kind:"function"},{name:"THEME_STORAGE_KEY",kind:"variable"},{name:"save_theme",kind:"function"},{name:"load_theme",kind:"function"},{name:"create_theme_setup_script",kind:"function"},{name:"create_theme_style_html",kind:"function"}]},"./Themed.svelte":{path:"Themed.svelte",declarations:[]},"./Tome_Detail.svelte":{path:"Tome_Detail.svelte",declarations:[]},"./Tome_Link.svelte":{path:"Tome_Link.svelte",declarations:[]},"./Tome_Subheading.svelte":{path:"Tome_Subheading.svelte",declarations:[]},"./Tome_Title.svelte":{path:"Tome_Title.svelte",declarations:[]},"./tome.js":{path:"tome.ts",declarations:[{name:"Tome",kind:"variable"},{name:"init_tome",kind:"function"},{name:"get_tomes",kind:"function"},{name:"set_tomes",kind:"function"},{name:"get_tome",kind:"function"}]},"./Webdevladder_Logo.svelte":{path:"Webdevladder_Logo.svelte",declarations:[]},"./Zzz_Logo.svelte":{path:"Zzz_Logo.svelte",declarations:[]}}},P=(t,e,s=Math.random)=>Math.floor(s()*(e-t+1))+t,_e=(t,e=P)=>{const{length:s}=t,a=s-1;for(let l=0;l<s;l++){const i=e(0,a);if(l===i)continue;const o=t[i];t[i]=t[l],t[l]=o}return t},me=(...t)=>{let e=0,s=0,a=0,l=1;const i=t.length?t:[Date.now()];let o=ue();e=o(" "),s=o(" "),a=o(" ");for(const d of i)e-=o(d),e<0&&(e+=1),s-=o(d),s<0&&(s+=1),a-=o(d),a<0&&(a+=1);o=null;const n=()=>{const d=2091639*e+l*23283064365386963e-26;return e=s,s=a,a=d-(l=d|0)};return n.uint32=()=>n()*4294967296,n.fract53=()=>n()+(n()*2097152|0)*11102230246251565e-32,n.version="Alea 0.9",n.seeds=i,n},ue=()=>{let t=4022871197;return e=>{const s=e+"";for(let a=0;a<s.length;a++){t+=s.charCodeAt(a);let l=.02519603282416938*t;t=l>>>0,l-=t,l*=t,t=l>>>0,l-=t,t+=l*4294967296}return(t>>>0)*23283064365386963e-26}};var ce=D('<div class="spiders svelte-eiv23e"></div>');const pe=()=>{const t=new Date;return t.getHours()*60+t.getMinutes()};function ye(t,e){z(e,!0);const s=_(e,"spiders",11,()=>["var(--color_a_5)","var(--color_b_5)","var(--color_c_5)","var(--color_d_5)","var(--color_e_5)","var(--color_f_5)","var(--color_g_5)"]),a=_(e,"seed",11,pe),l=_(e,"random",11,()=>me(a())),i=y(()=>_e(s().slice(),(d,v)=>P(d,v,l()))),o=y(()=>r(i).map(()=>P(0,359,l())));var n=ce();se(n,79,()=>r(i),(d,v)=>x(d),(d,v,u)=>{var c=y(()=>({style:`transform: rotate(${r(o)[x(u)]}deg)`}));ne(d,{get fill(){return x(v)},get attrs(){return r(c)}})}),W(()=>le(n,"--width",`${100/s().length}%`)),h(t,n),j()}var he=D("<!> <!>",1);function Me(t,e){z(e,!0),te(ie(F.homepage,F,ve)),I(s=>{B.title="Fuz - friendly user zystem"}),re(t,{children:(s,a)=>{var l=he(),i=L(l);R(i,()=>e.children);var o=k(k(i,!0));ye(o,{}),h(s,l)},$$slots:{default:!0}}),j()}export{Me as component,Ee as universal};
