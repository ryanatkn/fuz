import{c as T,q as A,a as h,t as j}from"../chunks/disclose-version.C-Ww6_-A.js";import{ab as R,p as z,f as g,a as E,g as d,s as w,d as y,t as G,r as B,aH as O}from"../chunks/runtime.bViC5kxD.js";import{s as F}from"../chunks/attributes.CEZtrAcH.js";import{a as S,e as W,s as H}from"../chunks/string.ZJuK4sHN.js";import{i as M}from"../chunks/if.xjYjBMBU.js";import{h as I}from"../chunks/html.DCNoCSyw.js";import{p as v}from"../chunks/props.Cg0EPFFi.js";import{s as Z,a as U,l as Y,b as q,e as K,f as J,T as Q,D as V,r as X,h as $,i as ee}from"../chunks/theme.svelte.6QjHAVEp.js";import{s as te}from"../chunks/pkg.BLP8cC91.js";import{e as se}from"../chunks/each.B_jZhebh.js";import{s as ne}from"../chunks/style.Bk7ejTAN.js";import{S as le}from"../chunks/Spider.aqyVlhaM.js";const ae=!0,De=Object.freeze(Object.defineProperty({__proto__:null,prerender:ae},Symbol.toStringTag,{value:"Module"})),ie=(e,t)=>{const{name:n}=e,s=(L=>L?H(S(H(L,".git"),"git+"),"/"):null)(e.repository?typeof e.repository=="string"?e.repository:e.repository.url:null);if(!s)throw new Error("failed to parse package_meta - `repo_url` is required in package_json");const o=e.homepage??null,i=!e.private&&!!e.exports&&e.version!=="0.0.1",l=i?"https://www.npmjs.com/package/"+e.name:null,r=i&&s?s+"/blob/main/CHANGELOG.md":null,_=oe(n),u=s?S(s,"https://github.com/").split("/")[0]:null,c=o?W(o,"/")+(e.logo?S(e.logo,"/"):"favicon.png"):null,k=e.logo_alt??`logo for ${_}`;return{package_json:e,src_json:t,name:n,repo_name:_,repo_url:s,owner_name:u,homepage_url:o,logo_url:c,logo_alt:k,npm_url:l,changelog_url:r,published:i}},oe=e=>e[0]==="@"?e.split("/")[1]:e,x=(e,t=1)=>{let n=!0,a=0;R(()=>{e(n),n&&(a+=1)>=t&&(n=!1)})};var re=j("<!> <!>",1);function de(e,t){z(t,!0);const n=v(t,"sync_color_scheme",3,U),a=v(t,"load_color_scheme",3,Y),s=v(t,"save_color_scheme",3,q),o=v(t,"load_theme",3,K),i=v(t,"save_theme",3,J),l=v(t,"themer",19,()=>new Q(o()(t.theme_fallback),a()(t.color_scheme_fallback)));Z(l());const r=y(()=>l().theme.name),_=y(()=>d(r)===V.name?null:X(l().theme)),u=y(()=>d(_)?$(d(_)):null),c=y(()=>ee(t.color_scheme_fallback));x(p=>{const m=l().color_scheme;p||n()(m)}),x(p=>{const m=l().color_scheme;p||s()(m)}),x(p=>{const m=l().theme;p||i()(m)});var k=T();A(p=>{var m=re(),D=g(m);M(D,()=>d(u),b=>{var f=T(),C=g(f);I(C,()=>d(u),!1,!1),h(b,f)});var N=w(D,2);M(N,()=>d(c),b=>{var f=T(),C=g(f);I(C,()=>d(c),!1,!1),h(b,f)}),h(p,m)});var L=g(k);F(L,()=>t.children,l,()=>d(_),()=>d(u),()=>d(c)),h(e,k),E()}const _e={name:"@ryanatkn/fuz",version:"0.124.4",description:"Svelte UI library",motto:"friendly user zystem",glyph:"🧶",logo:"logo.svg",logo_alt:"a friendly brown spider facing you",public:!0,license:"MIT",homepage:"https://www.fuz.dev/",author:{name:"Ryan Atkinson",email:"mail@ryanatkn.com",url:"https://www.ryanatkn.com/"},repository:{type:"git",url:"git+https://github.com/ryanatkn/fuz.git"},bugs:"https://github.com/ryanatkn/fuz/issues",funding:"https://www.ryanatkn.com/funding",scripts:{start:"gro dev",dev:"gro dev",build:"gro build",check:"gro check",test:"gro test",preview:"vite preview",deploy:"gro deploy"},type:"module",engines:{node:">=20.17"},peerDependencies:{"@ryanatkn/belt":"*","@ryanatkn/gro":"*","@ryanatkn/moss":"*","@sveltejs/kit":"^2",svelte:"^5.0.0-next.0"},peerDependenciesMeta:{"@ryanatkn/gro":{optional:!0}},devDependencies:{"@changesets/changelog-git":"^0.2.0","@ryanatkn/belt":"^0.25.0","@ryanatkn/eslint-config":"^0.5.3","@ryanatkn/fuz_code":"^0.19.0","@ryanatkn/gro":"^0.135.0","@ryanatkn/moss":"^0.16.0","@sveltejs/adapter-static":"^3.0.4","@sveltejs/kit":"^2.5.27","@sveltejs/package":"^2.3.5","@sveltejs/vite-plugin-svelte":"^3.1.2","@types/node":"^22.5.5","@types/prismjs":"^1.26.4",eslint:"^9.10.0","eslint-plugin-svelte":"^2.44.0","esm-env":"^1.0.0",prettier:"^3.3.3","prettier-plugin-svelte":"^3.2.6","prism-svelte":"^0.5.0",prismjs:"^1.29.0",svelte:"^5.0.0-next.247","svelte-check":"^4.0.2",tslib:"^2.7.0",typescript:"^5.6.2","typescript-eslint":"^8.6.0",uvu:"^0.5.6"},prettier:{plugins:["prettier-plugin-svelte"],useTabs:!0,printWidth:100,singleQuote:!0,bracketSpacing:!1,overrides:[{files:"package.json",options:{useTabs:!1}}]},sideEffects:["**/*.css"],files:["dist","src/lib/**/*.ts","!src/lib/**/*.test.*","!dist/**/*.test.*"],exports:{"./package.json":"./package.json","./Alert.svelte":{types:"./dist/Alert.svelte.d.ts",svelte:"./dist/Alert.svelte",default:"./dist/Alert.svelte"},"./alert.js":{types:"./dist/alert.d.ts",default:"./dist/alert.js"},"./Breadcrumb.svelte":{types:"./dist/Breadcrumb.svelte.d.ts",svelte:"./dist/Breadcrumb.svelte",default:"./dist/Breadcrumb.svelte"},"./Card.svelte":{types:"./dist/Card.svelte.d.ts",svelte:"./dist/Card.svelte",default:"./dist/Card.svelte"},"./Color_Scheme_Input.svelte":{types:"./dist/Color_Scheme_Input.svelte.d.ts",svelte:"./dist/Color_Scheme_Input.svelte",default:"./dist/Color_Scheme_Input.svelte"},"./Community_Links_Panel.svelte":{types:"./dist/Community_Links_Panel.svelte.d.ts",svelte:"./dist/Community_Links_Panel.svelte",default:"./dist/Community_Links_Panel.svelte"},"./Community_Links.svelte":{types:"./dist/Community_Links.svelte.d.ts",svelte:"./dist/Community_Links.svelte",default:"./dist/Community_Links.svelte"},"./Contextmenu_Entry.svelte":{types:"./dist/Contextmenu_Entry.svelte.d.ts",svelte:"./dist/Contextmenu_Entry.svelte",default:"./dist/Contextmenu_Entry.svelte"},"./Contextmenu_Link_Entry.svelte":{types:"./dist/Contextmenu_Link_Entry.svelte.d.ts",svelte:"./dist/Contextmenu_Link_Entry.svelte",default:"./dist/Contextmenu_Link_Entry.svelte"},"./Contextmenu_Root.svelte":{types:"./dist/Contextmenu_Root.svelte.d.ts",svelte:"./dist/Contextmenu_Root.svelte",default:"./dist/Contextmenu_Root.svelte"},"./contextmenu_state.svelte.js":{types:"./dist/contextmenu_state.svelte.d.ts",default:"./dist/contextmenu_state.svelte.js"},"./Contextmenu_Submenu.svelte":{types:"./dist/Contextmenu_Submenu.svelte.d.ts",svelte:"./dist/Contextmenu_Submenu.svelte",default:"./dist/Contextmenu_Submenu.svelte"},"./Contextmenu_Text_Entry.svelte":{types:"./dist/Contextmenu_Text_Entry.svelte.d.ts",svelte:"./dist/Contextmenu_Text_Entry.svelte",default:"./dist/Contextmenu_Text_Entry.svelte"},"./Contextmenu.svelte":{types:"./dist/Contextmenu.svelte.d.ts",svelte:"./dist/Contextmenu.svelte",default:"./dist/Contextmenu.svelte"},"./Copy_To_Clipboard.svelte":{types:"./dist/Copy_To_Clipboard.svelte.d.ts",svelte:"./dist/Copy_To_Clipboard.svelte",default:"./dist/Copy_To_Clipboard.svelte"},"./Details.svelte":{types:"./dist/Details.svelte.d.ts",svelte:"./dist/Details.svelte",default:"./dist/Details.svelte"},"./Dialog.svelte":{types:"./dist/Dialog.svelte.d.ts",svelte:"./dist/Dialog.svelte",default:"./dist/Dialog.svelte"},"./dialog.js":{types:"./dist/dialog.d.ts",default:"./dist/dialog.js"},"./Dialogs.svelte":{types:"./dist/Dialogs.svelte.d.ts",svelte:"./dist/Dialogs.svelte",default:"./dist/Dialogs.svelte"},"./dimensions.svelte.js":{types:"./dist/dimensions.svelte.d.ts",default:"./dist/dimensions.svelte.js"},"./Earbetter_Logo.svelte":{types:"./dist/Earbetter_Logo.svelte.d.ts",svelte:"./dist/Earbetter_Logo.svelte",default:"./dist/Earbetter_Logo.svelte"},"./Fuz_Logo.svelte":{types:"./dist/Fuz_Logo.svelte.d.ts",svelte:"./dist/Fuz_Logo.svelte",default:"./dist/Fuz_Logo.svelte"},"./fuz.js":{types:"./dist/fuz.d.ts",default:"./dist/fuz.js"},"./Fuzling.svelte":{types:"./dist/Fuzling.svelte.d.ts",svelte:"./dist/Fuzling.svelte",default:"./dist/Fuzling.svelte"},"./Github_Logo.svelte":{types:"./dist/Github_Logo.svelte.d.ts",svelte:"./dist/Github_Logo.svelte",default:"./dist/Github_Logo.svelte"},"./Gro_Logo.svelte":{types:"./dist/Gro_Logo.svelte.d.ts",svelte:"./dist/Gro_Logo.svelte",default:"./dist/Gro_Logo.svelte"},"./Hashlink.svelte":{types:"./dist/Hashlink.svelte.d.ts",svelte:"./dist/Hashlink.svelte",default:"./dist/Hashlink.svelte"},"./Hidden_Personal_Links.svelte":{types:"./dist/Hidden_Personal_Links.svelte.d.ts",svelte:"./dist/Hidden_Personal_Links.svelte",default:"./dist/Hidden_Personal_Links.svelte"},"./Hue_Input.svelte":{types:"./dist/Hue_Input.svelte.d.ts",svelte:"./dist/Hue_Input.svelte",default:"./dist/Hue_Input.svelte"},"./intersect.js":{types:"./dist/intersect.d.ts",default:"./dist/intersect.js"},"./Library_Content.svelte":{types:"./dist/Library_Content.svelte.d.ts",svelte:"./dist/Library_Content.svelte",default:"./dist/Library_Content.svelte"},"./Library_Footer.svelte":{types:"./dist/Library_Footer.svelte.d.ts",svelte:"./dist/Library_Footer.svelte",default:"./dist/Library_Footer.svelte"},"./library_helpers.svelte.js":{types:"./dist/library_helpers.svelte.d.ts",default:"./dist/library_helpers.svelte.js"},"./Library_Menu.svelte":{types:"./dist/Library_Menu.svelte.d.ts",svelte:"./dist/Library_Menu.svelte",default:"./dist/Library_Menu.svelte"},"./Library_Page_Links.svelte":{types:"./dist/Library_Page_Links.svelte.d.ts",svelte:"./dist/Library_Page_Links.svelte",default:"./dist/Library_Page_Links.svelte"},"./Library_Primary_Nav.svelte":{types:"./dist/Library_Primary_Nav.svelte.d.ts",svelte:"./dist/Library_Primary_Nav.svelte",default:"./dist/Library_Primary_Nav.svelte"},"./Library_Secondary_Nav.svelte":{types:"./dist/Library_Secondary_Nav.svelte.d.ts",svelte:"./dist/Library_Secondary_Nav.svelte",default:"./dist/Library_Secondary_Nav.svelte"},"./Library_Tertiary_Nav.svelte":{types:"./dist/Library_Tertiary_Nav.svelte.d.ts",svelte:"./dist/Library_Tertiary_Nav.svelte",default:"./dist/Library_Tertiary_Nav.svelte"},"./Library.svelte":{types:"./dist/Library.svelte.d.ts",svelte:"./dist/Library.svelte",default:"./dist/Library.svelte"},"./Mdn_Link.svelte":{types:"./dist/Mdn_Link.svelte.d.ts",svelte:"./dist/Mdn_Link.svelte",default:"./dist/Mdn_Link.svelte"},"./Mdn_Logo.svelte":{types:"./dist/Mdn_Logo.svelte.d.ts",svelte:"./dist/Mdn_Logo.svelte",default:"./dist/Mdn_Logo.svelte"},"./Moss_Logo.svelte":{types:"./dist/Moss_Logo.svelte.d.ts",svelte:"./dist/Moss_Logo.svelte",default:"./dist/Moss_Logo.svelte"},"./Package_Detail.svelte":{types:"./dist/Package_Detail.svelte.d.ts",svelte:"./dist/Package_Detail.svelte",default:"./dist/Package_Detail.svelte"},"./Package_Summary.svelte":{types:"./dist/Package_Summary.svelte.d.ts",svelte:"./dist/Package_Summary.svelte",default:"./dist/Package_Summary.svelte"},"./Pending_Animation.svelte":{types:"./dist/Pending_Animation.svelte.d.ts",svelte:"./dist/Pending_Animation.svelte",default:"./dist/Pending_Animation.svelte"},"./Pending_Button.svelte":{types:"./dist/Pending_Button.svelte.d.ts",svelte:"./dist/Pending_Button.svelte",default:"./dist/Pending_Button.svelte"},"./Project_Links.svelte":{types:"./dist/Project_Links.svelte.d.ts",svelte:"./dist/Project_Links.svelte",default:"./dist/Project_Links.svelte"},"./Redirect.svelte":{types:"./dist/Redirect.svelte.d.ts",svelte:"./dist/Redirect.svelte",default:"./dist/Redirect.svelte"},"./rune_helpers.svelte.js":{types:"./dist/rune_helpers.svelte.d.ts",default:"./dist/rune_helpers.svelte.js"},"./Spider.svelte":{types:"./dist/Spider.svelte.d.ts",svelte:"./dist/Spider.svelte",default:"./dist/Spider.svelte"},"./Spiders.svelte":{types:"./dist/Spiders.svelte.d.ts",svelte:"./dist/Spiders.svelte",default:"./dist/Spiders.svelte"},"./Spiderspace_Logo.svelte":{types:"./dist/Spiderspace_Logo.svelte.d.ts",svelte:"./dist/Spiderspace_Logo.svelte",default:"./dist/Spiderspace_Logo.svelte"},"./Teleport.svelte":{types:"./dist/Teleport.svelte.d.ts",svelte:"./dist/Teleport.svelte",default:"./dist/Teleport.svelte"},"./Theme_Input.svelte":{types:"./dist/Theme_Input.svelte.d.ts",svelte:"./dist/Theme_Input.svelte",default:"./dist/Theme_Input.svelte"},"./theme.svelte.js":{types:"./dist/theme.svelte.d.ts",default:"./dist/theme.svelte.js"},"./Themed.svelte":{types:"./dist/Themed.svelte.d.ts",svelte:"./dist/Themed.svelte",default:"./dist/Themed.svelte"},"./Tome_Content.svelte":{types:"./dist/Tome_Content.svelte.d.ts",svelte:"./dist/Tome_Content.svelte",default:"./dist/Tome_Content.svelte"},"./Tome_Header.svelte":{types:"./dist/Tome_Header.svelte.d.ts",svelte:"./dist/Tome_Header.svelte",default:"./dist/Tome_Header.svelte"},"./Tome_Link.svelte":{types:"./dist/Tome_Link.svelte.d.ts",svelte:"./dist/Tome_Link.svelte",default:"./dist/Tome_Link.svelte"},"./Tome_Section_Header.svelte":{types:"./dist/Tome_Section_Header.svelte.d.ts",svelte:"./dist/Tome_Section_Header.svelte",default:"./dist/Tome_Section_Header.svelte"},"./Tome_Section.svelte":{types:"./dist/Tome_Section.svelte.d.ts",svelte:"./dist/Tome_Section.svelte",default:"./dist/Tome_Section.svelte"},"./tome.js":{types:"./dist/tome.d.ts",default:"./dist/tome.js"},"./Webdevladder_Logo.svelte":{types:"./dist/Webdevladder_Logo.svelte.d.ts",svelte:"./dist/Webdevladder_Logo.svelte",default:"./dist/Webdevladder_Logo.svelte"},"./Zzz_Logo.svelte":{types:"./dist/Zzz_Logo.svelte.d.ts",svelte:"./dist/Zzz_Logo.svelte",default:"./dist/Zzz_Logo.svelte"}}},ve={name:"@ryanatkn/fuz",version:"0.124.4",modules:{"./package.json":{path:"package.json",declarations:[]},"./Alert.svelte":{path:"Alert.svelte",declarations:[]},"./alert.js":{path:"alert.ts",declarations:[{name:"Alert_Status",kind:"type"},{name:"Alert_Status_Options",kind:"type"},{name:"alert_status_options",kind:"variable"}]},"./Breadcrumb.svelte":{path:"Breadcrumb.svelte",declarations:[]},"./Card.svelte":{path:"Card.svelte",declarations:[]},"./Color_Scheme_Input.svelte":{path:"Color_Scheme_Input.svelte",declarations:[]},"./Community_Links_Panel.svelte":{path:"Community_Links_Panel.svelte",declarations:[]},"./Community_Links.svelte":{path:"Community_Links.svelte",declarations:[]},"./Contextmenu_Entry.svelte":{path:"Contextmenu_Entry.svelte",declarations:[]},"./Contextmenu_Link_Entry.svelte":{path:"Contextmenu_Link_Entry.svelte",declarations:[]},"./Contextmenu_Root.svelte":{path:"Contextmenu_Root.svelte",declarations:[]},"./contextmenu_state.svelte.js":{path:"contextmenu_state.svelte.ts",declarations:[{name:"Contextmenu_Params",kind:"type"},{name:"Item_State",kind:"type"},{name:"Entry_State",kind:"class"},{name:"Submenu_State",kind:"class"},{name:"Root_Menu_State",kind:"class"},{name:"Contextmenu_Run",kind:"type"},{name:"Contextmenu_State_Options",kind:"type"},{name:"Contextmenu_State",kind:"class"},{name:"contextmenu_action",kind:"function"},{name:"open_contextmenu",kind:"function"},{name:"set_contextmenu",kind:"function"},{name:"get_contextmenu",kind:"function"},{name:"set_contextmenu_submenu",kind:"function"},{name:"get_contextmenu_submenu",kind:"function"},{name:"set_contextmenu_dimensions",kind:"function"},{name:"get_contextmenu_dimensions",kind:"function"}]},"./Contextmenu_Submenu.svelte":{path:"Contextmenu_Submenu.svelte",declarations:[]},"./Contextmenu_Text_Entry.svelte":{path:"Contextmenu_Text_Entry.svelte",declarations:[]},"./Contextmenu.svelte":{path:"Contextmenu.svelte",declarations:[]},"./Copy_To_Clipboard.svelte":{path:"Copy_To_Clipboard.svelte",declarations:[]},"./Details.svelte":{path:"Details.svelte",declarations:[]},"./Dialog.svelte":{path:"Dialog.svelte",declarations:[]},"./dialog.js":{path:"dialog.ts",declarations:[{name:"to_dialog_params",kind:"function"},{name:"Dialog_Params",kind:"type"},{name:"Dialog_Layout",kind:"type"},{name:"dialog_layouts",kind:"variable"}]},"./Dialogs.svelte":{path:"Dialogs.svelte",declarations:[]},"./dimensions.svelte.js":{path:"dimensions.svelte.ts",declarations:[{name:"Dimensions",kind:"class"}]},"./Earbetter_Logo.svelte":{path:"Earbetter_Logo.svelte",declarations:[]},"./Fuz_Logo.svelte":{path:"Fuz_Logo.svelte",declarations:[]},"./fuz.js":{path:"fuz.ts",declarations:[{name:"Fuz_Project_Name",kind:"type"},{name:"to_fuz_project_color",kind:"function"},{name:"to_fuz_project_color_name",kind:"function"}]},"./Fuzling.svelte":{path:"Fuzling.svelte",declarations:[]},"./Github_Logo.svelte":{path:"Github_Logo.svelte",declarations:[]},"./Gro_Logo.svelte":{path:"Gro_Logo.svelte",declarations:[]},"./Hashlink.svelte":{path:"Hashlink.svelte",declarations:[]},"./Hidden_Personal_Links.svelte":{path:"Hidden_Personal_Links.svelte",declarations:[]},"./Hue_Input.svelte":{path:"Hue_Input.svelte",declarations:[]},"./intersect.js":{path:"intersect.ts",declarations:[{name:"Intersect_Params",kind:"type"},{name:"Intersect_Params_Or_Callback",kind:"type"},{name:"intersect",kind:"function"},{name:"On_Intersect",kind:"type"},{name:"Intersect_State",kind:"type"},{name:"On_Disconnect",kind:"type"},{name:"Disconnect_State",kind:"type"}]},"./Library_Content.svelte":{path:"Library_Content.svelte",declarations:[]},"./Library_Footer.svelte":{path:"Library_Footer.svelte",declarations:[]},"./library_helpers.svelte.js":{path:"library_helpers.svelte.ts",declarations:[{name:"DEFAULT_LIBRARY_PATH",kind:"variable"},{name:"to_library_path_info",kind:"function"},{name:"set_library_links",kind:"function"},{name:"get_library_links",kind:"function"},{name:"Library_Link_Tag",kind:"type"},{name:"Library_Link",kind:"type"},{name:"Library_Links",kind:"class"}]},"./Library_Menu.svelte":{path:"Library_Menu.svelte",declarations:[]},"./Library_Page_Links.svelte":{path:"Library_Page_Links.svelte",declarations:[]},"./Library_Primary_Nav.svelte":{path:"Library_Primary_Nav.svelte",declarations:[]},"./Library_Secondary_Nav.svelte":{path:"Library_Secondary_Nav.svelte",declarations:[]},"./Library_Tertiary_Nav.svelte":{path:"Library_Tertiary_Nav.svelte",declarations:[]},"./Library.svelte":{path:"Library.svelte",declarations:[]},"./Mdn_Link.svelte":{path:"Mdn_Link.svelte",declarations:[]},"./Mdn_Logo.svelte":{path:"Mdn_Logo.svelte",declarations:[]},"./Moss_Logo.svelte":{path:"Moss_Logo.svelte",declarations:[]},"./Package_Detail.svelte":{path:"Package_Detail.svelte",declarations:[]},"./Package_Summary.svelte":{path:"Package_Summary.svelte",declarations:[]},"./Pending_Animation.svelte":{path:"Pending_Animation.svelte",declarations:[]},"./Pending_Button.svelte":{path:"Pending_Button.svelte",declarations:[]},"./Project_Links.svelte":{path:"Project_Links.svelte",declarations:[]},"./Redirect.svelte":{path:"Redirect.svelte",declarations:[]},"./rune_helpers.svelte.js":{path:"rune_helpers.svelte.ts",declarations:[{name:"effect_skip",kind:"function"}]},"./Spider.svelte":{path:"Spider.svelte",declarations:[]},"./Spiders.svelte":{path:"Spiders.svelte",declarations:[]},"./Spiderspace_Logo.svelte":{path:"Spiderspace_Logo.svelte",declarations:[]},"./Teleport.svelte":{path:"Teleport.svelte",declarations:[]},"./Theme_Input.svelte":{path:"Theme_Input.svelte",declarations:[]},"./theme.svelte.js":{path:"theme.svelte.ts",declarations:[{name:"Themer",kind:"class"},{name:"Themer_Json",kind:"type"},{name:"get_themer",kind:"function"},{name:"set_themer",kind:"function"},{name:"sync_color_scheme",kind:"function"},{name:"COLOR_SCHEME_STORAGE_KEY",kind:"variable"},{name:"save_color_scheme",kind:"function"},{name:"load_color_scheme",kind:"function"},{name:"THEME_STORAGE_KEY",kind:"variable"},{name:"save_theme",kind:"function"},{name:"load_theme",kind:"function"},{name:"create_theme_setup_script",kind:"function"},{name:"create_theme_style_html",kind:"function"}]},"./Themed.svelte":{path:"Themed.svelte",declarations:[]},"./Tome_Content.svelte":{path:"Tome_Content.svelte",declarations:[]},"./Tome_Header.svelte":{path:"Tome_Header.svelte",declarations:[]},"./Tome_Link.svelte":{path:"Tome_Link.svelte",declarations:[]},"./Tome_Section_Header.svelte":{path:"Tome_Section_Header.svelte",declarations:[]},"./Tome_Section.svelte":{path:"Tome_Section.svelte",declarations:[]},"./tome.js":{path:"tome.ts",declarations:[{name:"Tome",kind:"variable"},{name:"to_tome_pathname",kind:"function"},{name:"get_tomes",kind:"function"},{name:"set_tomes",kind:"function"},{name:"get_tome_by_name",kind:"function"},{name:"get_tome",kind:"function"},{name:"set_tome",kind:"function"}]},"./Webdevladder_Logo.svelte":{path:"Webdevladder_Logo.svelte",declarations:[]},"./Zzz_Logo.svelte":{path:"Zzz_Logo.svelte",declarations:[]}}},P=(e,t,n=Math.random)=>Math.floor(n()*(t-e+1))+e,me=(e,t=P)=>{const{length:n}=e,a=n-1;for(let s=0;s<n;s++){const o=t(0,a);if(s===o)continue;const i=e[o];e[o]=e[s],e[s]=i}return e},ue=(...e)=>{let t=0,n=0,a=0,s=1;const o=e.length?e:[Date.now()];let i=ce();t=i(" "),n=i(" "),a=i(" ");for(const r of o)t-=i(r),t<0&&(t+=1),n-=i(r),n<0&&(n+=1),a-=i(r),a<0&&(a+=1);i=null;const l=()=>{const r=2091639*t+s*23283064365386963e-26;return t=n,n=a,a=r-(s=r|0)};return l.uint32=()=>l()*4294967296,l.fract53=()=>l()+(l()*2097152|0)*11102230246251565e-32,l.version="Alea 0.9",l.seeds=o,l},ce=()=>{let e=4022871197;return t=>{const n=t+"";for(let a=0;a<n.length;a++){e+=n.charCodeAt(a);let s=.02519603282416938*e;e=s>>>0,s-=e,s*=e,e=s>>>0,s-=e,e+=s*4294967296}return(e>>>0)*23283064365386963e-26}},pe=()=>{const e=new Date;return e.getHours()*60+e.getMinutes()};var ye=j('<div class="spiders svelte-8ktg52"></div>');function he(e,t){z(t,!0);const n=v(t,"spiders",19,()=>["var(--color_a_5)","var(--color_b_5)","var(--color_c_5)","var(--color_d_5)","var(--color_e_5)","var(--color_f_5)","var(--color_g_5)","var(--color_h_5)","var(--color_i_5)"]),a=v(t,"seed",19,pe),s=v(t,"random",19,()=>ue(a())),o=y(()=>me(n().slice(),(r,_)=>P(r,_,s()))),i=y(()=>d(o).map(()=>P(0,359,s())));var l=ye();se(l,22,()=>d(o),r=>r,(r,_,u)=>{var c=y(()=>({style:`transform: rotate(${d(i)[d(u)]}deg)`}));le(r,{get fill(){return _},get attrs(){return d(c)}})}),B(l),G(()=>ne(l,"--spider_count",n().length)),h(e,l),E()}var fe=j("<!> <!>",1);function He(e,t){z(t,!0),te(ie(_e,ve)),A(n=>{O.title="Fuz - friendly user zystem"}),de(e,{children:(n,a)=>{var s=fe(),o=g(s);F(o,()=>t.children);var i=w(o,2);he(i,{}),h(n,s)},$$slots:{default:!0}}),E()}export{He as component,De as universal};