<script>
	import { language } from '$lib/stores/language.js';
	import { isLoading } from '$lib/stores/loading';
	import { isSidebarOpen } from '$lib/sidebarState.svelte.js';
	import SideBar from './SideBar.svelte';



	function goHome() {
		isLoading.set(true)
		if (isSidebarOpen.value) {
			isSidebarOpen.value = false;
		}
		window.location.href = '/';
	}
	function goBack() {
		isLoading.set(true)

		isSidebarOpen.value = false;
		window.history.back();
	}


</script>

<nav class="relative w-full shadow-lg h-18 bg-primary">
	<div class="grid grid-cols-3 items-center">
		<div class="flex gap-3 items-center px-3">
			<span class="p-2 rounded-full bg-primary-bg">
				<a onclick={goHome}>
					<img
						src="/icons/home.svg"
						class="w-4 filter hue-rotate-180 hover:cursor-pointer hover:drop-shadow-md"
						alt="home"
					/></a
				></span
			>
			<!-- <span class="p-2 rounded-full bg-primary"
				><img
					src="/icons/share.svg"
					class="w-4 hover:cursor-pointer hover:drop-shadow-md"
					alt="share"
				/></span
			> -->
			<div class="relative px-2 rounded-full group bg-primary-bg hover:cursor-pointer">
				<div class="flex justify-center items-center py-1">
					<span class="py-1 text-xs text-primary">{$language.toUpperCase()}</span>
				</div>
				<!-- <img
					src="/icons/language.svg"
					class="w-4 filter hue-rotate-180 invert saturate-200 sepia hover:cursor-pointer hover:drop-shadow-md"
					alt="language"
				/> -->
				<div class="absolute -left-[1px] hidden pt-2 text-white group-hover:block">
					<ul class="flex flex-col gap-3 text-xs">
						<button
							class="px-2 py-2 rounded-full cursor-pointer bg-primary hover:bg-gray-200 hover:text-primary"
							onclick={() => language.set('en')}
						>
							EN
						</button>
						<button
							class="px-2 py-2 rounded-full cursor-pointer bg-primary hover:bg-gray-200 hover:text-primary"
							onclick={() => language.set('tr')}
						>
							TR
						</button>
					</ul>
				</div>
			</div>
		</div>
		<div class="flex justify-center items-center">
			<button onclick={goHome}> <img class="w-16" src="/images/logo.png" alt="logo" /> </button>
		</div>
		<div onclick={goBack} class="flex justify-end">
			<div class="p-2 w-8 rounded-l-lg hover:cursor-pointer bg-primary-bg">
				<img src="/icons/left_arrow.svg" class="w-4 filter" alt="goback" />
			</div>
		</div>
	</div>
</nav>
