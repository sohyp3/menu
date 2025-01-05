// import { error } from '@sveltejs/kit';

// export async function load({ params, fetch }) {
//     console.log(params);
//     const items = await fetchItems(params.id, 1, fetch);
//     console.log(items);

//     if (!items) {
//         throw error(404, 'Items not found');
//     }

//     return {
//         items
//     };
// }

// async function fetchItems(selectedCategory, page, fetch) {
//     if (!selectedCategory) return null;

//     try {
//         const res = await fetch(`/api/items?category_id=${selectedCategory}&page=${page}`);
//         if (!res.ok) {
//             console.error('Failed to fetch items:', res.statusText);
//             return null;
//         }
//         const items = await res.json();
//         return items;
//     } catch (err) {
//         console.error('Error fetching items:', err);
//         return null;
//     }
// }

// // function nextPage() {
// //     page++;
// //     fetchItems();
// // }

// // function prevPage() {
// //     if (page > 1) {
// //         page--;
// //         fetchItems();
// //     }
// // }

