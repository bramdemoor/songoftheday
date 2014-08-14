describe("SOTD: Testing Modules", function() {

    describe("angSotdApp Module:", function() {

        var module;

        beforeEach(function() {
            module = angular.module("angSotdApp");
        });

       it("should be defined", function() {
           expect(module).toBeDefined();
        });


        describe("Dependencies:", function() {

            var deps;
            var hasModule = function(m) {
                return deps.indexOf(m) >= 0;
            };
            beforeEach(function() {
                deps = module.value('angSotdApp').requires;
            });

            it("should have firebase as a dependency", function() {
                expect(hasModule('firebase')).toEqual(true);
            });

            it("should not have I_DO_NOT_EXIST as a dependency", function() {
                expect(hasModule('I_DO_NOT_EXIST')).toEqual(false);
            });

        });
    });

});