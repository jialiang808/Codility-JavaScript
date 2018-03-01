//Lesson1-1:查找整数的二进制表示中最长的零序列。
function solution11(N) {
    var str = N.toString(2);
    var result = 0;
    var length = str.length;
    var count = 0;
    for (var i = 1; i < length; i++) {
        if (str.charAt(i) === '0') {
            count++;
        } else {
            result = Math.max(count, result);
            count = 0;
        }
    }
    return result;
}