let carValue = {
    'Name of car': 'rana',
    color: 'red',
    wheel: 4,
    model: 1391,
    'good car': true
};
console.log((carValue.model));
console.log(carValue["Name of car"]);
delete carValue.model;
console.log(carValue.model);
console.log(carValue["Name of car"].length);
carValue.wheel = 8;
console.log(carValue.wheel);
carValue.Motor = 'tu5';
console.log(carValue);