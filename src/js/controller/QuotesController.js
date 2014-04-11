app.controller('QuotesController', ['$scope','AppEventManager',
    function (scope, AppEventManager) {        
        AppEventManager.tellMenuNewSectionLoaded('quotes');
        
        // defining multiple language content
        scope.pageItems = {
                "title": {                
                            "ptLabel": "Depoimentos",
                            "enLabel": "Quotes"
                            }
                };
}]);