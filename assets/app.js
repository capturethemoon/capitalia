console.log("Working...");

let depositOptions = [
    {
        name: 'bank',
        amount: 0,
        rating: 1
    },
    {
        name: 'treasury',
        amount: 0,
        rating: 2
    },
    {
        name: 'bond',
        amount: 0,
        rating: 3,
    },
    {
        name: 'mutal',
        amount: 0,
        rating: 4,
    }
];


function checkDeposits(id, deposit) {

    depositOptions.forEach(entry => {
        if (id == entry.name) {
            entry.amount = deposit;
        }
    });

};


// grab user submitted numbers
$("#user-submit").on("click", (event) => {
    event.preventDefault();
    console.log("Button clicked!");

    let treasury = document.getElementById("game-form").elements.item(0).value;

    // let treasury = $("#treasury").val().trim();

    // let treasuryID = $("#treasury").attribute("id").val();

    console.log('This is our treasury deposit', treasury);
    // console.log(treasuryID);




}); 