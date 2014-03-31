// angular

var app = angular.module('app', []);

app.controller('AppController', function ($scope) {

});

// main list

app.factory('MainMenuPortuguese', function() {
    var MainMenuPortuguese = {};
    MainMenuPortuguese.items = [
        {
            label: 'Sobre o Bootcamp',
            icon: 'glyphicon-about',
            clickRoute: 'about'
          },
        {
            label: 'Depoimentos',
            icon: 'glyphicon-quotes',
            clickRoute: 'quotes'
          },
        {
            label: 'Instrutores',
            icon: 'glyphicon-instructors',
            clickRoute: 'instructors'
          },
        {
            label: 'Agenda',
            icon: 'glyphicon-agenda',
            clickRoute: 'agenda'
          },
        {
            label: 'Duração',
            icon: 'glyphicon-duration',
            clickRoute: 'duration'
          },
        {
            label: 'Inscrições',
            icon: 'glyphicon-registration',
            clickRoute: 'registration'
          },
        {
            label: 'Pré-requisitos',
            icon: 'glyphicon-prerequisits',
            clickRoute: 'prerequisits'
          },
        {
            label: 'Público Alvo',
            icon: 'glyphicon-target',
            clickRoute: 'target'
          },
        {
            label: 'Datas e Locais',
            icon: 'glyphicon-dateslocations',
            clickRoute: 'dateslocations'
          },
        {
            label: 'Vídeos',
            icon: 'glyphicon-videos',
            clickRoute: 'videos'
          },
        {
            label: 'Fotos',
            icon: 'glyphicon-photos',
            clickRoute: 'photos'
          },
        {
            label: 'Fale com a organização',
            icon: 'glyphicon-talktous',
            clickRoute: 'talktous'
          }
     ];
    return MainMenuPortuguese;
})

function MainMenuController($scope, MainMenuPortuguese) {
    $scope.mainMenuPortuguese = MainMenuPortuguese;
}

// snap js

var snapper;

window.onload = function () {

    //position list in drawer-left to be displayed in the middle vertically
    adjustListMenuLeftPaddingTop();

    // initialize snapjs
    snapper = new Snap({
        element: document.getElementById('content'),
        disable: 'right'
    });

    // initialize fast click
    FastClick.attach(document.body);

    addEvent(document.getElementById('open-left-button'), 'click', function () {
        var state = snapper.state().state;
        if (state === 'closed') {
            snapper.open('left');
        }
    });

    window.addEventListener('orientationchange', function () {
        adjustListMenuLeftPaddingTop();
    }, false);
};

function adjustListMenuLeftPaddingTop() {
    document.getElementById('list-menu-left').style.paddingTop = window.innerHeight / 2 + 'px';
}

var addEvent = function addEvent(element, eventName, func) {
    if (element.addEventListener) {
        return element.addEventListener(eventName, func, false);
    } else if (element.attachEvent) {
        return element.attachEvent('on' + eventName, func);
    }
};