<template>
	<div>
		<button @click="estado">
			Cambiar y imprimir estado vuex
		</button>
	</div>
</template>

<script>
	export default {
		methods: {
			estado(){
				//	Nota: Accedemos al estado de Vuex como 'this.$store' en los componentes
				
				// "commit('nombre_mutation')" Manda a llamar una mutacion. Ejecuta un cambio
				this.$store.commit('increment')

				// Acá imprimimos el valor 'count' del estado
				console.log(`Propiedad 'count' incrementada desde un componente: ${this.$store.state.count}`)
			}
		}
	}
</script>