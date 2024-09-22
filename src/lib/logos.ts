import type {Svg_Data} from '$lib/svg.js';

// TODO are there significant performance gains to making this JSON?

export const zzz_logo = {
	label: "three sleepy z's",
	fill: 'var(--color_g_5)', // TODO BLOCK hardcoded? need to update the plain svg
	// TODO BLOCK remove the `g` from the plain svg
	paths: [
		{
			d: 'm 75.29285,61.962268 1.752156,1.914421 14.843359,1.811307 L 74.065203,86.193332 99.966781,85.408255 98.719988,83.648246 85.143565,82.136577 98.430963,62.887945',
		},
		{
			d: 'm 47.636533,44.203704 2.295155,2.48945 25.618425,0.406407 L 45.93783,91.082857 89.425317,93.78003 87.862334,91.36274 61.57861,83.03068 86.244719,42.177019',
		},
		{
			d: 'M 0.62464489,0.27405496 3.9721704,4.0993769 50.515703,10.089712 0.04581262,99.957542 68.009395,98.901532 65.391343,95.487941 24.119119,88.067804 66.301842,2.2896897',
		},
	],
} satisfies Svg_Data;

export const gro_logo = {
	label: 'a pixelated green oak acorn with a glint of sun',
	paths: [
		{
			fill: '#6f974c',
			d: 'm 24.035592,57.306905 v -14.5 h 16.329497 v 14.25 z',
		},
		{
			fill: '#5e853f',
			d: 'M 43.75,93.75 H 37.5 V 87.5 H 31.25 V 81.25 H 25 V 75 H 18.75 V 62.5 H 12.5 V 50 H 6.25 V 43.75 H 4 v -21 L 22.75,16.5 h 40.5 l 0.5,61.5 -5,-0.75 -0.25,16.5 h -2.25 l -4,2.25 -2.24617,4 H 43.75 Z M 37.5,50 H 31.25 V 43.75 H 25 v 12.5 h 12.5 z',
		},
		{
			fill: '#6f492b',
			d: 'm 50,93.75 h 6.25 V 75 H 62.5 V 50 H 56.25 V 37.5 H 50 V 31.25 H 43.75 V 25 H 31.25 V 18.75 H 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 v -25 H 6.25 V 12.5 h 12.5 V 6.25 H 37.5 V 0 h 25 v 6.25 h 18.75 v 6.25 h 12.5 v 6.25 H 100 v 25 H 93.75 V 50 H 87.5 V 62.5 H 81.25 V 75 H 75 v 6.25 H 68.75 V 87.5 H 62.5 v 6.25 H 56.25 V 100 H 50 Z',
		},
		{
			fill: '#3b730f',
			d: 'm 50,93.75 h 6.25 V 75 H 62.5 V 50 H 56.25 V 37.5 H 50 V 31.25 H 43.75 V 25 H 31.25 V 18.75 H 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 V 25 H 12.5 V 18.75 H 25 V 12.5 H 43.75 V 6.25 h 12.5 V 12.5 H 75 v 6.25 H 87.5 V 25 H 100 V 43.75 H 93.75 V 50 H 87.5 V 62.5 H 81.25 V 75 H 75 v 6.25 H 68.75 V 87.5 H 62.5 v 6.25 H 56.25 V 100 H 50 Z',
		},
		{
			fill: '#473323',
			d: 'M 87.5,37.5 H 81.25 V 31.25 H 68.75 V 25 H 62.5 V 18.75 H 43.75 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 V 25 H 12.5 V 18.75 H 25 V 12.5 H 43.75 V 6.25 h 12.5 V 12.5 H 75 v 6.25 H 87.5 V 25 H 100 V 43.75 H 93.75 V 50 H 87.5 Z',
		},
		{
			fill: '#2e6006',
			d: 'M 87.5,37.5 H 81.25 V 31.25 H 68.75 V 25 H 62.5 v -6.25 h -25 V 12.5 H 50 V 6.25 h 6.25 v 6.25 h 12.5 v 6.25 h 12.5 V 25 h 12.5 v 6.25 H 100 v 12.5 H 93.75 V 50 H 87.5 Z',
		},
		{
			fill: '#34251a',
			d: 'M 93.75,31.25 H 87.5 V 25 h 6.25 v 6.25 H 100 v 12.5 H 93.75 Z M 75,18.75 h 6.25 V 25 H 75 Z M 37.5,12.5 H 50 V 6.25 h 6.25 v 6.25 h 12.5 v 6.25 H 53.125 37.5 Z',
		},
	],
} satisfies Svg_Data;

