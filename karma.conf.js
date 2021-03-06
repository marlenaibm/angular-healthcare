module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-material/angular-material.js',
      'node_modules/angular-animate/angular-animate.js',
      'node_modules/angular-messages/angular-messages.js',
      'node_modules/angular-aria/angular-aria.js',
      'node_modules/ngstorage/ngStorage.min.js',
      'client/js/**/*.js',
      'client/js/*.js',
      'spec/client/**/*.js'
    ],

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],
    // browsers : ['Chrome'],

    plugins : ['karma-jasmine',
    'karma-chrome-launcher',
    'karma-phantomjs-launcher'],

  });
};
