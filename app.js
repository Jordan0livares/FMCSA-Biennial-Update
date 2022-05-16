/*
- The DOT# will be inputted into the function: ONLY NUMBERS

*/
const months = ['Octber', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'];

const biennialUpdate = dotNum => {

    if(typeof dotNum !== 'number') return 'Numbers only.';

    const numArr = Array.from(String(dotNum), Number);
    if(numArr.length >= 9 || numArr.length <= 1) return 'Invalid Number';

    const lastNum = numArr.pop();
    const secondToLastNum = numArr.pop();
    const month = months[lastNum];
    const oddOrEvenYear = (secondToLastNum % 2) ? 'Odd' : 'Even';

    const message = `Your biennial update is due on ${month} every ${oddOrEvenYear} years.`;


    return message;

};


console.log(biennialUpdate(324510));
console.log(biennialUpdate(324529));
console.log(biennialUpdate('Not a Number!'));
console.log(biennialUpdate(98764556876567876));
console.log(biennialUpdate(000000));
