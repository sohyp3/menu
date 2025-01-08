import { writable } from 'svelte/store';

function createLanguageStore() {
    const initialLanguage = typeof localStorage !== 'undefined' ? localStorage.getItem('language') || 'en' : 'en';

    const { subscribe, set } = writable(initialLanguage);

    return {
        subscribe,
        set: (value) => {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('language', value);
            }
            set(value);
        },
        initFromServer: (value) => {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('language', value);
            }
            set(value);
        },
    };
}

export const language = createLanguageStore();
