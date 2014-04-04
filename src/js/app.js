var app = angular.module('app', ['ngRoute']);

// using [] to protect the $scope and logic to avoid getting broken after minification using uglify
app.controller('AppController', ['$scope',
    function (scope) {
        
        // defining the language
        scope.isPortuguese = true;
        scope.isEnglish = false;
        
        // defining the transition speed for snapper
        scope.snapperTransitionSpeed = 0.2;
        
        // defining snapper
        scope.snapper = new Snap({
            element: document.getElementById('content'),
            disable: 'right',
            transitionSpeed: scope.snapperTransitionSpeed
        });
        
        // tabButton functionality of snapper
        scope.openSnapper = function () {
            if (scope.snapper.state().state === 'closed') {
                scope.snapper.open('left');
            }
        };
}]);

// creating a service called App Event Manager for controllers to talk to each other
app.factory('AppEventManager', ['$rootScope', 
    function(rootScope) {
        var eventManager = {};
        
        eventManager.tellMenuNewSectionLoaded = function (section) {
            rootScope.$broadcast('NewSectionLoaded', section);
        };
        
        return eventManager;
}]);

// configuring all routes
app.config(['$routeProvider',
    function (routeProvider) {
        routeProvider.
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