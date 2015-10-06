/**
 * Created by Nick on 9/29/2015.
 */
define(function(require) {
    var Add = require('components/add/Add');

    describe("Add", function () {

        var add;

        beforeEach(function() {
            add = new Add();
        });

        it("should return an object, i guess", function () {
            expect(add).toBeDefined();
        })
    });
});