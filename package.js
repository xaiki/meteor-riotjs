var riotVersion = "2.0.7";

Package.describe({
  summary: "A React- like, 2.5K user interface library",
  version: riotVersion,
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
  api.addFiles (riotNpmDir + 'riot.min.js' , 'web');
});

