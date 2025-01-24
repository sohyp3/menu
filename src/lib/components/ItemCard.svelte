<script>
	import { language } from '$lib/stores/language.js';
	import { isLoading } from '$lib/stores/loading';
	let { item, type } = $props();
	let goWhere = null;
	if (type == 'category') {
		goWhere = '/category/' + item.id;
	} else if (type == 'item') {
		goWhere = '/item/' + item.id;
	}
	function loader() {
		isLoading.set(true);
	}
</script>

<a href={goWhere} onclick={loader}>
	<div
		class="w-full rounded-md shadow transition-shadow duration-200 ease-in-out hover:cursor-pointer hover:shadow-lg"
	>
		<div class="h-40 rounded-t-lg">
			{#if item.image && item.image.length > 0}
				<img
					class="object-cover m-0 w-full h-full rounded-t-lg"
					src={item.image}
					alt="{item.name[$language]} image"
				/>
			{:else}
				<img
					class="object-cover m-0 w-full h-full rounded-t-lg"
					src="/images/place_holder.png"
					alt="{item.name[$language]} image"
				/>
			{/if}
		</div>
		<div class="flex flex-col gap-1 py-2 text-white rounded-b-lg bg-primary">
			<h1>{item.name[$language]}</h1>
			{#if item.price}
				<h1 class="text-lg font-bold">{item.price} TL</h1>
			{/if}
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
</a>
