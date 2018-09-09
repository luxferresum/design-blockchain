'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const MergeTrees = require('broccoli-merge-trees');
const Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });
  app.import('node_modules/normalize.css/normalize.css');
  app.import('node_modules/@typopro/web-source-sans-pro/TypoPRO-SourceSansPro.css');

  const sourceSansPro = new Funnel('node_modules/@typopro/web-source-sans-pro', {
    destDir: 'assets',
    include: ['*.eot', '*.ttf', '*.woff'],
  });

  app.import('node_modules/@typopro/web-source-code-pro/TypoPRO-SourceCodePro.css');

  const sourceCodePro = new Funnel('node_modules/@typopro/web-source-code-pro', {
    destDir: 'assets',
    include: ['*.eot', '*.ttf', '*.woff'],
  });

  return new MergeTrees([sourceSansPro, sourceCodePro, app.toTree()]);
};
