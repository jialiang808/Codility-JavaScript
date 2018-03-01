//Lesson6-3:定是否可以从给定的一组边缘构建三角形
function solution63(A) {
    A = A.sort(function(a, b) {
        return a - b;
    });
    var length = A.length;
    for (var i = 2; i < length; i++) {
        if (A[i - 1] + A[i - 2] > A[i]) {
            return 1;
        }
    }

    return 0;
}