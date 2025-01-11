<script>
	import { language } from '$lib/stores/language.js';
	import { categories } from '$lib/stores/categories.js';

	import { isSidebarOpen } from '$lib/sidebarState.svelte.js';

	function goLink(link) {
		if (isSidebarOpen.value) {
			isSidebarOpen.value = false;
		}
		window.location.href = link;
	}


	let categoriesList = [];
	categories.subscribe((value) => (categoriesList = value));

	// let { categories = {}} = $props();
</script>

<aside class="flex flex-col gap-3 w-48 h-full bg-primary">
	<!-- <h1>{$language}</h1> -->
	{#each categoriesList as category}

	<div class="flex gap-1 justify-center items-center text-white border-b border-white transition-shadow duration-200 hover:shadow-2xl">
		{#if category.image}
		<img class="w-10" src={category.image} alt="image" />
		{/if}
		
		<button class="p-3 rounded-md" on:click	= {() => goLink(`/category/${category._id}`)}>
		{category.name[$language]}
		
		</button>
		</div>
	{/each}
</aside>
