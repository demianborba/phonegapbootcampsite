app.controller('AboutController', ['$scope','$rootScope','AppEventManager','$routeParams',
    function (scope, rootScope, AppEventManager, routeParams) {
        AppEventManager.tellMenuNewSectionLoaded('about');
        
        if (routeParams.language === "english") {
            rootScope.setLanguage('en');
        }

        // defining multiple language content
        scope.pageItems = {
            "title": {
                "ptLabel": "Sobre o<br>PhoneGap<br>Bootcamp",
                "enLabel": "About<br>PhoneGap<br>Bootcamp"
            },
            "nextCitiesMessage": {
                "ptLabel": "Inscrições abertas para as próximas turmas do PhoneGap Bootcamp em São Paulo e no Rio de Janeiro:",
                "enLabel": "Registration open for the next PhoneGap Bootcamp classes in Sao Paulo and Rio de Janeiro:"
            },
            "button1": {
                "ptLabel": "Inscreva-se já",
                "enLabel": "Register Now"
            },
            "description": {
                "ptLabel": "São 20 horas em 2 dias de treinamento intenso usando os workflows do Cordova (Platform Centered e Cross Platform) para criação de aplicativos para iOS (iPad, iPhone e iPod), Android (tablets e smartphones) e BlackBerry 10 (smartphones), focando em Single Page Apps com alta performance, dicas do mundo real e tendências como Angular, Gulp, Sass, Emmet e Live Debugging, além dos passos para publicação nas lojas de aplicativos de cada plataforma.",
                "enLabel": "2 days of intense training covering Mobile Apps using Cordova for iOS, Android and BlackBerry 10, focusing on Single Page Apps and Performance."
            },
            "listTitle": {
                "ptLabel": "Vamos passar por todas as etapas de configuração das máquinas (Mac ou Windows), e vamos criar aplicativos reais com as APIs do Cordova/PhoneGap:",
                "enLabel": "We are going to cover all the steps to configure Mac and Windows machines, as well as create an app with:"
            },
            "listItems": {
                "ptLabel": "<li>Detectando a plataforma;</li><li>Status da bateria;</li><li>Câmera;</li><li>Contatos;</li><li>Informações do aparelho;</li><li>Acelerômetro;</li><li>Bússola;</li><li>Caixas de diálogo nativas;</li><li>Consumindo JSON & WebServices;</li><li>Sistema de arquivos;</li><li>Geolocalização;</li><li>Detectando o idioma;</li><li>In App Browser;</li><li>Tocando áudio e vídeo;</li><li>Gravando áudio e vídeo;</li><li>Informações e status da rede (online/offline);</li><li>Vibração;</li><li>Sistema;</li><li>Barra de Status (iOS);</li><li>Armazenamento local (Local Storage & WebSQL).</li>",
                "enLabel": "<li>Platform Detection;</li><li>Battery Status;</li><li>Camera;</li><li>Contacts;</li><li>Device;</li><li>Device Motion (Accelerometer);</li><li>Device Orientation (Compass);</li><li>Dialogs;</li><li>Consuming JSON & WebServices;</li><li>File System;</li><li>Geolocation;</li><li>Globalization;</li><li>In App Browser;</li><li>Media;</li><li>Media Capture;</li><li>Network Information (Connection);</li><li>Vibration;</li><li>System (BlackBerry);</li><li>Status Bar (iOS);</li><li>Storage (Local Storage & WebSQL).</li>"
            },
            "description2": {
                "ptLabel": "Vamos empacotar, instalar e debugar cada aplicativo em devices reais.",
                "enLabel": "We are going to package, install and debug each application using real devices."
            },
            "button2": {
                "ptLabel": "Quer o Bootcamp em sua cidade?",
                "enLabel": "Want the Bootcamp in your city?"
            },
            "button3": {
                "ptLabel": "Visite nossa página no Facebook",
                "enLabel": "Visit our page on Facebook"
            }
        };

        scope.gotoRegisterPage = function () {
            window.location.href = '#/registration';
        }
        
        scope.gotoContactPage = function () {
            window.location.href = '#/talktous';
        }
        
        scope.gotoPage = function (page) {
            window.open(page, '_blank');
        }

}]);