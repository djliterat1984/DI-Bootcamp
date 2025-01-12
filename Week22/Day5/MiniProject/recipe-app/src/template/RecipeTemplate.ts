import { RecipeCollection } from '../models/RecipeCollection';
import './style.css';
export interface DomList {
	_div: HTMLDivElement;
	clear (): void;
	render ( fullList: RecipeCollection ): void;
}

export default class RecipeTemplate implements DomList{
	static instance: RecipeTemplate = new RecipeTemplate();
	_div: HTMLDivElement;
	constructor() {
		this._div = document.getElementById( 'divRecipes' ) as HTMLDivElement;
	}
	
	clear (): void {
		this._div.innerHTML = ''
	}
	render ( fullList: RecipeCollection ): void {
		this.clear();
		
		fullList.recipeList.map( item => {
			// container 
			const container = document.createElement( 'div' ) as HTMLDivElement;
			container.className = 'recipeContainer';
			
			// container favorite + delete
			const divActions = document.createElement( 'div' ) as HTMLDivElement;
			divActions.className = 'divActions'
			
			// container favorite + checkbox
			const divFavorite = document.createElement( 'div' ) as HTMLDivElement;
			divFavorite.className = 'divFavorite'
			
			// favorite text
			const favoriteTxt = document.createElement( 'h4' ) as HTMLHeadingElement;
			favoriteTxt.textContent = 'Mark as Favorites'
			
			// favorite checkbox
			const inputCheck = document.createElement( 'input' ) as HTMLInputElement;
			inputCheck.type = 'checkbox';
			inputCheck.checked = item.isFavorite
			inputCheck.className = 'favoriteCheckbox'
			inputCheck.addEventListener( 'click', ():void => {
				item.isFavorite = !item.isFavorite;
				fullList.save();
			} )
			divFavorite.appendChild( favoriteTxt );
			divFavorite.appendChild( inputCheck );
			
			// delete button
			const deleteBtn = document.createElement( 'button' ) as HTMLButtonElement;
			deleteBtn.textContent = 'Delete'
			deleteBtn.className = 'deleteFavoriteBtn'
			deleteBtn.addEventListener( 'click', (): void => {
				fullList.delete( item.id );
				this.render(fullList)
			} )
			
			divActions.appendChild( ( divFavorite ) );
			divActions.appendChild((deleteBtn))
			container.appendChild((divActions))
			
			// recipe title
			const recipeName = document.createElement( 'h2' ) as HTMLHeadingElement;
			recipeName.className = 'recipeName';
			recipeName.textContent = item.name;
			container.appendChild( recipeName )
			
			// ingredients text
			const recipeIngredientsTitle = document.createElement( 'h3' ) as HTMLHeadingElement;
			recipeIngredientsTitle.textContent = 'Ingredients';
			container.appendChild(recipeIngredientsTitle)
			
			// ingredients list
			const ulIngredientsList = document.createElement( 'ul' ) as HTMLUListElement;
			ulIngredientsList.className = 'ulIngredientsList';
				if ( item.ingredients !== undefined ) {
					item.ingredients.map( ingred => {
					const ingredLi = document.createElement( 'li' ) as HTMLLIElement;
					ingredLi.textContent = ingred;
					ulIngredientsList.appendChild( ingredLi );				
				} )
				container.appendChild(ulIngredientsList)
			}
			
			// instructions text
			const recipeInstructionsTitle = document.createElement( 'h3' ) as HTMLHeadingElement;
			recipeInstructionsTitle.textContent = 'Instructions';
			container.appendChild(recipeInstructionsTitle)
			
			// instructions list
			const olInstructions = document.createElement( 'ol' ) as HTMLOListElement;
			olInstructions.type = '1';
			olInstructions.className = 'instructionsList';
			if(item.instructions !== undefined){
				item.instructions.map( instruc => {
					const instructionLi = document.createElement( 'li' ) as HTMLLIElement;
					instructionLi.textContent = instruc;
					olInstructions.appendChild( instructionLi );		
				} )
				container.appendChild( olInstructions );
			}
			this._div.appendChild( container );
		} )
	}
}
