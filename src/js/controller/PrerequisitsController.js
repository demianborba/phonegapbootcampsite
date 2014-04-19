app.controller('PrerequisitsController', ['$scope', 'AppEventManager',
    function (scope, AppEventManager) {
        AppEventManager.tellMenuNewSectionLoaded('prerequisits');

        // defining multiple language content
        scope.pageItems = {
            "title": {
                "ptLabel": "Pré<br>requisitos",
                "enLabel": "Pre<br>requisits"
            },
            "description": {
                "ptLabel": "Participantes do PhoneGap Bootcamp devem ter conhecimento intermediário do Web Stack (HTML + CSS + JavaScript) e noções de programação. Durante o Bootcamp vamos fornecer/instalar todos os softwares, plugins e bibliotecas necessárias (sem custo para adquirir estas ferramentas), além de executar exercícios com total supervisão e suporte dos instrutores.",
                "enLabel": "PhoneGap Bootcamp participants need to have an intermediate level of the Web Stack (HTML + CSS + JavaScript) and basics of programming. During the Bootcamp we will provide/install all necessary software, plugins and libraries (no aditional cost to get the tools), as well as follow exercises with full supervision and support from our instructors."
            }
        };
}]);