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

        const r_item = await sql(`SELECT * FROM item WHERE id = ${id}`)
        const item = r_item[0]
        const category_id = item.parent_id
        
        const r_cat= await sql(`SELECT * FROM category WHERE id = ${category_id}`)
        let category = {}
        if (category_id == null) {
            category = {
                "id":0,
                "name":{
                    "en":'',
                    "tr":""
                }
            }
        }
        else{
        category = r_cat[0]

        }

        return { item , category};
    }
    catch (error) {
        throw error;
    }

}
