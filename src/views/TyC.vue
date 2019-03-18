<template>
<div>
	<h1>Gracias por usar esta aplicación</h1>
	<h3>Usted acepta los siguientes términos y condiciones al usar esta aplicación.</h3>
	<p>{{ terminos }}</p>
</div>
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
