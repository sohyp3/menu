<script>
    import { language } from '$lib/stores/language.js';
</script>


<nav class="relative w-full shadow-lg">
	<div class="flex justify-between items-center">
		<div class="flex gap-3 items-center px-3">
			<span class="p-2 rounded-full bg-primary"
				> <a href="/"> <img
					src="/icons/home.svg"
					class="w-4 filter hue-rotate-180 invert saturate-200 sepia hover:cursor-pointer hover:drop-shadow-md"
					alt="home"
				/></a></span
			>
			<!-- <span class="p-2 rounded-full bg-primary"
				><img
					src="/icons/share.svg"
					class="w-4 hover:cursor-pointer hover:drop-shadow-md"
					alt="share"
				/></span
			> -->
			<div class="relative p-2 rounded-full group bg-primary hover:cursor-pointer">
				<img
					src="/icons/language.svg"
					class="w-4 filter hue-rotate-180 invert saturate-200 sepia hover:cursor-pointer hover:drop-shadow-md"
					alt="language"
				/>
				<div
					class="hidden absolute left-0 mt-2 bg-white rounded border shadow-md group-hover:block"
				>
					<ul>
						<button
							class="px-4 py-2 cursor-pointer hover:bg-gray-200"
							on:click={() => language.set('en')}
						>
							English
						</button>
						<button
							class="px-4 py-2 cursor-pointer hover:bg-gray-200"
							on:click={() => language.set('tr')}
						>
							Türkçe
						</button>
					</ul>
				</div>
			</div>
		</div>
		<div> <a href="/"> <img src="/images/bharat_crop.png" alt="logo" /> </a></div>
		<div on:click={()=> history.back()} class="p-2 rounded-l-lg bg-primary hover:cursor-pointer">
			 <img src="/icons/left_arrow.svg" class="w-4 filter hue-rotate-180 invert saturate-200 sepia" alt="goback" />
		</div>
	</div>
</nav>
