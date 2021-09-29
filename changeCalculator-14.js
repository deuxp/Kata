// Create a function named calculateChange that 
// (1) takes in a (a) total amount of a bill and the (b) total cash given to pay that bill. 
// (2) Return a new OBJECT that describes the total amount of change for the cashier to give back. 
// (3) Omit any types of change that you shouldn't give back, 
//      i.e. if you don't give back a twenty dollar bill, don't include it in the results.
//            $10 will be represented as 1000.

// We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents.  

// Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

// Valid denominations are as follows:

// Twenty dollars
// Ten dollars
// Five dollars
// Two dollars
// One dollar
// Quarter (25¢)
// Dime (10¢)
// Nickel (5¢)
// Penny (1¢)


const calculateChange = function (total, cash) {
  let o = new Object();
  let change = cash - total;

  while (change > 0) {

    // twentyDollar
    if (change > 2000) {
      o.twentyDollar = Math.floor(change / 2000); // how many whole bills fit
      change %= 2000; //update change amt

      // tenDollar
    } else if (change < 2000 && change > 1000) {
      o.tenDollar = Math.floor(change / 1000);
      change %= 1000;

      // fiveDollar
    } else if (change < 1000 && change > 500) {
      o.fiveDollar = Math.floor(change / 500);
      change %= 500;

      // twoDollar
    } else if (change < 500 && change > 200) {
      o.twoDollar = Math.floor(change / 200);
      change %= 200;

      // oneDollar
    } else if (change < 200 && change > 100) {
      o.oneDollar = Math.floor(change / 100);
      change %= 100;

      // quarter
    } else if (change < 100 && change > 25) {
      o.quarter = Math.floor(change / 25);
      change %= 25;

      // dime
    } else if (change < 25 && change > 10) {
      o.dime = Math.floor(change / 10);
      change %= 10;

      // nickel
    } else if (change < 10 && change > 5) {
      o.nickel = Math.floor(change / 5);
      change %= 5;

      // penny
    } else if (change < 5 && change > 1) {
      o.penny = Math.floor(change / 1);
      change %= 1;
    }


  }
  return o

};

console.log(calculateChange(1787, 2000)); // { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); // { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000)); // { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }


// try as a switch statement later

// 78 minutes