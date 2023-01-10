// chiediamo all'utente di scegliere tra pari o dispari e un numero da 1 a 5

const evenOddChoice = prompt('Scegli tra pari o dispari:');
console.log ('Il giocatore sceglie: ' + evenOddChoice)

const userNumber = parseInt(prompt('Scegli un numero da 1 a 5:'));


// generiamo un numero random per il pc da 1 a 5
const computerNumber = generateRandomNumber(1, 5);


function generateRandomNumber(min,max) {

    const randomNumber = Math.floor(Math.random() * (max - min + 1)+ min );

    return randomNumber;
}



// sommiamo i numeri scelti
const numbersSum = userNumber + computerNumber;

console.log("Il numero del pc è: " + computerNumber);
console.log("Il numero dell'utente è: " + userNumber);
console.log("La loro somma è: " + numbersSum);









// controlliamo se la somma è pari o dipari 
function checkNumberIsEven(numbersSum) {

    if (numbersSum % 2 === 0) {


      return true;
    }
  }

// dichiariamo chi vince
if (checkNumberIsEven(numbersSum )) {

    alert("Vince Pari");
    
}


else {

    alert("Vince Dispari");
   
}
  