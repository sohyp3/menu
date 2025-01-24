<script>
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	import ItemCard from '$lib/components/ItemCard.svelte';
	import BreadCrumbs from '$lib/components/BreadCrumbs.svelte';

	import { language } from '$lib/stores/language.js';
	import { categories } from '$lib/stores/categories';
	import { isLoading } from '$lib/stores/loading.js';

	import TopBar from '$lib/components/TopBar.svelte';
	import MenuBar from '$lib/components/MenuBar.svelte';
	import Loading from '$lib/components/Loading.svelte';

	let loading = $state(false);
	let { data } = $props();

	let item = data.item;
	let category = data.category;

	onMount(() => {
        isLoading.set(false); // Hide loading when page is fully loaded
    });
</script>

<!-- top bar -->

<div class="flex h-screen bg-primary-bg">
	<div class="flex-1">
		<TopBar />
		<MenuBar />

		<!-- Content -->

		<main class="flex overflow-y-auto flex-col gap-4 justify-center items-center p-6 text-center">
			<div class=" w-full lg:w-[960px]">
				{#if $isLoading}
					<Loading />
				{:else}
					<BreadCrumbs {category} {item} />
					{#if item.image && item.image != ''}
						<img src={item.image} alt="item" class="mx-auto" />
					{:else}
						<img src="/images/place_holder.png" alt="placeholder" class="mx-auto" />
					{/if}

					<div class="flex justify-center py-8">
						<div class="w-40 divider">
							<div class="triangle"></div>
							<div class="border-line"></div>
							<h2 class="font-bold">{item.name[$language]}</h2>
							<h2 class="font-bold">{item.price} TL</h2>

							<div class="border-line"></div>

							<div class="triangle-bottom"></div>
						</div>
					</div>

					<div>
						{#if item.description[$language]}
							<h1>{item.description[$language]}</h1>
						{/if}
					</div>
				{/if}
			</div>
		</main>
	</div>
</div>

<style>
	.divider {
		text-align: center;
		position: relative;
		margin: 20px 0;
	}

	.triangle {
		width: 0;
		height: 0;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-bottom: 10px solid #1a505e; /* Same color as the border */
		margin: 0 auto;
		position: relative;
	}

	.border-line {
		border-top: 1px solid #1a505e; /* Top border */
		border-bottom: 1px solid #1a505e; /* Bottom border */
		margin: 0 auto;
		width: 90%; /* Adjust width as needed */
		position: relative;
		top: -1px; /* Adjust to connect with triangle */
	}
	.triangle-bottom {
		width: 0;
		height: 0;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-top: 10px solid #1a505e; /* Same color as the border */
		margin: 0 auto;
		position: relative;
		top: -1px; /* Adjust to connect with the bottom border */
	}
</style>
