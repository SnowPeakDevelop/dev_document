var arr = [
    [0, 1, 2, 1, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 2, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 3, 3, 6, 7, 8, 9],
    [0, 1, 2, 4, 4, 3, 3, 7, 8, 9],
    [0, 1, 2, 6, 4, 5, 3, 7, 8, 9],
    [0, 1, 2, 7, 4, 3, 3, 3, 8, 9],
    [0, 1, 2, 0, 4, 5, 6, 3, 3, 3],
    [0, 1, 2, 3, 4, 5, 6, 3, 8, 9],
];
var brr = [[-1, 0], [1, 0], [0, -1], [0, 1]];
var chongfu = [];

function main(x, y) {
    if (chongfu.indexOf(x.toString() + y) >= 0) {
        return;
    }
    var str = x.toString() + y;
    chongfu.push(str);
    var value = arr[x][y];
    for (var i = 0; i < 4; i++) {
        var newX = x + brr[i][0];
        var newY = y + brr[i][1];
        if (newX >= arr.length || newX < 0 || newY >= arr[0].length || newY < 0) {
            continue;
        }
        if (arr[newX][newY] == value) {
            if (chongfu.indexOf(newX.toString() + newY) >= 0) {
                continue;
            }
            console.log(newX + "   " + newY);
            main(newX, newY)
        }
    }

}
main(3, 2);