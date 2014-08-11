app.controller('DurationController', ['$scope', 'AppEventManager',
    function (scope, AppEventManager) {
        AppEventManager.tellMenuNewSectionLoaded('duration');

        // defining multiple language content
        scope.pageItems = {
            "title": {
                "ptLabel": "Duração do<br>PhoneGap<br>Bootcamp",
                "enLabel": "PhoneGap<br>Bootcamp<br>Duration"
            },
            "description": {
                "ptLabel": "O PhoneGap Bootcamp tem 20 horas de duração, ocorre durante 2 dias, com 10 horas de duração cada. Temos uma hora de intervalo para almoço e dois breaks de 10 minutos cada, um pela manhã e um pela tarde. Para saber mais detalhes da programação, veja a",
                "enLabel": "PhoneGap Bootcamp has 20 hours of duration, takes place in 2 days, with 10 hours of duration each day. We have one hour for lunch and two 10 minute breaks, one in the morning and one in the afternoon. To learn more about the schedule, see the"
            },
            "agendaLink": {
                "ptLabel": "agenda do evento",
                "enLabel": "event schedule"
            }
        };
        
        scope.gotoAgendaPage = function () {
            window.location.href = '#/agenda';
        }
}]);