export type History_Item =
	| Cat_Go_Home_History_Item
	| Cat_Be_Or_Do_History_Item
	| Cat_Go_Adventure_History_Item
	| Home_Call_Cats_History_Item
	| Adventure_Call_Cats_History_Item;
export interface Cat_Go_Home_History_Item {
	type: 'cat_go_home';
	name: string;
}
export interface Cat_Be_Or_Do_History_Item {
	type: 'cat_be_or_do';
	name: string | null;
	position: Cat_Position;
}
export interface Cat_Go_Adventure_History_Item {
	type: 'cat_go_adventure';
	name: string;
}
export interface Home_Call_Cats_History_Item {
	type: 'call_cats_home';
}
export interface Adventure_Call_Cats_History_Item {
	type: 'call_cats_adventure';
}

export type Cat_Position = 'home' | 'adventure';

export interface Cat {
	name: string;
	icon: string;
	position: Cat_Position;
}

export const to_cats_label = (cats: Array<Cat>): string | null => {
	const count = cats.length;
	if (count === 2) return 'cats';
	if (count === 0) return null;
	const cat = cats[0]!;
	return cat.icon + cat.name;
};
