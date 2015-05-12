var visibilitySteps = function() {

    this.World = require("../support/world.js");
    var PROPERTIES = require('../../config.json');

    this.When(/^I see home tab$/, function(callback) {
        this.isVisible('#home', callback);
    });

    this.When(/^I see Mortgage Loan tab$/, function(callback) {
        this.isVisible('#mortgageLoan', callback);
    });

    this.When(/^I see Car Loan content$/, function(callback) {
        this.isVisible('#carLoan', callback);
    });

    this.Then(/^I see about content$/, function(callback) {
        this.isVisible('#headingWeatherForcast');
        this.pause(1000, callback);
    });

    this.When(/^I see "([^"]*)" tab$/, function(arg1, callback) {
        if (arg1 === "home") {
            this.isVisible('#home', function(err) {
                if (err) callback.fail(new Error("Expected to be on page  "));
            });
        } else {
            console.log("arg1 tab = " + arg1);
        }
        callback();
    });


    this.When(/^I see input for "([^"]*)"$/, function(arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        // callback.pending();
        console.log("arg1 input = " + arg1);
        this.pause(1000, callback);
    });


    this.When(/^I should see link "([^"]*)"$/, function(arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        // callback.pending();
        console.log("arg1 link = " + arg1);
        this.pause(1000, callback);
    });

    this.When(/^I see label "([^"]*)" with value$/, function(arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        console.log("arg1 label wirh value= " + arg1);
        callback();
        // this.pause(1000, callback);
    });

    this.When(/^I see select with placeholder "([^"]*)"$/, function(arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        console.log("select with placeholder = " + arg1);
        callback();
    });

    this.When(/^I see conversion rate$/, function(callback) {
        // Write code here that turns the phrase above into concrete actions
        console.log("arg1 = ");
        callback();
    });

    this.When(/^I see label "([^"]*)"$/, function(arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        // callback.pending();
        console.log("arg1 label = " + arg1);
        this.pause(1000, callback);
    });
}
module.exports = visibilitySteps;
