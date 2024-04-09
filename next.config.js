module.exports = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.pdf/,
			type: "asset/resource",
		});

		return config;
	},
	trailingSlash: true,
};
