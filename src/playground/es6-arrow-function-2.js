const add = (a, b) => {
    //console.log(arguments)
    return a + b
}

console.log(add(55,1))

const user = {
    name: 'Ilayda',
    cities: ['Istanbul', 'Bcn'],
    printPlacesLived() {
         return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
}
console.log(user.printPlacesLived());

//Challenge 
const multiplier = {
    numbers: [5,2,10,8],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())