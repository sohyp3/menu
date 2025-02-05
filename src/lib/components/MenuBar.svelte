<script>
	import { isSidebarOpen } from '$lib/sidebarState.svelte.js';
	import { isLoading } from '$lib/stores/loading';
	function toggleSidebar() {
		isSidebarOpen.value = !isSidebarOpen.value;
	}
	function goSomewhere(where) {
		isSidebarOpen.value = false;
		isLoading.set(true);
		window.location.href = '/parent_category/' + where;
	}
	// if (isSidebarOpen.value) {
	// 	document.getElementById('menu-toggle').classList.remove('active');

	// }
	// else{

	// 	document.getElementById('menu-toggle').classList.remove('active');
	// }
</script>

<div class="flex justify-between py-3">
	<button
		class="p-2 text-white rounded-r-full w-fit text-nowrap bg-primary"
		onclick={toggleSidebar}
	>
		<div class="flex gap-1 items-center">
			<div class="burger" class:is-active={isSidebarOpen.value}>
				<div class="line-01"></div>
				<div class="line-02"></div>
				<div class="line-03"></div>
			</div>
			<span class="flex text-xl"> MENU</span>
		</div>
	</button>

	<div class="flex gap-1 items-center">
		<button onclick={() => goSomewhere('2')} class="p-3 rounded-full bg-primary">
			<img
				src="/icons/drink.svg"
				alt="drink"
				class="w-6 filter hue-rotate-180 invert saturate-200 sepia"
			/>
		</button>

		<!-- <button onclick={() => goSomewhere('1')} class="p-3 rounded-full bg-primary">
			<img
				src="/icons/food.svg"
				alt="food"
				class="w-6 filter hue-rotate-180 invert saturate-200 sepia"
			/>
		</button> -->

		<!-- <button onclick={() => goSomewhere('3')} class="p-3 rounded-full bg-primary">
			<img
				src="/icons/special.svg"
				alt="Special"
				class="w-6 filter hue-rotate-180 invert saturate-200 sepia"
			/>
		</button> -->
	</div>
</div>

<style>
	.burger {
		cursor: pointer;

		position: relative;
		width: 40px;
		height: 40px;
		transition: 0.4s;
		&:hover {
			div[class*='line'] {
				width: 20px;
			}
		}
	}

	div[class*='line-'] {
		background-color: #fff;
		height: 4px;
		border-radius: 4px;
		margin-top: 8px;
		position: absolute;
		transition: 0.3s ease;
	}

	.line-01 {
		width: 32px;
		left: 0;
	}
	.line-02 {
		width: 24px;
		top: 12px;
		left: 0;
	}
	.line-03 {
		width: 16px;
		top: 24px;
		left: 0;
	}

	.burger.is-active {
		.line-02 {
			width: 32px;
		}
		.line-01 {
			width: 20px;
			transform: rotate(-45deg);
			top: 6px;
			left: -4px;
		}
		.line-03 {
			width: 20px;
			transform: rotate(45deg);
			top: 18px;
			left: -4px;
		}
		&:hover {
			.line-01,
			.line-03 {
				width: 20px;
				left: 2px;
			}
			.line-02 {
				width: 40px;
			}
		}
	}
</style>
