<script>
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	import ItemCard from '$lib/components/ItemCard.svelte';
	import BreadCrumbs from '$lib/components/BreadCrumbs.svelte';
	import SideBar from '$lib/components/SideBar.svelte';

	// svelte-ignore non_reactive_update
	let p_categoryId = null;
	let loading = $state(true);
	let categories = $state({});

	let language = $state('en');
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
			const r_categories = await fetch(`/api/parent_category/${p_categoryId}`);
			if (!r_categories.ok) throw new Error('Failed to fetch category');

			categories = await r_categories.json();
			console.log(categories);
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

	{#if loading}
		<h1>loading</h1>
	{:else}
		{#each categories as category}
			<ItemCard item={category} {language} />
		{/each}
	{/if}
</div>
