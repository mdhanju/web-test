var indexSteps = function() {

    this.World = require("../support/world.js");
    var PROPERTIES = require('../../config.json');

    this.Given(/^I am on home page$/, function(callback) {
        console.log(' App url = ' + PROPERTIES.host);
        console.log(' App port = ' + PROPERTIES.port);
        var appUrl = PROPERTIES.host + ':' + PROPERTIES.port;
        this.init().url(appUrl, callback);

    });
};

module.exports = indexSteps;
