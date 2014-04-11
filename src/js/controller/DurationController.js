app.controller('DurationController', ['$scope','AppEventManager',
    function (scope, AppEventManager) {        
        AppEventManager.tellMenuNewSectionLoaded('duration');
        
        // defining multiple language content
        scope.pageItems = {
                "title": {                
                            "ptLabel": "Duração do<br>PhoneGap<br>Bootcamp",
                            "enLabel": "PhoneGap<br>Bootcamp<br>Duration"
                            }
                };
}]);