export function renderListItems(listItem) {
    const div = document.createElement('div');
    const item = document.createElement('p');
    const quantity = document.createElement('p');

    item.textContent = listItem.item;
    quantity.textContent = listItem.quantity;
    div.append(item, quantity);
    div.classList.add(listItem.is_bought === true ? 'true' : 'false');
    div.classList.add('listItem');
    return div;
}
