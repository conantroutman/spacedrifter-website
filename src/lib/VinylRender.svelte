<script>
	import { Canvas, T } from '@threlte/core';
</script>

<div>
	<Canvas>
		<T.Mesh>
			<T.CylinderGeometry />
			<T.MeshBasicMaterial />
		</T.Mesh>
	</Canvas>
</div>

<style>
	div {
		width: 400px;
		height: 400px;
	}
</style>
