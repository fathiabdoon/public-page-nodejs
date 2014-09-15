var ribbonDiary = angular.module('ribbondiaryApp', ['ngRoute']);
ribbonDiary.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/main.html',
      controller: 'mainController'
    });     
});