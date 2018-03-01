//Lesson7-1:确定给定的括号是否正确嵌套。
function solution71(S) {
    if (!S) {
        return 1;
    }
    var pair = { '}': '{', ')': '(', '}': '{' };
    var arr = [];
    for (var i = 0; i < S.length; i++) {
        var item = S.charAt(i);
        if (!pair[item]) {
            arr.push(item);
        } else if (arr.length > 0 && arr[arr.length - 1] === pair[item]) {
            arr.pop();
        } else {
            return 0;
        }
    }

    return arr.length == 0 ? 1 : 0;
}