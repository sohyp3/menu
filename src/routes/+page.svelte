
<div>
	<div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
		<img src="/images/logo.jpg" class="rounded-full" alt="logo" />
	</div>
	<!-- <span class="fixed top-1 left-1 z-30">
		<span>share</span>
		<span>lang</span>
	</span> -->

	<img
		src="/images/bg.jpg"
		class="object-cover overflow-hidden fixed w-screen h-screen bg-center -z-10"
		alt=""
	/>
	<div class="flex flex-col gap-24 justify-center items-center h-screen align-middle">
		<div class="flex gap-56">
			<div class="clip-hexagon">
				<img class="object-cover h-56" src="/images/home_bg_garden.jpg" alt="img" />
			</div>
			<div class="clip-hexagon">
				<img class="object-cover h-56" src="/images/home_bg_garden.jpg" alt="img" />
			</div>
		</div>

		<div class="flex z-30 gap-9 text-3xl text-black">
			<div class="flex flex-col items-center">
				<div
					class="bg-primary rounded-full p-8 transition-colors duration-200 hover:cursor-pointer hover:bg-[#A7C0A6]"
				>
					<img src="/icons/drink.svg" alt="drink" class="w-12" />
				</div>
				<h1>Drink</h1>
			</div>

			<div class="flex flex-col items-center">
				<div
					class="bg-primary rounded-full p-8 transition-colors duration-200 hover:cursor-pointer hover:bg-[#A7C0A6]"
				>
					<img src="/icons/food.svg" alt="food" class="w-12" />
				</div>
				<h1>Food</h1>
			</div>

			<div class="flex flex-col items-center">
				<div
					class="bg-primary rounded-full p-8 transition-colors duration-200 hover:cursor-pointer hover:bg-[#A7C0A6]"
				>
					<img src="/icons/special.svg" alt="Special" class="w-12" />
				</div>
				<h1>Special</h1>
			</div>
		</div>
	</div>

</div>

<style>
	.clip-hexagon {
		width: 250px;
		height: 250px;
		clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);

		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
</style>
