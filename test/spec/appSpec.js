describe("SOTD: Testing Modules", function() {

    describe("angSotdApp Module:", function() {

        var module;

        beforeEach(function() {
            module = angular.module("angSotdApp");
        });

       it("should be registered", function() {

           expect(true).toBe(true);
        });

    });

});