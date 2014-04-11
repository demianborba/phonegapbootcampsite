window.onload=function(){FastClick.attach(document.body)};var app=angular.module("app",["ngRoute","ngAnimate","ngSanitize"]);app.controller("AppController",["$scope","$rootScope",function(t,e){e.scrollableContent=document.getElementById("scrollable-content-area"),e.labelToolbar=document.getElementById("label-toolbar"),e.content=document.getElementById("content"),e.mainMenu=document.getElementById("list-menu-left"),e.setLanguage=function(t){"en"===t?(e.isPortuguese=!1,e.isEnglish=!0):(e.isPortuguese=!0,e.isEnglish=!1)},e.setLanguage("pt"),t.isRouting=!1,t.snapperTransitionSpeed=.2,t.snapper=new Snap({element:e.content,disable:"right",transitionSpeed:t.snapperTransitionSpeed}),t.openSnapper=function(){"closed"===t.snapper.state().state?t.snapper.open("left"):t.snapper.close()},t.$on("$routeChangeStart",function(){t.isRouting=!0}),t.$on("$routeChangeSuccess",function(){t.isRouting=!1,e.scrollableContent.scrollTop=0}),t.resetYpositionMainMenu=function(){e.mainMenu.style.paddingTop=window.innerHeight/6+"px"},t.resetYpositionMainMenu(),window.addEventListener("orientationchange",function(){t.resetYpositionMainMenu()},!1)}]),app.factory("AppEventManager",["$rootScope",function(t){var e={};return e.tellMenuNewSectionLoaded=function(e){t.$broadcast("NewSectionLoaded",e)},e}]),app.config(["$routeProvider",function(t){t.when("/about",{templateUrl:"partials/about.html",controller:"AboutController"}).when("/quotes",{templateUrl:"partials/quotes.html",controller:"QuotesController"}).when("/instructors",{templateUrl:"partials/instructors.html",controller:"InstructorsController"}).when("/agenda",{templateUrl:"partials/agenda.html",controller:"AgendaController"}).when("/duration",{templateUrl:"partials/duration.html",controller:"DurationController"}).when("/registration",{templateUrl:"partials/registration.html",controller:"RegistrationController"}).when("/prerequisits",{templateUrl:"partials/prerequisits.html",controller:"PrerequisitsController"}).when("/target",{templateUrl:"partials/target.html",controller:"TargetController"}).when("/dateslocations",{templateUrl:"partials/dateslocations.html",controller:"DatesLocationsController"}).when("/videos",{templateUrl:"partials/videos.html",controller:"VideosController"}).when("/photos",{templateUrl:"partials/photos.html",controller:"PhotosController"}).when("/talktous",{templateUrl:"partials/talktous.html",controller:"TalktousController"}).otherwise({redirectTo:"/about"})}]);