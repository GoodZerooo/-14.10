function getPositiveNumbers(arr) {
    return arr.filter(num => num > 0);
}
console.log(getPositiveNumbers([-5, 10, 0, -3, 8]))