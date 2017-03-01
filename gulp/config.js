'use strict';

var config = {};

config.srcPaths = {
    dir: './app',
    main: '/scripts/app.js',
    index: './app/index.html',
    excludeIndex: '!./app/index.html',
    html: './app/**/*.html',
    scss: './app/styles/**/*.scss',
    sassIncludePaths: [],
    js: './app/**/*.js',
    ts: './app/**/*.ts',
    documents: './app/documents/**/*.*',
    images: './app/images/**/*.{svg,jpg,png,gif}',
    fonts: './app/fonts/**/*',
    templates: ['./app/templates/*.html', './app/templates/**/*.html', './app/components/**/*.html'],
    views: ['./app/views/*.html', './app/views/**/*.html'],
    rootFiles: ['./app/*.*', '!./app/*.html'],
    errorPages: ['./app/404.html']
};

config.vendor = {
    fonts: [
      './node_modules/font-awesome/fonts/*.{otf,eof,svg,ttf, woff,woff2}',
      './node_modules/bootstrap-sass/assets/fonts/bootstrap/*.{otf,eof,svg,ttf, woff,woff2}'
    ]
};

config.destPaths = {
    dir: './dist',
    stylesDir: './dist/styles',
    scripts: './dist/scripts',
    images: './dist/images',
    fonts: './dist/fonts',
    templates: './app/scripts/templates',
    views: './app/scripts/views',
    documents: './dist/documents',
    allFiles: './dist/**/*'
};

// tmp directory is used to store files between processing steps
config.tempPaths = {
    dir: './tmp',
    templates: './tmp/templates',
    views: './tmp/views'
};

config.targetPath = {
    dir: './target'
};

module.exports = config;
