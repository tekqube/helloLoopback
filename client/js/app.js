var helloAngularApp = angular.module('helloAngularApp', ['helloAngularControllers',
                                                         'lbServices', 
                                                         'ngRoute']);

helloAngularApp.config(['$routeProvider',
                        function($routeProvider) {
                            $routeProvider.when('/', {
                                templateUrl : 'views/main.html',
                                controller : 'MainController'
                            }).when('/people', {
                                templateUrl : 'views/people.html',
                                controller: 'PeopleController'
                            }).otherwise({
                                templateUrl : 'views/main.html',
                                controller : 'MainController'    
                            });                                                
                        }
]);