app.controller('TalktousController', ['$scope','AppEventManager',
    function (scope, AppEventManager) {        
        AppEventManager.tellMenuNewSectionLoaded('talktous');
        
        // defining multiple language content
        scope.pageItems = {
                "title": {                
                            "ptLabel": "Fale<br>conosco",
                            "enLabel": "Talk<br>to us"
                            }
                };
}]);