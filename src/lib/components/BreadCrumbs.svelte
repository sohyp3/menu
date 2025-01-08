<script>
	let { category, item = "",} = $props();
    import { language } from '$lib/stores/language.js';
</script>


<div class="flex gap-3 items-center px-4 py-2 my-8 text-sm bg-gray-300">
    <!-- {category.name[language]} -->
    <a href="/"><img src="/icons/home.svg" class="w-4" alt="home"></a>
    <span>/</span>
    <a href="/category/{category._id}">{category.name[$language]}</a>
    {#if item != ""}
    <span>/</span>
    <span>{item.name[$language]}</span>
    {/if}



</div>




