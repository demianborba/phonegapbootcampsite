app.controller('AgendaController', ['$scope','AppEventManager',
    function (scope, AppEventManager) {        
        AppEventManager.tellMenuNewSectionLoaded('agenda');
        
        // defining multiple language content
        scope.pageItems = {
                "title": {                
                            "ptLabel": "Agenda",
                            "enLabel": "Agenda"
                            }
                };
}]);