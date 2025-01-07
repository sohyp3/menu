<script>
	let { item, language } = $props();
</script>


<div class="w-36 rounded-md shadow transition-shadow duration-200 ease-in-out lg:w-56 md:w-44 hover:shadow-lg hover:cursor-pointer">
    <div class="h-40 rounded-t-lg">
	{#if item.image && item.image.length > 0}
		<img class="object-cover m-0 w-full h-full rounded-t-lg" src={item.image} alt="{item.name[language]} image" />
	{/if}
    </div>
	<div class="flex flex-col gap-1 py-2 text-white rounded-b-lg bg-primary">
		<h1>{item.name[language]}</h1>
		<h1 class="text-lg font-bold">{item.price} TL</h1>
	</div>

	<!-- {#if item.allergy && item.allergy.length > 0}
        <div class="mt-2 text-sm text-red-500">
            Alerjenler: {#each item.allergy as allergen, i}{allergen[
                    language
                ]}{#if i < item.allergy.length - 1},
                {/if}{/each}
        </div>
    {/if} -->
</div>
