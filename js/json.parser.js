var responseString = '{"Great Britain":[{"predicate":{"type":"uri","value":"http://schema.org/spatialCoverage"},"subject":{"type":"uri","value":"http://estc.bl.uk/N72338"},"object":{"type":"literal","value":"Great Britain"}},{"predicate":{"type":"uri","value":"http://schema.org/spatialCoverage"},"subject":{"type":"uri","value":"http://estc.bl.uk/N72335"},"object":{"type":"literal","value":"Great Britain"}}]}'

var obj = JSON.parse(responseString);

console.log(obj);