export const webdevladder_logo = {
	label: 'a spider web between two rungs of a ladder',
	fill: 'var(--color_b_5)',
	// TODO BLOCK remove the `g` from the plain svg
	paths: [
		{
			d: 'M 37.174163,0.4792687 21.634926,39.631201 0.16786597,97.97918 16.575416,99.521374 19.352058,91.559689 68.736056,94.77021 70.61636,84.176728 21.745713,80.516425 33.323161,43.781709 44.12821,16.308249 84.47938,15.069186 86.44336,5.5860536 47.872897,6.9685586 49.611104,1.8736809 M 86.061057,1.9243199 74.915756,51.346436 65.559591,99.975909 82.510118,98.660645 89.82178,48.868054 99.675222,0.2061973',
		},
		{
			d: 'M 82.541527,24.61445 53.862329,44.979685 26.077601,62.33992 25.099707,65.937651 55.229899,47.076762 81.507935,28.318661 M 66.33555,87.233139 54.738379,48.989886 44.170835,12.54806 42.725942,15.71185 52.060344,49.856839 63.493965,86.901562 M 67.524475,13.659828 52.81301,43.245382 35.985883,84.117296 38.703349,84.412401 55.158864,44.100695 70.474719,13.501929 m 5.1603,41.982295 -23.74376,-10.305007 -17.603166,-9.426434 -0.972181,2.878616 17.876898,8.612725 23.958503,10.964992',
		},
		{
			d: 'm 50.5769,48.285601 0.966122,3.361133 2.456436,-0.09293 2.944734,-2.586661 -0.487976,-4.866721 -1.365959,-1.908962 -3.545067,0.04669 -2.781093,2.644178 -1.139247,5.065325 1.443893,5.999034 5.886709,0.356695 5.877825,-5.767341 0.765816,-9.526984 -4.632806,-4.416277 -7.978619,-0.418274 -5.522701,6.340293 -1.318243,11.151446 3.639737,9.979651 L 57.644364,63.06574 65.560214,52.529221 68.781299,35.897047 60.700698,29.322838 46.760117,27.037036 36.988493,39.207818 33.631767,58.700914 41.28115,74.499356 60.724825,72.962824 71.958187,55.382886 77.273782,30.412258 65.694639,19.60012 44.511786,14.731021 44.715509,16.675374 64.52349,21.522567 74.843098,31.738084 69.730823,54.159963 59.634025,70.76874 42.717921,72.097706 35.95196,57.551866 l 2.738009,-17.179374 8.834853,-11.13111 12.095799,2.019068 6.862581,6.161296 -3.066403,14.068912 -6.523733,9.299082 -9.939247,0.591529 -2.829727,-8.963835 1.086548,-8.709392 4.596194,-5.524272 6.319767,0.309359 3.579728,3.550699 -0.928078,7.718816 -4.331029,4.154252 -4.574097,-0.220971',
		},
	],
} satisfies Svg_Data;

export const github_logo = {
	label: 'the GitHub icon, an octocat silhouette',
	paths: [
		{
			d: 'M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z',
			'fill-rule': 'evenodd',
			'clip-rule': 'evenodd',
			transform: 'scale(64)',
		},
	],
	viewBox: '0 0 1024 1024',
} satisfies Svg_Data;
