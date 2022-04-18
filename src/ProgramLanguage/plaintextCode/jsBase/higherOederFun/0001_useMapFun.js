console.log("------------Test start--------------")
// --- 0001 > useMapFun
'use strict';
function pow(x) {
    return x * x;
}
function useMapFun  (arr) {
    // var results = arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
    // var results = arr.map( function(x){return x * x ; })
    // var results = arr.map( (x) => {return x * x ; })
    var results = arr.map( x =>  x * x  )
    // console.log(results)
    return results
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log( useMapFun (arr) )
console.log("------------Test   End--------------")