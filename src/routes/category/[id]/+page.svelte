<script>
    import { onMount, onDestroy } from 'svelte';
    import { page } from '$app/stores';
	import { browser } from '$app/environment';

    let categoryId; // Current category ID from the route
    let parentCategoryId; // Parent category ID of the current category
    let items = []; // Items in the current category
    let siblingCategories = []; // Other categories in the same parent category


	let language = 'en'; 
	if (browser) {
		language = localStorage.getItem('language') || 'en';
	}


	function toggleLanguage() {
		language = language === 'en' ? 'tr' : 'en';
		if (browser) {
			localStorage.setItem('language', language);
		}
	}
    async function fetchCategoryData() {
        try {
            // Fetch the current category details to get the parent_category_id
            const categoryRes = await fetch(`/api/categories/${categoryId}`);
            if (!categoryRes.ok) throw new Error('Failed to fetch category');
            const category = await categoryRes.json();
            parentCategoryId = category.parent_category_id;

            // Fetch items in the current category
            const itemsRes = await fetch(`/api/items?category_id=${categoryId}`);
            if (!itemsRes.ok) throw new Error('Failed to fetch items');
            items = await itemsRes.json();

            // Fetch sibling categories in the same parent category
            const siblingsRes = await fetch(`/api/categories?parent_category_id=${parentCategoryId}`);
            if (!siblingsRes.ok) throw new Error('Failed to fetch sibling categories');
            siblingCategories = await siblingsRes.json();
        } catch (error) {
            console.error(error);
        }
    }

    // React to changes in the route ID
    let unsubscribe;
    onMount(() => {
        unsubscribe = page.subscribe((p) => {
            categoryId = p.params.id; // Update categoryId when the route changes
            fetchCategoryData(); // Fetch data for the new category
        });
    });

    onDestroy(() => {
        if (unsubscribe) unsubscribe();
    });
</script>

<div class="flex h-screen">
    <!-- Sidebar -->
    <aside class="p-4 w-64 bg-gray-100 border-r">
        <div class="mb-4">
            <button
                class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                on:click={toggleLanguage}
            >
                {language === 'tr' ? 'İngilizceye Geç' : 'Türkçeye Geç'}
            </button>
        </div>
        <h2 class="mb-4 text-lg font-bold">Diğer Kategoriler</h2>
        <ul class="space-y-2">
            {#each siblingCategories as sibling}
                <li>
                    <a
                        href={`/category/${sibling._id}`}
                        class="px-4 py-2 font-medium text-gray-700 rounded cursor-pointer hover:bg-gray-200"
                        class:selected={categoryId === sibling._id}
                    >
                        {sibling.name[language]}
                    </a>
                </li>
            {/each}
        </ul>
    </aside>

    <!-- Content -->
    <main class="overflow-y-auto flex-1 p-6">
        {#if items.length > 0}
            <div>
                <h2 class="mb-4 text-lg font-bold">Ürünler</h2>
                <ul class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {#each items as item}
                        <li class="p-4 rounded-lg border shadow hover:shadow-lg">
                            <h3 class="font-bold text-gray-800">{item.name[language]}</h3>
                            <p class="text-gray-600">{item.price} TL</p>
                            {#if item.allergy && item.allergy.length > 0}
                                <div class="mt-2 text-sm text-red-500">
                                    Alerjenler: {#each item.allergy as allergen,i}{allergen[language]}{#if i < item.allergy.length - 1}, {/if}{/each}
                                </div>
                            {/if}
                        </li>
                    {/each}
                </ul>
            </div>
            {:else}
            <div>nada</div>
        {/if}
    </main>
</div>
