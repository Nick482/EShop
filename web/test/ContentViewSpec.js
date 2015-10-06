/**
 * Created by Nick on 9/29/2015.
 */
define(function(require) {
    var ContentView = require('components/contentView/ContentView'),

        sinon = require('lib/sinon/lib/sinon');

    describe("ContentView", function () {

        var contentView;

        beforeEach(
            sinon.stub(contentView),
            contentView = new ContentView()
        );

        it("should return an object, i guess", function () {
            expect(contentView).toBeDefined();
        })
    });
});