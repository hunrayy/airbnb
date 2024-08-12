// const mix = require('laravel-mix');


(async () => {
    const mix = (await import('laravel-mix')).default;
    // your code uses mix

    mix 

    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
})