/*A function when receive a number will determine if the number is even number 
or note
*/

export const isEvenNumber = (number:number) => {
   return number % 2 === 0 ? true : false;
}

export const verifyEvenNumber = (number: number) => {
    if (isEvenNumber(number)){
        console.log(`${number}:  is an even number`)
        return true
    }
    console.log(`${number}: is not even number`)
    return false
}

verifyEvenNumber(5);