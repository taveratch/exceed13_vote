(function() {
  'use strict';
    var Dispatcher = require('./dispatcher');
    var Store = require('./store');
    var projectService = require('project.service');
    var Action = {
      update: function(payload) {
        Dispatcher.dispatch({
          type: 'update',
          data: payload,
          buttonEnable: true
        });
      },
      vote: function(projectId) {
        var data = Store.getState();
        Object.keys(data.data).map(function(result, i){
          var param = {
            category: result,
            project_id: projectId,
            score: data.data[result]
          };
          projectService.vote(param);
        });
        Dispatcher.dispatch({
          type: 'vote'
        });
      },
      openModal: function() {
        Dispatcher.dispatch({
          type: 'open_modal'
        });
      },
      closeModal: function() {
        Dispatcher.dispatch({
          type: 'close_modal'
        });
      },
      voteModalFormatter: function() {
        var data = Store.getState().data;
        var dataValue = _.values(data);
        var text = require('text');
        var result = [];
        text.map(function(item, i){
          if(dataValue[i] === -1) { return; } //If user did not vote on this award
          var obj = {
            img: item.icon,
            text: item.header,
            score: dataValue[i]
          };
          result.push(obj);
        });
        Dispatcher.dispatch({
          type: 'update_server_format',
          data: result
        });
      }
    };
    module.exports = Action;
}());
