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
			{ id: 2, text: 'Otra tarea hecha', done: true }
		]
	},
	// Los getters formatean datos, para mostrarlos presentables
	getters: {
		done_todos: state => {
			return state.to_do.filter(todo => todo.done)
		},
		done_todos_count: (state, getters) => {
			return getters.done_todos.length
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
