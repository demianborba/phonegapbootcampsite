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
                    "city": "Rio de Janeiro - RJ - Brasil",
                    "address": "NAVE - Faculdade Estácio de Sá",
                    "ptDates": "11 & 12 / Setembro / 2014",
                    "enDates": "11 & 12 / September / 2014",
                    "name": "PhoneGap<br>Bootcamp<br>Rio de Janeiro",
                    "url": "https://actioncreations.com/store/produto/phonegap-bootcamp-rio-de-janeiro-11-e-12-setembro-2014/"
                }, {
                    "city": "San Francisco - California - USA",
                    "address": "HTML5 Dev Conf",
                    "ptDates": "Datas a definir",
                    "enDates": "To be defined",
                    "name": "PhoneGap<br>Bootcamp<br>San Francisco",
                    "url": "message:Registration for SF Bootcamp will open soon!"
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