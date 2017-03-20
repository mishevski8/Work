'use strict';
(function() {
    angular.module('angularAppApp').controller('LoginCtrl', function($scope, loginService /*, OAuth, $rootScope, $window*/ ) {
        /*$scope.user = {
            username: 'company',
            password: 'test1234'
        };
        console.log(OAuth.getAccessToken($scope.user));
        console.log(OAuth.isAuthenticated());*/
        $scope.loginData = {
            /*baseUrl: 'http://energypremier.com/api/v1',*/
            clientId: '3',
            clientSecret: '358n4EfVhuMw7pwH2GBacuzDx4ELd6Qmo1i6oSpb',
            /*   grantPath: '/oauth/token',*/
            grantType: 'password',
            scope: '*',
            username: "company",
            password: "test1234"
        };
        $scope.login = function login() {
            loginService.signIn($scope.loginData).then(function(result) {
                $scope.signInResult = result;
            }, function(data) {});
        }
    });
})();