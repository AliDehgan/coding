const sealedObject = { 
    name: 'Robert'
}

Object.seal(sealedObject);

sealedObject.name = 'Bob';
sealedObject.wearsWatch = true;

// { name: 'Bob' }