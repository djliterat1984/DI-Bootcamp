import { RecipeItem, type RecipeItemI } from './RecipeItem';
import { v4 as uuidv4, UUIDTypes } from 'uuid';

export interface RecipeCollectionI {
    id: UUIDTypes;
    recipeList: RecipeItem[];
    add(recipe: RecipeItem): void;
    delete(recipeId: UUIDTypes): void;
    markAsFavorite(recipeId: UUIDTypes): void;
    load(): void;
    save(): void;
    clearList(): void;
}


let initialRecipes: RecipeItem[] = [
	new RecipeItem(
		'Classic Margherita Pizza',
		[ 'Pizza dough', 'Tomato sauce', 'Fresh mozzarella cheese', 'Fresh basil leaves', 'Olive oil', 'Salt and pepper to taste' ],
		[
			'Preheat the oven to 475°F (245°C).',
			'Roll out the pizza dough and spread tomato sauce evenly.',
			'Top with slices of fresh mozzarella and fresh basil leaves.',
			'Drizzle with olive oil and season with salt and pepper.',
			'Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.',
			'Slice and serve hot.',
		],
		uuidv4(),
	),
	new RecipeItem(
		'Classic Margherita Pizza',
		[ 'Pizza dough', 'Tomato sauce', 'Fresh mozzarella cheese', 'Fresh basil leaves', 'Olive oil', 'Salt and pepper to taste' ],
		[
			'Preheat the oven to 475°F (245°C).',
			'Roll out the pizza dough and spread tomato sauce evenly.',
			'Top with slices of fresh mozzarella and fresh basil leaves.',
			'Drizzle with olive oil and season with salt and pepper.',
			'Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.',
			'Slice and serve hot.',
			'Preheat the oven to 475°F (245°C).',
			'Roll out the pizza dough and spread tomato sauce evenly.',
			'Top with slices of fresh mozzarella and fresh basil leaves.',
			'Drizzle with olive oil and season with salt and pepper.',
			'Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.',
			'Slice and serve hot.',
		],
		uuidv4(),
	),
	new RecipeItem(
		'Classic Margherita Pizza',
		[ 'Pizza dough', 'Tomato sauce', 'Fresh mozzarella cheese', 'Fresh basil leaves', 'Olive oil', 'Salt and pepper to taste' ],
		[
			'Preheat the oven to 475°F (245°C).',
			'Roll out the pizza dough and spread tomato sauce evenly.',
			'Top with slices of fresh mozzarella and fresh basil leaves.',
			'Drizzle with olive oil and season with salt and pepper.',
			'Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.',
			'Slice and serve hot.',
		],
		uuidv4(),
	),
	new RecipeItem(
		'Classic Margherita Pizza',
		[ 'Pizza dough', 'Tomato sauce', 'Fresh mozzarella cheese', 'Fresh basil leaves', 'Olive oil', 'Salt and pepper to taste' ],
		[
			'Preheat the oven to 475°F (245°C).',
			'Roll out the pizza dough and spread tomato sauce evenly.',
			'Top with slices of fresh mozzarella and fresh basil leaves.',
			'Drizzle with olive oil and season with salt and pepper.',
			'Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.',
			'Slice and serve hot.',
		],
		uuidv4(),
	),
	new RecipeItem(
		'Classic Margherita Pizza',
		[ 'Pizza dough', 'Tomato sauce', 'Fresh mozzarella cheese', 'Fresh basil leaves', 'Olive oil', 'Salt and pepper to taste' ],
		[
			'Preheat the oven to 475°F (245°C).',
			'Roll out the pizza dough and spread tomato sauce evenly.',
			'Top with slices of fresh mozzarella and fresh basil leaves.',
			'Drizzle with olive oil and season with salt and pepper.',
			'Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.',
			'Slice and serve hot.',
		],
		uuidv4(),
	),
	new RecipeItem(
		'Classic Margherita Pizza',
		[ 'Pizza dough', 'Tomato sauce', 'Fresh mozzarella cheese', 'Fresh basil leaves', 'Olive oil', 'Salt and pepper to taste' ],
		[
			'Preheat the oven to 475°F (245°C).',
			'Roll out the pizza dough and spread tomato sauce evenly.',
			'Top with slices of fresh mozzarella and fresh basil leaves.',
			'Drizzle with olive oil and season with salt and pepper.',
			'Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.',
			'Slice and serve hot.',
		],
		uuidv4(),
	),
	new RecipeItem(
		'Classic Margherita Pizza',
		[ 'Pizza dough', 'Tomato sauce', 'Fresh mozzarella cheese', 'Fresh basil leaves', 'Olive oil', 'Salt and pepper to taste' ],
		[
			'Preheat the oven to 475°F (245°C).',
			'Roll out the pizza dough and spread tomato sauce evenly.',
			'Top with slices of fresh mozzarella and fresh basil leaves.',
			'Drizzle with olive oil and season with salt and pepper.',
			'Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.',
			'Slice and serve hot.',
		],
		uuidv4(),
	),
	new RecipeItem(
		'Classic Margherita Pizza',
		[ 'Pizza dough', 'Tomato sauce', 'Fresh mozzarella cheese', 'Fresh basil leaves', 'Olive oil', 'Salt and pepper to taste' ],
		[
			'Preheat the oven to 475°F (245°C).',
			'Roll out the pizza dough and spread tomato sauce evenly.',
			'Top with slices of fresh mozzarella and fresh basil leaves.',
			'Drizzle with olive oil and season with salt and pepper.',
			'Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.',
			'Slice and serve hot.',
		],
		uuidv4(),
	)	
];


export class RecipeCollection implements RecipeCollectionI {
	static instance: RecipeCollection = new RecipeCollection(uuidv4(),[]);

	constructor(id: UUIDTypes, recipeList: RecipeItem[]) {
		this.id = id;
		this.recipeList = recipeList;
	}
	id: UUIDTypes;
	recipeList: RecipeItem[];
	add ( recipe: RecipeItem ): void {
		this.recipeList.push(recipe);
		this.save();
  }
	delete ( recipeId: UUIDTypes ): void {
		this.recipeList = this.recipeList.filter( ( item ): boolean => item.id !== recipeId );
		this.save();
  }
  markAsFavorite(recipeId: UUIDTypes): void {
		this.recipeList = this.recipeList.map((item):RecipeItem => {
				if (item.id === recipeId) item.isFavorite = !item.isFavorite;
				return item;
		});
		this.save();
  }
	load(): void {
		const storedList: string | null = localStorage.getItem( 'recipeList' );
		if ( typeof storedList !== 'string' ){
			this.recipeList = [];
			return;
		}
		
		const parsedList: RecipeItem[] = JSON.parse( storedList );
		parsedList.forEach( itemParsed => {
			const newRecipeItem = new RecipeItem(
				itemParsed['_name'],
				itemParsed['_ingredients'],
				itemParsed['_instructions'],
				itemParsed['_userId'],
				itemParsed['_id'],
				itemParsed['_isFavorite']
			)
			this.recipeList.push( newRecipeItem );
			}
		)
		
		this.save();
	}
	save (): void {
		localStorage.setItem( 'recipeList', JSON.stringify( this.recipeList ) );
	}
	
	clearList(): void {
		this.recipeList = [];
		localStorage.removeItem('recipeList')
		this.save();
	}
}
