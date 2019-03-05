<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="hacia_api">Hacia API</button>
    <button @click="hacia_raiz">hacia "/"</button>
  </div>
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