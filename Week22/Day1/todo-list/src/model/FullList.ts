import type { UUIDTypes } from 'uuid';
import ListItem, { ListItemI } from './ListItem';

export interface FullListI{
	_items: ListItem[];
	addItem ( itemObj: ListItem ): void;
	removeItem ( id: string ): void;
	load (): void
	save (): void;
	clearList (): void;
}


export default class FullList implements FullListI {
	static instance: FullList = new FullList();//singleton;
	_items: ListItem[]
	
	// items: ListItem[];
	
	constructor( items: ListItem[] = [] ) {
		this._items = items
	}
	addItem ( itemObj: ListItem ): void {
		console.log('fff');
		
		this._items.push( itemObj );
		this.save();
	}
	removeItem ( id: string ): void {
		this._items = this._items.filter( item => item.id !== id );
		this.save()
	}
	load (): void {
		const storedList: string | null = localStorage.getItem( 'mylist' );
		if ( typeof storedList !== 'string' ) return;
		
		const parsedList :{ _id: UUIDTypes; _item: string;  checked: boolean}[] = JSON.parse(storedList)
		
		parsedList.forEach( itemParsed => {
			const newListItem = new ListItem(
				itemParsed._id,
				itemParsed._item,
				itemParsed.checked
			)
			
			this._items.push( newListItem );
		} )
		this.save();
	}
	save (): void {
		localStorage.setItem( 'mylist', JSON.stringify( this._items ) );
	}
	clearList (): void {
		this._items = [];
		this.save();
	}
	
}