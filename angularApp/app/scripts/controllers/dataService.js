angular.module('angularAppApp').factory('DataService', function(OAuth) {
    var dataObj = {};
    dataObj.getToken = function(user) {
        return OAuth.getAccessToken(user);
    }
    return dataObj;
});