/**
 * Linode API Library
 * https://www.linode.com/api
 */

var request = require('request');

module.exports = {
    listLinodes
}

function listLinodes(options) {
    
    var LINODELISTCONFIG = {
        url: "https://api.linode.com",
        method: 'GET',
        qs: {
            api_key: process.env.LINBOT,
            api_action: "linode.list",
        }
    }

    return new Promise(function(resolve,reject){
        request(options || LINODELISTCONFIG,function(err,res,body){
            if(!err) {
                resolve(JSON.parse(body)['DATA']);
            }
            reject(JSON.parse(body)['ERRORARRAY']);
        });
    });
}