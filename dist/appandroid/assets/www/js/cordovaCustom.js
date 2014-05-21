document.addEventListener("deviceready", function () {
    
    // cordova specific code to set the language
    var appReference = document.getElementById('app');
    var rootScopeReference = angular.element(appReference).scope();

    navigator.globalization.getPreferredLanguage(
        function (language) {
            if (language.value === 'português') {
               rootScopeReference.$apply(function () { rootScopeReference.setLanguage('pt'); });
            } else {
               rootScopeReference.$apply(function () { rootScopeReference.setLanguage('en'); });
            }
            window.alert(language.value);
        },
        function () {
            // in case error getting the language, use English
            rootScopeReference.$apply(function () { rootScopeReference.setLanguage('en'); });
        }
    );

}, false);