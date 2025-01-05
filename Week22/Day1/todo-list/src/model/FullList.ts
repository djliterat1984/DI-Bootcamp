import {Item} from './ListItem'
class FullList {
	items: Item[]
	constructor(items:Item[]) {
		this.items = items;
	}
	
	loadList (): Item[] {
		const jsonTodoItems: string | null = localStorage.getItem( 'todoItems' );
		if ( jsonTodoItems !== null )
			return JSON.parse( jsonTodoItems );
		else
			return [];
	}
	
	saveList (items:Item[]): void {
		localStorage.setItem('todoItems', JSON.stringify(items))
	} 
	
	add (item:Item): void {
		this.items.push( item );
		this.saveList( this.items );
	}
	
	remove (item:Item): void {
		this.items = this.items.filter(todo => todo.id !== item.id)
	}
	
	removeAll (): void{
		this.items = [];
	}
}