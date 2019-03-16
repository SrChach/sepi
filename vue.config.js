const path = require('path');

module.exports = {
	devServer: {
		port: 8080, // Puerto que escucha de nuestra vue-app (Aparentemente no necesario)
		proxy: {
			'/auth': {
				target: 'http://127.0.0.1/api', // Sitio al que va a apuntar (redirigir)
				pathRewrite: {'^/auth/': '/'}, // Para que, por ejemplo, no busque "auth" en el server de datos
				secure: false, // (Aparentemente no necesario)
				changeOrigin: true
			},
			'/api': { // sitio al que redirige
				target: 'http://127.0.0.1/',
				pathRewrite: {'^/api/': '/'},
				secure: false // (Aparentemente no necesario)
			}
		}
	},
	configureWebpack: {
		resolve: {
			alias: {
				'bootstrap-components': path.resolve(__dirname, 'node_modules/bootstrap-vue/es/components')
			}
		}
	}
}

