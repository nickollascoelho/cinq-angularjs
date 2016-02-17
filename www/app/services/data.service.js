(function() {
    'use strict';

    angular
      .module('app.people')
      .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$log'];

    function dataservice($http, $log) {
      return {
          getPeople: getPeople
      };

      function xhrFailed(error) {
        console.log(error);
        //$log.error('XHR Failed.' + error);
      }

      function xhrComplete(response) {
        console.log(response);
        return response.data;
      }

      function getPeople() {
        return $http.get('/api/people')
          .then(xhrComplete)
          .catch(xhrFailed);
      }
    }

})();
