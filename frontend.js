'use strict';

module.exports = {
  extends: ['./index.js'].map(require.resolve),
  rules: {
    'no-alert': 'error',
  },
};
