'use strict';

app.filter('toEmbedLink', function() {

    return function(str) {
        return '//www.youtube.com/embed/' + str;
    }
});