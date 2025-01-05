import { v4 as uuidv4 } from 'uuid'

interface ItemI {
	id: UUIDTypes;
	item: string;
	checked: boolean;
}
import type { UUIDTypes } from 'uuid';

export class Item implements ItemI {
	id: UUIDTypes;
	item: string;
	checked: boolean;
	
	constructor(item:string) {
		this.item = item
		this.id = uuidv4();
		this.checked = false;
	}
	
	setItemChecked () {
		this.checked = !this.checked;
	}
	
	getItem (): [UUIDTypes,string,boolean]{
		return [
			this.id,
			this.item,
			this.checked
		];
	}
}
