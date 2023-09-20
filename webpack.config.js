module.exports = {
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', { targets: 'defaults' }]],
                        plugins: [
                            '@babel/plugin-proposal-optional-chaining',
                            '@babel/plugin-proposal-nullish-coalescing-operator',
                        ],
                    },
                },
            },
        ],
    },
};
