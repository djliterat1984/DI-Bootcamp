import { RecipeCollection } from './models/RecipeCollection';
import { RecipeItem } from './models/RecipeItem';
import './style.css'
import RecipeTemplate from './template/RecipeTemplate';
import { v4 as uuidv4} from 'uuid';

const initApp = (): void => {
	const collection = RecipeCollection.instance;
	const template = RecipeTemplate.instance;
	const addForm = document.getElementById( 'inputForm' ) as HTMLFormElement;
	addForm.addEventListener( 'submit', (e: SubmitEvent) => {
		e.preventDefault();
		
		const inputName = document.getElementById( 'nameInput' ) as HTMLInputElement;
		const recipeName: string = inputName.value
		
		const ingredientsInput = document.getElementById( 'ingredientsInput' ) as HTMLTextAreaElement;
		const ingredients: string[] = ingredientsInput.value.split('-');
		
		const instructionsInput = document.getElementById( 'instructionsInput' ) as HTMLTextAreaElement;
		const instructions: string[] = instructionsInput.value.split('-');
		
		const userId = uuidv4()
		
		const newRecipe = new RecipeItem( recipeName, ingredients, instructions, userId );
		
		collection.add( newRecipe );
		template.render( collection );
	} )
	
	const clearBtn = document.getElementById( 'clearBtn' );
	clearBtn?.addEventListener( 'click', (e):void => {
		e.preventDefault();
		collection.clearList();
		template.render(collection)
	} )
	
	collection.load()
	template.render(collection)
}

document.addEventListener( 'DOMContentLoaded', initApp );







