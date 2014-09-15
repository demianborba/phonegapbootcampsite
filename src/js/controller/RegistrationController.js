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
                "address": "Espaço iMasters - Rua Claudio Soares, 72 conj 1302 - Próximo ao metrô Faria Lima",
                "ptDates": "30/Setembro e 1/Outubro, 2014",
                "enDates": "30/September & 1/October, 2014",
                "name": "PhoneGap<br>Bootcamp<br>São Paulo",
                "url": "https://actioncreations.com/store/produto/phonegap-bootcamp-sao-paulo-30-setembro-2014/"
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