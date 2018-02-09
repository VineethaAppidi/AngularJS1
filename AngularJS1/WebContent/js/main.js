var app = angular.module("demoApp", []);
    app.controller("demoCtrl", function($scope, $http) {
        $scope.book = "The Alchemist";
        $scope.author = "Paulo Coelho";
        
        $http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
            $scope.greeting = response.data;
        });
        
        $http.get('http://www.inorthwind.com/Service1.svc/getAllCustomers').
        then(function(response) {
            $scope.customers = response.data.GetAllCustomersResult;
        });
        
        
    });