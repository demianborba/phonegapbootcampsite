app.controller('PhotosController', ['$scope','AppEventManager',
    function (scope, AppEventManager) {        
        AppEventManager.tellMenuNewSectionLoaded('photos');
        
        // defining multiple language content
        scope.pageItems = {
                "title": {                
                            "ptLabel": "Fotos",
                            "enLabel": "Photos"
                            }
                };
}]);