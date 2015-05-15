var actionSteps = function() {

    this.World = require("../support/world.js");
    var PROPERTIES = require('../../config.json');

    this.When(/^I click on weather tab$/, function(callback) {
        this.click('#weather', function(err, callback) {});
        // callback();
        this.pause(1000, callback);
    });

    this.When(/^I click on tab "([^"]*)"$/, function(arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        // callback.pending();
        console.log("Click Tab == arg1 = " + arg1);
        if (arg1 === "weather") {
            this.isVisible('#weather', function(err) {
                if (err) callback.fail(new Error("Expected to be on page  "));
            });
            this.click('#weather', function(err, callback) {});
            // callback();
            this.pause(1000, callback);
        }
    });

    this.When(/^I click button "([^"]*)"$/, function(arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        // callback.pending();
        console.log("Click button arg1 = " + arg1);
        if (arg1 === "Submit") {
            this.isVisible('#submit', function(err) {
                if (err) callback.fail(new Error("Expected to be on page  "));
            });
            this.click('#submit', function(err, callback) {});
        }
        // callback();
        this.pause(1000, callback);
    });
}
module.exports = actionSteps;
