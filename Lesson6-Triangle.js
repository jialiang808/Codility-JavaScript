//Lesson6-2:最大化任何三元组（P，Q，R）的A [P] * A [Q] * A [R]
function solution62(A) {
    var n = A.length;
    if (n == 3) {
        return A[0] * A[1] * A[2];
    }

    for (var m = 0; m < 3; m++) {
        var max = A[m];
        var maxIndex = m;
        for (var i = m; i < n; i++) {
            if (A[i] > max) {
                max = A[i];
                maxIndex = i;
            }
        }
        var temp = A[m];
        A[m] = A[maxIndex];
        A[maxIndex] = temp;
    }

    if (n > 4) {
        for (var m = 3; m < 5; m++) {
            var min = A[m];
            var minIndex = m;
            for (var i = m; i < n; i++) {
                if (A[i] < min) {
                    min = A[i];
                    minIndex = i;
                }
            }
            var temp = A[m];
            A[m] = A[minIndex];
            A[minIndex] = temp;
        }
        temp = A[3];
        A[3] = A[4];
        A[4] = temp;
    }
    var result = 0;
    if (n == 4) {
        result = Math.max(A[0] * A[1] * A[2], A[0] * A[2] * A[3]);
    } else {
        result = Math.max(A[0] * A[1] * A[2], A[0] * A[3] * A[4]);
    }

    return result;
}