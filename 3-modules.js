//CommonJS,every file is module (by defalult)
// Modules-Encapsulated Code(only share minumium)

const names=require('./4-names')
const sayHi=require('./5-utils')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

