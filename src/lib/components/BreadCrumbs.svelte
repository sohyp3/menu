<script>
	let { category, item = '' } = $props();
	import { language } from '$lib/stores/language.js';
	import { isSidebarOpen } from '$lib/sidebarState.svelte.js';

	function goHome() {
		if (isSidebarOpen.value) {
			isSidebarOpen.value = false;
		}
		window.location.href = '/';
	}

</script>


<div class="flex gap-3 items-center px-4 py-2 my-8 text-sm bg-gray-300">
	<!-- {category.name[language]} -->
	<a on:click={goHome} class="hover:cursor-pointer"><img src="/icons/home.svg" class="w-4" alt="home" /></a>
	<span>/</span>
	<a href="/category/{category.id}">{category.name[$language]}</a>
	{#if item != ''}
		<span>/</span>
		<span>{item.name[$language]}</span>
	{/if}
</div>
