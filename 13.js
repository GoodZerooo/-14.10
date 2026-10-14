function haveIntersection(arr1, arr2) {
    const set2 = new Set(arr2);
    return arr1.some(item => set2.has(item));
}
console.log(haveIntersection([1, 2, 3], [3, 4, 5])); 
console.log(haveIntersection([1, 2], [3, 4]));