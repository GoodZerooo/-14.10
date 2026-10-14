function getSumAndAverage(arr) {
    if (arr.length === 0) return { sum: 0, average: 0 };
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const average = sum / arr.length;
    return { sum, average };
}
console.log(getSumAndAverage([2, 4, 6])); 