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
                "ptLabel": "O PhoneGap Bootcamp tem 16 horas de duração, ocorre durante 2 dias, com 8 horas de duração cada. Temos uma hora de intervalo para almoço e dois breaks de 10 minutos cada, um pela manhã e um pela tarde. Para saber mais detalhes da programação, veja a <a href='#/agenda'>agenda do evento</a>.",
                "enLabel": "PhoneGap Bootcamp has 16 hours of duration, takes place in 2 days, with 8 hours of duration each day. We have one hour for lunch and two 10 minute breaks, one in the morning and one in the afternoon. To learn more about the schedule, see the <a href='#/agenda'>event agenda</a>."
            }
        };
}]);