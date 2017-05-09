/**
 * Replace all instances of "deer" on the page with "deerdog"
 */

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        if (node.nodeType !== 3) { continue; }

        var text = node.nodeValue;
        var replacedText = text.replace(/(deer)/gi, '$1dog');

        if (replacedText === text) { continue; }
        
        element.replaceChild(document.createTextNode(replacedText), node);
    }
}