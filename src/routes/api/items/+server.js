import { connectDB } from '$lib/db';

export async function GET({ url }) {
    const db = await connectDB();
    const categoryId = url.searchParams.get('category_id');

    if (!categoryId) {
        return new Response(JSON.stringify({ error: 'Category ID is required' }), { status: 400 });
    }

    // Fetch all items belonging to the category
    const items = await db.collection('items').find({ category_id: categoryId }).toArray();

    return new Response(JSON.stringify(items));
}
