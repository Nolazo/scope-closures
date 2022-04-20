const fruits = () => {
  if(true){
    let fruit1 = 'apple';
    let fruit2 = 'banana';
    let fruit3 = 'orange';
    console.log(fruit1);
  }
  //no se imprimira pq la variable esta en el bloque de arriba, si fuera var si imprimira
  console.log(fruit2);
}
fruits();
//=============================================================

//si cambio let por var, lo que pasara es q imprimira 2 veces el 2
let x = 1;
{
  let x = 2;
  console.log(x);
}
console.log(x);
//=============================================================

//si cambio el let por le var, imprimiria 10 veces 10, puesto q toma el ultimo valor asignado
const anotherFunction = () => {
  for(let i = 0; i < 10; i++){
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};
anotherFunction();