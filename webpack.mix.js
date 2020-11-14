const mix = require('laravel-mix');
const glob = require('glob');
const path = require('path');
const workspaces = require('./package.json').workspaces;

/*--------------------------------------------------------------------------
 | Mix Configuration
 |--------------------------------------------------------------------------
 */

const options = {
    paths: {
        public: path.normalize('public'),
        assets: path.normalize('public/assets'),
        vendor: path.normalize('public/vendor'),
    },
}

mix.setPublicPath(options.paths.assets);
mix.setResourceRoot('../');

mix.vue({
    version: 3,
});

mix.alias({
    vue$: path.join(__dirname, 'node_modules/vue/dist/vue.esm-bundler.js'),
});

mix.version();
mix.disableSuccessNotifications();

if (process.env.NODE_ENV === 'production') {
    mix.options({
        cssNano: {
            discardComments: {
                removeAll: true
            },
        },
    });
}
else if (process.env.NODE_ENV === 'development') {
    mix.sourceMaps();
}

/*--------------------------------------------------------------------------
 | Run Mixes
 |--------------------------------------------------------------------------
 */

workspaces.forEach((workspace) => {
    let mixFiles = glob.sync(path.join(__dirname, workspace, 'webpack.mix.js'), {
        'ignore': [
            '**/node_modules/**',
        ],
    });

    mixFiles.forEach((mixFile) => {
        require(mixFile)(mix, options)
    });
});
