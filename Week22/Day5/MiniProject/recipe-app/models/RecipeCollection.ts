import type { RecipeItemI } from './RecipeItem';
import { v4 as uuidv4, UUIDTypes } from 'uuid';

export interface RecipeCollectionI {
    id: UUIDTypes;
    recipeList: RecipeItemI[];
    add(recipe: RecipeItemI): void;
    delete(recipeId: UUIDTypes): void;
    markAsFavorite(recipeId: UUIDTypes): void;
    load(): void;
    save(): void;
    clearList(): void;
}

export class RecipeCollection implements RecipeCollectionI {
    constructor(id: UUIDTypes, recipeList: RecipeItemI[]) {
        this.id = id;
        this.recipeList = initialRecipes;
    }
    id: UUIDTypes;
    recipeList: RecipeItemI[];
    add(recipe: RecipeItemI): void {
        this.recipeList.push(recipe);
        this.save();
    }
    delete(recipeId: UUIDTypes): void {
        this.recipeList = this.recipeList.filter((item) => item.id !== recipeId);
        this.save();
    }
    markAsFavorite(recipeId: UUIDTypes): void {
        this.recipeList = this.recipeList.map((item) => {
            if (item.id === recipeId) item.isfavorite = !item.isfavorite;
            return item;
        });
        this.save();
    }
    load(): void {
        localStorage.getItem('recipeList');
    }
    save(): void {
        localStorage.setItem('recipeList', JSON.stringify(this.recipeList));
    }
    clearList(): void {
        this.recipeList = [];
        this.save();
    }
}

export let initialRecipes: RecipeItemI[] = [
    {
        id: uuidv4(),
        name: 'Classic Margherita Pizza',
        ingredients: ['Pizza dough', 'Tomato sauce', 'Fresh mozzarella cheese', 'Fresh basil leaves', 'Olive oil', 'Salt and pepper to taste'],
        instructions: [
            'Preheat the oven to 475°F (245°C).',
            'Roll out the pizza dough and spread tomato sauce evenly.',
            'Top with slices of fresh mozzarella and fresh basil leaves.',
            'Drizzle with olive oil and season with salt and pepper.',
            'Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.',
            'Slice and serve hot.',
        ],
        userId: uuidv4(),
        isfavorite: false,
    },
];
