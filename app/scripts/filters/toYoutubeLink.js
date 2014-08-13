'use strict';

app.filter('toYoutubeLink', function() {

    return function(str) {
        return 'https://www.youtube.com/watch?v=' + str;
    }
});