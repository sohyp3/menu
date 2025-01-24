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

	let loading = $state(false);

	let { data } = $props();
	let cats = data.category
	categories.set(cats);


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
				<h2 class="py-4 mb-4 text-3xl font-bold">{data.parent_category.name[$language]}</h2>

				{#if cats.length > 0}
					<div class="py-4 w-full">
						<ul class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
							{#each cats as category}
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
