'use strict';
var app = angular.module('angularAppApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'angular-oauth2'])
app.config(function($routeProvider, OAuthTokenProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
    }).when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
    }).when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
    }).when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
    }).otherwise({
        redirectTo: '/'
    });
    OAuthTokenProvider.configure({
        name: 'token',
        options: {
            secure: false
        }
    });
});
app.run(function($rootScope, OAuth, $window, $location, $cookies) {
    OAuth.configure({
        baseUrl: 'http://energypremier.com/api/v1',
        clientId: '3',
        clientSecret: '358n4EfVhuMw7pwH2GBacuzDx4ELd6Qmo1i6oSpb',
        grantPath: '/oauth/token',
        grantType: 'password',
        scope: '*'
    });
    if (OAuth.isAuthenticated()) {
        $rootScope.authenticated = true;
    } else {
        $rootScope.authenticated = false;
    }
    $rootScope.signout = function() {
        $cookies.remove('token');
        $rootScope.authenticated = false;
        $location.path('/login');
    }
})