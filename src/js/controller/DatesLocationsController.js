app.controller('DatesLocationsController', ['$scope','AppEventManager',
    function (scope, AppEventManager) {        
        AppEventManager.tellMenuNewSectionLoaded('dateslocations');
        
        // defining multiple language content
        scope.pageItems = {
                "title": {                
                            "ptLabel": "Datas<br>e locais",
                            "enLabel": "Dates<br>and locations"
                            }
                };
}]);