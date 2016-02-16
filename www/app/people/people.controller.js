(function() {
    'use strict';

    angular
      .module('app.people')
      .controller('PeopleCtrl', PeopleCtrl);

    PeopleCtrl.$inject = ['dataservice', '$log'];

    function PeopleCtrl(dataservice, $log) {
      var vm = this;
      vm.people = [];

      start();

      function start() {
        return getPeople().then(function() {
          $log.info('People info loaded.');
        });
      }

      function getPeople() {
        return dataservice.getPeople()
          .then(function(data) {
            console.log(data);
            vm.people = data;
            return vm.people;
          });
      }
    }


})();
