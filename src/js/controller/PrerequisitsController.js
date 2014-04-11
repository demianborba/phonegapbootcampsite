app.controller('PrerequisitsController', ['$scope','AppEventManager',
    function (scope, AppEventManager) {        
        AppEventManager.tellMenuNewSectionLoaded('prerequisits');
        
        // defining multiple language content
        scope.pageItems = {
                "title": {                
                            "ptLabel": "Pré<br>requisitos",
                            "enLabel": "Pre<br>requisits"
                            }
                };
}]);