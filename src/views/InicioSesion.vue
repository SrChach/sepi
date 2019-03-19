<template>
<b-container>
	<b-row>
		<b-col md="6" class="mx-auto">
			<h2 class="text-center">Inicia sesión</h2>
			<b-form @submit.prevent="iniciarSesion()">
				<b-form-group>
					<b-form-input placeholder="Usuario" v-model="usuario" required/>
				</b-form-group>

				<b-form-group>
					<b-form-input placeholder="Contraseña" type="password" v-model="contraseña" required/>
				</b-form-group>

				<b-form-group class="text-center">
					<b-button type="submit" variant="ipn" block>Iniciar sesión</b-button>
				</b-form-group>
			</b-form>
		</b-col>
	</b-row>
</b-container>
</template>

<script>
import BButton from "bootstrap-components/button/button";
import BForm from "bootstrap-components/form/form";
import BFormGroup from "bootstrap-components/form-group/form-group";
import BFormInput from "bootstrap-components/form-input/form-input";
export default {
	data(){
		return {
			usuario: "",
			contraseña: ""
		}
	},
	components: {
		"b-button": BButton,
		"b-form": BForm,
		"b-form-group": BFormGroup,
		"b-form-input": BFormInput
	},
	methods: {
		iniciarSesion(){
			return false;
		}
	}
}
</script>
