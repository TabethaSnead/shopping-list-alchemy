const SUPABASE_URL = 'https://gufldzbeyvbceuxgfcxw.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1ZmxkemJleXZiY2V1eGdmY3h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ0OTI0OTYsImV4cCI6MTk5MDA2ODQ5Nn0.o6XJ-ggfqCoOTd35YoUJsnVjyrDXXT0G74YeNkDKbKw';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function createListItem(item, quantity) {
    const response = await client.from('shopping_list').insert({
        item: item,
        quantity: quantity,
        // user_id: client.auth.getUser().id,
    });
    return checkError(response);
}

export async function getListItem() {
    const response = await client.from('shopping_list').select('*');
    return checkError(response);
}

export async function deleteListItems() {
    await client.from('shopping_list').delete().match({ user_id: client.auth.user().id });
}

export async function completedItems(id) {
    const response = await client.from('shopping_list').update({ is_bought: true }).eq('id', id);
    return response.data;
}
