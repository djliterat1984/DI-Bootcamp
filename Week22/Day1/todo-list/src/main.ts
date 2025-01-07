import FullList from './model/FullList';
import ListItem from './model/ListItem';
import ListTemplate from './templates/ListTemplate';
import { v4 as uuidv4 } from 'uuid';

const initApp = (): void => {
	const fullList = FullList.instance;
	const template = ListTemplate.instance;
	
	const itemEntryForm = document.getElementById( 'itemEntryForm' ) as HTMLFormElement;
	itemEntryForm.addEventListener( 'submit', ( e: SubmitEvent ) => {
		e.preventDefault();
		
		const input = document.getElementById( 'newItem' ) as HTMLInputElement;
		const newEntryText: string = input.value.trim();
		if ( !newEntryText ) return;
		
		const newItem = new ListItem( uuidv4(), newEntryText, false );
		
		fullList.addItem( newItem );
		template.render( fullList );
	} );
	
	fullList.load();
	template.render( fullList );
};

document.addEventListener( 'DOMContentLoaded', initApp );