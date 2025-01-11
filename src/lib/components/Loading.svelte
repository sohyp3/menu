<div class="loading-container">
	<img src="/images/logo.png" alt="Loading Logo" class="logo" />
	<div class="dots">
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
	</div>
</div>

<style>
	.loading-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		width: 150px; /* Adjust logo size */
		height: auto;
		margin-bottom: 20px;
	}

	.dots {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5px;
	}

	.dot {
		width: 10px;
		height: 10px;
		background-color: #333; /* Adjust dot color */
		border-radius: 50%;
		animation: bounce 1.5s infinite ease-in-out;
	}

	.dot:nth-child(2) {
		animation-delay: 0.2s;
	}

	.dot:nth-child(3) {
		animation-delay: 0.4s;
	}

	@keyframes bounce {
		0%,
		80%,
		100% {
			transform: scale(0);
		}
		40% {
			transform: scale(1);
		}
	}
</style>
