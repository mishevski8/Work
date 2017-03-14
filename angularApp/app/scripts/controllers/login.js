'use strict';
/**
 * @ngdoc function
 * @name angularAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularAppApp
 */
(function() {
    angular.module('angularAppApp').controller('LoginCtrl', function($scope, OAuth, $rootScope, $window) {
        $scope.user = {
            username: 'company',
            password: 'test1234'
        };
        console.log(OAuth.getAccessToken($scope.user));
        /* $rootScope.$on('oauth:error', function(event, rejection) {
             debugger;
             // Ignore `invalid_grant` error - should be catched on `LoginController`.
             if ('invalid_grant' === rejection.data.error) {
                 return;
             }
             // Refresh token when a `invalid_token` error occurs.
             if ('invalid_token' === rejection.data.error) {
                 return OAuth.getRefreshToken();
             }
             // Redirect to `/login` with the `error_reason`.
             return $window.location.href = '/login?error_reason=' + rejection.data.error;
         });*/
        console.log(OAuth.isAuthenticated());
    });
})();