app.controller('PhotosVideosController', ['$scope', 'AppEventManager',
    function (scope, AppEventManager) {
        AppEventManager.tellMenuNewSectionLoaded('photosvideos');

        // defining multiple language content
        scope.pageItems = {
            "title1": {
                "ptLabel": "Fotos",
                "enLabel": "Photos"
            },
            "title2": {
                "ptLabel": "Vídeos",
                "enLabel": "Videos"
            }
        };
}]);