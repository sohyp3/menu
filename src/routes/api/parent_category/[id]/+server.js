import { connectDB } from '$lib/db';

export async function GET({ params }) {
    const db = await connectDB();
    const categoryId = params.id;

    const categories = await db.collection('categories').find({ parent_category_id: categoryId }).toArray();

    if (!categories) {
        return new Response(JSON.stringify({ error: 'Category not found' }), { status: 404 });
    }

    return new Response(JSON.stringify(categories));
}
