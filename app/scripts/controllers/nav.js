'use strict';

app.controller('NavCtrl', function ($scope, $location, Auth) {

    $scope.signedIn = function() {
        return Auth.signedIn();
    };

    $scope.logout = function() {
        Auth.logout();
    };
});