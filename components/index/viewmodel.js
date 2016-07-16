(function () {
	'use strict';
	var vm = function(state, action) {
    switch(action.type) {
      case 'init':
        return {
          time: action.time || 86400
        };
      case 'update':
        return _.merge(state, {
          time: action.time
        });
      default:
        return state;
    }
  };

  function toHHMMSS(number) {
    var time = parseInt(number, 10);

    var times = [];

    var hours = Math.floor(time / (60 * 60));
    var minutes = Math.floor((time - (hours * 60 * 60)) / 60);
    var seconds = time - (hours * 60 * 60) - (minutes * 60);

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    times[0] = hours;
    times[1] = minutes;
    times[2] = seconds;

    return times;
  }

  vm.toHHMMSS = toHHMMSS;
  module.exports = vm;
}());
