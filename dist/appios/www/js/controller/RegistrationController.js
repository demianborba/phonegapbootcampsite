app.controller("RegistrationController",["$scope","AppEventManager","$rootScope",function(e,o,t){o.tellMenuNewSectionLoaded("registration"),e.pageItems={title:{ptLabel:"Inscrições",enLabel:"Register<br>now"},description:{ptLabel:"Para se inscrever, escolha a cidade abaixo e toque no botão <strong>Inscreva-se Agora</strong>:",enLabel:"To register, choose a city below and tap on the <strong>Register Now</strong> button:"},registerButton:{ptLabel:"Inscreva-se Agora",enLabel:"Register Now"},button1:{ptLabel:"Quer o Bootcamp em sua cidade?",enLabel:"Want the Bootcamp in your city?"},bootcamps:[{city:"São Paulo - SP - Brasil",address:"Espaço iMasters - Rua Claudio Soares, 72 conj 1302 - Próximo ao metrô Faria Lima",ptDates:"30/Setembro e 1/Outubro, 2014",enDates:"30/September & 1/October, 2014",name:"PhoneGap<br>Bootcamp<br>São Paulo",url:"https://actioncreations.com/store/produto/phonegap-bootcamp-sao-paulo-30-setembro-2014/"}]},e.gotoContactPage=function(){window.location.href="#/talktous"},e.gotoPage=function(e){e.indexOf("message:")>-1?t.showMessage(e.substr(8,e.length)):window.open(e,"_blank")}}]);