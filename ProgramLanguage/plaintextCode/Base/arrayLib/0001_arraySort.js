console.log("------------Test start--------------")
// --- 0001 > arraySort
function arraySort  (n) {
    return  n.sort(function(a, b){return a - b});
}
let n
n = [40, 100, 1, 5, 25, 10]
console.log( arraySort (n) )
console.log("------------Test   End---------------")