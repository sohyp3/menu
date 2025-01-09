<script>
	import { language } from '$lib/stores/language.js';
	import { categories } from '$lib/stores/categories.js';

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
		
		<a class="p-3 rounded-md" href="/category/{category._id}"
			>{category.name[$language]}</a
		>
		</div>
	{/each}
</aside>
