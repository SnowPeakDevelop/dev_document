
// 冒泡排序
function sort() {
    var arr_maopao = [1, 3, 2, 5, 9, 10, 6, 17, 11, 18, 19, 15, 20, 16];
    for (var i = 0; i < arr_maopao.length; i++) {
        var flag = false;
        for (var j = i; j < arr_maopao.length - i; j++) {
            if (arr_maopao[j] > arr_maopao[j + 1]) {
                var team = arr_maopao[j + 1];
                arr_maopao[j + 1] = arr_maopao[j];
                arr_maopao[j] = team;
                flag = true;
            }
        }
        if (!flag) {
            break;
        }
    }
    console.log("数组\n" + arr_maopao);
}
sort();
// 快速排序
var arr_quick = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];
function quick_Sort(left, right) {
    if (left > right) {
        return;
    }
    var i, j, t, temp;
    temp = arr_quick[left];
    i = left;
    j = right;
    while (i != j) {
        while (arr_quick[j] >= temp && i < j) {
            j--;
        }
        while (arr_quick[i] <= temp && i < j) {
            i++;
        }
        if (i < j) {
            t = arr_quick[i];
            arr_quick[i] = arr_quick[j];
            arr_quick[j] = t;
        }
    }
    arr_quick[left] = arr_quick[i];
    arr_quick[i] = temp;
    quick_Sort(left, i - 1);
    quick_Sort(i + 1, right);
}
quick_Sort(0, arr_quick.length - 1);
console.log("数组aa\n"+arr_quick);

// 选择排序
function selecrSort() {
    var arr_select = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];
    for (let i = 0; i < arr_select.length; i++) {
        var min = i;
        for (let j = i; j < arr_select.length; j++) {
            if (arr_select[min] > arr_select[j]) {
                min = j;
            }
        }
        if (min != i) {
            var team = arr_select[i];
            arr_select[i] = arr_select[min];
            arr_select[min] = team;
        }
        console.log("数组bb\n"+arr_select);
    }
}
selecrSort();
// 字串压缩 aaabbbcaaa => a3b3c1a3 aaab ccda bbb
function strZip(str) {
    var index = 0;
    var newStr = "";
    var str2 = ""
    var str1 = str.split(" ");
    for (var j = 0; j < str1.length; j++) {
        str2 += str1[j];
    }
    for (var i = 0; i < str2.length; i++) {
        index++;
        if (str2[i] != str2[i + 1]) {
            newStr += str2[i] + index;
            index = 0;
        }
    }
    console.log("返回的字串" + newStr);
}
strZip("aaabbbcaaa");

// 利用数组中的筛选函数获取质数
// 创建数组
var oriArray = [];
for (var i = 1; i <= 100; i++) {
    oriArray.push(i);
}
/**
 * 筛选质数
 * element 数组中的每个元素值
 * index  元素值所对应的相应下标
 * self 数组本身
 * @type {Array.<*>}
 */
var newArray = oriArray.filter(function(element, index, self) {
    var flag = true;
    for (var j = 2; j < element; j++) {
        if (element % j == 0) {
            flag = false;
        }
    }
    if (element < 2) {
        flag = false;
    }
    return flag;
});
console.log(newArray);

// 给钱问题
// 小明手中有539， 组成为5个100， 1个20， 1个10， 1个5， 1个2，2个1。 在商城买了书，价格为436
// 问小明怎么才能充分利用自己手中的钱给收银员。
var amount = [1, 2, 5, 10, 20, 50, 100];
var count = [2, 1, 0, 0, 1, 0, 5];
var price = 436;
var result = [];
for (var i = 0; i < 7; i++) {
    result.push(0);
}
function shouldGive(price, count, amount) {
    var old = Date.now()
    if (price == 0) {
        console.log(result);
    }
    var index = amount.length - 1;
    while (true) {
        if (index <= -1 || price <= 0) {
            if (price > 0) {
                // 没有合适的钱，只能去前面借位，让收银员找钱
                zheng(price);
            } else {
                console.log(result);
            }
            break;
        }
        var needCount = Math.floor(price / amount[index]);
        needCount = count[index] >= needCount ? needCount : 0;
        if (count[index] >= needCount) {
            price -= needCount * amount[index];
            count[index] = count[index] - needCount;
        }
        result[index] = needCount;
        index--;
    }
    // 正序查找， 找到可以借位的元素+1， 后续结果变为0
    function zheng(price) {
        for (var i = 0; i < result.length; i++) {
            if (result[i] <= 0) {
                continue;
            }
            for (var m = i; m < count.length; m++) {
                if (count[m] <= 0) {
                    continue;
                }
                if (price > amount[m]) {
                    continue;
                }
                result[m] = result[m] + 1;
                count[m] -= 1;
                for (var j = 0; j < m; j++) {
                    result[j] = 0;
                }
                console.log(result);
                console.log(Date.now() - old);
                return;
            }
        }
    }
}
shouldGive(price, count, amount, result);
