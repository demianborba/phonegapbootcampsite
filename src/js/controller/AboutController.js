app.controller('AboutController', ['$scope', 'AppEventManager',
    function (scope, AppEventManager) {
        AppEventManager.tellMenuNewSectionLoaded('about');

        scope.gotoFacebook = function () {
            window.location.href = 'http://www.facebook.com/phonegapbootcamp';
        };
        
}]);