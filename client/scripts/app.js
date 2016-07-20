var MakeUpp = angular.module("MakeUpp", ['ngMaterial', 'ngMessages', 'ngRoute', 'googlechart']);

MakeUpp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){

}]);

var MakeUppAdmin = angular.module("MakeUppAdmin", ['ngMaterial', 'ngMessages', 'ngRoute', 'md.data.table']);

MakeUppAdmin.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    $routeProvider.
        when("/admin", {
            templateUrl: "/views/admin.html",
            controller: "AdminController"
        }).
        when("/emailList", {
            templateUrl: "/views/partials/emailList.html",
            controller: "EmailController"
        }).
        when("/setVariables", {
            templateUrl: "/views/partials/setVariables.html",
            controller: "SetVariablesController"
        }).
        otherwise({
            redirectTo: '/emailList'
        });
}]);

var MakeUppRegistration = angular.module("MakeUppRegistration", ['ngMaterial', 'ngRoute']);

MakeUppRegistration.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){

}]);

var MakeUppLogin = angular.module("MakeUppLogin", ['ngMaterial', 'ngRoute']);

MakeUppLogin.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){

}]);
