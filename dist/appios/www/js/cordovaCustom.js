document.addEventListener("deviceready", function () {
    
    // set status bar to match app color (ios only)
    StatusBar.backgroundColorByHexString("#288ac7");
    
    var appReference = document.getElementById('app');
    var rootScopeReference = angular.element(appReference).scope();

    navigator.globalization.getPreferredLanguage(
        function (language) {
            if (language.value === 'pt') {
               rootScopeReference.$apply(function () { rootScopeReference.setLanguage('pt'); });
            } else {
               rootScopeReference.$apply(function () { rootScopeReference.setLanguage('en'); });
            }
        },
        function () {
            // in case error getting the language, use English
            rootScopeReference.$apply(function () { rootScopeReference.setLanguage('en'); });
        }
    );
    
}, false);