(function() {
  'use strict';
    var EventEmitter = require('events').EventEmitter;
    var Store = new EventEmitter();
    var state;
    Store.init = function() {
      state = {
        data: {
          best_of_hardware: -1,
          best_of_software: -1,
          popular: -1
        },
        modalShow: false,
        serverFormat: [],
        buttonEnable: false
      };
    };
    Store.getState = function() {
      console.log(state);
      return state;
    };
    Store.update = function(payload) {
      _.merge(state, payload);
    };
    Store.addChangeListener = function(callback) {
      this.on('update', callback);
    };
    Store.removeChangeListener = function(callback) {
      this.removeListener('update', callback);
    };
    Store.emitChange = function(){
      this.emit('update');
    };
    Store.init();
    module.exports = Store;
}());
