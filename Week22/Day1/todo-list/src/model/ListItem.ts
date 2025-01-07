import { v4 as uuidv4 } from 'uuid';
import type { UUIDTypes } from 'uuid';

export interface ListItemI {
	id: UUIDTypes;
	item: string;
	checked: boolean;
}


export default class ListItem implements ListItemI {
	private _id: UUIDTypes;
	private _item: string;
	private _checked: boolean;
	
	constructor(id:UUIDTypes, item:string, checked:boolean) {
		this._item = item
		this._id = id;
		this._checked = checked;
	}
	
	get id (): UUIDTypes{
		return this._id;
	}
	set id (val:UUIDTypes){
		this._id = val;
	}
	
	get item (): string{
		return this._item;
	}
	
	
	set item ( val: string ) {
		this._item = val;
	}
	
	get checked (): boolean{
		return this._checked;
	}
	
	set checked (val:boolean) {
		this._checked = val;
	}
}
