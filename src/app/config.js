angular
    .module('CompuCorpApp')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'src/app/routes/home/controller.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            });
    }])
    .constant('apiBaseUrl', 'https://api.spotify.com/v1/');