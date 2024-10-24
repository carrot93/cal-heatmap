Package.describe({
  name: 'shjiaye:cal-heatmap',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'A javascript module to create a calendar heatmap',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/carrot93/cal-heatmap',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
    'd3':'3.5.8'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles(['cal-heatmap.js','cal-heatmap.css'],"client");
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('mariuspop:cal-heatmap');
  api.addFiles('cal-heatmap-tests.js');
});
