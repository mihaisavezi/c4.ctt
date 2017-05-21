/* eslint-disable global-require */
import 'jquery';

import './vendor.scss';
import 'vex-js';

// polyfills and vendors

if (!window._babelPolyfill) {
  require('babel-polyfill');
}
