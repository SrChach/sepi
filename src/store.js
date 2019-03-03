import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	// State contiene las propiedades sobre las que trabajaremos globalmente
	state: {
		count: 0,
		to_do: [
			{ id: 1, text: 'Una tarea hecha', done: true },
			{ id: 2, text: 'Una tarea fallida', done: false },
			{ id: 3, text: 'Otra tarea hecha', done: true }
		]
	},
	// Los getters formatean datos, para mostrarlos presentables
	getters: {
		done_todos: state => {
			return state.to_do.filter(todo => todo.done)
		},
		//	Esta funcion recibe los getters, toma el getter anterior y lo trata como argumento
		done_todos_count: (state, getters) => {
			return getters.done_todos.length
		},
		// Obtener datos mediante algún parámetro. Se le pasa una función
		get_todos_by_id: (state) => (id) => {
			return state.to_do.find(todo => todo.id === id)
		}
	},
	// Las mutations realizan cambios en los datos
	mutations: {
		increment(state) {
			state.count++
		}
	},
	actions: {

	},
	modules: {

	}
})
