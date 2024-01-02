// Variables for this task are Italian pasta, rice with veggies, chicken with potatoes, and vegetarian pizza.  

// const is immutable. Once assigned, it stays that way.
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]

// const is immutable. Once assigned, it stays that way.
const tax = 1.20;

// Implement getPrices()
// function is a reusable code that executes a certain task. 
// TaxBoolean is required in this task as a value, while the function name is getPrices. 
function getPrices(taxBoolean) {
    
    for (object of dishData){ // every object in the dishData
        let finalPrice;

        if(taxBoolean === true){
            finalPrice = object['price'] * tax;
        } else if (taxBoolean === false){
            finalPrice = object['price'];
        } else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }
        
        console.log(`Dish: ${object['name']} Price: $${finalPrice}`); //print the object, price and its respective final price
    }

}

// Implement getDiscount() function
// Valuesor arguments : taxBoolean, guests
function getDiscount( taxBoolean, guests) {
    getPrices(taxBoolean);

    if(typeof guests === "number" && guests > 0 && guests < 30){ // if it is a number, the value is true, otherwise false. Second, it will check the guests and it is greater than 0 and less than 30. 
        // if all three conditions above are fulfilled, the overall condition will be true and code be executed. If the overall condition is false, the code will be skipped. 
        let discount = 0;

        if(guests < 5){ //check how many guests they have
            discount = 5;
        } else if(guests >= 5){
            discount = 10;
        }
        console.log('Discount is: $' + discount);
    } else { 
            console.log('The second argument must be a number between 0 and 30');
    }
}

// Call getDiscount() functions
getDiscount(true, 2)
getDiscount(false, 10)
