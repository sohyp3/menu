import { connectDB } from '$lib/db';
import { ObjectId } from 'mongodb';

export async function GET({ params}) {
    const db = await connectDB();
    const item_id = params.id;
    const item = await db.collection('items').findOne({ _id: new ObjectId(item_id)});

    if (!item_id) {
        return new Response(JSON.stringify({ error: 'item ID is required' }), { status: 400 });
    }


    return new Response(JSON.stringify(item));
}
