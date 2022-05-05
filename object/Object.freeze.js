const frozenObject = { 
    name: 'Robert'
}

Object.freeze(frozenObject);

frozenObject.name = 'Henry';

// { name: 'Robert' }