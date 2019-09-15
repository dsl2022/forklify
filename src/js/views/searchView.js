import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
	elements.searchInput.value = '';
};

export const clearResult = () => {
	elements.searchResList.innerHTML = '';
};
const renderRecipe = (recipe) => {
	const markup = `
            <li>
                <a class="likes__link" href="#${recipe.recipe_id}">
                    <figure class="likes__fig">
                        <img src="${recipe.image_url}" alt="${recipe.title}">
                    </figure>
                    <div class="likes__data">
                        <h4 class="likes__name">${recipe.title}</h4>
                        <p class="likes__author">${recipe.publisher}</p>
                    </div>
                </a>
            </li>`;
	elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = (recipes) => {
	recipes.forEach(renderRecipe);
};
