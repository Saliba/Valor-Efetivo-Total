angular.module('app.controllers', ['ng-currency'])
  
.controller('mainPageCtrl', function ($scope) {
        $scope.calculator = {
            amount: 2000,
            currentValue: 4.05
        };
    $scope.$watch('calculator', function () {
        $scope.vet = ($scope.calculator.currentValue * 1.0038 * $scope.calculator.amount + 60) / $scope.calculator.amount;
    }, true);
})
    