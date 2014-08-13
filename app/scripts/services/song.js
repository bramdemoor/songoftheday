'use strict';

app.factory('Song', function($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL + 'songs');

    var songs = $firebase(ref);

    var Song = {
        all: songs,
        create: function(song) {
            return songs.$add(song);
        },
        find: function(songId) {
            return songs.$child(songId);
        },
        delete: function(songId) {
            return songs.$remove(songId);
        }

    };

    return Song;
});