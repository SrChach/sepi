<template>
<b-container>
	<b-row>
		<b-col md="6" class="mx-auto">
			<h2 class="text-center">Regístrate</h2>
			<b-form @submit.prevent="continuar()">
				<b-alert variant="danger" dismissible v-model="alertaError">
					{{error}}
				</b-alert>
				<div v-show="step === 0">
					<b-form-group label="Tus nombres:">
						<b-form-input placeholder="Nombre" v-model="nombre"/>
					</b-form-group>
					<b-form-group label="Tus apellidos:">
						<b-form-input placeholder="Apellidos" v-model="apellidos"/>
					</b-form-group>
				</div>

				<div v-show="step === 1">
					<b-form-group label="Correo:">
						<b-form-input type="email" placeholder="Correo" v-model="correo"/>
					</b-form-group>
					<b-form-group description="Solo letras y números" label="Usuario:">
						<b-form-input placeholder="Usuario" v-model="usuario"/>
					</b-form-group>
				</div>

				<div v-show="step === 2">
					<b-form-group label="Tu contraseña:">
						<b-form-input type="password" placeholder="Contraseña" v-model="contraseña"/>
					</b-form-group>
					<b-form-group label="Vuelve a escribir tu contraseña:">
						<b-form-input type="password" placeholder="Vuelve a escribir la contraseña" v-model="contraseña2"/>
					</b-form-group>
				</div>

				<b-form-group>
					<b-row>
						<b-col>
							<b-button variant="ipn" @click="retroceder()" block v-show="step !== 0">Anterior</b-button>
						</b-col>
						<b-col>
							<b-button type="submit" variant="ipn" class="float-right" block>Siguiente</b-button>
						</b-col>
					</b-row>
				</b-form-group>
			</b-form>
		</b-col>
	</b-row>
</b-container>
</template>

<script>
import BButton from "bootstrap-components/button/button";
import BForm from "bootstrap-components/form/form";
/*import BInvalidFeedback from "bootstrap-components/form/form-invalid-feedback";
import BValidFeedback from "bootstrap-components/form/form-valid-feedback";*/
import BFormGroup from "bootstrap-components/form-group/form-group";
import BFormInput from "bootstrap-components/form-input/form-input";

export default {
	data(){
		return {
			step: 0,
			nombre: null,
			apellidos: "",
			usuario: "",
			correo: "",
			contraseña: "",
			contraseña2: "",
			alertaError: false,
			error: null
		}
	},
	components: {
		"b-button": BButton,
		"b-form": BForm,
		"b-form-group": BFormGroup,
		"b-form-input": BFormInput,
		//"b-form-invalid-feedback": BInvalidFeedback,
		//"b-form-valid-feedback": BValidFeedback,
	},
	methods: {
		continuar(){
			this.$data.alertaError = false;

			if(this.$data.step === 0){
				if(!this.$data.nombre || !this.$data.apellidos){
					this.$data.error = "Escribe tu nombre y tu usuario.";
					return this.$data.alertaError = true;
				}
			}

			if(this.$data.step === 1){
				if(!this.$data.correo || !this.$data.usuario ||/\W/.test(this.$data.usuario)){
					this.$data.error = "Correo o usuario inválido.";
					return this.$data.alertaError = true;
				}
			}

			if(this.$data.step === 2){
				if(this.$data.contraseña !== this.$data.contraseña2){
					this.$data.error = "Las contraseñas no coinciden.";
					return this.$data.alertaError = true;
				}

				return this.registrar();
			}
			++this.$data.step;
		},
		retroceder(){
			if(this.$data.step === 0){
				return;
			}

			--this.$data.step;
		},
		registrar(){
			return false;
		}
	}
}
</script>
