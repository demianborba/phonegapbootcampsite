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
                "ptLabel": "Para entrar em contato com a organização, solicitar que o PhoneGap Bootcamp vá até a sua cidade, tirar dúvidas ou mandar sugestões, por favor <a href='mailto:contato@phonegapbootcamp.io'>toque aqui</a> e mande sua mensagem agora.<br><br>Para ficar conectado em todas as novidades, eventos passados e fotos, visite nossa <a href='https://www.facebook.com/phonegapbootcamp' target='_blank'>Página no Facebook</a>.",
                "enLabel": "To get in touch with the organizers, request PhoneGap Bootcamp to visit your city, ask questions or submit suggestions, please <a href='mailto:contato@phonegapbootcamp.io'>tap here</a> and send your message now.<br><br>To stay up to date with our news, past events and photos, visit our <a href='https://www.facebook.com/phonegapbootcamp' target='_blank'>Facebook Page</a>."
            }
        };
}]);