/**
 * Processing Library
 */

module.exports = {
    formatLinodeDisplay
 }

 function formatLinodeDisplay(nodeList) {
    var formattedNodes = []
    nodeList.forEach(element => {
        formattedNodes.push({id:element.LINODEID,label:element.LABEL,status:element.STATUS});
    });
    return formattedNodes;
}
