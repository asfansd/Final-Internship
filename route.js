    var app=angular.module('myApp2',['ngRoute'])        
            app.config(function($routeProvider) {
        $routeProvider
            .when('file:///C:/Users/sushmithaj/Desktop/Project/Login.html', {
                templateUrl : "Login.html"
             })
            .when("#!Signup", {
                templateUrl : "Signup.html"
            })
            .otherwise({
                redirectTo:'file:///C:/Users/sushmithaj/Desktop/Project/Login.html'
        });
    }); 