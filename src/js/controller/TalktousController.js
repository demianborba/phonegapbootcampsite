app.controller('TalktousController', ['$scope', 'AppEventManager',
    function (scope, AppEventManager) {
        AppEventManager.tellMenuNewSectionLoaded('talktous');

        // defining multiple language content
        scope.pageItems = {
            "title": {
                "ptLabel": "Fale<br>conosco",
                "enLabel": "Talk<br>to us"
            },
            "description": {
                "ptLabel": "Para entrar em contato com a organização, solicitar que o PhoneGap Bootcamp vá até a sua cidade, tirar dúvidas ou mandar sugestões, por favor <a href='mailto:contato@phonegapbootcamp.io'>toque aqui</a> e mande sua mensagem agora.",
                "enLabel": "To get in touch with the organizers, request PhoneGap Bootcamp to visit your city, ask questions or submit suggestions, please <a href='mailto:contato@phonegapbootcamp.io'>tap here</a> and send your message now."
            }
        };
}]);