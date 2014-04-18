app.controller('PhotosController', ['$scope','AppEventManager',
    function (scope, AppEventManager) {        
        AppEventManager.tellMenuNewSectionLoaded('photos');
        
        // defining multiple language content
        scope.pageItems = {
                "title": {                
                            "ptLabel": "Fotos",
                            "enLabel": "Photos"
                            },
                "photos": [
                           {"location": "images/gallery/1-room.jpg"},
                           {"location": "images/gallery/2-device-hands-1.jpg"},
                           {"location": "images/gallery/3-instructor-desk.jpg"},
                           {"location": "images/gallery/4-room-2.jpg"},
                           {"location": "images/gallery/5-student-laptop.jpg"},
                           {"location": "images/gallery/6-device-hands.jpg"},
                           {"location": "images/gallery/7-device-hands-2.jpg"},
                           {"location": "images/gallery/8-class.jpg"},
                           {"location": "images/gallery/9-student-laptop-1.jpg"},
                           {"location": "images/gallery/10-student.jpg"},
                           {"location": "images/gallery/11-room-1.jpg"},
                           {"location": "images/gallery/12-instructors.jpg"},
                           {"location": "images/gallery/13-certificate.jpg"},
                           {"location": "images/gallery/14-certificate-1.jpg"},
                           {"location": "images/gallery/15-students.jpg"}
                           ]
                };
}]);