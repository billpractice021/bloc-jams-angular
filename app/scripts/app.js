(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
    
        $stateProvider
            .state('landing', { 
                url: '/', // gives browser a url it can bookmark. changes the way the html renders depending on which url or state it uses.
                controller: 'LandingCtrl as landing',
                templateUrl: '/templates/landing.html' // '/templates/landing'
            })
            .state('album', {
                url: '/album', // !! same /album
                controller: 'AlbumCtrl as album',
                templateUrl: '/templates/album.html' // !! same
            })
            .state('collection', {
                url: '/collection', // !! same
                controller: 'CollectionCtrl as collection',
                templateUrl: '/templates/collection.html' // !! same
            });
    } 

    angular // Why? 
        .module('blocJams', ['ui.router'])
        .config(config);
})();