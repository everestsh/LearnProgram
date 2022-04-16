console.log("------------Test start--------------")
// --- 0002 > useSubstr
function useSubstr  () {
    var a = "hello";
    console.log(a.substr(-1));
    console.log(a.substr(-2));
    console.log(a.substring(a.length-1, a.length));
}
// let n
// n = [40, 100, 1, 5, 25, 10]
console.log( useSubstr () )
console.log("------------Test   End--------------")