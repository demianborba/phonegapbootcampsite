app.controller('VideosController', ['$scope','AppEventManager',
    function (scope, AppEventManager) {        
        AppEventManager.tellMenuNewSectionLoaded('videos');
        
        // defining multiple language content
        scope.pageItems = {
                "title": {                
                            "ptLabel": "Vídeos",
                            "enLabel": "Videos"
                            },
                "videos": [
                           {
                            "posterLocation": "videos/bootcamp.jpg",
                            "webmLocation": "videos/bootcamp.webm",
                            "mp4Location": "videos/bootcamp.mp4"
                            }
                           ]
                };
}]);