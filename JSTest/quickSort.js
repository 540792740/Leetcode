

function quickSort(arr, left, right) {

    // if length 1
    if (arr.length <= 1) return arr;

    // pivot
    let pivot = arr[0];
    let i = 1;
    while (i < arr.length) {
        if (arr[i] < pivot) {
        }
        else {
            [arr[l], arr[r]] = [arr[r], arr[l]];

        }
    }
    let left = quickSort();
    let right = quickSort();


    return arr;

}


console.log(quickSort([5, 2, 6, 2, 7, 1, 8]));