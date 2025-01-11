<script>
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	import ItemCard from '$lib/components/ItemCard.svelte';
	import BreadCrumbs from '$lib/components/BreadCrumbs.svelte';

	import { language } from '$lib/stores/language.js';
	import { categories } from '$lib/stores/categories';
	import TopBar from '$lib/components/TopBar.svelte';
	import MenuBar from '$lib/components/MenuBar.svelte';
	import Loading from '$lib/components/Loading.svelte';

	let item_id;
	let category = null;
	let item = {};
	let loading = $state(true);

	async function fetchCategoryData() {
		try {
			const itemRes = await fetch(`/api/items/${item_id}`);
			if (!itemRes.ok) throw new Error('Failed to fetch category');
			item = await itemRes.json();

			const categoryRes = await fetch(`/api/categories/${item.category_id}`);
			if (!categoryRes.ok) throw new Error('Failed to fetch category');
			category = await categoryRes.json();

			loading = false;
		} catch (error) {
			console.error(error);
		}
	}

	let unsubscribe;
	onMount(() => {
		unsubscribe = page.subscribe((p) => {
			item_id = p.params.id;
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
			<div class="lg:w-[960px]">
				{#if loading}
				<Loading />
				{:else}
					<BreadCrumbs {category} {item} />
					<img src={item.image} alt="item" />

					<div class="flex justify-center py-8">
						<div class="w-40 divider">
							<div class="triangle"></div>
							<div class="border-line"></div>
							<h2 class="font-bold">{item.name[$language]}</h2>
							<h2 class="font-bold">{item.price} TL</h2>

							<div class="border-line"></div>

							<div class="triangle-bottom"></div>
						</div>
					</div>

					<div>
						{#if item.desc && item.desc.length > 0}
							<h1>{item.desc[$language]}</h1>
						{/if}
						{#if item.alergies && item.alergies.length > 0}
							<h1>{item.alergies[$language]}</h1>
						{/if}
					</div>
				{/if}
			</div>
		</main>
	</div>
</div>

<style>
	.divider {
		text-align: center;
		position: relative;
		margin: 20px 0;
	}

	.triangle {
		width: 0;
		height: 0;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-bottom: 10px solid #1a505e; /* Same color as the border */
		margin: 0 auto;
		position: relative;
	}

	.border-line {
		border-top: 1px solid #1a505e; /* Top border */
		border-bottom: 1px solid #1a505e; /* Bottom border */
		margin: 0 auto;
		width: 90%; /* Adjust width as needed */
		position: relative;
		top: -1px; /* Adjust to connect with triangle */
	}
	.triangle-bottom {
		width: 0;
		height: 0;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-top: 10px solid #1a505e; /* Same color as the border */
		margin: 0 auto;
		position: relative;
		top: -1px; /* Adjust to connect with the bottom border */
	}
</style>
