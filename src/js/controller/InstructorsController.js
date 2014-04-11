app.controller('InstructorsController', ['$scope','AppEventManager',
    function (scope, AppEventManager) {        
        AppEventManager.tellMenuNewSectionLoaded('instructors');
        
        // defining multiple language content
        scope.pageItems = {
                "title": {                
                            "ptLabel": "Instrutores",
                            "enLabel": "Instructors"
                            }
                };
}]);