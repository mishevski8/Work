(function() {
    angular.module('angularAppApp').controller('AuthController', function($scope, $rootScope, OAuth) {
        $scope.login = function(user) {
            $scope.error_message = "";
            $scope.user = {
                username: user.username,
                password: user.password
            };
            var res = OAuth.getAccessToken($scope.user);
            res.then(function(data) {
                $scope.arr = data;
                console.log($scope.arr);
            })
            console.log(res);
        }
    });
})();