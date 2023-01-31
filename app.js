/* Imports */
import { renderListItems } from './render-utils.js';
import {
    signInUser,
    signUpUser,
    signOutUser,
    getUser,
    createListItem,
    getListItem,
    deleteListItems,
    completedItems,
} from './fetch-utils.js';
// this will check if we have a user and set signout link if it exists

/* Get DOM Elements */
const shoppingListForm = document.getElementById('shopping-list-form');
const itemsEl = document.getElementById('items-div');
const deleteButton = document.getElementById('delete-button');
const logoutButton = document.getElementById('logout-button');
/* State */
let listItemsArr = [];

/* Events */
shoppingListForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(shoppingListForm);
    const item = data.get('item');
    const quantity = data.get('quantity');
    await createListItem(item, quantity);
});

/* Display Functions */
