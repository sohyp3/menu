<script>
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	import { language } from '$lib/stores/language.js';

	import ItemCard from '$lib/components/ItemCard.svelte';
	import BreadCrumbs from '$lib/components/BreadCrumbs.svelte';
	import TopBar from '$lib/components/TopBar.svelte';

	import { categories } from '$lib/stores/categories';
	import MenuBar from '$lib/components/MenuBar.svelte';

	let categoryId;
	let parentCategoryId;
	let items = [];
	let siblingCategories = [];
	let category = {};
	let loading = true;

	function toggleLanguage(lang) {
		language.set(lang);
	}
	async function fetchCategoryData() {
		try {
			// Fetch the current category details to get the parent_category_id
			const categoryRes = await fetch(`/api/categories/${categoryId}`);
			if (!categoryRes.ok) throw new Error('Failed to fetch category');
			category = await categoryRes.json();

			parentCategoryId = category.parent_category_id;

			// Fetch items in the current category
			const itemsRes = await fetch(`/api/items?category_id=${categoryId}`);
			if (!itemsRes.ok) throw new Error('Failed to fetch items');
			items = await itemsRes.json();

			// Fetch sibling categories in the same parent category
			const siblingsRes = await fetch(`/api/categories?parent_category_id=${parentCategoryId}`);
			if (!siblingsRes.ok) throw new Error('Failed to fetch sibling categories');
			siblingCategories = await siblingsRes.json();

			categories.set(siblingCategories);

			loading = false;
		} catch (error) {
			console.error(error);
		}
	}

	let unsubscribe;
	onMount(() => {
		unsubscribe = page.subscribe((p) => {
			categoryId = p.params.id;
			fetchCategoryData();
		});
	});

	onDestroy(() => {
		if (unsubscribe) unsubscribe();
	});
</script>

<!-- top bar -->

<div class="flex h-screen bg-primary-bg">
	<div class="flex-1">
		<TopBar />
		<MenuBar />

		<!-- Content -->

		<main class="flex overflow-y-auto flex-col gap-4 justify-center items-center p-6 text-center">
			<div class="w-full lg:w-[960px]">
				{#if loading}
					<h2>loading</h2>
				{:else}
					<BreadCrumbs {category} />
					<h2 class="py-4 mb-4 text-3xl font-bold">{category.name[$language]}</h2>

					{#if items.length > 0}
						<div class="py-4 w-full">
							<ul class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
								{#each items as item}
									<ItemCard {item} type="item" />
								{/each}
							</ul>
						</div>
					{:else}
						<div>Nothing Yet</div>
					{/if}
				{/if}
			</div>
		</main>
	</div>
</div>
