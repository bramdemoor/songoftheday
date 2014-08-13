'use strict';

app.controller('SongsCtrl', function($scope, Song, $modal, $log) {

    $scope.songs = Song.all;

    // NavVfpp-1L4
    $scope.song = { param: '', artist: '', title: '' };

    $scope.submitSong = function() {
        Song.create($scope.song).then(function() {
            $scope.song = { param: '', artist: '', title: '' };
        });
    };

    $scope.deleteSong = function(songId) {

        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: ModalInstanceCtrl,
            size: 'sm',
            resolve: {
                song: function () {
                    return songId;
                }
            }
        });

        modalInstance.result.then(
            function (selectedItem) {
                Song.delete(songId);
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
    };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

var ModalInstanceCtrl = function ($scope, $modalInstance, song) {

    $scope.song = song;

    $scope.yes = function () {
        $modalInstance.close();
    };

    $scope.no = function () {
        $modalInstance.dismiss('cancel');
    };
};