const { mix } = require('laravel-mix');

// mix.disableNotifications();
// mix.sourceMaps();
// mix.version();

// Styles
//-------------------------------------------------------

mix.sass('resources/assets/front/sass/app.scss', '/assets/css');
mix.sass('resources/assets/back/sass/admin.scss', '/assets/css');

// Scripts
//-------------------------------------------------------

mix.js('resources/assets/front/js/app.js', '/assets/js');
mix.js('resources/assets/back/js/admin.js', '/assets/js')
   .extract([
       'axios', 'vue', 'jquery', 'bootstrap-sass', 'lodash', 'chart.js', 'simplemde', 'dropzone',
       'eonasdan-bootstrap-datetimepicker', 'jquery-slimscroll', 'select2', 'js-cookie', 'fastclick'
   ], '/assets/js/vendors.js');

mix.copy('node_modules/pace-progress/pace.min.js', 'public/assets/js/vendors/pace.min.js');

// Fonts
//-------------------------------------------------------
mix.copy([
    'node_modules/bootstrap-sass/assets/fonts/bootstrap',
    'node_modules/font-awesome/fonts',
    'node_modules/ionicons/dist/fonts',
    'node_modules/weathericons/font',
    'resources/assets/back/fonts',
], 'public/assets/fonts');

// Images
//-------------------------------------------------------

mix.copy('node_modules/bootstrap-colorpicker/dist/img/bootstrap-colorpicker', 'public/assets/img/bootstrap-colorpicker');
mix.copy('node_modules/ion-rangeslider/img', 'public/assets/img/ion-rangeslider');
mix.copy('resources/assets/back/img', 'public/assets/img');

// SVG
//-------------------------------------------------------

mix.copy('node_modules/flag-icon-css/flags', 'public/assets/svg/flags');

// Demo assets
//-------------------------------------------------------
// mix.copy('resources/assets/demo/js/pages/dashboard.js', 'public/demo-assets/js/dashboard.js');
