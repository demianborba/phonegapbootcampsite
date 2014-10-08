app.controller('RegistrationController', ['$scope', 'AppEventManager', '$rootScope',
    function (scope, AppEventManager, rootScope) {
        AppEventManager.tellMenuNewSectionLoaded('registration');

        // defining multiple language content
        scope.pageItems = {
            "title": {
                "ptLabel": "Inscrições",
                "enLabel": "Register<br>now"
            },
            "description": {
                "ptLabel": "Para se inscrever, escolha a cidade abaixo e toque no botão <strong>Inscreva-se Agora</strong>:",
                "enLabel": "To register, choose a city below and tap on the <strong>Register Now</strong> button:"
            },
            "registerButton": {
                "ptLabel": "Inscreva-se Agora",
                "enLabel": "Register Now"
            },
            "button1": {
                "ptLabel": "Quer o Bootcamp em sua cidade?",
                "enLabel": "Want the Bootcamp in your city?"
            },
            "bootcamps": [{
                "city": "Ribeirão Preto - SP - Brasil",
                "address": "Supera Parque de Inovação e Tecnologia de Ribeirão Preto. Avenida Doutora Nadir Aguiar, 1805, Ribeirão Preto - SP",
                "ptDates": "8 e 9 / Novembro / 2014",
                "enDates": "8 & 9 / November / 2014",
                "name": "PhoneGap<br>Bootcamp<br>Ribeirão Preto",
                "url": "https://actioncreations.com/store/?p=2666"
                }, {
                "city": "Recife - PE - Brasil",
                "address": "Portomídia: Rua do Apolo, 181, Bairro do Recife.",
                "ptDates": "29 e 30 / Novembro / 2014",
                "enDates": "29 & 30 / November / 2014",
                "name": "PhoneGap<br>Bootcamp<br>Recife",
                "url": "https://actioncreations.com/store/?p=2663"
                }]
        };

        scope.gotoContactPage = function () {
            window.location.href = '#/talktous';
        };

        scope.gotoPage = function (url) {
            if (url.indexOf("message:") > -1) {
                rootScope.showMessage(url.substr(8, url.length));
            } else {
                window.open(url, '_blank');
            }
        };
}]);