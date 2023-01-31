/* Imports */
import { renderListItems } from './render-utils.js';
import { signInUser, signUpUser, signOutUser, getUser } from './fetch-utils.js';
// this will check if we have a user and set signout link if it exists

/* Get DOM Elements */
const shoppingListForm = document.getElementById('shopping-list-form');
const itemsEl = document.getElementById('items-div');
const deleteButton = document.getElementById('delete-button');
const logoutButton = document.getElementById('logout-button');
/* State */

/* Events */

/* Display Functions */
