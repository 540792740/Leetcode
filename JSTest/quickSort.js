

function quickSort(arr, left, right) {
    let i = left
    let j = right
    if (left <= right) {
        let pivot = arr[i]
        while (i < j) {
            while (i < j && arr[j] >= pivot) j -= 1

            arr[i] = arr[j]
            while (i < j && arr[i] <= pivot) i += 1
            arr[j] = arr[i]
        }
        arr[i] = pivot
        quickSort(arr, left, i - 1)
        quickSort(arr, i + 1, right)
    }
    return arr;
}

let array = [2, 4, 2, 14, 77, 24, 2, 14]
console.log(quickSort(array, 0, array.length - 1));

array = [5, 2, 6, 2, 7, 1, 8]
console.log(quickSort(array, 0, array.length - 1));