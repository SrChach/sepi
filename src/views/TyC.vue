<template>
<b-container class="text-center">
	<h3>Gracias por usar esta aplicación.</h3>
	<h5>Usted acepta los siguientes términos y condiciones al usar esta aplicación:</h5>
	<p>{{ terminos }}</p>
</b-container>
</template>
<script>

export default {
	data(){
		return {
			terminos: "lorem ipsum"
		}
	},
	mounted(){
		// Desde aquí va a obtener los términos y condiciones
		/*fetch('tyc.php')
			.then(res => res.json())
			.then(res => {
				this.$data.terminos = res;
			});*/
	}
}
</script>
