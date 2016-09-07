(function() {
    function AlbumCtrl(Fixtures) {
        this.albumData = Fixtures.getAlbum();
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]); // Need to put Fixtures and AlbumCtrl in brackets otherwise it does not work. 
})();