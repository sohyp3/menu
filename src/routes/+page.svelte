<script>
	import { language } from '$lib/stores/language.js';

	const translations = {
		en: { food: 'Food',drink:"Drinks",special :"Special" },
		tr: { food: 'Yemek',drink:"Içecek",special :"Spesial" },
	};
</script>

<div class="overflow-hidden bg-[#CCDFF2] ">
	<div class="fixed top-1/2 left-1/2 z-30 transform -translate-x-1/2 -translate-y-1/2">
		<img src="/images/logo.png" class="w-48 rounded-full" alt="logo" />
	</div>
	<span class="fixed top-1 left-1 z-30">
	<!-- <button></button> -->
	</span>

	<img
		src="/images/COVER MENU.jpg"
		class="object-cover overflow-hidden fixed z-10 w-screen h-screen bg-center opacity-35"
		alt=""
	/>
	<div class="flex z-30 flex-col gap-24 justify-end items-center h-screen align-middle">
		<!-- <div class="hidden gap-56 md:flex">
			<div class="z-30 clip-hexagon">
				<img class="object-cover z-30 h-56"  src="/images/home_bg_garden.jpg" alt="img" />
			</div>
			<div class="z-30 clip-hexagon">
				<img class="object-cover h-56" src="/images/home_bg_garden.jpg" alt="img" />
			</div>
		</div> -->

		<div class="flex z-30 gap-9 pb-40 font-bold md:text-3xl text-primary">
			<a href="/parent_category/2">
				<div class="flex flex-col items-center">
					<div
						class="rounded-full bg-primary p-8 transition-colors duration-200 hover:cursor-pointer hover:bg-[#CCDFF2]"
					>
						<img src="/icons/drink.svg" alt="drink" class="w-12 filter hue-rotate-180 invert saturate-200 sepia" />
					</div>
					<h1>{translations[$language].drink}</h1>
				</div>
			</a>

			<a href="/parent_category/1">
				<div class="flex flex-col items-center">
					<div
						class="rounded-full bg-primary p-6 transition-colors duration-200 hover:cursor-pointer hover:bg-[#CCDFF2]"
					>
						<img src="/icons/food.svg" alt="food" class="w-16 filter hue-rotate-180 invert saturate-200 sepia" />
					</div>
					<h1>{translations[$language].food}</h1>
				</div>
			</a>

			<a href="/parent_category/3">
				<div class="flex flex-col items-center">
					<div
						class="rounded-full bg-primary p-8 transition-colors duration-200 hover:cursor-pointer hover:bg-[#CCDFF2]"
					>
						<img src="/icons/special.svg" alt="Special" class="w-12 filter hue-rotate-180 invert saturate-200 sepia" />
					</div>
					<h1>{translations[$language].special}</h1>
				</div>
			</a>
		</div>
	</div>
</div>

<style>
	/* .clip-hexagon {
		width: 250px;
		height: 250px;
		clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);

		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	} */
</style>
