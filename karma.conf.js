module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            './bower_components/angular/angular.min.js',
            './bower_components/angular-mocks/angular-mocks.js',
            './bower_components/angular-resource/angular-resource.min.js',
            './bower_components/angular-ui-router/release/angular-ui-router.min.js',
            './src/app/module.js',
            './src/app/**/*.js',
            './test/**/*.js'
        ],
        exclude: [],
        preprocessors: {},
        reporters: ['spec'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: [
            'PhantomJS'
            // , 'Chrome'
            // , 'Firefox'
            // , 'Safari'
        ],
        singleRun: false
    });
};