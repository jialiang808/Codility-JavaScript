//Lesson6-1:计算数组中不同值的数量
function solution61(A) {
    var result = 0;
    var arr = [];
    var length = A.length;
    for (var i = 0; i < length; i++) {
        var item = A[i];
        if (arr[item] === undefined) {
            result++;
            arr[item] = item;
        }
    }
    return result;
}