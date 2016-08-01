(function() {
    'use strict';
    var cookie = require('js-cookie');
    module.exports = (function() {
      function _get(url,param) {
        return $.ajax({
          url: url
        });
      }

      function _post(url,param,header) {
        return $.ajax({
          url: url,
          headers: _.merge(cookie.get('token') ? { 'Authorization': cookie.get('token') } : {}, header || {}),
          type: 'POST',
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          data: JSON.stringify(param)
        });
      }

      function _put(url,param) {
        return $.ajax({
          url: url,
          headers: cookie.get('token') ? { 'Authorization': cookie.get('token') } : {},
          type: 'PUT',
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          data: JSON.stringify(param)
        });
      }
      return {
        get: _get,
        post: _post,
        put: _put
      };

    })();

}());
