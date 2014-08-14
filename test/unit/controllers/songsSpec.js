describe("Unit: Songs Controller", function() {

    beforeEach(module('angSotdApp'));

    it('testje', inject(function($rootScope, $controller) { //injects the dependencies
        var scope = $rootScope.$new();

        var ctrl = $controller('SongsCtrl', {
            $scope: scope
       /*     ,Song: null,
            $modal: null,
            $log: null*/
        });

        expect(true).toBe(true);
    }))
});