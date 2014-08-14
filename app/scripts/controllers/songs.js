'use strict';

app.SongsCtrl = app.controller('SongsCtrl', function($scope, Song, $modal, $log) {

    $scope.songs = Song.all;

    $scope.song = { param: '', artist: '', title: '', editing: false };

    $scope.submitSong = function() {
        Song.create($scope.song).then(function() {
            $scope.song = { param: '', artist: '', title: '' };
        });
    };

    $scope.deleteSong = function(songId, song) {

        $modal.open({
            templateUrl: 'myModalContent.html',
            controller: ['$scope', '$modalInstance', 'songId', 'song', function ($scope, $modalInstance, songId, song) {
                $scope.songId = songId;
                $scope.song = song;
                $scope.yes = function () { $modalInstance.close(); };
                $scope.no = function () { $modalInstance.dismiss('cancel'); };
            }],
            size: 'sm',
            resolve: {
                songId: function () { return songId; },
                song: function () { return song; }
            }
        }).result.then(
            function () { Song.delete(songId); },
            function () { $log.info('Modal dismissed at: ' + new Date()); });
    };
});
