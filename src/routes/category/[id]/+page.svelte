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
	import Loading from '$lib/components/Loading.svelte';

	let {data} = $props()
	let items = data.items
	let category = data.category;
	



	let loading = $state(false);

	function toggleLanguage(lang) {
		language.set(lang);
	}
	
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
				<Loading />
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
