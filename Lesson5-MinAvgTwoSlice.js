//Lesson5-3:找到包含至少两个元素的任何切片的最小平均值
function solution53(A) {
    if (A.length < 3) {
        return 0;
    }
    var arr = [];
    var minAvg = (A[0] + A[1]) / 2;
    var result = 0;

    for (var i = 2; i < A.length; i++) {
        var avg2 = (A[i] + A[i - 1]) / 2;
        var avg3 = (A[i] + A[i - 1] + A[i - 2]) / 3;
        if (avg2 < minAvg) {
            minAvg = avg2;
            result = i - 1;
        }
        if (avg3 < minAvg) {
            minAvg = avg3;
            result = i - 2;
        }
    }

    return result;
}