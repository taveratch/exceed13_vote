(function() {
  'use strict';
    var vm = function(state, action) {
      switch(action.type) {
        case 'init':
          return {
            formState: '',
            usernamePlaceholder: 'KU account',
            passwordPlaceholder: 'Password'
          };
        case 'error':
          return {
            formState: 'error',
            usernamePlaceholder: 'Wrong username or password',
            passwordPlaceholder: 'Wrong username or password'
          };
      }
    };
    module.exports = vm;
}());
