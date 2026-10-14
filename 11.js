function groupPeopleByAge(people) {
    return people.reduce((acc, person) => {
        const age = person.age;
        if (!acc[age]) {
            acc[age] = [];
        }
        acc[age].push(person);
        return acc;
    }, {});
}
console.log(groupPeopleByAge([
     { name: 'Алексей', age: 20 },
     { name: 'Иван', age: 25 },
     { name: 'Ольга', age: 20 }
 ]));
