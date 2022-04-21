//el hoisting eleva las declaraciones, por eso si imprime 2, aunq se haya inicialiszado antes de declarar la variable
a = 2
var a
console.log(a)

//da undefined pq el hoisting en declaraciones, no en inicializaciones
console.log(a)
var a = 2

nameOfDog('doggy')
function nameOfDog(name) {
  console.log(name)
}