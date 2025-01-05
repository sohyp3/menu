<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let categories = [];
	let selectedCategory = null;
	let items = [];
	let page = 1;
	let language = 'en'; // Default language

	if (browser) {
		// Only execute this in the browser
		language = localStorage.getItem('language') || 'en';
	}

	function toggleLanguage() {
		language = language === 'en' ? 'es' : 'en';
		if (browser) {
			localStorage.setItem('language', language);
		}
	}
	async function fetchCategories() {
		const res = await fetch('/api/categories');
		console.log(res);
		categories = await res.json();
	}

	async function fetchItems() {
		if (!selectedCategory) return;
		const res = await fetch(`/api/items?category_id=${selectedCategory}&page=${page}`);
		items = await res.json();
	}

	function selectCategory(categoryId) {
		selectedCategory = categoryId;
		page = 1;
		fetchItems();
	}

	function nextPage() {
		page++;
		fetchItems();
	}

	function prevPage() {
		if (page > 1) {
			page--;
			fetchItems();
		}
	}

	onMount(fetchCategories);
</script>

<h1>hi</h1>

