app.controller('TargetController', ['$scope', 'AppEventManager',
    function (scope, AppEventManager) {
        AppEventManager.tellMenuNewSectionLoaded('target');

        // defining multiple language content
        scope.pageItems = {
            "title": {
                "ptLabel": "Público<br>Alvo",
                "enLabel": "Target<br>Audience"
            }
        };
}]);