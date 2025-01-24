import { sql } from "$lib/sql";

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


        const r_cat= await sql(`SELECT * FROM category WHERE id = ${id}`)
        const items = await sql(`SELECT * FROM item WHERE  parent_id = ${id} ORDER BY id ASC `)

        let category = r_cat[0]
        return { items , category};



    }
    catch (error) {
        throw error;
    }

}
