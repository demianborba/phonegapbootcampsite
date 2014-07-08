app.controller('RegistrationController', ['$scope', 'AppEventManager',
    function (scope, AppEventManager) {
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
                    "city": "Maceió - Alagoas - Brasil",
                    "address": "Faculdade FITS | Av. Comendador Gustavo Paiva, 5017 - Cruz das Almas",
                    "ptDates": "4 & 5 / Agosto / 2014",
                    "enDates": "4 & 5 / August / 2014",
                    "name": "PhoneGap<br>Bootcamp<br>Maceió",
                    "url": "http://www.jornadaadobe.com",
                    "pageDestination": "_blank"
                },
                {
                    "city": "Aracaju - Sergipe - Brasil",
                    "address": "UNIT, Campus Farolândia | Av. Murilo Dantas, 300 - Farolândia",
                    "ptDates": "7 & 8 / Agosto / 2014",
                    "enDates": "7 & 8 / August / 2014",
                    "name": "PhoneGap<br>Bootcamp<br>Aracaju",
                    "url": "http://www.jornadaadobe.com",
                    "pageDestination": "_blank"
                },
                {
                    "city": "João Pessoa - Paraíba - Brasil",
                    "address": "UFPB | Cidade Universitária",
                    "ptDates": "18 & 19 / Agosto / 2014",
                    "enDates": "18 & 19 / August / 2014",
                    "name": "PhoneGap<br>Bootcamp<br>João Pessoa",
                    "url": "http://www.jornadaadobe.com",
                    "pageDestination": "_blank"
                },
                {
                    "city": "Rio de Janeiro - RJ - Brasil",
                    "address": "NAVE - Faculdade Estácio de Sá",
                    "ptDates": "11 & 12 / Setembro / 2014",
                    "enDates": "11 & 12 / September / 2014",
                    "name": "PhoneGap<br>Bootcamp<br>Rio de Janeiro",
                    "url": "javascript:alert('As inscrições para o Rio de Janeiro abrirão em breve!');",
                    "pageDestination": "_self"
                },{
                    "city": "San Francisco - California - USA",
                    "address": "HTML5 Dev Conf",
                    "ptDates": "Datas a definir",
                    "enDates": "To be defined",
                    "name": "PhoneGap<br>Bootcamp<br>San Francisco",
                    "url": "javascript:alert('Registration for SF Bootcamp will open soon!');",
                    "pageDestination": "_self"
            }]
        };
        
        scope.gotoContactPage = function () {
            window.location.href = '#/talktous';
        }
        
        scope.gotoPage = function (page, destination) {
            window.open(page, destination);
        }
}]);