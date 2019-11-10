console.log("Working...");


// this is our array of types of deposits users can make
// When they invest money, it gets added to object

// Then we run our end results dependant on riskfactors
// Risk factors increase after a round by X amount
// Can just create a function to increase riskFactor and run each time

let depositOptions = [
    {
        name: 'Savings Account',
        amount: 0,
        riskFactor: 1
    },
    {
        name: 'Treasury',
        amount: 0,
        riskFactor: 2
    },
    {
        name: 'Bonds',
        amount: 0,
        riskFactor: 4,
    },
    {
        name: 'Mutal Funds',
        amount: 0,
        riskFactor: 6,
    },
    {
        name: 'Cyptocurrency',
        amount: 0,
        riskFactor: 9
    }
];

// if 9 is the highest, and it increase by 1 point each time, then 13 is the highest number

// Each time we have a round result we set the user's bank to the remainder amount
// Each round we get a new amount they either add or subject from their "bank"

let userBank = 0;

let userAccount = {
    round1: 0,
    round2: 0,
    round3: 0,
    round4: 0
};


function increaseRisk() {
    depositOptions.forEach(entry => {
        entry.riskFactor += 1;
    });
    console.log("New riskFactor" + entry + ':', entry.riskFactor);
};


// at the end of a submit, run this function to see result of all investments
function determineResult() {

    var currentTotal = 0;

    // loop through each investment object and run a math random
    // Add or subtract from currentTotal then add final to userAccount Round with a for loop
    depositOptions.forEach(entry => {

        let currentDeposit = entry.amount;
        let currentRisk = entry.riskFactor;


        // each time we run this, they get a random number back, between 0 and the value invested
        let currentResult = Math.random(currentDeposit);
        console.log("Our current random investment result", currentResult);

        // But we don't want it to be too random?
        // Will either get a negative or positive amount back, random between investment
        // Something like if risk factor is 0-3, 

        // Lowest, you make money
        // Middle nothing happens
        //Highest, you loose money


        //if risk is 3 or less than, add a positive amount
        if (currentRisk <= 5) {
            // we add our investment amount plus our current random amount
            currentTotal = entry.amount + currentResult;
        } else if (currentResult == 6 < 9) {
            // we set our current total to be whatever the random number is and not add it to invested amount
            currentTotal = currentResult;

        } else if (currentResult >= 9) {
            currentTotal = entry.amount - currentResult;
        };

        // add final total to each round

        for (let i = 0; i < userAccount.length; i++) {
            [i] = currentTotal;
        };

        addRounds();

    });

};

function addRounds() {

    const add = (a, b) =>
        parseInt(a) + parseInt(b);

    const sum = userAccount.reduce(add);
    console.log(sum);

    userBank = sum;

};


// grab user submitted numbers
$("#user-submit").on("click", (event) => {
    event.preventDefault();
    console.log("Button clicked!");

    //loop through and update all amounts in the array, then call results function
    let treasury = document.getElementById("game-form").elements.item(0).value;

    // set the amounts here, then run a function that gives a result
    // using math random along with riskFactor


    console.log('This is our treasury deposit', treasury);
    // console.log(treasuryID);




}); 