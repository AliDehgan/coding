let Me = {
    Name: 'ali',
    age: 27,
    hobbies: ['eat', 'sleep', 'code', 'movie'],
    ageCheck: function(age) {
        return ++age;
    },
    eating: {
        coffee: true,
        cake: true,
        tea: true,
        water: false
    }
}
console.log(Me.ageCheck(25));
console.log(Me.hobbies[2]);