describe("Unit: Songs Controller", function() {

    beforeEach(module('angSotdApp'));

    it('testje', inject(function($rootScope, $controller) { //injects the dependencies
        var scope = $rootScope.$new();

        var mockSongService = {
            all: []
        };

        var ctrl = $controller('SongsCtrl', {
            $scope: scope,
            Song: mockSongService,
            $modal: null,
            $log: null
        });

        expect(ctrl).toBeDefined();

        expect(scope.songs).toBeDefined();
        expect(scope.songs).toBe(mockSongService.all);

        expect(scope.song).toBeDefined();
        expect(scope.song.editing).toBe(false);

        expect(scope.submitSong).toBeDefined();
        expect(scope.deleteSong).toBeDefined();

        expect(scope.I_DO_NOT_EXIST).not.toBeDefined();

    }))
});