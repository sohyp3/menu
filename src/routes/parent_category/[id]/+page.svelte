<script>
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	import ItemCard from '$lib/components/ItemCard.svelte';
	import BreadCrumbs from '$lib/components/BreadCrumbs.svelte';
	import SideBar from '$lib/components/SideBar.svelte';

	import { language } from '$lib/stores/language.js';
	import { categories } from '$lib/stores/categories';
	import { parent_category_store } from '$lib/stores/parent_category';
	
	import TopBar from '$lib/components/TopBar.svelte';
	import MenuBar from '$lib/components/MenuBar.svelte';
	import Loading from '$lib/components/Loading.svelte';

	// svelte-ignore non_reactive_update
	let p_categoryId = null;
	let parent_category = $state(null);
	let loading = $state(true);
	let l_categories = $state({});

	async function fetchCategoryData() {
		try {
			const r_categories = await fetch(`/api/parent_category/${p_categoryId}`);
			if (!r_categories.ok) throw new Error('Failed to fetch category');

			l_categories = await r_categories.json();
			categories.set(l_categories);

			const p_category = await fetch(`/api/parent_category/${p_categoryId}/info`);
			if (!p_category.ok) throw new Error('Failed to fetch category');

			parent_category = await p_category.json();
			parent_category_store.set(parent_category.name);

			loading = false;
		} catch (error) {
			console.error(error);
		}
	}

	let unsubscribe;
	onMount(() => {
		unsubscribe = page.subscribe((p) => {
			p_categoryId = p.params.id;
			fetchCategoryData();
		});
	});

	onDestroy(() => {
		if (unsubscribe) unsubscribe();
	});
</script>

<div>
	<!-- <div><SideBar  {categories} {language} /></div> -->
</div>

<div class="flex-1">
	<TopBar />
	<MenuBar />

	<!-- Content -->

	<main class="flex overflow-y-auto flex-col gap-4 justify-center items-center p-6 text-center">
		<div class="w-full lg:w-[960px]">
			{#if loading}
			<Loading />
			{:else}
				<!-- <BreadCrumbs {parent_category} /> -->
				<h2 class="py-4 mb-4 text-3xl font-bold">{parent_category.name[$language]}</h2>

				{#if l_categories.length > 0}
					<div class="py-4 w-full">
						<ul class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
							{#each l_categories as category}
								<ItemCard item={category} type="category" />
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
