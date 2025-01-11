<script>
	import SideBar from '$lib/components/SideBar.svelte';
	import '../app.css';
	import { page } from '$app/stores';
	import { language } from '$lib/stores/language.js';
	import { isSidebarOpen } from '$lib/sidebarState.svelte.js';
	import { onMount } from 'svelte';

	let { children } = $props();
	let isHomePage = $derived($page.url.pathname === '/');

	function toggleSidebar() {
		isSidebarOpen.value = !isSidebarOpen.value;
	}

</script>

<div class="flex h-screen">
	{#if !isHomePage}
		<div class="relative">
			<div id="sidebar" class="relative sidebar" class:open={isSidebarOpen.value}>
				<div id="sidebar" class="relative sidebar" class:open={isSidebarOpen.value}>
					<button class="absolute -top-2 right-2 p-3 text-3xl" on:click={toggleSidebar}
						>&rarr;</button
					>
					<SideBar />
				</div>
			</div>
		</div>
	{/if}
	<div class="flex-1 bg-primary-bg" id="main" class:shifted={isSidebarOpen.value}>
		<div class="flex flex-col gap3">
			{@render children()}
		</div>
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
		background-color: #1a505e;
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
