function getUniqueArray(arr) {
    return [...new Set(arr)];
}
console.log(getUniqueArray([1, 2, 2, 3, 4, 4]));