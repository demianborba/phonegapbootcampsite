app.controller('MainMenuController', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('js/model/mainmenu.json').then(function (response) {
            $scope.mainMenuItems = response.data;
        });

        $scope.gotoSection = function (routeToGo) {

            if ($scope.snapper.state().state === 'left') {
                $scope.snapper.close();
            }
            window.setTimeout(function () {
                window.location.href = '#/' + routeToGo;
                //console.log($routeProvider);
            }, $scope.snapperTransitionSpeed*1000);
        };
}]);