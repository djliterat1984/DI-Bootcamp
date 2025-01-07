import FullList from '../model/FullList';

export interface DomList {
	_ul: HTMLUListElement;
	clear (): void;
	render ( fullList: FullList ): void;
}

// const todoList = document.getElementById( 'todoList' ) as HTMLUListElement;

export default class ListTemplate implements DomList{
	_ul: HTMLUListElement;
	
	static instance: ListTemplate = new ListTemplate();
	
	constructor() {
		this._ul = document.getElementById('listItems') as HTMLUListElement
	}
	clear (): void {
		this._ul.innerHTML = '';
	}
	render ( fullList: FullList ): void {
		this.clear();
		
		fullList._items.forEach( (item, index) => {
			const li = document.createElement( 'li' ) as HTMLLIElement;
			li.className = 'item';
			
			const check = document.createElement( 'input' ) as HTMLInputElement;
			check.type = 'checkbox';
			check.id = (index + 1).toString();
			check.checked = item.checked;
			
			li.appendChild( check );
			
			check.addEventListener( 'change', () => {
				item.checked = !item.checked
			} )
			
			const label = document.createElement( 'label' ) as HTMLLabelElement;
			label.textContent = item.item;
			label.htmlFor = ( index + 1 ).toString();
			
			const button = document.createElement( 'button' ) as HTMLButtonElement;
			button.textContent = "X";
			button.className = 'button'
			li.appendChild( button );
			
			button.addEventListener( 'click', () => {
				fullList.removeItem( item.id.toString() );
				this.render( fullList );
			} )
		} )
	}
}
	


