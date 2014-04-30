window.onload = function () {
    // initialize fast click
    FastClick.attach(document.body);
};

var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngSanitize']);

// using [] to protect the $scope and logic to avoid getting broken after minification using uglify
app.controller('AppController', ['$scope', '$rootScope',
    function (scope, rootScope) {

        // referencing HTML elements (GLOBAL VARIABLES)
        rootScope.scrollableContent = document.getElementById('scrollable-content-area');
        rootScope.labelToolbar = document.getElementById('label-toolbar');
        rootScope.content = document.getElementById('content');
        rootScope.mainMenu = document.getElementById('list-menu-left');

        rootScope.setLanguage = function (value) {
            if (value === 'en') {
                rootScope.isPortuguese = false;
                rootScope.isEnglish = true;
            } else {
                rootScope.isPortuguese = true;
                rootScope.isEnglish = false;
            }
        };
        rootScope.setLanguage('en');

        // routing value
        scope.isRouting = false;

        // defining the transition speed for snapper
        scope.snapperTransitionSpeed = 0.2;

        // defining snapper
        scope.snapper = new Snap({
            element: rootScope.content,
            disable: 'right',
            transitionSpeed: scope.snapperTransitionSpeed
        });

        // tabButton functionality of snapper
        scope.openSnapper = function () {
            if (scope.snapper.state().state === 'closed') {
                scope.snapper.open('left');
            } else {
                scope.snapper.close();
            }
        };

        // detecting when routing occurs
        scope.$on('$routeChangeStart', function (event, currRoute, prevRoute) {
            scope.isRouting = true;
        });
        scope.$on('$routeChangeSuccess', function (event, currRoute, prevRoute) {
            scope.isRouting = false;
            rootScope.scrollableContent.scrollTop = 0;
        });

        // adjust Y position of mainMenu to facilitate tap using thumb
        scope.resetYpositionMainMenu = function () {
            rootScope.mainMenu.style.paddingTop = window.innerHeight / 6 + 'px';
        };

        // if media query is mobile, force height to be 100% - $toolbar-height (for older browsers)
        scope.setScrollableAreaForMobile = function () {
            rootScope.scrollableContent.style.height = (window.innerHeight - 50) + 'px';
        };
        scope.setScrollableAreaForDesktop = function () {
            rootScope.scrollableContent.style.height = (532 - 50) + 'px';
        };
        scope.resetScrollableAreaHeight = function () {
            var currentWindowWidth = window.innerWidth;
            if (currentWindowWidth < 1024) {
                scope.setScrollableAreaForMobile();
            } else {
                scope.setScrollableAreaForDesktop();
            }
        };
        window.onresize = function () {
            scope.resetScrollableAreaHeight();
        };
        scope.resetScrollableAreaHeight();

        scope.resetYpositionMainMenu();
        window.addEventListener('orientationchange', function () {
            scope.resetYpositionMainMenu();
            scope.resetScrollableAreaHeight();
        }, false);
}]);

// creating a service called App Event Manager for controllers to talk to each other
app.factory('AppEventManager', ['$rootScope',
    function (rootScope) {
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