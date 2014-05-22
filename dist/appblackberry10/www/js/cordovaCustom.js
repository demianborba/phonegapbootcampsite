document.addEventListener("deviceready", function () {

    var appReference = document.getElementById('app');
    var rootScopeReference = angular.element(appReference).scope();
    
    if (blackberry.system.language === 'pt-BR') {
        rootScopeReference.$apply(function () { rootScopeReference.setLanguage('pt'); });
    } else {
        rootScopeReference.$apply(function () { rootScopeReference.setLanguage('en'); });
    }

}, false);