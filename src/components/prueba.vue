<template>
	<div>
		<h2>Acciones con Vuex</h2>
		<button @click="estado">
			modifica el estado
		</button>
		<br><br>
		<button @click="obtener_simple">
			Recibe datos de un getter simple
		</button>
		<br><br>
		<button @click="getter_getter">
			Getter que obtiene datos de otro getter
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
			},
			obtener_simple(){
				// Manda a llamar un getter de la $store
				console.log(this.$store.getters.done_todos)
			},
			getter_getter(){
				console.log(`Desde getter que obtiene datos de otro getter: ${this.$store.getters.done_todos_count}`)
			}

		}
	}
</script>