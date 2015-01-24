Package.describe({
    summary: "A React- like, 2.5Kb user interface library",
    version: "2.0.1"
});

Package.registerBuildPlugin({
  name: "compileRiot",
  use: [],
  sources: [
    'plugin/compile-riot.js'
  ],
  npmDependencies: {
    // Fork of 1.7.4 deleted large unused files in dist directory.
    "riot": "2.0.1"
  }
});

Package.onTest(function (api) {
  api.use(['test-helpers', 'tinytest', 'less', 'templating']);
  api.addFiles(['less_tests.less', 'less_tests.js', 'less_tests.html',
                 'less_tests_empty.less'],
                'client');
});
