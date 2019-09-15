// Global app controller
import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';
/** Global state of the app 
 * -Search object 
 * -Current receipe object
 * -shopping list object 
 * -Liked reipes
*/

const state = {};

const controlSearch = async () => {
	// 1) get query from view
	const query = searchView.getInput();

	// TODO
	if (query) {
		// 2) new search object and add to state
		state.search = new Search(query);
		// 3) Prepare UI for results

		// 4) Search for receipes
		await state.search.getResults();

		// 5) render result on UI
		console.log(state.search.result, 'test 1');
	}
};

elements.searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	controlSearch();
});

const search = new Search('pizza');

search.getResults();
