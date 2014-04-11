app.controller('MainMenuController', ['$scope', '$http', '$element', 'AppEventManager',
    function (scope, http, element, AppEventManager) {
        // defining the language
        scope.languageSelectorItems = {
                "caption": {                
                            "ptLabel": "Língua",
                            "enLabel": "Language"
                            },
                "button": {
                            "ptLabel": "Português",
                            "enLabel": "English"
                            }
                };
        scope.mainMenuItems = [
            {
                "ptLabel": "Sobre o Bootcamp",
                "enLabel": "About the Bootcamp",
                "icon": "glyphicon-about",
                "clickRoute": "about"
            },
            {
                "ptLabel": "Depoimentos",
                "enLabel": "Testimonials",
                "icon": "glyphicon-quotes",
                "clickRoute": "quotes"
            },
            {
                "ptLabel": "Instrutores",
                "enLabel": "Instructors",
                "icon": "glyphicon-instructors",
                "clickRoute": "instructors"
            },
            {
                "ptLabel": "Agenda",
                "enLabel": "Agenda",
                "icon": "glyphicon-agenda",
                "clickRoute": "agenda"
            },
            {
                "ptLabel": "Duração",
                "enLabel": "Duration",
                "icon": "glyphicon-duration",
                "clickRoute": "duration"
            },
            {
                "ptLabel": "Inscrições",
                "enLabel": "Registration",
                "icon": "glyphicon-registration",
                "clickRoute": "registration"
            },
            {
                "ptLabel": "Pré-requisitos",
                "enLabel": "Pre-requisits",
                "icon": "glyphicon-prerequisits",
                "clickRoute": "prerequisits"
            },
            {
                "ptLabel": "Público Alvo",
                "enLabel": "Target Audience",
                "icon": "glyphicon-target",
                "clickRoute": "target"
            },
            {
                "ptLabel": "Datas e Locais",
                "enLabel": "Dates and Locations",
                "icon": "glyphicon-dateslocations",
                "clickRoute": "dateslocations"
            },
            {
                "ptLabel": "Vídeos",
                "enLabel": "Videos",
                "icon": "glyphicon-videos",
                "clickRoute": "videos"
            },
            {
                "ptLabel": "Fotos",
                "enLabel": "Photos",
                "icon": "glyphicon-photos",
                "clickRoute": "photos"
            },
            {
                "ptLabel": "Fale com a organização",
                "enLabel": "Talk to the organizers",
                "icon": "glyphicon-talktous",
                "clickRoute": "talktous"
            }
        ];
        
        scope.$on('NewSectionLoaded', function(event, args){
            
            // unselect all menus
            var menuItems = document.getElementById('menuItems');
            for (i = 0; i < menuItems.childNodes.length; i++) {
                var item = menuItems.childNodes[i];
                if (item.nodeName == "LI") {
                    item.classList.remove('menu-item-selected');
                }
            }
            
            // select item
            document.getElementById(args).classList.add('menu-item-selected');
            
        });

        scope.gotoSection = function (routeToGo) {
            scope.snapper.close();
            window.location.href = '#/' + routeToGo;
        };
}]);