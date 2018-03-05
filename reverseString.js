// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    return str.split('').reverse().join('');


}


module.exports = reverse;


// 2 ways to solve

// function reverse(str) {
//   let reversed = "";
//   for (let charcter of str) {
//     reversed = charcter + reversed;
//   }

//   return reversed;

// }