(function() {
  'use strict';
    var types = require('./constants');
    var Actions = {
      addBox: function() {
        return {
          type: types.NEW_BOX
        };
      },
      submit: function() {
        return {
          type: types.SUBMIT
        };
      }
    };
    module.exports = Actions;
}());
