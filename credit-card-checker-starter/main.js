// All valid credit card numbers

const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// Add your functions below:
function validateCred(arr) {
    let total =(arr[arr.length - 1]);
    // console.log(total);

    // for loop starting at penultimate index (index - 3 due to length not accounting for starting at 0)
    // then using index - 2 to alternate every other item; Will require two for loops
    for (let index = arr.length - 2; index >= 0; index = index - 2) {
        let subTotal;
        if (arr[index] * 2 <= 9) {
            subTotal = arr[index] * 2;
            total += subTotal;
            // console.log(`Index: ${index}
            // Subtotal: ${subTotal}
            //             Total: ${total}`);
        } else {
            subTotal = arr[index] * 2 - 9;
            total+= subTotal;
            // console.log(`Index: ${index}
            // Subtotal: ${subTotal}
            //             Total: ${total}`);
        }
        }

        // second for loop starting at length - 3 due to inital total being length - 1
        for (let index = arr.length - 3; index >= 0; index = index - 2) {
            total += arr[index];
    //         console.log(`Index: ${index}
    //         new total: ${total}`);
    } 
    // console.log(`Final total: ${total}`);
   
    if (total % 10 === 0) {
        return 'Valid card number';
    } else { 
        return 'Invalid card number';
    }
}

let invalidCards = [];
// valid credit card finder
function findInvalidCards(array) {
 
    // accessing first array by setting array[index] = arr which will let validateCred loop over arr in a second loop
    for (let index = 0; index < array.length; index++) {
        let arr = array[index];

        // second piece of logic needed to test all values in first loop
        // .flat removes the formatting that was preventing validateCred from working
        arr = arr.flat();
        if (validateCred(arr) === 'Invalid card number') {
            invalidCards.push(array[index]);
        }
    }
    return invalidCards;      
}


function idInvalidCardCompanies(arr) {
    let invalidCompanies = []
    for (let index = 0; index < arr.length; index++) {
        let companyID = arr[index][0];
        if (companyID === 3 && (invalidCompanies.indexOf('AMEX') === -1)) {
            invalidCompanies.push('AMEX');
        } else if (companyID === 4 && (invalidCompanies.indexOf('Visa') === -1)) {
            invalidCompanies.push('Visa');
        } else if (companyID === 5 && (invalidCompanies.indexOf('Mastercard') === -1)) {
            invalidCompanies.push('Mastercard');
        } else if (companyID === 6 && (invalidCompanies.indexOf('Discover') === -1)) {
            invalidCompanies.push('Discover');
        } else {
            console.log('Company not found');
        }
    };
    return invalidCompanies;
}

console.log(findInvalidCards(batch));

console.log(idInvalidCardCompanies(invalidCards));

// console.log(validateCred(valid5));

// console.log(validateCred(invalid5))