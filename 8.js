function getAverageGrade(grades) {
    if (!grades || grades.length === 0) return 0;
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    return sum / grades.length;
}
 console.log(getAverageGrade([4, 5, 3, 4])); 