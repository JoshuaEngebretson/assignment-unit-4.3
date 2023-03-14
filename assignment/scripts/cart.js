console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable named basket and set it to an empty array.
let basket = []
console.log(basket);

// Create a function called addItem. It should:
    // take an input parameter for a string item
    // add the new item to the global array basket.
    // return true indicating the item was added
function addItem(item){
    basket.push(item)
    return true+', '+ item+ ' was added to the basket, your basket now contains: ['+basket+']'
}

console.log(addItem('socks'));
console.log(addItem('t-shirt'));
console.log(addItem(1));
basket_removed=basket.pop();
console.log('removed', basket_removed, 'from basket');
console.log('Your basket now contains: ['+basket+']');

// Create a function called listItems. It should:
    // loop over the items in the basket array
    // console.log each individual item on a new line
function listItems(array){
    for (let i = 0; i < array.length; i++) {
        let items_in_basket = array[i]
        console.log(items_in_basket);
    }
}

console.log(listItems(basket));

// Create a function called empty. It should:
    // reset the basket to an empty array
function empty(array_to_empty){
    
    return basket
}

console.log(empty(basket));