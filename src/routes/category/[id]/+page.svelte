<script>
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	import { language } from '$lib/stores/language.js';

	import ItemCard from '$lib/components/ItemCard.svelte';
	import BreadCrumbs from '$lib/components/BreadCrumbs.svelte';

	import { categories } from '$lib/stores/categories';


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
			console.log(category);

			// Fetch items in the current category
			const itemsRes = await fetch(`/api/items?category_id=${categoryId}`);
			if (!itemsRes.ok) throw new Error('Failed to fetch items');
			items = await itemsRes.json();

			// Fetch sibling categories in the same parent category
			const siblingsRes = await fetch(`/api/categories?parent_category_id=${parentCategoryId}`);
			if (!siblingsRes.ok) throw new Error('Failed to fetch sibling categories');
			siblingCategories = await siblingsRes.json();

			categories.set(siblingCategories)

			loading = false;
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

<!-- top bar -->

<div class="flex h-screen bg-primary-bg">
	<!-- Sidebar -->
	<!-- <aside class="p-4 w-64 bg-gray-100 border-r">
		<div class="mb-4"></div>
		<h2 class="mb-4 text-lg font-bold">Diğer Kategoriler</h2>
		<ul class="space-y-2">
			{#each siblingCategories as sibling}
				<li>
					<a
						href={`/category/${sibling._id}`}
						class="px-4 py-2 font-medium text-gray-700 rounded cursor-pointer hover:bg-gray-200"
						class:selected={categoryId === sibling._id}
					>
						{sibling.name[$language]}
					</a>
				</li>
			{/each}
		</ul>
	</aside> -->

	<div class="flex-1">
		<nav class="relative w-full shadow-lg">
			<div class="flex justify-between items-center">
				<div class="flex gap-3 items-center px-3">
					<span class="p-2 rounded-full bg-primary"
						><img
							src="/icons/home.svg"
							class="w-4 hover:cursor-pointer hover:drop-shadow-md"
							alt="home"
						/></span
					>
					<span class="p-2 rounded-full bg-primary"
						><img
							src="/icons/share.svg"
							class="w-4 hover:cursor-pointer hover:drop-shadow-md"
							alt="share"
						/></span
					>
					<div class="relative p-2 rounded-full group bg-primary hover:cursor-pointer">
						<img
							src="/icons/language.svg"
							class="w-4 hover:cursor-pointer hover:drop-shadow-md"
							alt="language"
						/>
						<div
							class="hidden absolute left-0 mt-2 bg-white rounded border shadow-md group-hover:block"
						>
							<ul>
								<li
									class="px-4 py-2 cursor-pointer hover:bg-gray-200"
									on:click={() => language.set('en')}
								>
									English
								</li>
								<li
									class="px-4 py-2 cursor-pointer hover:bg-gray-200"
									on:click={() => language.set('tr')}
								>
									Türkçe
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div><img src="/images/bharat_crop.png" alt="logo" /></div>
				<div class="p-2 rounded-l-lg bg-primary hover:cursor-pointer">
					<img src="/icons/left_arrow.svg" class="w-4" alt="" />
				</div>
			</div>
		</nav>
		<div></div>

		<!-- Content -->

		<main class="flex overflow-y-auto flex-col gap-4 justify-center items-center p-6 text-center">
			<div class="w-[960px]">
				{#if loading}
					<h2>loading</h2>
				{:else}
					<BreadCrumbs {category} />
					<h2 class="py-4 mb-4 text-3xl font-bold">{category.name[$language]}</h2>
				{/if}

				{#if items.length > 0}
					<div class="py-4 w-full">
						<ul class="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
							{#each items as item}
								<ItemCard {item}  />
							{/each}
						</ul>
					</div>
				{:else}
					<div>Nothing to see :3</div>
				{/if}
			</div>
		</main>
	</div>
</div>
