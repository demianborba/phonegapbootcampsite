app.controller('AboutController', ['$scope', 'AppEventManager',
    function (scope, AppEventManager) {
        AppEventManager.tellMenuNewSectionLoaded('about');
        
        // defining multiple language content
        scope.pageItems = {
                "title": {                
                            "ptLabel": "Sobre o<br>PhoneGap<br>Bootcamp",
                            "enLabel": "About<br>PhoneGap<br>Bootcamp"
                            },
                "description": {                
                            "ptLabel": "São 2 dias de treinamento intenso sobre Apps Mobile usando Cordova para iOS, Android e BlackBerry 10, focando em Single Page Apps e Performance.",
                            "enLabel": "2 days of intense training coverting Mobile Apps using Cordova for iOS, Android and BlackBerry 10, focusing on Single Page Apps and Performance."
                            },
                "listTitle" : {
                            "ptLabel": "Vamos passar por todas as etapas de configuração das máquinas (Mac ou Windows), e vamos criar um aplicativo com:",
                            "enLabel": "We are going to cover all the steps to configure Mac and Windows machines, as well as create an app with:"
                            },
                "listItems" : {
                            "ptLabel": "<li>Informações sobre a conexão</li><li>Alertas Nativos</li><li>Informações sobre o Aparelho</li><li>Armazenamento Local</li><li>Mapas e Geolocalização</li><li>Acelerômetro</li><li>Contatos do Aparelho</li><li>Navegador dentro do App</li><li>Fotos</li><li>Dados usando a Cloud (com <a href='http://parse.com'>Parse.com</a>)</li>", 
                            "enLabel": "<li>Connection</li><li>Native Alerts</li><li>Device Info</li><li>Local Storage</li><li>Maps and Geolocation</li><li>Accelerometer</li><li>Device Contacts</li><li>In App Browser</li><li>Photos</li><li>Data in the Cloud (using <a href='http://parse.com'>Parse.com</a>)</li>"
                            },
                "description2" : {
                            "ptLabel": "Vamos empacotar, instalar e debugar cada aplicativo em um device BlackBerry 10.", 
                            "enLabel": "We are going to package, install and debug each application using a BlackBerry 10 device."
                            },
                "button1" : {
                            "ptLabel": "Quer o Bootcamp em sua cidade?", 
                            "enLabel": "Want the Bootcamp in your city?"
                            },
                "button2" : {
                            "ptLabel": "Visite nossa página no Facebook", 
                            "enLabel": "Visit our page on Facebook"
                            }
                };
        
        scope.gotoContactPage = function () {
            window.location.href = '#/talktous';
        }
        
        scope.gotoFacebook = function () {
            window.location.href = 'http://www.facebook.com/phonegapbootcamp';
        };
        
}]);