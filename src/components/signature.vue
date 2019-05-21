<template>
	<div id="app">
		<div class="container">
			<div class="row">
				<div class="col-12 mt-2">
					<VueSignaturePad
						id="signature"
						width="100%"
						height="500px"
						ref="signaturePad"
					/>
				</div>
				<div class="col-6 mt-2">
					<button
						class="btn btn-outline-secondary float-right"
						@click="undo"
					>
						Undo
					</button>
				</div>
				<div class="col-6 mt-2">
					<button
						class="btn btn-outline-primary float-left"
						@click="save"
					>
						Save
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import VueSignaturePad from 'vue-signature-pad';
export default {
	methods: {
		undo() {
			this.$refs.signaturePad.undoSignature();
		},
		save() {
			const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
			alert('Abra la consola para ver los datos guardaddos');
			console.log(isEmpty);
			console.log(data);
		}
	},
	components: {
		VueSignaturePad
	}
};
</script>

<style>
#signature {
	border: double 3px transparent;
	border-radius: 5px;
	background-image: linear-gradient(white, white),
		radial-gradient(circle at top left, #4bc5e8, #9f6274);
	background-origin: border-box;
	background-clip: content-box, border-box;
}
</style>
