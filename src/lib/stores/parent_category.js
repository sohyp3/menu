import { writable } from 'svelte/store';

function createParentCategoryStore() {
    const initialParentCategory = typeof localStorage !== 'undefined' 
        ? JSON.parse(localStorage.getItem('parent_category') || '{"en":"food","tr":"yemek"}') 
        : { "en": "food", "tr": "yemek" };

    const { subscribe, set, update } = writable(initialParentCategory);

    return {
        subscribe,
        set: (value) => {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('parent_category', JSON.stringify(value));
            }
            set(value);
        },
        update: (updater) => {
            if (typeof localStorage !== 'undefined') {
                const updatedValue = updater(JSON.parse(localStorage.getItem('parent_category') || '{"en":"food","tr":"yemek"}'));
                localStorage.setItem('parent_category', JSON.stringify(updatedValue));
                set(updatedValue);
            } else {
                update(updater);
            }
        },
        initFromServer: (value) => {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('parent_category', JSON.stringify(value));
            }
            set(value);
        },
    };
}

export const parent_category_store = createParentCategoryStore();
