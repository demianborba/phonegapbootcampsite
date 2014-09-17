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
                "city": "São Paulo - SP - Brasil",
                "address": "Centro Empresarial Nações Unidas - CENU. Av das Nações Unidas, 12.901. 35º andar – Torre Norte - Brooklin Novo. CEP: 04578-000",
                "ptDates": "27 e 28 / Setembro / 2014",
                "enDates": "27 & 28 / September / 2014",
                "name": "PhoneGap<br>Bootcamp<br>São Paulo FDS",
                "url": "https://actioncreations.com/store/produto/phonegap-bootcamp-sao-paulo-27-28-setembro-turma-fds/"
                },{
                "city": "São Paulo - SP - Brasil",
                "address": "Espaço iMasters - Rua Claudio Soares, 72 conj 1302 - Próximo ao metrô Faria Lima",
                "ptDates": "30/Setembro e 1/Outubro, 2014",
                "enDates": "30/September & 1/October, 2014",
                "name": "PhoneGap<br>Bootcamp<br>São Paulo<br><span class='red'>vagas esgotadas</span>",
                "url": "message:Vagas esgotadas para esta turma!"
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