
const userWord = prompt('Inserisci una parola: ');

const isPalindrome = checkPalindrome(userWord);

console.log(isPalindrome);

function checkPalindrome(userWord) {

    
    const len = userWord.length;

    
    for (let i = 0; i < len / 2; i++) {

        
        if (userWord[i] !== userWord[len - 1 - i]) {
            return (userWord + ' non è palindroma') ;
        }
    }
    return (userWord + ' è palindroma');
}