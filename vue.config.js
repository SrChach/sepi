module.exports = {
	devServer: {
		port: 8080, // Puerto que escucha de nuestra vue-app
		proxy: {
			'/auth': {
				target: 'http://127.0.0.1/api', // Sitio al que va a apuntar (redirigir)
				pathRewrite: {'^/auth/': '/'}, // Para que, por ejemplo, no busque "auth" en el server de datos
				secure: false,
				changeOrigin: true
			},
			'/api': { // sitio al que redirige
				target: 'http://127.0.0.1/',
				pathRewrite: {'^/api/': '/'},
				secure: false
			}
		}
	}
}

