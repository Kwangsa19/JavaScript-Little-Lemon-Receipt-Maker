# JavaScript-Little-Lemon-Receipt-Maker

> This exercise is based on Coursera course "Programming with JavaScript" with Meta. Please enroll to this course [here](https://www.coursera.org/learn/programming-with-javascript).
> For your information, this is the week 5 final task. Please keep in mind, there are some dependencies that have to be installed first. Please visit the link above for further information. 

## Scenario

In this exercise, you will work with some data provided as an array of objects, listing information about dishes available in the Little Lemon restaurant.

You will need to write a function declaration which will be able to do two things:
* If the function is called with the argument true, it will output the names of the dishes and calculate their final price (including 20% tax)
* If the function is called with the argument false, it will output the names of the dishes and give their prices without the additional tax

The expected outcome is that all the dishes' names and prices will be shown in the console output.
The text below shows the output that your code should produce:

Prices with 20% tax:
* Dish: Italian pasta Price (incl.tax): $ 11.46
* Dish: Rice with veggies Price (incl.tax): $ 10.38
* Dish: Chicken with potatoes Price (incl.tax): $ 18.66
* Dish: Vegetarian Pizza Price (incl.tax): $ 7.74

Prices without tax:
* Dish: Italian pasta Price (incl.tax): $ 9.55
* Dish: Rice with veggies Price (incl.tax): $ 8.65
* Dish: Chicken with potatoes Price (incl.tax): $ 15.55
* Dish: Vegetarian Pizza Price (incl.tax): $ 6.45

## Requirements 

This exercise sees us writing **const** and two functions: **getPrices** and **getDiscount**. The function **getPrices** is required to write a function **getDiscount** as the function name of **getPrices** is taxBoolean. 
The values of const remain unchanged. At the end, the function **getDiscount** will produce the outputs. The expected outputs are: 
* With tax and the customers receive $5 discount.
* No tax but the customers receive $10 discount.

## Outputs

* Const: 
```
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
```

* Function getPrices: 
```
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
```

* Function getDiscount():
```
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
```

* Call the functions:

```
// Call getDiscount() functions
getDiscount(true, 2) // True (this is with tax) and there are two guests. This will give $5 discount.
getDiscount(false, 10) // False (this is without tax) and there are ten guests. This will give $10 discount. 
```

![VSCodium_CGpXy5UTyj](https://github.com/Kwangsa19/JavaScript-Little-Lemon-Receipt-Maker/assets/135963482/b33462ab-8a35-4393-a0ca-97cefec261b0)
