'use strict';

module.exports = function (live) {
  return {
    restrict: 'E',
    scope: {},
    transclude: true,
    template: require('./badge.html'),
    link: function ($scope) {
      $scope.live = live;
    }
  }
};
module.exports.$inject = ['live'];
