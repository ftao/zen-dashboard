'use strict';

/* Controllers */

function DashboardCtrl($scope, $http) {
  $http.get('data/widgets.json').success(function(data) {
    $scope.widgets = data;
  });
}

