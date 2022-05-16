/*
- The DOT# will be inputted into the function: ONLY NUMBERS

*/
const months = ['Octber', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'];

const biennialUpdate = dotNum => {
    const numArr = Array.from(String(dotNum), Number);

    const lastNum = numArr.pop();
    const secondToLastNum = numArr.pop();
    const month = months[lastNum];
    const oddOrEvenYear = (secondToLastNum % 2) ? 'Odd' : 'Even';

    console.log(month);
    console.log(secondToLastNum);
    console.log(oddOrEvenYear);

};


biennialUpdate(324570);
biennialUpdate(324529);
