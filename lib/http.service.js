(function() {
    'use strict';

    module.exports = (function() {
      function _get(url) {
        return $.ajax({
          url: url
        });
      }

      function _post(url,param) {
        return $.ajax({
          url: url,
          type: 'POST',
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          data: JSON.stringify(param)
        });
      }

      return {
        get: _get,
        post: _post
      };

    })();

}());
