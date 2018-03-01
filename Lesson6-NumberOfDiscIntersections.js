//Lesson6-4:计算光盘序列中的交点数 87分
function solution64(A) {
    var result = 0;
    var length = A.length;
    for (var i = 1; i < length; i++) {
        for (var j = 0; j < i; j++) {
            if (A[i] + A[j] >= i - j) {
                result++;
            }
            if (result > 10000000) {
                return -1;
            }
        }
    }

    return result;
}