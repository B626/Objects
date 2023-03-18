const Bohdan = {
   name: 'Bohdan',
   age: 15,
   height: 1.98,
   place: 'Kyiv'
}

for (let key in Bohdan) {
   console.log("key: " + key + '; value: ' + Bohdan[key])
}

const BohdanCopy = JSON.stringify(Bohdan)

console.log(BohdanCopy)

const BohdanCopy2 = JSON.parse(BohdanCopy)

console.log(BohdanCopy2)

const newBohdan = Object.assign({}, Bohdan)

newBohdan.isFrontend = true;

console.log(Bohdan)

console.log(newBohdan)

let Contacts = new Map()

Contacts.set('Friend1', 'Vova')
Contacts.set('Friend2', 'Artem')
Contacts.set('Friend3', 'Dima')

for (let [key, value] of Contacts) {
   console.log('my' + key + ' is: ' + value)
}