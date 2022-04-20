const moneyBox2 = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: $${saveCoins}`);
}
moneyBox(5);
moneyBox(10);

//con closure
const moneyBox = () => {
  let saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
};
let myMoneyBox = moneyBox();
//la variable se va sumando, pq la funcion recuerda el valor anterior
myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(25);
