import { connectDB } from '$lib/db';

export async function GET({ params }) {
    const db = await connectDB();
    const categoryId = params.id;

    const category= await db.collection('parent_category').findOne({ _id: categoryId});

    if (!category) {
        return new Response(JSON.stringify({ error: 'Category not found' }), { status: 404 });
    }

    return new Response(JSON.stringify(category));
}
