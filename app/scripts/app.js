(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
    
        $stateProvider
            .state('landing', { 
                url: '/', // I don't think I need '/' like the directions say since nothing else comes before this. !! 
                templateUrl: '/templates/landing.html' // '/templates/landing'
            })
            .state('album', {
                url: '/album', // !! same /album
                templateUrl: '/templates/album.html' // !! same
            })
            .state('collection', {
                url: '/collection', // !! same
                templateUrl: '/templates/collection.html' // !! same
            });
    }

    angular // Why? 
        .module('blocJams', ['ui.router'])
        .config(config);
})();