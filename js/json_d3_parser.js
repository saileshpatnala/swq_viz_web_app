var responseString = '{"Great Britain":[{"predicate":{"type":"uri","value":"http://schema.org/spatialCoverage"},"subject":{"type":"uri","value":"http://estc.bl.uk/N72338"},"object":{"type":"literal","value":"Great Britain"}},{"predicate":{"type":"uri","value":"http://schema.org/spatialCoverage"},"subject":{"type":"uri","value":"http://estc.bl.uk/N72335"},"object":{"type":"literal","value":"Great Britain"}}]}'

var obj = JSON.parse(responseString);
var links = [];
var nodes = [];
var graph = {};

Object.keys(obj).forEach(function(key){
  var triples = obj[key];
  triples.forEach(function(key){
    var triple = {};
    triple["source"] = key.subject.value;
    triple["target"] = key.object.value;
    triple["predicate"] = key.predicate.value;
    triple["value"] = 1;
    links.push(triple);

    var node = {};
    node["id"] = key.subject.value;
    node["group"] = 1;
    nodes.push(node);
    node = {};
    node["id"] = key.object.value;
    node["group"] = 1;
    nodes.push(node);
  });
});

function removeDuplicates(originalArray, prop) {
     var newArray = [];
     var lookupObject  = {};

     for(var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
     }

     for(i in lookupObject) {
         newArray.push(lookupObject[i]);
     }
      return newArray;
 }

var nodes = removeDuplicates(nodes, "id");
//console.log("nodes is: " + JSON.stringify(nodes));

graph["nodes"] = nodes;
graph["links"] = links;
console.log(graph);

