import { connectDB } from '$lib/db';

export async function GET({ url }) {
    const db = await connectDB();
    const parentCategoryId = url.searchParams.get('parent_category_id');

    if (!parentCategoryId) {
        return new Response(JSON.stringify({ error: 'Parent category ID is required' }), { status: 400 });
    }

    // Fetch all sibling categories
    const categories = await db
        .collection('categories')
        .find({ parent_category_id: parentCategoryId })
        .toArray();

    return new Response(JSON.stringify(categories));
}
