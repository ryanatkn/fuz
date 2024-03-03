import{n as ft,e as x,c as v,a as y,d,i as E,Q as yt,x as un,s as u,f as w,z as wn,A as kn,B as yn,E as st,t as A,l as D,b as I,m as z,g as c,I as Gn,j as F}from"../chunks/scheduler.CAaBPvp4.js";import{S as bt,i as ut,g as wt,b as C,e as kt,t as $,c as q,a as H,m as P,d as L}from"../chunks/index.xO6swaGW.js";import{e as mn}from"../chunks/each.BMDmM5PD.js";import{C as $n}from"../chunks/Code.DFD63ffJ.js";import{T as $t}from"../chunks/Tome_Detail.BMBHiufV.js";import{T as zt}from"../chunks/Tome_Link.DVxxAida.js";import{G as Xn}from"../chunks/Github_Logo.DtWsbATZ.js";import{g as Ct}from"../chunks/tome.D1NA9x9Q.js";const St=`/* @ryanatkn/fuz/utility_classes.css */

/* TODO @multiple docs in library */

/*

See \`variable_classes.css\` for the utility classes based on the style variables.

*/

/* TODO display_flex? more predictable+verbose or shorthand? */

.relative {
	position: relative;
}
.absolute {
	position: absolute;
}
.fixed {
	position: fixed;
}
.sticky {
	position: sticky;
}
.static {
	position: static;
}

.overflow_auto {
	overflow: auto;
}
.overflow_hidden {
	overflow: hidden;
}
.overflow_scroll {
	overflow: scroll;
}
.overflow_clip {
	overflow: clip;
}
.overflow_visible {
	overflow: visible;
}

.overflow_x_auto {
	overflow-x: auto;
}
.overflow_x_hidden {
	overflow-x: hidden;
}
.overflow_x_scroll {
	overflow-x: scroll;
}
.overflow_x_clip {
	overflow-x: clip;
}
.overflow_x_visible {
	overflow-x: visible;
}

.overflow_y_auto {
	overflow-y: auto;
}
.overflow_y_hidden {
	overflow-y: hidden;
}
.overflow_y_scroll {
	overflow-y: scroll;
}
.overflow_y_clip {
	overflow-y: clip;
}
.overflow_y_visible {
	overflow-y: visible;
}

.inline {
	display: inline;
}
.inline_block {
	display: inline-block;
}
.block {
	display: block;
}
.display_none {
	display: none;
}
.display_contents {
	display: contents;
}
.flex {
	display: flex;
}
.flex_1 {
	flex: 1;
}
.grid {
	display: grid;
}

.box {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

/* can be used to override the direction of a \`.box\` */
.row {
	display: flex;
	flex-direction: row;
	align-items: center;
}

/* Makes flexboxes wrap. */
.wrap {
	flex-wrap: wrap;
	white-space: initial;
}

/* Stops text from wrapping. */
.nowrap {
	flex-wrap: nowrap;
	white-space: nowrap;
}

.float_none {
	float: none;
}
.float_left {
	float: left;
}
.float_right {
	float: right;
}
.float_inline_start {
	float: inline-start;
}
.float_inline_end {
	float: inline-end;
}

/*

text

*/

.text_align_center {
	text-align: center;
}
.text_align_right {
	text-align: right;
}
.text_align_left {
	text-align: left;
}
.text_align_justify {
	text-align: justify;
}

.font_weight_100 {
	font-weight: 100;
}
.font_weight_200 {
	font-weight: 200;
}
.font_weight_300 {
	font-weight: 300;
}
.font_weight_400 {
	font-weight: 400;
}
.font_weight_500 {
	font-weight: 500;
}
.font_weight_600 {
	font-weight: 600;
}
.font_weight_700 {
	font-weight: 700;
}
.font_weight_800 {
	font-weight: 800;
}
.font_weight_900 {
	font-weight: 900;
}

.ellipsis {
	display: block;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.pixelated {
	image-rendering: -webkit-optimize-contrast; /* Safari */
	image-rendering: -o-crisp-edges; /* OS X & Windows Opera (12.02+) */
	image-rendering: pixelated; /* in case crisp-edges isn't supported */
	image-rendering: crisp-edges; /* the recommended pixel art setting according to MDN */
}

.radius_100 {
	border-radius: 100%;
}
.radius_0 {
	border-radius: 0;
}

.p_0 {
	padding: 0;
}
.pt_0 {
	padding-top: 0;
}
.pr_0 {
	padding-right: 0;
}
.pb_0 {
	padding-bottom: 0;
}
.pl_0 {
	padding-left: 0;
}
.px_0 {
	padding-left: 0;
	padding-right: 0;
}
.py_0 {
	padding-top: 0;
	padding-bottom: 0;
}

.m_0 {
	margin: 0;
}
.mt_0 {
	margin-top: 0;
}
.mr_0 {
	margin-right: 0;
}
.mb_0 {
	margin-bottom: 0;
}
.ml_0 {
	margin-left: 0;
}
.mx_0 {
	margin-left: 0;
	margin-right: 0;
}
.my_0 {
	margin-top: 0;
	margin-bottom: 0;
}

.m_auto {
	margin: auto;
}
.mx_auto {
	margin-left: auto;
	margin-right: auto;
}
.my_auto {
	margin-top: auto;
	margin-bottom: auto;
}

.w_100 {
	width: 100%;
}
.w_0 {
	width: 0;
}

.h_100 {
	height: 100%;
}
.h_0 {
	height: 0;
}

.fade_0 {
	opacity: 0;
}
.fade_100 {
	opacity: 1;
}
`,Ot=`/* @ryanatkn/fuz/variable_classes.css */

/* TODO @multiple docs in library */

/*

Variable classes are a specialization of utility classes.
They couple style variables with CSS properties.

The utility classes not based on style variables are in \`utility_classes.css\`.

*/

/* TODO vite plugin for removing unused */

/*

text

*/

.font_family_sans {
	font-family: var(--font_family_sans);
}
.font_family_mono {
	font-family: var(--font_family_mono);
}

.line_height {
	line-height: var(--line_height);
}
.line_height_1 {
	line-height: var(--line_height_1);
}
.line_height_2 {
	line-height: var(--line_height_2);
}
.line_height_3 {
	line-height: var(--line_height_3);
}
.line_height_4 {
	line-height: var(--line_height_4);
}
.line_height_5 {
	line-height: var(--line_height_5);
}
.line_height_6 {
	line-height: var(--line_height_6);
}
.line_height_7 {
	line-height: var(--line_height_7);
}

.size_xs {
	font-size: var(--size_xs);
}
.size_sm {
	font-size: var(--size_sm);
}
.size_md {
	font-size: var(--size_md);
}
.size_lg {
	font-size: var(--size_lg);
}
.size_xl {
	font-size: var(--size_xl);
}
.size_xl2 {
	font-size: var(--size_xl2);
}
.size_xl3 {
	font-size: var(--size_xl3);
}
.size_xl4 {
	font-size: var(--size_xl4);
}
.size_xl5 {
	font-size: var(--size_xl5);
}
.size_xl6 {
	font-size: var(--size_xl6);
}
.size_xl7 {
	font-size: var(--size_xl7);
}
.size_xl8 {
	font-size: var(--size_xl8);
}
.size_xl9 {
	font-size: var(--size_xl9);
}

.icon_size_xs {
	font-size: var(--icon_size_xs);
}
.icon_size_sm {
	font-size: var(--icon_size_sm);
}
.icon_size_md {
	font-size: var(--icon_size_md);
}
.icon_size_lg {
	font-size: var(--icon_size_lg);
}
.icon_size_xl {
	font-size: var(--icon_size_xl);
}
.icon_size_xl2 {
	font-size: var(--icon_size_xl2);
}

/*

colors

*/

.text_1 {
	color: var(--text_1);
}
.text_2 {
	color: var(--text_2);
}
.text_3 {
	color: var(--text_3);
}

.darken_1 {
	background-color: var(--darken_1);
}
.darken_2 {
	background-color: var(--darken_2);
}
.darken_3 {
	background-color: var(--darken_3);
}
.darken_4 {
	background-color: var(--darken_4);
}
.darken_5 {
	background-color: var(--darken_5);
}
.darken_6 {
	background-color: var(--darken_6);
}
.darken_7 {
	background-color: var(--darken_7);
}
.darken_8 {
	background-color: var(--darken_8);
}
.darken_9 {
	background-color: var(--darken_9);
}

.lighten_1 {
	background-color: var(--lighten_1);
}
.lighten_2 {
	background-color: var(--lighten_2);
}
.lighten_3 {
	background-color: var(--lighten_3);
}
.lighten_4 {
	background-color: var(--lighten_4);
}
.lighten_5 {
	background-color: var(--lighten_5);
}
.lighten_6 {
	background-color: var(--lighten_6);
}
.lighten_7 {
	background-color: var(--lighten_7);
}
.lighten_8 {
	background-color: var(--lighten_8);
}
.lighten_9 {
	background-color: var(--lighten_9);
}

.bg {
	background-color: var(--bg);
}

.fg {
	background-color: var(--fg);
}

.fg_1 {
	background-color: var(--fg_1);
}
.fg_2 {
	background-color: var(--fg_2);
}
.fg_3 {
	background-color: var(--fg_3);
}
.fg_4 {
	background-color: var(--fg_4);
}
.fg_5 {
	background-color: var(--fg_5);
}
.fg_6 {
	background-color: var(--fg_6);
}
.fg_7 {
	background-color: var(--fg_7);
}
.fg_8 {
	background-color: var(--fg_8);
}
.fg_9 {
	background-color: var(--fg_9);
}

.bg_1 {
	background-color: var(--bg_1);
}
.bg_2 {
	background-color: var(--bg_2);
}
.bg_3 {
	background-color: var(--bg_3);
}
.bg_4 {
	background-color: var(--bg_4);
}
.bg_5 {
	background-color: var(--bg_5);
}
.bg_6 {
	background-color: var(--bg_6);
}
.bg_7 {
	background-color: var(--bg_7);
}
.bg_8 {
	background-color: var(--bg_8);
}
.bg_9 {
	background-color: var(--bg_9);
}

.color_darken_1 {
	color: var(--darken_1);
}
.color_darken_2 {
	color: var(--darken_2);
}
.color_darken_3 {
	color: var(--darken_3);
}
.color_darken_4 {
	color: var(--darken_4);
}
.color_darken_5 {
	color: var(--darken_5);
}
.color_darken_6 {
	color: var(--darken_6);
}
.color_darken_7 {
	color: var(--darken_7);
}
.color_darken_8 {
	color: var(--darken_8);
}
.color_darken_9 {
	color: var(--darken_9);
}

.color_lighten_1 {
	color: var(--lighten_1);
}
.color_lighten_2 {
	color: var(--lighten_2);
}
.color_lighten_3 {
	color: var(--lighten_3);
}
.color_lighten_4 {
	color: var(--lighten_4);
}
.color_lighten_5 {
	color: var(--lighten_5);
}
.color_lighten_6 {
	color: var(--lighten_6);
}
.color_lighten_7 {
	color: var(--lighten_7);
}
.color_lighten_8 {
	color: var(--lighten_8);
}
.color_lighten_9 {
	color: var(--lighten_9);
}

.color_bg {
	color: var(--bg);
}

.color_fg {
	color: var(--fg);
}

.color_fg_1 {
	color: var(--fg_1);
}
.color_fg_2 {
	color: var(--fg_2);
}
.color_fg_3 {
	color: var(--fg_3);
}
.color_fg_4 {
	color: var(--fg_4);
}
.color_fg_5 {
	color: var(--fg_5);
}
.color_fg_6 {
	color: var(--fg_6);
}
.color_fg_7 {
	color: var(--fg_7);
}
.color_fg_8 {
	color: var(--fg_8);
}
.color_fg_9 {
	color: var(--fg_9);
}

.color_bg_1 {
	color: var(--bg_1);
}
.color_bg_2 {
	color: var(--bg_2);
}
.color_bg_3 {
	color: var(--bg_3);
}
.color_bg_4 {
	color: var(--bg_4);
}
.color_bg_5 {
	color: var(--bg_5);
}
.color_bg_6 {
	color: var(--bg_6);
}
.color_bg_7 {
	color: var(--bg_7);
}
.color_bg_8 {
	color: var(--bg_8);
}
.color_bg_9 {
	color: var(--bg_9);
}

.hue_a {
	--hue: var(--hue_a);
}
.hue_b {
	--hue: var(--hue_b);
}
.hue_c {
	--hue: var(--hue_c);
}
.hue_d {
	--hue: var(--hue_d);
}
.hue_e {
	--hue: var(--hue_e);
}
.hue_f {
	--hue: var(--hue_f);
}
.hue_g {
	--hue: var(--hue_g);
}

.color_a_1 {
	color: var(--color_a_1);
}
.color_a_2 {
	color: var(--color_a_2);
}
.color_a_3 {
	color: var(--color_a_3);
}
.color_a_4 {
	color: var(--color_a_4);
}
.color_a_5 {
	color: var(--color_a_5);
}
.color_a_6 {
	color: var(--color_a_6);
}
.color_a_7 {
	color: var(--color_a_7);
}
.color_a_8 {
	color: var(--color_a_8);
}
.color_a_9 {
	color: var(--color_a_9);
}
.color_b_1 {
	color: var(--color_b_1);
}
.color_b_2 {
	color: var(--color_b_2);
}
.color_b_3 {
	color: var(--color_b_3);
}
.color_b_4 {
	color: var(--color_b_4);
}
.color_b_5 {
	color: var(--color_b_5);
}
.color_b_6 {
	color: var(--color_b_6);
}
.color_b_7 {
	color: var(--color_b_7);
}
.color_b_8 {
	color: var(--color_b_8);
}
.color_b_9 {
	color: var(--color_b_9);
}
.color_c_1 {
	color: var(--color_c_1);
}
.color_c_2 {
	color: var(--color_c_2);
}
.color_c_3 {
	color: var(--color_c_3);
}
.color_c_4 {
	color: var(--color_c_4);
}
.color_c_5 {
	color: var(--color_c_5);
}
.color_c_6 {
	color: var(--color_c_6);
}
.color_c_7 {
	color: var(--color_c_7);
}
.color_c_8 {
	color: var(--color_c_8);
}
.color_c_9 {
	color: var(--color_c_9);
}
.color_d_1 {
	color: var(--color_d_1);
}
.color_d_2 {
	color: var(--color_d_2);
}
.color_d_3 {
	color: var(--color_d_3);
}
.color_d_4 {
	color: var(--color_d_4);
}
.color_d_5 {
	color: var(--color_d_5);
}
.color_d_6 {
	color: var(--color_d_6);
}
.color_d_7 {
	color: var(--color_d_7);
}
.color_d_8 {
	color: var(--color_d_8);
}
.color_d_9 {
	color: var(--color_d_9);
}
.color_e_1 {
	color: var(--color_e_1);
}
.color_e_2 {
	color: var(--color_e_2);
}
.color_e_3 {
	color: var(--color_e_3);
}
.color_e_4 {
	color: var(--color_e_4);
}
.color_e_5 {
	color: var(--color_e_5);
}
.color_e_6 {
	color: var(--color_e_6);
}
.color_e_7 {
	color: var(--color_e_7);
}
.color_e_8 {
	color: var(--color_e_8);
}
.color_e_9 {
	color: var(--color_e_9);
}
.color_f_1 {
	color: var(--color_f_1);
}
.color_f_2 {
	color: var(--color_f_2);
}
.color_f_3 {
	color: var(--color_f_3);
}
.color_f_4 {
	color: var(--color_f_4);
}
.color_f_5 {
	color: var(--color_f_5);
}
.color_f_6 {
	color: var(--color_f_6);
}
.color_f_7 {
	color: var(--color_f_7);
}
.color_f_8 {
	color: var(--color_f_8);
}
.color_f_9 {
	color: var(--color_f_9);
}
.color_g_1 {
	color: var(--color_g_1);
}
.color_g_2 {
	color: var(--color_g_2);
}
.color_g_3 {
	color: var(--color_g_3);
}
.color_g_4 {
	color: var(--color_g_4);
}
.color_g_5 {
	color: var(--color_g_5);
}
.color_g_6 {
	color: var(--color_g_6);
}
.color_g_7 {
	color: var(--color_g_7);
}
.color_g_8 {
	color: var(--color_g_8);
}
.color_g_9 {
	color: var(--color_g_9);
}

.bg_a_1 {
	background-color: var(--color_a_1);
}
.bg_a_2 {
	background-color: var(--color_a_2);
}
.bg_a_3 {
	background-color: var(--color_a_3);
}
.bg_a_4 {
	background-color: var(--color_a_4);
}
.bg_a_5 {
	background-color: var(--color_a_5);
}
.bg_a_6 {
	background-color: var(--color_a_6);
}
.bg_a_7 {
	background-color: var(--color_a_7);
}
.bg_a_8 {
	background-color: var(--color_a_8);
}
.bg_a_9 {
	background-color: var(--color_a_9);
}
.bg_b_1 {
	background-color: var(--color_b_1);
}
.bg_b_2 {
	background-color: var(--color_b_2);
}
.bg_b_3 {
	background-color: var(--color_b_3);
}
.bg_b_4 {
	background-color: var(--color_b_4);
}
.bg_b_5 {
	background-color: var(--color_b_5);
}
.bg_b_6 {
	background-color: var(--color_b_6);
}
.bg_b_7 {
	background-color: var(--color_b_7);
}
.bg_b_8 {
	background-color: var(--color_b_8);
}
.bg_b_9 {
	background-color: var(--color_b_9);
}
.bg_c_1 {
	background-color: var(--color_c_1);
}
.bg_c_2 {
	background-color: var(--color_c_2);
}
.bg_c_3 {
	background-color: var(--color_c_3);
}
.bg_c_4 {
	background-color: var(--color_c_4);
}
.bg_c_5 {
	background-color: var(--color_c_5);
}
.bg_c_6 {
	background-color: var(--color_c_6);
}
.bg_c_7 {
	background-color: var(--color_c_7);
}
.bg_c_8 {
	background-color: var(--color_c_8);
}
.bg_c_9 {
	background-color: var(--color_c_9);
}
.bg_d_1 {
	background-color: var(--color_d_1);
}
.bg_d_2 {
	background-color: var(--color_d_2);
}
.bg_d_3 {
	background-color: var(--color_d_3);
}
.bg_d_4 {
	background-color: var(--color_d_4);
}
.bg_d_5 {
	background-color: var(--color_d_5);
}
.bg_d_6 {
	background-color: var(--color_d_6);
}
.bg_d_7 {
	background-color: var(--color_d_7);
}
.bg_d_8 {
	background-color: var(--color_d_8);
}
.bg_d_9 {
	background-color: var(--color_d_9);
}
.bg_e_1 {
	background-color: var(--color_e_1);
}
.bg_e_2 {
	background-color: var(--color_e_2);
}
.bg_e_3 {
	background-color: var(--color_e_3);
}
.bg_e_4 {
	background-color: var(--color_e_4);
}
.bg_e_5 {
	background-color: var(--color_e_5);
}
.bg_e_6 {
	background-color: var(--color_e_6);
}
.bg_e_7 {
	background-color: var(--color_e_7);
}
.bg_e_8 {
	background-color: var(--color_e_8);
}
.bg_e_9 {
	background-color: var(--color_e_9);
}
.bg_f_1 {
	background-color: var(--color_f_1);
}
.bg_f_2 {
	background-color: var(--color_f_2);
}
.bg_f_3 {
	background-color: var(--color_f_3);
}
.bg_f_4 {
	background-color: var(--color_f_4);
}
.bg_f_5 {
	background-color: var(--color_f_5);
}
.bg_f_6 {
	background-color: var(--color_f_6);
}
.bg_f_7 {
	background-color: var(--color_f_7);
}
.bg_f_8 {
	background-color: var(--color_f_8);
}
.bg_f_9 {
	background-color: var(--color_f_9);
}
.bg_g_1 {
	background-color: var(--color_g_1);
}
.bg_g_2 {
	background-color: var(--color_g_2);
}
.bg_g_3 {
	background-color: var(--color_g_3);
}
.bg_g_4 {
	background-color: var(--color_g_4);
}
.bg_g_5 {
	background-color: var(--color_g_5);
}
.bg_g_6 {
	background-color: var(--color_g_6);
}
.bg_g_7 {
	background-color: var(--color_g_7);
}
.bg_g_8 {
	background-color: var(--color_g_8);
}
.bg_g_9 {
	background-color: var(--color_g_9);
}

/*

borders

*/

/* TODO set inheritable variables instead maybe? */

.border_color_1 {
	border-color: var(--border_color_1);
}
.border_color_2 {
	border-color: var(--border_color_2);
}
.border_color_3 {
	border-color: var(--border_color_3);
}
.border_color_4 {
	border-color: var(--border_color_4);
}
.border_color_5 {
	border-color: var(--border_color_5);
}

.border_width_1 {
	border-width: var(--border_width_1);
}
.border_width_2 {
	border-width: var(--border_width_2);
}
.border_width_3 {
	border-width: var(--border_width_3);
}
.border_width_4 {
	border-width: var(--border_width_4);
}
.border_width_5 {
	border-width: var(--border_width_5);
}
.border_width_6 {
	border-width: var(--border_width_6);
}

.outline_width_1 {
	outline-width: var(--outline_width_1);
}
.outline_width_2 {
	outline-width: var(--outline_width_2);
}
.outline_width_3 {
	outline-width: var(--outline_width_3);
}

.radius_xs3 {
	border-radius: var(--radius_xs3);
}
.radius_xs2 {
	border-radius: var(--radius_xs2);
}
.radius_xs {
	border-radius: var(--radius_xs);
}
.radius_sm {
	border-radius: var(--radius_sm);
}
.radius_md {
	border-radius: var(--radius_md);
}
.radius_lg {
	border-radius: var(--radius_lg);
}
.radius_xl {
	border-radius: var(--radius_xl);
}

/*

layout

*/

.w_xs {
	width: var(--space_xs);
}
.w_sm {
	width: var(--space_sm);
}
.w_md {
	width: var(--space_md);
}
.w_lg {
	width: var(--space_lg);
}
.w_xl {
	width: var(--space_xl);
}
.w_xl2 {
	width: var(--space_xl2);
}
.w_xl3 {
	width: var(--space_xl3);
}
.w_xl4 {
	width: var(--space_xl4);
}
.w_xl5 {
	width: var(--space_xl5);
}
.w_xl6 {
	width: var(--space_xl6);
}
.w_xl7 {
	width: var(--space_xl7);
}
.w_xl8 {
	width: var(--space_xl8);
}
.w_xl9 {
	width: var(--space_xl9);
}
.w_xl10 {
	width: var(--space_xl10);
}
.w_xl11 {
	width: var(--space_xl11);
}
.w_xl12 {
	width: var(--space_xl12);
}
.w_xl13 {
	width: var(--space_xl13);
}
.w_xl14 {
	width: var(--space_xl14);
}
.w_xl15 {
	width: var(--space_xl15);
}

.h_xs {
	height: var(--space_xs);
}
.h_sm {
	height: var(--space_sm);
}
.h_md {
	height: var(--space_md);
}
.h_lg {
	height: var(--space_lg);
}
.h_xl {
	height: var(--space_xl);
}
.h_xl2 {
	height: var(--space_xl2);
}
.h_xl3 {
	height: var(--space_xl3);
}
.h_xl4 {
	height: var(--space_xl4);
}
.h_xl5 {
	height: var(--space_xl5);
}
.h_xl6 {
	height: var(--space_xl6);
}
.h_xl7 {
	height: var(--space_xl7);
}
.h_xl8 {
	height: var(--space_xl8);
}
.h_xl9 {
	height: var(--space_xl9);
}
.h_xl10 {
	height: var(--space_xl10);
}
.h_xl11 {
	height: var(--space_xl11);
}
.h_xl12 {
	height: var(--space_xl12);
}
.h_xl13 {
	height: var(--space_xl13);
}
.h_xl14 {
	height: var(--space_xl14);
}
.h_xl15 {
	height: var(--space_xl15);
}

.p_xs5 {
	padding: var(--space_xs5);
}
.p_xs4 {
	padding: var(--space_xs4);
}
.p_xs3 {
	padding: var(--space_xs3);
}
.p_xs2 {
	padding: var(--space_xs2);
}
.p_xs {
	padding: var(--space_xs);
}
.p_sm {
	padding: var(--space_sm);
}
.p_md {
	padding: var(--space_md);
}
.p_lg {
	padding: var(--space_lg);
}
.p_xl {
	padding: var(--space_xl);
}
.p_xl2 {
	padding: var(--space_xl2);
}
.p_xl3 {
	padding: var(--space_xl3);
}
.p_xl4 {
	padding: var(--space_xl4);
}
.p_xl5 {
	padding: var(--space_xl5);
}
.p_xl6 {
	padding: var(--space_xl6);
}
.p_xl7 {
	padding: var(--space_xl7);
}
.p_xl8 {
	padding: var(--space_xl8);
}
.p_xl9 {
	padding: var(--space_xl9);
}
.p_xl10 {
	padding: var(--space_xl10);
}
.p_xl11 {
	padding: var(--space_xl11);
}
.p_xl12 {
	padding: var(--space_xl12);
}
.p_xl13 {
	padding: var(--space_xl13);
}
.p_xl14 {
	padding: var(--space_xl14);
}
.p_xl15 {
	padding: var(--space_xl15);
}

.pt_xs5 {
	padding-top: var(--space_xs5);
}
.pt_xs4 {
	padding-top: var(--space_xs4);
}
.pt_xs3 {
	padding-top: var(--space_xs3);
}
.pt_xs2 {
	padding-top: var(--space_xs2);
}
.pt_xs {
	padding-top: var(--space_xs);
}
.pt_sm {
	padding-top: var(--space_sm);
}
.pt_md {
	padding-top: var(--space_md);
}
.pt_lg {
	padding-top: var(--space_lg);
}
.pt_xl {
	padding-top: var(--space_xl);
}
.pt_xl2 {
	padding-top: var(--space_xl2);
}
.pt_xl3 {
	padding-top: var(--space_xl3);
}
.pt_xl4 {
	padding-top: var(--space_xl4);
}
.pt_xl5 {
	padding-top: var(--space_xl5);
}
.pt_xl6 {
	padding-top: var(--space_xl6);
}
.pt_xl7 {
	padding-top: var(--space_xl7);
}
.pt_xl8 {
	padding-top: var(--space_xl8);
}
.pt_xl9 {
	padding-top: var(--space_xl9);
}
.pt_xl10 {
	padding-top: var(--space_xl10);
}
.pt_xl11 {
	padding-top: var(--space_xl11);
}
.pt_xl12 {
	padding-top: var(--space_xl12);
}
.pt_xl13 {
	padding-top: var(--space_xl13);
}
.pt_xl14 {
	padding-top: var(--space_xl14);
}
.pt_xl15 {
	padding-top: var(--space_xl15);
}

.pr_xs5 {
	padding-right: var(--space_xs5);
}
.pr_xs4 {
	padding-right: var(--space_xs4);
}
.pr_xs3 {
	padding-right: var(--space_xs3);
}
.pr_xs2 {
	padding-right: var(--space_xs2);
}
.pr_xs {
	padding-right: var(--space_xs);
}
.pr_sm {
	padding-right: var(--space_sm);
}
.pr_md {
	padding-right: var(--space_md);
}
.pr_lg {
	padding-right: var(--space_lg);
}
.pr_xl {
	padding-right: var(--space_xl);
}
.pr_xl2 {
	padding-right: var(--space_xl2);
}
.pr_xl3 {
	padding-right: var(--space_xl3);
}
.pr_xl4 {
	padding-right: var(--space_xl4);
}
.pr_xl5 {
	padding-right: var(--space_xl5);
}
.pr_xl6 {
	padding-right: var(--space_xl6);
}
.pr_xl7 {
	padding-right: var(--space_xl7);
}
.pr_xl8 {
	padding-right: var(--space_xl8);
}
.pr_xl9 {
	padding-right: var(--space_xl9);
}
.pr_xl10 {
	padding-right: var(--space_xl10);
}
.pr_xl11 {
	padding-right: var(--space_xl11);
}
.pr_xl12 {
	padding-right: var(--space_xl12);
}
.pr_xl13 {
	padding-right: var(--space_xl13);
}
.pr_xl14 {
	padding-right: var(--space_xl14);
}
.pr_xl15 {
	padding-right: var(--space_xl15);
}

.pb_xs5 {
	padding-bottom: var(--space_xs5);
}
.pb_xs4 {
	padding-bottom: var(--space_xs4);
}
.pb_xs3 {
	padding-bottom: var(--space_xs3);
}
.pb_xs2 {
	padding-bottom: var(--space_xs2);
}
.pb_xs {
	padding-bottom: var(--space_xs);
}
.pb_sm {
	padding-bottom: var(--space_sm);
}
.pb_md {
	padding-bottom: var(--space_md);
}
.pb_lg {
	padding-bottom: var(--space_lg);
}
.pb_xl {
	padding-bottom: var(--space_xl);
}
.pb_xl2 {
	padding-bottom: var(--space_xl2);
}
.pb_xl3 {
	padding-bottom: var(--space_xl3);
}
.pb_xl4 {
	padding-bottom: var(--space_xl4);
}
.pb_xl5 {
	padding-bottom: var(--space_xl5);
}
.pb_xl6 {
	padding-bottom: var(--space_xl6);
}
.pb_xl7 {
	padding-bottom: var(--space_xl7);
}
.pb_xl8 {
	padding-bottom: var(--space_xl8);
}
.pb_xl9 {
	padding-bottom: var(--space_xl9);
}
.pb_xl10 {
	padding-bottom: var(--space_xl10);
}
.pb_xl11 {
	padding-bottom: var(--space_xl11);
}
.pb_xl12 {
	padding-bottom: var(--space_xl12);
}
.pb_xl13 {
	padding-bottom: var(--space_xl13);
}
.pb_xl14 {
	padding-bottom: var(--space_xl14);
}
.pb_xl15 {
	padding-bottom: var(--space_xl15);
}

.pl_xs5 {
	padding-left: var(--space_xs5);
}
.pl_xs4 {
	padding-left: var(--space_xs4);
}
.pl_xs3 {
	padding-left: var(--space_xs3);
}
.pl_xs2 {
	padding-left: var(--space_xs2);
}
.pl_xs {
	padding-left: var(--space_xs);
}
.pl_sm {
	padding-left: var(--space_sm);
}
.pl_md {
	padding-left: var(--space_md);
}
.pl_lg {
	padding-left: var(--space_lg);
}
.pl_xl {
	padding-left: var(--space_xl);
}
.pl_xl2 {
	padding-left: var(--space_xl2);
}
.pl_xl3 {
	padding-left: var(--space_xl3);
}
.pl_xl4 {
	padding-left: var(--space_xl4);
}
.pl_xl5 {
	padding-left: var(--space_xl5);
}
.pl_xl6 {
	padding-left: var(--space_xl6);
}
.pl_xl7 {
	padding-left: var(--space_xl7);
}
.pl_xl8 {
	padding-left: var(--space_xl8);
}
.pl_xl9 {
	padding-left: var(--space_xl9);
}
.pl_xl10 {
	padding-left: var(--space_xl10);
}
.pl_xl11 {
	padding-left: var(--space_xl11);
}
.pl_xl12 {
	padding-left: var(--space_xl12);
}
.pl_xl13 {
	padding-left: var(--space_xl13);
}
.pl_xl14 {
	padding-left: var(--space_xl14);
}
.pl_xl15 {
	padding-left: var(--space_xl15);
}

.px_xs5 {
	padding-left: var(--space_xs5);
	padding-right: var(--space_xs5);
}
.px_xs4 {
	padding-left: var(--space_xs4);
	padding-right: var(--space_xs4);
}
.px_xs3 {
	padding-left: var(--space_xs3);
	padding-right: var(--space_xs3);
}
.px_xs2 {
	padding-left: var(--space_xs2);
	padding-right: var(--space_xs2);
}
.px_xs {
	padding-left: var(--space_xs);
	padding-right: var(--space_xs);
}
.px_sm {
	padding-left: var(--space_sm);
	padding-right: var(--space_sm);
}
.px_md {
	padding-left: var(--space_md);
	padding-right: var(--space_md);
}
.px_lg {
	padding-left: var(--space_lg);
	padding-right: var(--space_lg);
}
.px_xl {
	padding-left: var(--space_xl);
	padding-right: var(--space_xl);
}
.px_xl2 {
	padding-left: var(--space_xl2);
	padding-right: var(--space_xl2);
}
.px_xl3 {
	padding-left: var(--space_xl3);
	padding-right: var(--space_xl3);
}
.px_xl4 {
	padding-left: var(--space_xl4);
	padding-right: var(--space_xl4);
}
.px_xl5 {
	padding-left: var(--space_xl5);
	padding-right: var(--space_xl5);
}
.px_xl6 {
	padding-left: var(--space_xl6);
	padding-right: var(--space_xl6);
}
.px_xl7 {
	padding-left: var(--space_xl7);
	padding-right: var(--space_xl7);
}
.px_xl8 {
	padding-left: var(--space_xl8);
	padding-right: var(--space_xl8);
}
.px_xl9 {
	padding-left: var(--space_xl9);
	padding-right: var(--space_xl9);
}
.px_xl10 {
	padding-left: var(--space_xl10);
	padding-right: var(--space_xl10);
}
.px_xl11 {
	padding-left: var(--space_xl11);
	padding-right: var(--space_xl11);
}
.px_xl12 {
	padding-left: var(--space_xl12);
	padding-right: var(--space_xl12);
}
.px_xl13 {
	padding-left: var(--space_xl13);
	padding-right: var(--space_xl13);
}
.px_xl14 {
	padding-left: var(--space_xl14);
	padding-right: var(--space_xl14);
}
.px_xl15 {
	padding-left: var(--space_xl15);
	padding-right: var(--space_xl15);
}

.py_xs5 {
	padding-top: var(--space_xs5);
	padding-bottom: var(--space_xs5);
}
.py_xs4 {
	padding-top: var(--space_xs4);
	padding-bottom: var(--space_xs4);
}
.py_xs3 {
	padding-top: var(--space_xs3);
	padding-bottom: var(--space_xs3);
}
.py_xs2 {
	padding-top: var(--space_xs2);
	padding-bottom: var(--space_xs2);
}
.py_xs {
	padding-top: var(--space_xs);
	padding-bottom: var(--space_xs);
}
.py_sm {
	padding-top: var(--space_sm);
	padding-bottom: var(--space_sm);
}
.py_md {
	padding-top: var(--space_md);
	padding-bottom: var(--space_md);
}
.py_lg {
	padding-top: var(--space_lg);
	padding-bottom: var(--space_lg);
}
.py_xl {
	padding-top: var(--space_xl);
	padding-bottom: var(--space_xl);
}
.py_xl2 {
	padding-top: var(--space_xl2);
	padding-bottom: var(--space_xl2);
}
.py_xl3 {
	padding-top: var(--space_xl3);
	padding-bottom: var(--space_xl3);
}
.py_xl4 {
	padding-top: var(--space_xl4);
	padding-bottom: var(--space_xl4);
}
.py_xl5 {
	padding-top: var(--space_xl5);
	padding-bottom: var(--space_xl5);
}
.py_xl6 {
	padding-top: var(--space_xl6);
	padding-bottom: var(--space_xl6);
}
.py_xl7 {
	padding-top: var(--space_xl7);
	padding-bottom: var(--space_xl7);
}
.py_xl8 {
	padding-top: var(--space_xl8);
	padding-bottom: var(--space_xl8);
}
.py_xl9 {
	padding-top: var(--space_xl9);
	padding-bottom: var(--space_xl9);
}
.py_xl10 {
	padding-top: var(--space_xl10);
	padding-bottom: var(--space_xl10);
}
.py_xl11 {
	padding-top: var(--space_xl11);
	padding-bottom: var(--space_xl11);
}
.py_xl12 {
	padding-top: var(--space_xl12);
	padding-bottom: var(--space_xl12);
}
.py_xl13 {
	padding-top: var(--space_xl13);
	padding-bottom: var(--space_xl13);
}
.py_xl14 {
	padding-top: var(--space_xl14);
	padding-bottom: var(--space_xl14);
}
.py_xl15 {
	padding-top: var(--space_xl15);
	padding-bottom: var(--space_xl15);
}

.m_xs5 {
	margin: var(--space_xs5);
}
.m_xs4 {
	margin: var(--space_xs4);
}
.m_xs3 {
	margin: var(--space_xs3);
}
.m_xs2 {
	margin: var(--space_xs2);
}
.m_xs {
	margin: var(--space_xs);
}
.m_sm {
	margin: var(--space_sm);
}
.m_md {
	margin: var(--space_md);
}
.mlg {
	margin: var(--space_lg);
}
.m_xl {
	margin: var(--space_xl);
}
.m_xl2 {
	margin: var(--space_xl2);
}
.m_xl3 {
	margin: var(--space_xl3);
}
.m_xl4 {
	margin: var(--space_xl4);
}
.m_xl5 {
	margin: var(--space_xl5);
}
.m_xl6 {
	margin: var(--space_xl6);
}
.m_xl7 {
	margin: var(--space_xl7);
}
.m_xl8 {
	margin: var(--space_xl8);
}
.m_xl9 {
	margin: var(--space_xl9);
}
.m_xl10 {
	margin: var(--space_xl10);
}
.m_xl11 {
	margin: var(--space_xl11);
}
.m_xl12 {
	margin: var(--space_xl12);
}
.m_xl13 {
	margin: var(--space_xl13);
}
.m_xl14 {
	margin: var(--space_xl14);
}
.m_xl15 {
	margin: var(--space_xl15);
}

.mt_xs5 {
	margin-top: var(--space_xs5);
}
.mt_xs4 {
	margin-top: var(--space_xs4);
}
.mt_xs3 {
	margin-top: var(--space_xs3);
}
.mt_xs2 {
	margin-top: var(--space_xs2);
}
.mt_xs {
	margin-top: var(--space_xs);
}
.mt_sm {
	margin-top: var(--space_sm);
}
.mt_md {
	margin-top: var(--space_md);
}
.mt_lg {
	margin-top: var(--space_lg);
}
.mt_xl {
	margin-top: var(--space_xl);
}
.mt_xl2 {
	margin-top: var(--space_xl2);
}
.mt_xl3 {
	margin-top: var(--space_xl3);
}
.mt_xl4 {
	margin-top: var(--space_xl4);
}
.mt_xl5 {
	margin-top: var(--space_xl5);
}
.mt_xl6 {
	margin-top: var(--space_xl6);
}
.mt_xl7 {
	margin-top: var(--space_xl7);
}
.mt_xl8 {
	margin-top: var(--space_xl8);
}
.mt_xl9 {
	margin-top: var(--space_xl9);
}
.mt_xl10 {
	margin-top: var(--space_xl10);
}
.mt_xl11 {
	margin-top: var(--space_xl11);
}
.mt_xl12 {
	margin-top: var(--space_xl12);
}
.mt_xl13 {
	margin-top: var(--space_xl13);
}
.mt_xl14 {
	margin-top: var(--space_xl14);
}
.mt_xl15 {
	margin-top: var(--space_xl15);
}

.mr_xs5 {
	margin-right: var(--space_xs5);
}
.mr_xs4 {
	margin-right: var(--space_xs4);
}
.mr_xs3 {
	margin-right: var(--space_xs3);
}
.mr_xs2 {
	margin-right: var(--space_xs2);
}
.mr_xs {
	margin-right: var(--space_xs);
}
.mr_sm {
	margin-right: var(--space_sm);
}
.mr_md {
	margin-right: var(--space_md);
}
.mr_lg {
	margin-right: var(--space_lg);
}
.mr_xl {
	margin-right: var(--space_xl);
}
.mr_xl2 {
	margin-right: var(--space_xl2);
}
.mr_xl3 {
	margin-right: var(--space_xl3);
}
.mr_xl4 {
	margin-right: var(--space_xl4);
}
.mr_xl5 {
	margin-right: var(--space_xl5);
}
.mr_xl6 {
	margin-right: var(--space_xl6);
}
.mr_xl7 {
	margin-right: var(--space_xl7);
}
.mr_xl8 {
	margin-right: var(--space_xl8);
}
.mr_xl9 {
	margin-right: var(--space_xl9);
}
.mr_xl10 {
	margin-right: var(--space_xl10);
}
.mr_xl11 {
	margin-right: var(--space_xl11);
}
.mr_xl12 {
	margin-right: var(--space_xl12);
}
.mr_xl13 {
	margin-right: var(--space_xl13);
}
.mr_xl14 {
	margin-right: var(--space_xl14);
}
.mr_xl15 {
	margin-right: var(--space_xl15);
}

.mb_xs5 {
	margin-bottom: var(--space_xs5);
}
.mb_xs4 {
	margin-bottom: var(--space_xs4);
}
.mb_xs3 {
	margin-bottom: var(--space_xs3);
}
.mb_xs2 {
	margin-bottom: var(--space_xs2);
}
.mb_xs {
	margin-bottom: var(--space_xs);
}
.mb_sm {
	margin-bottom: var(--space_sm);
}
.mb_md {
	margin-bottom: var(--space_md);
}
.mb_lg {
	margin-bottom: var(--space_lg);
}
.mb_xl {
	margin-bottom: var(--space_xl);
}
.mb_xl2 {
	margin-bottom: var(--space_xl2);
}
.mb_xl3 {
	margin-bottom: var(--space_xl3);
}
.mb_xl4 {
	margin-bottom: var(--space_xl4);
}
.mb_xl5 {
	margin-bottom: var(--space_xl5);
}
.mb_xl6 {
	margin-bottom: var(--space_xl6);
}
.mb_xl7 {
	margin-bottom: var(--space_xl7);
}
.mb_xl8 {
	margin-bottom: var(--space_xl8);
}
.mb_xl9 {
	margin-bottom: var(--space_xl9);
}
.mb_xl10 {
	margin-bottom: var(--space_xl10);
}
.mb_xl11 {
	margin-bottom: var(--space_xl11);
}
.mb_xl12 {
	margin-bottom: var(--space_xl12);
}
.mb_xl13 {
	margin-bottom: var(--space_xl13);
}
.mb_xl14 {
	margin-bottom: var(--space_xl14);
}
.mb_xl15 {
	margin-bottom: var(--space_xl15);
}

.ml_xs5 {
	margin-left: var(--space_xs5);
}
.ml_xs4 {
	margin-left: var(--space_xs4);
}
.ml_xs3 {
	margin-left: var(--space_xs3);
}
.ml_xs2 {
	margin-left: var(--space_xs2);
}
.ml_xs {
	margin-left: var(--space_xs);
}
.ml_sm {
	margin-left: var(--space_sm);
}
.ml_md {
	margin-left: var(--space_md);
}
.ml_lg {
	margin-left: var(--space_lg);
}
.ml_xl {
	margin-left: var(--space_xl);
}
.ml_xl2 {
	margin-left: var(--space_xl2);
}
.ml_xl3 {
	margin-left: var(--space_xl3);
}
.ml_xl4 {
	margin-left: var(--space_xl4);
}
.ml_xl5 {
	margin-left: var(--space_xl5);
}
.ml_xl6 {
	margin-left: var(--space_xl6);
}
.ml_xl7 {
	margin-left: var(--space_xl7);
}
.ml_xl8 {
	margin-left: var(--space_xl8);
}
.ml_xl9 {
	margin-left: var(--space_xl9);
}
.ml_xl10 {
	margin-left: var(--space_xl10);
}
.ml_xl11 {
	margin-left: var(--space_xl11);
}
.ml_xl12 {
	margin-left: var(--space_xl12);
}
.ml_xl13 {
	margin-left: var(--space_xl13);
}
.ml_xl14 {
	margin-left: var(--space_xl14);
}
.ml_xl15 {
	margin-left: var(--space_xl15);
}

.mx_xs5 {
	margin-left: var(--space_xs5);
	margin-right: var(--space_xs5);
}
.mx_xs4 {
	margin-left: var(--space_xs4);
	margin-right: var(--space_xs4);
}
.mx_xs3 {
	margin-left: var(--space_xs3);
	margin-right: var(--space_xs3);
}
.mx_xs2 {
	margin-left: var(--space_xs2);
	margin-right: var(--space_xs2);
}
.mx_xs {
	margin-left: var(--space_xs);
	margin-right: var(--space_xs);
}
.mx_sm {
	margin-left: var(--space_sm);
	margin-right: var(--space_sm);
}
.mx_md {
	margin-left: var(--space_md);
	margin-right: var(--space_md);
}
.mx_lg {
	margin-left: var(--space_lg);
	margin-right: var(--space_lg);
}
.mx_xl {
	margin-left: var(--space_xl);
	margin-right: var(--space_xl);
}
.mx_xl2 {
	margin-left: var(--space_xl2);
	margin-right: var(--space_xl2);
}
.mx_xl3 {
	margin-left: var(--space_xl3);
	margin-right: var(--space_xl3);
}
.mx_xl4 {
	margin-left: var(--space_xl4);
	margin-right: var(--space_xl4);
}
.mx_xl5 {
	margin-left: var(--space_xl5);
	margin-right: var(--space_xl5);
}
.mx_xl6 {
	margin-left: var(--space_xl6);
	margin-right: var(--space_xl6);
}
.mx_xl7 {
	margin-left: var(--space_xl7);
	margin-right: var(--space_xl7);
}
.mx_xl8 {
	margin-left: var(--space_xl8);
	margin-right: var(--space_xl8);
}
.mx_xl9 {
	margin-left: var(--space_xl9);
	margin-right: var(--space_xl9);
}
.mx_xl10 {
	margin-left: var(--space_xl10);
	margin-right: var(--space_xl10);
}
.mx_xl11 {
	margin-left: var(--space_xl11);
	margin-right: var(--space_xl11);
}
.mx_xl12 {
	margin-left: var(--space_xl12);
	margin-right: var(--space_xl12);
}
.mx_xl13 {
	margin-left: var(--space_xl13);
	margin-right: var(--space_xl13);
}
.mx_xl14 {
	margin-left: var(--space_xl14);
	margin-right: var(--space_xl14);
}
.mx_xl15 {
	margin-left: var(--space_xl15);
	margin-right: var(--space_xl15);
}

.my_xs5 {
	margin-top: var(--space_xs5);
	margin-bottom: var(--space_xs5);
}
.my_xs4 {
	margin-top: var(--space_xs4);
	margin-bottom: var(--space_xs4);
}
.my_xs3 {
	margin-top: var(--space_xs3);
	margin-bottom: var(--space_xs3);
}
.my_xs2 {
	margin-top: var(--space_xs2);
	margin-bottom: var(--space_xs2);
}
.my_xs {
	margin-top: var(--space_xs);
	margin-bottom: var(--space_xs);
}
.my_sm {
	margin-top: var(--space_sm);
	margin-bottom: var(--space_sm);
}
.my_md {
	margin-top: var(--space_md);
	margin-bottom: var(--space_md);
}
.my_lg {
	margin-top: var(--space_lg);
	margin-bottom: var(--space_lg);
}
.my_xl {
	margin-top: var(--space_xl);
	margin-bottom: var(--space_xl);
}
.my_xl2 {
	margin-top: var(--space_xl2);
	margin-bottom: var(--space_xl2);
}
.my_xl3 {
	margin-top: var(--space_xl3);
	margin-bottom: var(--space_xl3);
}
.my_xl4 {
	margin-top: var(--space_xl4);
	margin-bottom: var(--space_xl4);
}
.my_xl5 {
	margin-top: var(--space_xl5);
	margin-bottom: var(--space_xl5);
}
.my_xl6 {
	margin-top: var(--space_xl6);
	margin-bottom: var(--space_xl6);
}
.my_xl7 {
	margin-top: var(--space_xl7);
	margin-bottom: var(--space_xl7);
}
.my_xl8 {
	margin-top: var(--space_xl8);
	margin-bottom: var(--space_xl8);
}
.my_xl9 {
	margin-top: var(--space_xl9);
	margin-bottom: var(--space_xl9);
}
.my_xl10 {
	margin-top: var(--space_xl10);
	margin-bottom: var(--space_xl10);
}
.my_xl11 {
	margin-top: var(--space_xl11);
	margin-bottom: var(--space_xl11);
}
.my_xl12 {
	margin-top: var(--space_xl12);
	margin-bottom: var(--space_xl12);
}
.my_xl13 {
	margin-top: var(--space_xl13);
	margin-bottom: var(--space_xl13);
}
.my_xl14 {
	margin-top: var(--space_xl14);
	margin-bottom: var(--space_xl14);
}
.my_xl15 {
	margin-top: var(--space_xl15);
	margin-bottom: var(--space_xl15);
}

.gap_xs5 {
	gap: var(--space_xs5);
}
.gap_xs4 {
	gap: var(--space_xs4);
}
.gap_xs3 {
	gap: var(--space_xs3);
}
.gap_xs2 {
	gap: var(--space_xs2);
}
.gap_xs {
	gap: var(--space_xs);
}
.gap_sm {
	gap: var(--space_sm);
}
.gap_md {
	gap: var(--space_md);
}
.gap_lg {
	gap: var(--space_lg);
}
.gap_xl {
	gap: var(--space_xl);
}
.gap_xl2 {
	gap: var(--space_xl2);
}
.gap_xl3 {
	gap: var(--space_xl3);
}
.gap_xl4 {
	gap: var(--space_xl4);
}
.gap_xl5 {
	gap: var(--space_xl5);
}
.gap_xl6 {
	gap: var(--space_xl6);
}
.gap_xl7 {
	gap: var(--space_xl7);
}
.gap_xl8 {
	gap: var(--space_xl8);
}
.gap_xl9 {
	gap: var(--space_xl9);
}
.gap_xl10 {
	gap: var(--space_xl10);
}
.gap_xl11 {
	gap: var(--space_xl11);
}
.gap_xl12 {
	gap: var(--space_xl12);
}
.gap_xl13 {
	gap: var(--space_xl13);
}
.gap_xl14 {
	gap: var(--space_xl14);
}
.gap_xl15 {
	gap: var(--space_xl15);
}

.column_gap_xs5 {
	column-gap: var(--space_xs5);
}
.column_gap_xs4 {
	column-gap: var(--space_xs4);
}
.column_gap_xs3 {
	column-gap: var(--space_xs3);
}
.column_gap_xs2 {
	column-gap: var(--space_xs2);
}
.column_gap_xs {
	column-gap: var(--space_xs);
}
.column_gap_sm {
	column-gap: var(--space_sm);
}
.column_gap_md {
	column-gap: var(--space_md);
}
.column_gap_lg {
	column-gap: var(--space_lg);
}
.column_gap_xl {
	column-gap: var(--space_xl);
}
.column_gap_xl2 {
	column-gap: var(--space_xl2);
}
.column_gap_xl3 {
	column-gap: var(--space_xl3);
}
.column_gap_xl4 {
	column-gap: var(--space_xl4);
}
.column_gap_xl5 {
	column-gap: var(--space_xl5);
}
.column_gap_xl6 {
	column-gap: var(--space_xl6);
}
.column_gap_xl7 {
	column-gap: var(--space_xl7);
}
.column_gap_xl8 {
	column-gap: var(--space_xl8);
}
.column_gap_xl9 {
	column-gap: var(--space_xl9);
}
.column_gap_xl10 {
	column-gap: var(--space_xl10);
}
.column_gap_xl11 {
	column-gap: var(--space_xl11);
}
.column_gap_xl12 {
	column-gap: var(--space_xl12);
}
.column_gap_xl13 {
	column-gap: var(--space_xl13);
}
.column_gap_xl14 {
	column-gap: var(--space_xl14);
}
.column_gap_xl15 {
	column-gap: var(--space_xl15);
}

.row_gap_xs5 {
	row-gap: var(--space_xs5);
}
.row_gap_xs4 {
	row-gap: var(--space_xs4);
}
.row_gap_xs3 {
	row-gap: var(--space_xs3);
}
.row_gap_xs2 {
	row-gap: var(--space_xs2);
}
.row_gap_xs {
	row-gap: var(--space_xs);
}
.row_gap_sm {
	row-gap: var(--space_sm);
}
.row_gap_md {
	row-gap: var(--space_md);
}
.row_gap_lg {
	row-gap: var(--space_lg);
}
.row_gap_xl {
	row-gap: var(--space_xl);
}
.row_gap_xl2 {
	row-gap: var(--space_xl2);
}
.row_gap_xl3 {
	row-gap: var(--space_xl3);
}
.row_gap_xl4 {
	row-gap: var(--space_xl4);
}
.row_gap_xl5 {
	row-gap: var(--space_xl5);
}
.row_gap_xl6 {
	row-gap: var(--space_xl6);
}
.row_gap_xl7 {
	row-gap: var(--space_xl7);
}
.row_gap_xl8 {
	row-gap: var(--space_xl8);
}
.row_gap_xl9 {
	row-gap: var(--space_xl9);
}
.row_gap_xl10 {
	row-gap: var(--space_xl10);
}
.row_gap_xl11 {
	row-gap: var(--space_xl11);
}
.row_gap_xl12 {
	row-gap: var(--space_xl12);
}
.row_gap_xl13 {
	row-gap: var(--space_xl13);
}
.row_gap_xl14 {
	row-gap: var(--space_xl14);
}
.row_gap_xl15 {
	row-gap: var(--space_xl15);
}

/*

other

*/

.fade_1 {
	opacity: var(--fade_1);
}
.fade_2 {
	opacity: var(--fade_2);
}
.fade_3 {
	opacity: var(--fade_3);
}
.fade_4 {
	opacity: var(--fade_4);
}
.fade_5 {
	opacity: var(--fade_5);
}
.fade_6 {
	opacity: var(--fade_6);
}

.shadow {
	box-shadow: var(--shadow);
}
.shadow_lg {
	box-shadow: var(--shadow_lg);
}
.shadow_inset {
	box-shadow: var(--shadow_inset);
}
.shadow_inset_active {
	box-shadow: var(--shadow_inset_active);
}
`,Tt=`/* @ryanatkn/fuz/semantic_classes.css */

/*
The name \`.prose\` was copied from Tailwind's @tailwindcss/typography -
https://tailwindcss.com/docs/typography-plugin
In Fuz it means "document-like typographic markup" distinct from the rest of the page's markup.
An example is \`ul\`s - inside \`.prose\` they have visible bullet points, but they don't by default.
MDN's documented content categories didn't match the intent:
https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories
*/
.prose {
	line-height: var(--line_height_4);
	overflow-wrap: break-word; /* @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap#break-word */
}
.prose :is(h1, h2, h3, h4, h5, h6) {
	line-height: var(--line_height_3);
	text-wrap: balance; /* @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap#balance */
}
.prose h1 {
	margin: var(--space_xl2) 0;
}
.prose h2 {
	margin: var(--space_xl) 0;
}
.prose h3 {
	margin: var(--space_lg) 0;
}
.prose h4 {
	margin: var(--space_md) 0;
}
.prose h5 {
	margin: var(--space_sm) 0;
}
.prose h6 {
	margin: var(--space_xs) 0;
}
.prose :is(ul, ol, menu) {
	padding-left: var(--space_xl4);
	list-style: initial;
}
.prose ol {
	list-style: decimal;
}
.prose li {
	display: list-item; /* reset from \`block\` */
}
.prose a {
	display: inline;
}
.prose section {
	margin-bottom: var(--space_xl4);
}
/* checkboxes and radios are expected to be nested inside a \`label\`, thus no bottom margin */
.prose
	:is(
		p,
		ul,
		ol,
		menu,
		form,
		fieldset,
		table,
		details,
		textarea,
		select,
		label,
		pre,
		blockquote,
		aside
	):not(:last-child) {
	margin-bottom: var(--space_lg);
}
/* TODO others with a smaller margin? */
.prose summary:not(:last-child) {
	/* TODO maybe change API to like \`--margin_bottom\`? */
	margin-bottom: var(--space_xs);
}

/* TODO maybe remove? */
.selectable {
	cursor: pointer;
	background-color: var(--button_bg);
	border-color: var(--border_color_3);
	border-style: var(--border_style);
	border-width: var(--border_width);
}
.selectable:hover {
	background-color: var(--button_bg_hover);
	border-color: var(--border_color_2);
}
.selectable.selected,
.selectable:active {
	background-color: var(--button_bg_active);
	border-color: var(--color_a_5);
}
.selectable.selected {
	cursor: default;
}
.selectable.selected.deselectable:not(:disabled) {
	cursor: pointer;
}

/* A pane is a box floating over the page, like for dialogs.
By default it's opaque, resetting the background to the initial depth. */
.pane {
	background-color: var(--pane_bg, var(--bg));
	/* TODO this is preferred but causes blurriness with nested contextmenus, maybe they shouldn't be panes? is pane overloaded? maybe extract the bg part of it?
	filter: drop-shadow(var(--shadow)); */
	box-shadow: var(--shadow);
	border-radius: var(--radius_xs);
}
/* A panel is a box embedded into the page, useful for visually isolating content. */
.panel {
	border-radius: var(--radius_sm);
	background-color: var(--panel_bg, var(--fg_1));
}

/* TODO @multiple docs in library */

/* TODO other button variants? */
/* TODO this is slightly strange that it doesn't use --icon_size */
.icon_button {
	width: var(--input_height);
	height: var(--input_height);
	min-width: var(--input_height);
	min-height: var(--input_height);
	flex-shrink: 0;
	font-weight: 900;
	padding: 0;
}
.plain {
	border: none;
	box-shadow: none;
	--button_bg: transparent;
}

.menu_item {
	--border_radius: 0;
	--border_color: var(--border_color_3);
	position: relative;
	z-index: 2;
	width: 100%;
	min-height: var(--min_height, var(--icon_size_sm));
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: var(
		--menu_item_padding,
		var(--space_xs3) var(--space_xs3) var(--space_xs3) var(--space_xs)
	);
}
.menu_item.selected {
	/* TODO different patterns for border and bg? */
	--border_color: var(--color_a_5);
	background-color: var(--fg_1);
	z-index: 1;
}
.menu_item.plain {
	border: none;
}
.menu_item .content {
	display: flex;
	align-items: center;
	flex: 1;
	/* allows the flex children to shrink */
	min-width: 0;
}
.menu_item .icon {
	width: var(--icon_size);
	margin-right: var(--space_xs);
	flex-shrink: 0;
	text-align: center;
	font-weight: 900;
}
.menu_item .title {
	margin-right: var(--space_lg);
	flex-shrink: 1;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	line-height: var(--line_height_6); /* prevents the bottom of g's and others from being cut off */
}

.chevron {
	position: relative;
	height: 8px;
}
.chevron::before {
	display: block;
	content: '';
	border: 4px solid transparent;
	border-left-color: var(--text_2);
}

.chip {
	font-size: var(--font_size_sm);
	font-weight: 600;
	padding: var(--space_xs4) var(--space_sm);
	background-color: var(--darken_1);
	border-radius: var(--radius_xs);
}
a.chip {
	font-weight: 700;
}

/* Formats content to wrap long strings and preserve displayed whitespace. */
.formatted {
	overflow: hidden;
	white-space: break-spaces;
}

/* TODO rename these? use to be columns, maybe should be? */
.width_md {
	width: 100%;
	max-width: var(--width_md);
}
.width_sm {
	width: 100%;
	max-width: var(--width_sm);
}
`,Et=i=>({}),ct=i=>({}),Dt=i=>({}),it=i=>({});function At(i){let n,a;const t=i[3].summary,e=un(t,i,i[2],ct),r=i[3].default,o=un(r,i,i[2],null);return{c(){e&&e.c(),n=u(),o&&o.c()},l(_){e&&e.l(_),n=w(_),o&&o.l(_)},m(_,s){e&&e.m(_,s),E(_,n,s),o&&o.m(_,s),a=!0},p(_,s){e&&e.p&&(!a||s&4)&&wn(e,t,_,_[2],a?yn(t,_[2],s,Et):kn(_[2]),ct),o&&o.p&&(!a||s&4)&&wn(o,r,_,_[2],a?yn(r,_[2],s,null):kn(_[2]),null)},i(_){a||($(e,_),$(o,_),a=!0)},o(_){C(e,_),C(o,_),a=!1},d(_){_&&d(n),e&&e.d(_),o&&o.d(_)}}}function It(i){let n,a,t;const e=i[3].summary,r=un(e,i,i[2],it);let o=i[0]&&pt(i);return{c(){r&&r.c(),n=u(),o&&o.c(),a=st()},l(_){r&&r.l(_),n=w(_),o&&o.l(_),a=st()},m(_,s){r&&r.m(_,s),E(_,n,s),o&&o.m(_,s),E(_,a,s),t=!0},p(_,s){r&&r.p&&(!t||s&4)&&wn(r,e,_,_[2],t?yn(e,_[2],s,Dt):kn(_[2]),it),_[0]?o?(o.p(_,s),s&1&&$(o,1)):(o=pt(_),o.c(),$(o,1),o.m(a.parentNode,a)):o&&(wt(),C(o,1,1,()=>{o=null}),kt())},i(_){t||($(r,_),$(o),t=!0)},o(_){C(r,_),C(o),t=!1},d(_){_&&(d(n),d(a)),r&&r.d(_),o&&o.d(_)}}}function pt(i){let n;const a=i[3].default,t=un(a,i,i[2],null);return{c(){t&&t.c()},l(e){t&&t.l(e)},m(e,r){t&&t.m(e,r),n=!0},p(e,r){t&&t.p&&(!n||r&4)&&wn(t,a,e,e[2],n?yn(a,e[2],r,null):kn(e[2]),null)},i(e){n||($(t,e),n=!0)},o(e){C(t,e),n=!1},d(e){t&&t.d(e)}}}function Mt(i){let n,a,t,e,r,o;const _=[It,At],s=[];function k(l,m){return l[1]?0:1}return a=k(i),t=s[a]=_[a](i),{c(){n=x("details"),t.c()},l(l){n=v(l,"DETAILS",{});var m=y(n);t.l(m),m.forEach(d)},m(l,m){E(l,n,m),s[a].m(n,null),n.open=i[0],e=!0,r||(o=yt(n,"toggle",i[4]),r=!0)},p(l,[m]){let b=a;a=k(l),a===b?s[a].p(l,m):(wt(),C(s[b],1,1,()=>{s[b]=null}),kt(),t=s[a],t?t.p(l,m):(t=s[a]=_[a](l),t.c()),$(t,1),t.m(n,null)),m&1&&(n.open=l[0])},i(l){e||($(t),e=!0)},o(l){C(t),e=!1},d(l){l&&d(n),s[a].d(),r=!1,o()}}}function qt(i,n,a){let{$$slots:t={},$$scope:e}=n,{lazy:r=!0}=n,{open:o=void 0}=n;function _(){o=this.open,a(0,o)}return i.$$set=s=>{"lazy"in s&&a(1,r=s.lazy),"open"in s&&a(0,o=s.open),"$$scope"in s&&a(2,e=s.$$scope)},[o,r,e,t,_]}class Qn extends bt{constructor(n){super(),ut(this,n,qt,Mt,ft,{lazy:1,open:0})}}function gt(i,n,a){const t=i.slice();return t[4]=n[a],t}function dt(i,n,a){const t=i.slice();return t[4]=n[a],t}function xt(i,n,a){const t=i.slice();return t[4]=n[a],t}function vt(i){let n,a,t=i[4]+"",e;return{c(){n=x("div"),a=A("."),e=A(t)},l(r){n=v(r,"DIV",{});var o=y(n);a=I(o,"."),e=I(o,t),o.forEach(d)},m(r,o){E(r,n,o),c(n,a),c(n,e)},p:F,d(r){r&&d(n)}}}function mt(i){let n,a,t=i[4]+"",e;return{c(){n=x("div"),a=A("."),e=A(t)},l(r){n=v(r,"DIV",{});var o=y(n);a=I(o,"."),e=I(o,t),o.forEach(d)},m(r,o){E(r,n,o),c(n,a),c(n,e)},p:F,d(r){r&&d(n)}}}function ht(i){let n,a,t=i[4]+"",e;return{c(){n=x("div"),a=A("."),e=A(t)},l(r){n=v(r,"DIV",{});var o=y(n);a=I(o,"."),e=I(o,t),o.forEach(d)},m(r,o){E(r,n,o),c(n,a),c(n,e)},p:F,d(r){r&&d(n)}}}function Ht(i){let n,a,t,e,r,o="source",_,s,k;return t=new Xn({props:{size:"var(--icon_size_xs)"}}),s=new $n({props:{content:St,lang:"css"}}),{c(){n=x("p"),a=x("a"),q(t.$$.fragment),e=u(),r=x("span"),r.textContent=o,_=u(),q(s.$$.fragment),this.h()},l(l){n=v(l,"P",{class:!0});var m=y(n);a=v(m,"A",{href:!0,class:!0});var b=y(a);H(t.$$.fragment,b),e=w(b),r=v(b,"SPAN",{class:!0,"data-svelte-h":!0}),D(r)!=="svelte-11cmn23"&&(r.textContent=o),b.forEach(d),m.forEach(d),_=w(l),H(s.$$.fragment,l),this.h()},h(){z(r,"class","ml_xs"),z(a,"href","https://github.com/ryanatkn/fuz/blob/main/src/lib/utility_classes.css"),z(a,"class","svelte-1crqp3u"),z(n,"class","source_link svelte-1crqp3u")},m(l,m){E(l,n,m),c(n,a),P(t,a,null),c(a,e),c(a,r),E(l,_,m),P(s,l,m),k=!0},p:F,i(l){k||($(t.$$.fragment,l),$(s.$$.fragment,l),k=!0)},o(l){C(t.$$.fragment,l),C(s.$$.fragment,l),k=!1},d(l){l&&(d(n),d(_)),L(t),L(s,l)}}}function Pt(i){let n,a='<span class="font_family_mono">@ryanatkn/fuz/utility_classes.css</span>';return{c(){n=x("summary"),n.innerHTML=a,this.h()},l(t){n=v(t,"SUMMARY",{slot:!0,"data-svelte-h":!0}),D(n)!=="svelte-1nab1b3"&&(n.innerHTML=a),this.h()},h(){z(n,"slot","summary")},m(t,e){E(t,n,e)},p:F,d(t){t&&d(n)}}}function Lt(i){let n,a,t,e,r,o="source",_,s,k;return t=new Xn({props:{size:"var(--icon_size_xs)"}}),s=new $n({props:{content:Ot,lang:"css"}}),{c(){n=x("p"),a=x("a"),q(t.$$.fragment),e=u(),r=x("span"),r.textContent=o,_=u(),q(s.$$.fragment),this.h()},l(l){n=v(l,"P",{class:!0});var m=y(n);a=v(m,"A",{href:!0,class:!0});var b=y(a);H(t.$$.fragment,b),e=w(b),r=v(b,"SPAN",{class:!0,"data-svelte-h":!0}),D(r)!=="svelte-11cmn23"&&(r.textContent=o),b.forEach(d),m.forEach(d),_=w(l),H(s.$$.fragment,l),this.h()},h(){z(r,"class","ml_xs"),z(a,"href","https://github.com/ryanatkn/fuz/blob/main/src/lib/variable_classes.css"),z(a,"class","svelte-1crqp3u"),z(n,"class","source_link svelte-1crqp3u")},m(l,m){E(l,n,m),c(n,a),P(t,a,null),c(a,e),c(a,r),E(l,_,m),P(s,l,m),k=!0},p:F,i(l){k||($(t.$$.fragment,l),$(s.$$.fragment,l),k=!0)},o(l){C(t.$$.fragment,l),C(s.$$.fragment,l),k=!1},d(l){l&&(d(n),d(_)),L(t),L(s,l)}}}function Nt(i){let n,a='<span class="font_family_mono">@ryanatkn/fuz/variable_classes.css</span>';return{c(){n=x("summary"),n.innerHTML=a,this.h()},l(t){n=v(t,"SUMMARY",{slot:!0,"data-svelte-h":!0}),D(n)!=="svelte-1reygi5"&&(n.innerHTML=a),this.h()},h(){z(n,"slot","summary")},m(t,e){E(t,n,e)},p:F,d(t){t&&d(n)}}}function Vt(i){let n,a,t,e,r,o="source",_,s,k;return t=new Xn({props:{size:"var(--icon_size_xs)"}}),s=new $n({props:{content:Tt,lang:"css"}}),{c(){n=x("p"),a=x("a"),q(t.$$.fragment),e=u(),r=x("span"),r.textContent=o,_=u(),q(s.$$.fragment),this.h()},l(l){n=v(l,"P",{class:!0});var m=y(n);a=v(m,"A",{href:!0,class:!0});var b=y(a);H(t.$$.fragment,b),e=w(b),r=v(b,"SPAN",{class:!0,"data-svelte-h":!0}),D(r)!=="svelte-11cmn23"&&(r.textContent=o),b.forEach(d),m.forEach(d),_=w(l),H(s.$$.fragment,l),this.h()},h(){z(r,"class","ml_xs"),z(a,"href","https://github.com/ryanatkn/fuz/blob/main/src/lib/semantic_classes.css"),z(a,"class","svelte-1crqp3u"),z(n,"class","source_link svelte-1crqp3u")},m(l,m){E(l,n,m),c(n,a),P(t,a,null),c(a,e),c(a,r),E(l,_,m),P(s,l,m),k=!0},p:F,i(l){k||($(t.$$.fragment,l),$(s.$$.fragment,l),k=!0)},o(l){C(t.$$.fragment,l),C(s.$$.fragment,l),k=!1},d(l){l&&(d(n),d(_)),L(t),L(s,l)}}}function jt(i){let n,a='<span class="font_family_mono">@ryanatkn/fuz/semantic_classes.css</span>';return{c(){n=x("summary"),n.innerHTML=a,this.h()},l(t){n=v(t,"SUMMARY",{slot:!0,"data-svelte-h":!0}),D(n)!=="svelte-1jrche9"&&(n.innerHTML=a),this.h()},h(){z(n,"slot","summary")},m(t,e){E(t,n,e)},p:F,d(t){t&&d(n)}}}function Ut(i){let n,a,t="both the docs and implementation of these need more work",e,r,o,_="Optional CSS classes",s,k,l="Fuz has three optional CSS files with different kinds of classes:",m,b,zn,en,Jn="Utility classes use plain CSS for convenient HTML authoring.",Cn,G,Sn,Q,On,Tn,on,Kn=`Semantic classes are named groupings of styles that are like the CSS equivalent of Svelte
				components.`,En,_n,Zn=`With more sophisticated build tooling, these classes could be generated on demand instead of
				distributed as static files, or unused classes could be removed with a Vite plugin.`,Dn,j,ln,nt="Utility classes",An,X,In,J,Mn,sn,tt="<",qn,Hn,Pn,Ln,K,Nn,Z,cn,at="Variable classes",Vn,nn,jn,tn,pn,rt="Semantic classes",Un,an,Fn,N,gn,et="Raw CSS",Rn,R,Wn,W,Yn,Y,hn;b=new $n({props:{content:`<!-- +layout.svelte -->
<script>
	import '@ryanatkn/fuz/style.css'; // required
	import '@ryanatkn/fuz/theme.css'; // or bring your own
	import '@ryanatkn/fuz/utility_classes.css';
	import '@ryanatkn/fuz/variable_classes.css';
	import '@ryanatkn/fuz/semantic_classes.css';
	// ...`}}),Q=new zt({props:{name:"variables"}});let dn=mn(i[1]),S=[];for(let p=0;p<dn.length;p+=1)S[p]=vt(xt(i,dn,p));let xn=mn(i[2]),O=[];for(let p=0;p<xn.length;p+=1)O[p]=mt(dt(i,xn,p));let vn=mn(i[3]),T=[];for(let p=0;p<vn.length;p+=1)T[p]=ht(gt(i,vn,p));return R=new Qn({props:{$$slots:{summary:[Pt],default:[Ht]},$$scope:{ctx:i}}}),W=new Qn({props:{$$slots:{summary:[Nt],default:[Lt]},$$scope:{ctx:i}}}),Y=new Qn({props:{$$slots:{summary:[jt],default:[Vt]},$$scope:{ctx:i}}}),{c(){n=x("div"),a=x("aside"),a.textContent=t,e=u(),r=x("section"),o=x("h3"),o.textContent=_,s=u(),k=x("p"),k.textContent=l,m=u(),q(b.$$.fragment),zn=u(),en=x("p"),en.textContent=Jn,Cn=u(),G=x("p"),Sn=A("Variable classes are utility classes based on Fuz style "),q(Q.$$.fragment),On=A("."),Tn=u(),on=x("p"),on.textContent=Kn,En=u(),_n=x("aside"),_n.textContent=Zn,Dn=u(),j=x("section"),ln=x("h3"),ln.textContent=nt,An=u(),X=x("p"),In=A("Fuz provides an arbitrary set of utility classes for CSS, and defers to CSS in "),J=x("a"),Mn=A("Svelte's "),sn=x("code"),qn=A(tt),Hn=A("style>"),Pn=A(" for complex and uncommon patterns."),Ln=u(),K=x("div");for(let p=0;p<S.length;p+=1)S[p].c();Nn=u(),Z=x("section"),cn=x("h3"),cn.textContent=at,Vn=u(),nn=x("div");for(let p=0;p<O.length;p+=1)O[p].c();jn=u(),tn=x("section"),pn=x("h3"),pn.textContent=rt,Un=u(),an=x("div");for(let p=0;p<T.length;p+=1)T[p].c();Fn=u(),N=x("section"),gn=x("h3"),gn.textContent=et,Rn=u(),q(R.$$.fragment),Wn=u(),q(W.$$.fragment),Yn=u(),q(Y.$$.fragment),this.h()},l(p){n=v(p,"DIV",{class:!0});var f=y(n);a=v(f,"ASIDE",{"data-svelte-h":!0}),D(a)!=="svelte-1vdl2a4"&&(a.textContent=t),e=w(f),r=v(f,"SECTION",{});var h=y(r);o=v(h,"H3",{"data-svelte-h":!0}),D(o)!=="svelte-1hob737"&&(o.textContent=_),s=w(h),k=v(h,"P",{"data-svelte-h":!0}),D(k)!=="svelte-gljyei"&&(k.textContent=l),m=w(h),H(b.$$.fragment,h),zn=w(h),en=v(h,"P",{"data-svelte-h":!0}),D(en)!=="svelte-f4nea2"&&(en.textContent=Jn),Cn=w(h),G=v(h,"P",{});var rn=y(G);Sn=I(rn,"Variable classes are utility classes based on Fuz style "),H(Q.$$.fragment,rn),On=I(rn,"."),rn.forEach(d),Tn=w(h),on=v(h,"P",{"data-svelte-h":!0}),D(on)!=="svelte-1g17kut"&&(on.textContent=Kn),En=w(h),_n=v(h,"ASIDE",{"data-svelte-h":!0}),D(_n)!=="svelte-1lyo5wc"&&(_n.textContent=Zn),h.forEach(d),Dn=w(f),j=v(f,"SECTION",{});var U=y(j);ln=v(U,"H3",{"data-svelte-h":!0}),D(ln)!=="svelte-166kuga"&&(ln.textContent=nt),An=w(U),X=v(U,"P",{});var g=y(X);In=I(g,"Fuz provides an arbitrary set of utility classes for CSS, and defers to CSS in "),J=v(g,"A",{href:!0});var M=y(J);Mn=I(M,"Svelte's "),sn=v(M,"CODE",{});var Bn=y(sn);qn=I(Bn,tt),Hn=I(Bn,"style>"),Bn.forEach(d),M.forEach(d),Pn=I(g," for complex and uncommon patterns."),g.forEach(d),Ln=w(U),K=v(U,"DIV",{class:!0});var ot=y(K);for(let V=0;V<S.length;V+=1)S[V].l(ot);ot.forEach(d),U.forEach(d),Nn=w(f),Z=v(f,"SECTION",{});var fn=y(Z);cn=v(fn,"H3",{"data-svelte-h":!0}),D(cn)!=="svelte-rzjzq8"&&(cn.textContent=at),Vn=w(fn),nn=v(fn,"DIV",{class:!0});var _t=y(nn);for(let V=0;V<O.length;V+=1)O[V].l(_t);_t.forEach(d),fn.forEach(d),jn=w(f),tn=v(f,"SECTION",{});var bn=y(tn);pn=v(bn,"H3",{"data-svelte-h":!0}),D(pn)!=="svelte-3esulw"&&(pn.textContent=rt),Un=w(bn),an=v(bn,"DIV",{class:!0});var lt=y(an);for(let V=0;V<T.length;V+=1)T[V].l(lt);lt.forEach(d),bn.forEach(d),Fn=w(f),N=v(f,"SECTION",{});var B=y(N);gn=v(B,"H3",{"data-svelte-h":!0}),D(gn)!=="svelte-8blf9p"&&(gn.textContent=et),Rn=w(B),H(R.$$.fragment,B),Wn=w(B),H(W.$$.fragment,B),Yn=w(B),H(Y.$$.fragment,B),B.forEach(d),f.forEach(d),this.h()},h(){z(J,"href","https://svelte.dev/docs/svelte-components#style"),z(K,"class","classes svelte-1crqp3u"),z(nn,"class","classes svelte-1crqp3u"),z(an,"class","classes svelte-1crqp3u"),z(n,"class","prose")},m(p,f){E(p,n,f),c(n,a),c(n,e),c(n,r),c(r,o),c(r,s),c(r,k),c(r,m),P(b,r,null),c(r,zn),c(r,en),c(r,Cn),c(r,G),c(G,Sn),P(Q,G,null),c(G,On),c(r,Tn),c(r,on),c(r,En),c(r,_n),c(n,Dn),c(n,j),c(j,ln),c(j,An),c(j,X),c(X,In),c(X,J),c(J,Mn),c(J,sn),c(sn,qn),c(sn,Hn),c(X,Pn),c(j,Ln),c(j,K);for(let h=0;h<S.length;h+=1)S[h]&&S[h].m(K,null);c(n,Nn),c(n,Z),c(Z,cn),c(Z,Vn),c(Z,nn);for(let h=0;h<O.length;h+=1)O[h]&&O[h].m(nn,null);c(n,jn),c(n,tn),c(tn,pn),c(tn,Un),c(tn,an);for(let h=0;h<T.length;h+=1)T[h]&&T[h].m(an,null);c(n,Fn),c(n,N),c(N,gn),c(N,Rn),P(R,N,null),c(N,Wn),P(W,N,null),c(N,Yn),P(Y,N,null),hn=!0},p(p,f){if(f&2){dn=mn(p[1]);let g;for(g=0;g<dn.length;g+=1){const M=xt(p,dn,g);S[g]?S[g].p(M,f):(S[g]=vt(M),S[g].c(),S[g].m(K,null))}for(;g<S.length;g+=1)S[g].d(1);S.length=dn.length}if(f&4){xn=mn(p[2]);let g;for(g=0;g<xn.length;g+=1){const M=dt(p,xn,g);O[g]?O[g].p(M,f):(O[g]=mt(M),O[g].c(),O[g].m(nn,null))}for(;g<O.length;g+=1)O[g].d(1);O.length=xn.length}if(f&8){vn=mn(p[3]);let g;for(g=0;g<vn.length;g+=1){const M=gt(p,vn,g);T[g]?T[g].p(M,f):(T[g]=ht(M),T[g].c(),T[g].m(an,null))}for(;g<T.length;g+=1)T[g].d(1);T.length=vn.length}const h={};f&2048&&(h.$$scope={dirty:f,ctx:p}),R.$set(h);const rn={};f&2048&&(rn.$$scope={dirty:f,ctx:p}),W.$set(rn);const U={};f&2048&&(U.$$scope={dirty:f,ctx:p}),Y.$set(U)},i(p){hn||($(b.$$.fragment,p),$(Q.$$.fragment,p),$(R.$$.fragment,p),$(W.$$.fragment,p),$(Y.$$.fragment,p),hn=!0)},o(p){C(b.$$.fragment,p),C(Q.$$.fragment,p),C(R.$$.fragment,p),C(W.$$.fragment,p),C(Y.$$.fragment,p),hn=!1},d(p){p&&d(n),L(b),L(Q),Gn(S,p),Gn(O,p),Gn(T,p),L(R),L(W),L(Y)}}}function Ft(i){let n,a;return n=new $t({props:{tome:i[0],$$slots:{default:[Ut]},$$scope:{ctx:i}}}),{c(){q(n.$$.fragment)},l(t){H(n.$$.fragment,t)},m(t,e){P(n,t,e),a=!0},p(t,[e]){const r={};e&2048&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){a||($(n.$$.fragment,t),a=!0)},o(t){C(n.$$.fragment,t),a=!1},d(t){L(n,t)}}}const Rt="classes";function Wt(i){return[Ct(Rt),["relative","absolute","fixed","sticky","static","overflow_auto|hidden|scroll|clip|visible","overflow_x_auto|hidden|scroll|clip|visible","overflow_y_auto|hidden|scroll|clip|visible","inline","inline_block","block","display_none|contents","flex","flex_1","grid","box","row","wrap","nowrap","float_none|left|right|inline_start|inline_end","text_align_center|right|left|justify","font_weight_100-900","ellipsis","pixelated","radius_0|100","p_0","pt_0","pr_0","pb_0","pl_0","px_0","py_0","m_0","mt_0","mr_0","mb_0","ml_0","mx_0","my_0","m_auto","mx_auto","my_auto","w_100","w_0","h_100","h_0","fade_0","fade_100"],["font_family_sans|mono","line_height","line_height_1-7","size_xs-xl9","icon_size_xs-xl2","text_1-3","darken_1-9","lighten_1-9","bg","fg","fg_1-9","bg_1-9","color_darken_1-9","color_lighten_1-9","color_bg","color_fg","color_fg_1-9","color_bg_1-9","hue_a-g","color_a-g_1 -9","bg_a-g_1-9","border_color_1-5","border_width_1-6","outline_width_1-3","radius_xs3-xl","w_xs-xl15","h_xs-xl15","p_xs5-xl15","pt_xs5-xl15","pr_xs5-xl15","pb_xs5-xl15","pl_xs5-xl15","px_xs5-xl15","py_xs5-xl15","m_xs5-xl15","mt_xs5-xl15","mr_xs5-xl15","mb_xs5-xl15","ml_xs5-xl15","mx_xs5-xl15","my_xs5-xl15","gap_xs5-xl15","column_gap_xs5-xl15","row_gap_xs5-xl15","fade_1-6","shadow","shadow_lg","shadow_inset","shadow_inset_active"],["prose","selectable","pane","panel","icon_button","plain","menu_item","chevron","chip","formatted","width_sm-lg"]]}class na extends bt{constructor(n){super(),ut(this,n,Wt,Ft,ft,{})}}export{na as component};
