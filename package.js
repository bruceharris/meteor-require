Package.describe({
  summary: "A very simple implementation of require/define for meteor"
});

Package.on_use(function (api) {
  api.use('underscore', ['client', 'server']);
  api.use('coffeescript', ['client', 'server']);
  api.add_files([
    'lib/require.coffee'
  ], ['client', 'server']
  );
});