<script>
	import { language } from '$lib/stores/language.js';
	import { categories } from '$lib/stores/categories.js';
	import { parent_category_store } from '$lib/stores/parent_category.js';

	import { isSidebarOpen } from '$lib/sidebarState.svelte.js';

	function goLink(link) {
		if (isSidebarOpen.value) {
			isSidebarOpen.value = false;
		}
		window.location.href = link;
	}

	let categoriesList = [];
	categories.subscribe((value) => (categoriesList = value));
</script>

<aside class="flex flex-col gap-3 w-48 h-full bg-primary">
	<h1 class="text-2xl font-bold">{$parent_category_store[$language].toUpperCase()}</h1>

	{#each categoriesList as category}
		<div
			class="flex gap-1 justify-center items-center text-white border-b border-white transition-shadow duration-200 hover:shadow-2xl"
		>
			{#if category.image}
				<img class="w-10" src={category.image} alt="image" />
			{/if}

			<button class="p-3 rounded-md" on:click={() => goLink(`/category/${category._id}`)}>
				{category.name[$language]}
			</button>
		</div>
	{/each}
	<div class="flex gap-3 justify-evenly w-full">
		<a
			href="https://www.instagram.com/blounge.1/"
			target="_blank"
			class="flex gap-1 justify-center items-center w-12 text-white transition-shadow duration-200 hover:shadow-2xl"
			><img src="/icons/insta.svg" alt="insta" /></a
		>

		<a
			href="https://maps.app.goo.gl/1UmT5ZSxxo3hLKBPA"
			target="_blank"
			class="flex gap-1 justify-center items-center w-12 text-white transition-shadow duration-200 hover:shadow-2xl"
			><img src="/icons/maps.svg" alt="insta" /></a
		>
	</div>
</aside>
