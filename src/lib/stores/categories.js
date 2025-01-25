import { writable } from 'svelte/store';

function createCategoriesStore() {
    const initialCategories = typeof localStorage !== 'undefined' 
        ? JSON.parse(localStorage.getItem('categories') || '[]') 
        : [];

    const { subscribe, set, update } = writable(initialCategories);

    return {
        subscribe,
        set: (value) => {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('categories', JSON.stringify(value));
            }
            set(value);
        },
        update: (updater) => {
            if (typeof localStorage !== 'undefined') {
                const updatedValue = updater(JSON.parse(localStorage.getItem('categories') || '[]'));
                localStorage.setItem('categories', JSON.stringify(updatedValue));
                set(updatedValue);
            } else {
                update(updater);
            }
        },
        initFromServer: (value) => {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('categories', JSON.stringify(value));
            }
            set(value);
        },
    };
}

export const categories = createCategoriesStore();
