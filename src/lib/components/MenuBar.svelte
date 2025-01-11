<script>
	import { isSidebarOpen } from '$lib/sidebarState.svelte.js';
	function toggleSidebar() {
		isSidebarOpen.value = !isSidebarOpen.value;
	}
</script>

<div class="flex justify-between py-3">
	<button
		class="p-2 text-white rounded-r-full w-fit text-nowrap bg-primary"
		on:click={toggleSidebar}
	>
		<span class="text-xl"> &#9776;</span> MENU</button
	>

	<div class="flex gap-1 items-center">
		<a href="/parent_category/2" class="p-3 rounded-full bg-primary">
			<img
				src="/icons/drink.svg"
				alt="drink"
				class="w-6 filter hue-rotate-180 invert saturate-200 sepia"
			/>
		</a>
		<a href="/parent_category/1" class="p-3 rounded-full bg-primary">
		<img
			src="/icons/food.svg"
			alt="food"
			class="w-6 filter hue-rotate-180 invert saturate-200 sepia"
		/>
		</a>
		

		<a href="/parent_category/3" class="p-3 rounded-full bg-primary">
		<img
			src="/icons/special.svg"
			alt="Special"
			class="w-6 filter hue-rotate-180 invert saturate-200 sepia"
		/>
		</a>
	</div>
</div>
