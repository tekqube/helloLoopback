angular.module('helloAngularControllers', []).controller('PeopleController', ['$scope', 'Person', function($scope, Person) {
    $scope.user = {};
    
    $scope.peoples = [];
    
    function getUsers() {        
        Person.find().$promise.then(function(data){
            $scope.peoples = data;
        });
    }
    
    function initializeUser() {
        $scope.user = {
            first_name : "",
            last_name : "",
            email : "",
            phone : ""
        };    
    }
    
    $scope.addUser = function () {
        Person.create({
            first_name : $scope.user.first_name,
            last_name : $scope.user.last_name,
            email : $scope.user.email,
            phone : $scope.user.phone
        }).$promise.then(function(data) {
            initializeUser();
            getUsers();     
        });
    };
    
    $scope.deleteUser = function(userId) {
        Person.deleteById({ id: userId})
            .$promise
            .then(function() {
            console.log ('User Deleted'); 
            getUsers();
        });
    };
    
    initializeUser();
    getUsers();
}]);