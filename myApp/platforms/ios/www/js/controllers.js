angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('HitlistsCtrl', function($scope) {
  $scope.hitlists = [
    { title: 'John', id: 1 },
    { title: 'Suzy', id: 2 },
    { title: 'Tiff', id: 3 },
    { title: 'Brad', id: 4 },
    { title: 'Rodger', id: 5 },
    { title: 'Guther', id: 6 }
  ];
})

.controller('HitlistCtrl', function($scope, $stateParams) {
})
