function getSecondLargest(arr) {
    const uniqueArr = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueArr.length >= 2 ? uniqueArr[1] : null;
}
console.log(getSecondLargest([10, 5, 10, 2, 8])); 