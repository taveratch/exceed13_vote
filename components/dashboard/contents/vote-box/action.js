(function() {
  'use strict';
    var Dispatcher = require('./dispatcher');
    var Store = require('./store');
    var projectService = require('project.service');
    var Action = {
      update: function(payload) {
        Dispatcher.dispatch({
          type: 'update',
          data: payload
        });
      },
      vote: function(projectId) {
        var data = Store.getState();
        Object.keys(data).map(function(result, i){
          var param = {
            category: result,
            project_id: projectId,
            score: data[result]
          };
          console.log(param);
          projectService.vote(param);
        });
      }
    };
    module.exports = Action;
}());
