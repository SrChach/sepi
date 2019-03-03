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
		<br><br>
		<button @click="get_by_id_2(3)">
			Getter que obtiene un valor por su ID
		</button>
		<br><br>
		<button @click="nuevo_todo">
			Añadir una tarea, pasando un objeto
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
			},
			// Devuelve algo de los getters, recibiendo un id como parámetro
			get_by_id_2(id){
				console.log('Getter al que se le pasa un parámetro:')
				console.log( this.$store.getters.get_todos_by_id(id) )
			},
			nuevo_todo(){
				this.$store.commit('add_todo', { text: 'Tarea generada', done: false })
				console.log(this.$store.state.to_do)
			}

		}
	}
</script>