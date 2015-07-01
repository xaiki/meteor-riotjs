var riotVersion = "2.2.1";

Package.describe({
  summary: "A React- like, 3.5K user interface library",
  version: riotVersion + "-1",
  name: "xaiki:riotjs",
  git: "https://github.com/xaiki/meteor-riotjs"
});

Npm.depends({
  "riot": riotVersion
});

Package.registerBuildPlugin({
  name: "compileRiot",
  use: [],
  sources: [
    'plugin/compile-riot.js'
  ],
  npmDependencies: {
    // Fork of 1.7.4 deleted large unused files in dist directory.
    "riot": riotVersion
  }
});

Package.onUse(function (api) {
  /* XXX(xaiki): this is a hack, we'd need a way to use npm's require.resolve */
  var riotNpmDir = '.npm/package/node_modules/riot/';
  api.addFiles (riotNpmDir + 'riot.min.js' , 'client');
  api.addFiles ('src/observe.js', 'client');
  api.export('RiotMeteor', 'client');
});
