var app=angular.module('mainApp',['ngRoute']);
var log = {};
log["admin"] = "admin";
log["sushmitha"]="asfan";
log["sajid"]="jogula";

        app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : "Login.html"
             })
            .when('/Signup', {
                templateUrl : "Signup.html"
            })
            .otherwise({
                redirectTo:'/'
        });
    }); 