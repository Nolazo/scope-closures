//hay que tener cuidado con usar estos closures, para ver ejempolo cambiar let por var
const anotherFunction = () => {
  for(let i = 0; i < 10; i++){
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};
anotherFunction();