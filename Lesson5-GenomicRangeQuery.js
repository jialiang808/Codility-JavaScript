//Lesson5-4:从序列DNA的范围找到最小的核苷酸
function solution54(S, P, Q) {
    var result = [];
    var m = P.length;
    for (var i = 0; i < m; i++) {
        var s1 = S.substr(P[i], Q[i] - P[i] + 1);
        if (s1.indexOf('A') > -1) {
            result.push(1);
        } else if (s1.indexOf('C') > -1) {
            result.push(2);
        } else if (s1.indexOf('G') > -1) {
            result.push(3);
        } else {
            result.push(4);
        }
    }
    return result;
}