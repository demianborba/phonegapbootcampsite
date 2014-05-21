document.addEventListener("deviceready", function () {

    // cordova specific code to set the language
    var appReference = document.getElementById('app');
    var rootScopeReference = angular.element(appReference).scope();
    
    if (blackberry.system.language === 'pt-BR') {
        rootScopeReference.$apply(function () { rootScopeReference.setLanguage('pt'); });
    } else {
        rootScopeReference.$apply(function () { rootScopeReference.setLanguage('en'); });
    }

}, false);