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
	<h1 class="py-3 mb-4 text-2xl font-bold border-b border-b-white">{$parent_category_store[$language].toUpperCase()}</h1>

	{#each $categories as category}
		<div
			class="grid grid-cols-3 gap-1 justify-center items-center px-3 py-1 text-white border-b border-white transition-shadow duration-200 hover:shadow-2xl"
		>
			{#if category.image}
				<img class="w-10 rounded-md" src={category.image} alt="image" />
			{/if}

			<button class="col-span-2 p-3 rounded-md" on:click={() => goLink(`/category/${category.id}`)}>
				{category.name[$language]}
			</button>
		</div>
	{/each}
	<div class="flex">
		<a
			href="https://www.instagram.com/blounge.1/"
			class="flex flex-col gap-1 mx-auto text-xs"
			> <img class="w-12" src="/icons/insta.svg" alt="insta" />Follow Us</a

		>

		<a
			href="https://maps.app.goo.gl/1UmT5ZSxxo3hLKBPA"
			class="flex flex-col gap-1 mx-auto text-xs"
			><img class="w-12" src="/icons/maps.svg" alt="maps" /> Rate Us </a
		>
	</div>
</aside>
