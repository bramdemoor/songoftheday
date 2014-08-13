'use strict';

app.controller('SongViewCtrl', function($scope, $routeParams, Song) {
  $scope.song = Song.find($routeParams.songId);
});