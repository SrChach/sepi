<template>
  <b-container class="about text-center">
    <h1>Acerca de</h1>
    <button @click="hacia_api">Hacia API</button>
    <button @click="hacia_raiz">hacia "/"</button>
  </b-container>
</template>


<script>
	export default {
		methods: {
			hacia_api(){
				fetch('auth/index.php')
					.then(res => res.json())
					.then(res => console.log(res))
			},
			hacia_raiz(){
				fetch('api/index.php')
					.then(res => res.json())
					.then(res => console.log(res))
			}
		}
	}
</script>