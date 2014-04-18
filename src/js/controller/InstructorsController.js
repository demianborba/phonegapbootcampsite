app.controller('InstructorsController', ['$scope','AppEventManager',
    function (scope, AppEventManager) {        
        AppEventManager.tellMenuNewSectionLoaded('instructors');
        
        // defining multiple language content
        scope.pageItems = {
                "title": {                
                            "ptLabel": "Instrutores",
                            "enLabel": "Instructors"
                            },
                "instructors": [{
                            "name": "Demian Borba",
                            "title": "Developer Evangelist, BlackBerry",
                            "picture": "images/instructors-demian.jpg",
                            "twitterName": "@demianborba",
                            "twitterURL": "http://twitter.com/demianborba",
                            "bio": {
                                    "ptLabel": "Demian é Developer Evangelist na BlackBerry, responsável pelo time de Developer Relations na América Latina. Especializado em HTML5 e desenvolvimento móvel, com palestras ministradas em grandes conferências nos Estados Unidos, América Latina, Ásia e Europa. Demian tem mais de 15 anos de experiência em tecnologia, interactive media, design, negócios e treinamentos. Um dos Adobe Community Professionals e também ex-professor na Universidade de San Diego (UCSD), onde ensinou UI Design e programação aos alunos de Ciência da Computação e Design. Antes de entrar para a BlackBerry, ele fundou e gerenciou a Action Creations, uma agência interativa baseada em San Diego California, com clientes como Oakley, 20th Century Fox, ASP World Tour of Surfing, Nike, Callaway Golf entre outros. Na arena de comunidades, foi o organizador de um dos maiores eventos de comunidades Adobe, o Adobe Camp Brasil. Teve a oportunidade de participar e vencer um dos maiores hackathons do mundo, a AT&T® Mobile App Hackathon 2012, em Las Vegas EUA. Recentemente, Demian recebeu o prêmio 'Must See BlackBerry Developer Evangelist' nos Estados Unidos.",
                                    "enLabel": "Demian is Developer Evangelist at BlackBerry, responsible for Developer Relations in Latin America. Specialize in HTML5 and mobile development, with talks delivered at major conferences in North America, Latin America, Asia and Europe. More than 15 years of experience with technology, interactive media, design, business and training, Demian has worked as one of the Adobe Community Professionals and also as a professor at UC San Diego, teaching UI Design and Programming classes for Design and Computer Science students. Before joining BlackBerry, he ran Action Creations, an interactive agency based in San Diego with clients including Oakley, 20th Century Fox, World Tour of Surfing, Nike, Callaway Golf and more. In the community arena, he was the organizer of one of the largest Adobe community events in the world, called Adobe Camp Brasil. In 2012, he had the chance to participate and win one of the biggest and most important developer contests in the world, the AT&T® Mobile App Hackathon, at CES in Las Vegas USA. Recently, Demian received the 'Must See BlackBerry Developer Evangelist' Award at Jam Americas in the United States."
                                    }
                            },
                            {
                            "name": "Gustavo Costa",
                            "title": "Mobile Developer, ToNails",
                            "picture": "images/instructors-gustavo.jpg",
                            "twitterName": "@gustavocostaw",
                            "twitterURL": "http://twitter.com/gustavocostaw",
                            "bio": {
                                    "ptLabel": "Gustavo é Desenvolvedor Mobile na ToNails, uma startup selecionada pelo programa Startup Brasil, vencedora do Startup Jam e do Demo Day; membro do BlackBerry Tech Center UFAL; manager do Mobile Dev Group Maceió; um dos 100 BlackBerry Elite Members no mundo; palestrou em mais de 15 eventos pelo Brasil; PhoneGap Expert, já desenvolveu aplicativos para iOS, Android e BlackBerry; participou de projetos internacionais; ganhou prêmios e venceu hackathons usando HTML5; ama a Web e seus padrões; é contribuidor ativo no mundo Open Source, sendo criador de alguns projetos como o FastGap.",
                                    "enLabel": "Gustavo is Mobile Developer at ToNails, a startup selected by Startup Brazil, Startup Jam winner and Demo Day winner; BlackBerry Tech Center UFAL member; Mobile Dev Group Maceio manager; one of the 100 BlackBerry Elite Members in the world; spoke at 15 conferences in Brasil; PhoneGap Expert; developed apps for iOS, Android and BlackBerry; worked on international projects; received awards and won hackathons using HTML5; loves the Web and its standards; active contributor in the Open Source world, creating some projects such as FastGap."
                                    }
                            },
                            {
                            "name": "Joselito Junior",
                            "title": "Mobile Developer, Tech Center UFPE",
                            "picture": "images/instructors-joselito.jpg",
                            "twitterName": "@joselitojunior1",
                            "twitterURL": "http://twitter.com/joselitojunior1",
                            "bio": {
                                    "ptLabel": "Joselito é fundador do Rabiscapp, aplicativo cross-platform para prototipação e análise de UX; co-fundador do Estudorama, startup com foco em educação; BlackBerry Elite Member (100 no mundo); membro do BlackBerry Tech Center UFPE; vencedor do NASA Space Apps Challenge Brazil; vencedor do Startup Jam 2013; apaixonado pela web e pela Fórmula 1.",
                                    "enLabel": "Joselito is Rabiscapp's founder, a cross-platform mobile app for prototyping and UX analysis; Estudorama co-founder, a startup focused on education; BlackBerry Elite Member (only 100 in the world); BlackBerry Tech Center UFPE member; NASA Space Apps Challenge Brazil winner; Startup Jam 2013 winner; loves the Web and Formula 1."
                                    }
                            }]
                };
}]);