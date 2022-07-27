// //In this challenge, you’ll write a decoder function. The function should take in a string and return a string.

// Start by creating a function called decoder that has a single parameter called code.

// Each code will be a sequence of numbers and letters, always starting with a number and ending with a letter(s).

// Each number tells you how many characters to skip before finding a good letter. After each good letter should come the next next number.

// For example, the string ‘hey’ could be encoded to ‘0h2xce5ngbrdy’. This means ‘skip 0, find the ‘h’, skip 2, find the ‘e’, skip 5, find the ‘y’.

// So, if we passed ‘0h2xce5ngbrdy’ into your function, we should get ‘hey’ as a result.

// FUNCTION USING MATH.FLOOR()

// function decoder (code) {
//     let word = []
//     for (let i = 0; i < code.length; i++) {
//         if(Math.floor(code[i]) >= 0 ) {
//             i = Math.floor(code[i]) + i + 1
//             word.push(code[i])
//         }
//     }
//     return word
// }

// FUNCTION USING PARSEINT()

// function decoder (code) {
//     let word = []
//     for (let i = 0; i < code.length; i++) {
//         if(parseInt(code[i]) >= 0 ) {
//             i = parseInt(code[i]) + i + 1
//             word.push(code[i])
//         }
//     }
//     return word
// }

// FUNCTION USING NUMBER()

function decoder (code) {
    let word = []
    for (let i = 0; i < code.length; i++) {
        if(Number(code[i]) >= 0 ) {
            i = Number(code[i]) + i + 1
            word.push(code[i])
        }
    }
    return word.join("")
}

console.log(decoder("0h2xce5ngbrdy")) // => 'hey'
console.log(decoder("2bna0p1mp2osl0e")) // => 'apple'
console.log(decoder("3vdfn")) // => 'n'
console.log(decoder("0y4akjfe0s")) // => 'yes'
