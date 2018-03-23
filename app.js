/**
 * Main Application
 */

var linode = require('./linode');
var process = require('./process');

var builder = require('botbuilder');

var connector = new builder.ConsoleConnector().listen();

var bot = new builder.UniversalBot(connector,function(session){
    linode.listLinodes().then(res => {   
        var nodes = process.formatLinodeDisplay(res); 
        session.send("You said: %s",nodes[0].label); //Test showing first object label
    });
});