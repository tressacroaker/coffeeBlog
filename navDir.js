angular.module("blogApp")
.directive("navDir", function(){
  return {
    templateUrl: "./navBar.html",
    restrict: "AE"
  }

});
