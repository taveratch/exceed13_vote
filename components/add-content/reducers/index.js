(function() {
  'use strict';
    var auth = require('auth.service');
    var http = require('http.service');
    var id = 1;
    var initialState = {
      user: auth.getUser(),
      name: '',
      image_url: 'a',
      content: [
        {
          disabled: true,
          id: id++,
          header: 'What is it?',
          desc: ''
        },
        {
          disabled: true,
          id: id++,
          header: 'How does it work?',
          desc: ''
        },
        {
          disabled: true,
          id: id++,
          header: 'Hardware features',
          desc: ''
        },
        {
          disabled: true,
          id: id++,
          header: 'Software features',
          desc: ''
        }
      ]
    };
    var types = require('../constants');
    function changeContent(contents, index, content) {
      _.merge(contents[index], content);
      return contents;
    }
    function genId() {
      return id++;
    }
    function genContent() {
      return {
        id: genId(),
        header: '',
        desc: ''
      };
    }
    function formatter(state) {
      var content = _.map(state.content, 'header');
      return _.pick(state, ['name','content', 'image_url']);
    }
    var Reducer = function(state, action) {
      state = typeof state !== 'undefined' ? state : initialState;
      var newState = _.merge({},state);
      switch(action.type) {
        case types.INIT:
          http.get('http://128.199.135.164:8080/api/project')
          .success(function(data) {
            var projects = data.projects;
            var project = _.filter(projects, function(p){ return p.group.group_name === state.user.group; });
            if(project.length > 0){
              action.callback(_.pick(project[0], ['name', 'image_url', 'content' ]));
            }
          });
          return state;
        case types.CALLBACK:
          var content = [];
          action.data.content.map(function(result,i) {
            content.push(_.merge(result,{
              id: genId(),
              disabled: i<4
            }));
          });
          var a = _.merge(newState,
            {
              name: action.data.name,
              image_url: action.data.image_url,
              content: content
            }
          );
          return a;
        case types.UPDATE_PROJECT_NAME:
          return _.merge({},
            state,
            {
              name: action.projectName
            }
          );
        case types.UPDATE_CONTENT:
          var index = _.findIndex(newState.content, function(item) { return item.id === action.content.id; });
          return _.merge(newState, {
            content: changeContent(newState.content,index,action.content)
          });
        case types.NEW_CONTENT_BOX:
          var newContent = genContent();
          return _.merge(newState, {
            content: newState.content.concat([newContent])
          });
        case types.SUBMIT:
        console.log(JSON.stringify(formatter(state)));
          http.post('http://128.199.135.164:8080/api/project',formatter(state))
          .success(function(data) {
            console.log(data);
          });
          return state;
        default:
          return state;
      }
    };
    module.exports = Reducer;
}());
