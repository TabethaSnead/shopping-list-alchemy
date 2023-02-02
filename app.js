/* Imports */
import { renderListItems } from './render-utils.js';
import {
    createListItem,
    getListItem,
    deleteListItems,
    completedItems,
    getUser,
    signOutUser,
} from './fetch-utils.js';
// this will check if we have a user and set signout link if it exists

/* Get DOM Elements */
const shoppingListForm = document.getElementById('shopping-list-form');
const itemsEl = document.getElementById('items-div');
const deleteButton = document.getElementById('delete-button');

/* State */
let listItemsArr = [];

/* Events */
const signOutLink = document.getElementById('sign-out-link');
if (signOutLink) {
    signOutLink.addEventListener('click', async () => {
        // console.log('userjs');
        await signOutUser();
    });
}

shoppingListForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(shoppingListForm);
    const item = data.get('item');
    const quantity = data.get('quantity');
    await createListItem(item, quantity);
    await displayPosts();
});

window.addEventListener('load', async () => {
    const user = await getUser();
    console.log(user);
    if (!user) {
        window.location.href = './auth';
    }

    await displayPosts();
});

/* Display Functions */
async function displayPosts() {
    itemsEl.textContent = '';
    const posts = await getListItem();
    listItemsArr = posts;
    for (let post of listItemsArr) {
        const postsAdded = renderListItems(post);
        postsAdded.addEventListener('click', async () => {
            await completedItems(post.id);
            await displayPosts();
        });
        itemsEl.append(postsAdded);
    }
}

deleteButton.addEventListener('click', async () => {
    await deleteListItems();
    await displayPosts();
});
