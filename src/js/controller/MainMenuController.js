app.controller('MainMenuController', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('js/model/mainmenu.json').then(function (response) {
            $scope.mainMenuItems = response.data;
        });
}]);