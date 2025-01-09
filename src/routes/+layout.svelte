<script>
	import SideBar from '$lib/components/SideBar.svelte';
	import '../app.css';
	import { page } from '$app/stores';
	import { language } from '$lib/stores/language.js';

	let { children } = $props();
	let isHomePage = $derived($page.url.pathname === '/');

	let isSidebarOpen = $state(false);

	// Function to toggle sidebar
	function toggleSidebar() {
		isSidebarOpen = !isSidebarOpen;
	}

	const translations = {
		en: { open: 'Open The Menu'},
		tr: { open:"Menuyu Aç"},
	};
</script>

<div class="flex h-screen">
	{#if !isHomePage}
		<div class="relative">
			<button class="absolute left-0 top-20 p-2 text-white rounded-r-full text-nowrap w-fit bg-primary" on:click={toggleSidebar}>&#9776; {translations[$language].open}</button>

			<div id="sidebar" class="relative sidebar" class:open={isSidebarOpen}>
				<button class="absolute -top-2 right-2 p-3 text-3xl" on:click={toggleSidebar}>&rarr;</button>
				<SideBar />
			</div>
		</div>
	{/if}
	<div class="flex-1 bg-primary-bg" id="main" class:shifted={isSidebarOpen}>
		{@render children()}
	</div>
</div>

<style>
	/* Basic styling */

	/* Sidebar styles */
	.sidebar {
		height: 100%;
		width: 0;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #1A505E;
		color: white;
		overflow-x: hidden;
		transition: 0.5s;
		text-align: center;
		z-index: 2;
		padding-top: 20px;
	}

	/* Main content area */
	#main {
		transition: margin-left 0.5s;
	}


	/* Open the sidebar */
	.sidebar.open {
		width: 192px;
	}

	/* Move the main content when sidebar opens */
	#main.shifted {
		margin-left: 192px;
	}
</style>
