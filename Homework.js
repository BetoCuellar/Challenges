
function esParOImparRegular(num) {
  if (num % 2 === 0) {
      console.log(`${num} es par`);
  } else {
      console.log(`${num} es impar`);
  }
}

esParOImparRegular(4);
esParOImparRegular(7); 

const esParOImparFlecha = (num) => {
  if (num % 2 === 0) {
      console.log(`${num} es par`);
  } else {
      console.log(`${num} es impar`);
  }
}

esParOImparFlecha(4);
esParOImparFlecha(7); 
