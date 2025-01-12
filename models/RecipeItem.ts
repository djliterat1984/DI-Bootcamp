import { v4 as uuidv4, type UUIDTypes } from 'uuid';

export interface RecipeItemI {
    id: UUIDTypes;
    name: string;
    ingredients: string[];
    instructions: string[];
    isfavorite: boolean;
    userId: UUIDTypes;
}

export class RecipeItem implements RecipeItemI {
    private _id: UUIDTypes;
    private _name: string;
    private _ingredients: string[];
    private _instructions: string[];
    private _isFavorite: boolean;
    private _userId: UUIDTypes;

    constructor(name: string, ingredients: string[], instructions: string[], userId: UUIDTypes) {
        this._id = uuidv4();
        this._name = name;
        this._ingredients = ingredients;
        this._instructions = instructions;
        this._userId = userId;
        this._isFavorite = false;
    }

    get id(): UUIDTypes {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get ingredients(): string[] {
        return this._ingredients;
    }

    set ingredients(val: string[]) {
        this._ingredients = val;
    }

    get instructions(): string[] {
        return this._instructions;
    }

    set instructions(val: string[]) {
        this._instructions = val;
    }

    get isfavorite(): boolean {
        return this._isFavorite;
    }

    set isFavorite(isFavorite: boolean) {
        this._isFavorite = isFavorite;
    }

    get userId(): UUIDTypes {
        return this._userId;
    }

    set userId(val: UUIDTypes) {
        this._userId = val;
    }
}
