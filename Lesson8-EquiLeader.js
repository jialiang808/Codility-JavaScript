//Lesson8-1:统治者
function solution(A) {
    var counter = {};
    var length = A.length;
    for (var i = 0; i < length; i++) {
        var item = A[i];
        if (counter[item]) {
            counter[item].count++;
        } else {
            counter[item] = { index: i, count: 1 };
        }
    }
    for (var name in counter) {
        if (counter[name].count * 2 > length) {
            return counter[name].index;
        }
    }
    return -1;
}