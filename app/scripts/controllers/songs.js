'use strict';

app.controller('SongsCtrl', function($scope, Song) {

    $scope.songs = Song.all;

    // NavVfpp-1L4
    $scope.song = { param: '', artist: '', title: '' };

    $scope.submitSong = function() {
        Song.create($scope.song).then(function() {
            $scope.song = { param: '', artist: '', title: '' };
        });
    };

    $scope.deleteSong = function(songId) {
        Song.delete(songId);
    };
});