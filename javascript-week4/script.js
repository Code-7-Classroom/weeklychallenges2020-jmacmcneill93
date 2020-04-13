var arr = [0, 1, 2, 4, 5, 6, 7];
var target = 5;

function findIndex(arr, target) {
    if (arr.indexOf(target) != -1) {
        return arr.indexOf(target);
    } else {
        return -1;
    }
};

console.log(findIndex(arr, target));