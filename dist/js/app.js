var app = angular.module('app', ['ngRoute']);

// using [] to protect the $scope and logic to avoid getting broken after minification using uglify
app.controller('AppController', ['$scope',
    function ($scope) {
        
        // defining the language
        $scope.isPortuguese = true;
        $scope.isEnglish = false;
        
        // defining snap
        $scope.snapper = new Snap({
            element: document.getElementById('content'),
            disable: 'right'
        });
        
        // tabButton functionality
        $scope.tabButton = document.getElementById('open-left-button');
        $scope.tabButton.addEventListener('click', function () {
            if ($scope.snapper.state().state === 'closed') {
                $scope.snapper.open('left');
            }
        }, false);
        
        // route, load partial and then close snapper
        $scope.$on('$routeChangeSuccess', function (event, routeData) {
            if ($scope.snapper.state().state === 'left') {
                $scope.snapper.close();
                
            }
        });
}]);

// configuring all routes
app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/about.html',
            controller: 'AboutController'
        }).
        when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'AboutController'
        }).
        when('/quotes', {
            templateUrl: 'partials/quotes.html',
            controller: 'QuotesController'
        }).
        when('/instructors', {
            templateUrl: 'partials/instructors.html',
            controller: 'InstructorsController'
        }).
        when('/agenda', {
            templateUrl: 'partials/agenda.html',
            controller: 'AgendaController'
        }).
        when('/duration', {
            templateUrl: 'partials/duration.html',
            controller: 'DurationController'
        }).
        when('/registration', {
            templateUrl: 'partials/registration.html',
            controller: 'RegistrationController'
        }).
        when('/prerequisits', {
            templateUrl: 'partials/prerequisits.html',
            controller: 'PrerequisitsController'
        }).
        when('/target', {
            templateUrl: 'partials/target.html',
            controller: 'TargetController'
        }).
        when('/dateslocations', {
            templateUrl: 'partials/dateslocations.html',
            controller: 'DatesLocationsController'
        }).
        when('/videos', {
            templateUrl: 'partials/videos.html',
            controller: 'VideosController'
        }).
        when('/photos', {
            templateUrl: 'partials/photos.html',
            controller: 'PhotosController'
        }).
        when('/talktous', {
            templateUrl: 'partials/talktous.html',
            controller: 'TalktousController'
        }).
        otherwise({
            redirectTo: '/about'
        });
}]);

// snap js

//var snapper;

var addEvent = function addEvent(element, eventName, func) {
    if (element.addEventListener) {
        return element.addEventListener(eventName, func, false);
    } else if (element.attachEvent) {
        return element.attachEvent('on' + eventName, func);
    }
};

window.onload = function () {

    //position list in drawer-left to be displayed in the middle vertically
    adjustListMenuLeftPaddingTop();

    // initialize fast click
    FastClick.attach(document.body);

    window.addEventListener('orientationchange', function () {
        adjustListMenuLeftPaddingTop();
    }, false);
};

function adjustListMenuLeftPaddingTop() {
    document.getElementById('list-menu-left').style.paddingTop = window.innerHeight / 2 + 'px';
}