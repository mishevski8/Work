(function() {
    angular.module('angularAppApp').controller('AuthController', function($http, DataService, $scope, $rootScope, OAuth, $location) {
        $scope.login = function() {
            $scope.error_message = "";
            $rootScope.user = {
                username: $scope.username,
                password: $scope.password
            };
            /*   var res = OAuth.getAccessToken($scope.user);*/
            DataService.getToken($scope.user).then(onSuccess, onError);

            function onSuccess(data) {
                $scope.arr = data;
                console.log($scope.arr);
                console.log(OAuth.isAuthenticated());
                if (OAuth.isAuthenticated()) {
                    $rootScope.authenticated = true;
                    $location.path('/');
                }
            }

            function onError(data) {
                console.log(data);
                $scope.error_message = data.data.message;
                $rootScope.authenticated = false;
                $location.path('/login');
            }
        }
    });
})();