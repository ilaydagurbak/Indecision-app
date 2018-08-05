var nameVar = 'Ilayda';
var nameVar = 'mike';
console.log('nameVar', nameVar);

var nameLet = 'Ilayda';
nameLet = 'mike';
console.log('nameVar', nameLet);

const nameConst = 'Ilayda';
console.log('nameVar', nameConst);

//Block scoping

const fullName = 'Ilayda Gurbak';
let firstName;

if(fullName) {
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);