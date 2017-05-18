/* eslint-disable global-require */
import 'jquery';

require('!!style-loader!css-loader!vex-js/dist/css/vex.css');
import 'vex-js';

// polyfills and vendors

if (!window._babelPolyfill) {
  require('babel-polyfill');
}
