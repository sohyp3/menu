<script>
	import { language } from '$lib/stores/language.js';
	import { isSidebarOpen } from '$lib/sidebarState.svelte.js';

	function goHome() {
		if (isSidebarOpen.value) {
			isSidebarOpen.value = false;
		}
		window.location.href = '/';
	}
</script>

<nav class="relative w-full shadow-lg">
	<div class="grid grid-cols-3 items-center">
		<div class="flex gap-3 items-center px-3">
			<span class="p-2 rounded-full bg-primary">
				<a on:click={goHome}>
					<img
						src="/icons/home.svg"
						class="w-4 filter hue-rotate-180 invert saturate-200 sepia hover:cursor-pointer hover:drop-shadow-md"
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
			<div class="relative px-2 rounded-full group bg-primary hover:cursor-pointer">
				<div class="flex justify-center items-center py-1">
					<span class="py-1 text-xs text-white"
						>{$language.toUpperCase()}</span
					>
				</div>
				<!-- <img
					src="/icons/language.svg"
					class="w-4 filter hue-rotate-180 invert saturate-200 sepia hover:cursor-pointer hover:drop-shadow-md"
					alt="language"
				/> -->
				<div
					class="hidden absolute -left-[1px] pt-2 text-white group-hover:block"
				>
					<ul class="flex flex-col gap-3 text-xs">
						<button
							class="px-2 py-2 rounded-full cursor-pointer hover:text-primary bg-primary hover:bg-gray-200"
							on:click={() => language.set('en')}
						>
						EN	
						</button>
						<button
							class="px-2 py-2 rounded-full cursor-pointer bg-primary hover:text-primary hover:bg-gray-200"
							on:click={() => language.set('tr')}
						>
						TR	
						</button>
					</ul>
				</div>
			</div>
		</div>
		<div class="mx-auto text-center">
			<a href="/"> <img class="p-2 w-16" src="/images/logo.png" alt="logo" /> </a>
		</div>
		<div on:click={() => history.back()} class="flex justify-end">
			<div class="p-2 w-8 rounded-l-lg hovercursor-pointer bg-primary">
				<img
					src="/icons/left_arrow.svg"
					class="w-4 filter hue-rotate-180 invert saturate-200 sepia"
					alt="goback"
				/>
			</div>
		</div>
	</div>
</nav>
