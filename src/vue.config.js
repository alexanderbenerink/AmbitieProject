module.exports = {
	chainWebpack: (config) => {
		// Disable prefetching an preloading globally
		config.plugins.delete('prefetch')
		config.plugins.delete('preload')
	}
}