app.controller('MainMenuController', ['$scope', '$http', '$element', 'AppEventManager', 
    function (scope, http, element, AppEventManager) {
        scope.mainMenuItems = [
            {
                "labelPortuguese": "Sobre o Bootcamp",
                "labelEnglish": "About the Bootcamp",
                "icon": "glyphicon-about",
                "clickRoute": "about"
            },
            {
                "labelPortuguese": "Depoimentos",
                "labelEnglish": "Testimonials",
                "icon": "glyphicon-quotes",
                "clickRoute": "quotes"
            },
            {
                "labelPortuguese": "Instrutores",
                "labelEnglish": "Instructors",
                "icon": "glyphicon-instructors",
                "clickRoute": "instructors"
            },
            {
                "labelPortuguese": "Agenda",
                "labelEnglish": "Agenda",
                "icon": "glyphicon-agenda",
                "clickRoute": "agenda"
            },
            {
                "labelPortuguese": "Duração",
                "labelEnglish": "Duration",
                "icon": "glyphicon-duration",
                "clickRoute": "duration"
            },
            {
                "labelPortuguese": "Inscrições",
                "labelEnglish": "Registration",
                "icon": "glyphicon-registration",
                "clickRoute": "registration"
            },
            {
                "labelPortuguese": "Pré-requisitos",
                "labelEnglish": "Pre-requisits",
                "icon": "glyphicon-prerequisits",
                "clickRoute": "prerequisits"
            },
            {
                "labelPortuguese": "Público Alvo",
                "labelEnglish": "Target Audience",
                "icon": "glyphicon-target",
                "clickRoute": "target"
            },
            {
                "labelPortuguese": "Datas e Locais",
                "labelEnglish": "Dates and Locations",
                "icon": "glyphicon-dateslocations",
                "clickRoute": "dateslocations"
            },
            {
                "labelPortuguese": "Vídeos",
                "labelEnglish": "Videos",
                "icon": "glyphicon-videos",
                "clickRoute": "videos"
            },
            {
                "labelPortuguese": "Fotos",
                "labelEnglish": "Photos",
                "icon": "glyphicon-photos",
                "clickRoute": "photos"
            },
            {
                "labelPortuguese": "Fale com a organização",
                "labelEnglish": "Talk to the organizers",
                "icon": "glyphicon-talktous",
                "clickRoute": "talktous"
            }
        ]
        
        scope.$on('NewSectionLoaded', function(event, args){
            
            // disable all menus
            for (i = 0; i < element.children().length; i++) {
                element.children()[i].classList.remove('menu-item-selected');
            }
            
            // select item
            document.getElementById(args).classList.add('menu-item-selected');
            
        });

        scope.gotoSection = function (routeToGo) {
            
            if (scope.snapper.state().state === 'left') {
                scope.snapper.close();
            }

            window.setTimeout(function () {
                window.location.href = '#/' + routeToGo;
            }, scope.snapperTransitionSpeed * 1000);
        };
}]);