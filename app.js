angular.module("blogApp", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state("journal", {
      url: "/",
      templateUrl: "./templates/journal.html",
    })
    .state("bio", {
      url: "/bio",
      templateUrl: './templates/bio.html',
    })
    .state("travels", {
      url: "/travels",
      templateUrl: './templates/travels.html',
    })
    .state("photographs", {
      url: "/photographs",
      templateUrl: './templates/photographs.html',
    });

$urlRouterProvider.otherwise('/');


});
