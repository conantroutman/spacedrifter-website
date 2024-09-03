<script lang="ts">
	export let src: string;
</script>

<div class="container">
	<div class="cover">
		<img {src} alt="Cover" />
	</div>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		perspective: 600px;
	}

	@keyframes initAnimation {
		0% {
			transform: rotateY(0deg);
		}

		100% {
			transform: rotateY(-30deg);
		}
	}

	.cover {
		width: 100%;
		height: 100%;
		position: relative;
		transform-style: preserve-3d;
		transform: rotateY(-30deg);
		transition: 1s ease;
		animation: 1s ease 0s 1 initAnimation;
	}

	.container:hover .book {
		transform: rotateY(0deg);
	}

	img {
		position: absolute;
		top: 0;
		left: 0;
		background-color: red;
		width: 100%;
		height: 100%;
		transform: translateZ(15px);
		background-color: #01060f;
		border-radius: 0 2px 2px 0;
		box-shadow: 5px 5px 20px #666;
	}
</style>
