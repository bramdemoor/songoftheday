'use strict';

app.controller('SongsCtrl', function($scope, Song, $modal, $log) {

    $scope.songs = Song.all;

    $scope.song = { param: '', artist: '', title: '' };

    $scope.submitSong = function() {
        Song.create($scope.song).then(function() {
            $scope.song = { param: '', artist: '', title: '' };
        });
    };

    $scope.deleteSong = function(songId) {

        $modal.open({
            templateUrl: 'myModalContent.html',
            controller: function ($scope, $modalInstance, song) {
                $scope.song = song;
                $scope.yes = function () { $modalInstance.close(); };
                $scope.no = function () { $modalInstance.dismiss('cancel'); };
            },
            size: 'sm',
            resolve: {
                song: function () { return songId; }
            }
        }).result.then(
            function (selectedItem) { Song.delete(songId); },
            function () { $log.info('Modal dismissed at: ' + new Date()); });
    };
});