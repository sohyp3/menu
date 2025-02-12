import { parent_category_store } from '$lib/stores/parent_category';
import { categories } from '$lib/stores/categories';


import { sql } from "$lib/sql";
import { isLoading } from '$lib/stores/loading.js';

export async function load({ params }) {
    try {
        let id = params.id
        let test_id = id

        if (parseInt(test_id) != test_id) {
            console.log("fucked");
            return {}
        }
        if (!id) {
            return new Response(JSON.stringify({ error: 'Category ID is required' }), { status: 400 });
        }


        const category = await sql(`SELECT * FROM category  WHERE  parent_id = ${id} and active = true ORDER BY id ASC `)
        const p_category = await sql(`SELECT * FROM parent_category WHERE id = ${id}`)
        let parent_category = p_category[0]
        // parent_category_store.set(parent_category.name);
        categories.set(category);



        return { category, parent_category };




    }
    catch (error) {
        // console.error('Database operation failed:', error);
        throw error;
    }

}
