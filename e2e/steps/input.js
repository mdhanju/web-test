var inputSteps = function() {

    this.World = require("../support/world.js");
    var PROPERTIES = require('../../config.json');

    this.When(/^I type city "([^"]*)"$/, function(arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        // callback.pending();
        console.log("Input arg1 = " + arg1);
        this.pause(1000, callback);
    });
}
module.exports = inputSteps;
