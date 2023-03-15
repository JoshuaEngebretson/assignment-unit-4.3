console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable named basket and set it to an empty array.
let basket = []
console.log('Your basket contains:', basket);

// Create a function called addItem. It should:
    // take an input parameter for a string item
    // add the new item to the global array basket.
    // return true indicating the item was added
function addItem(item){
    console.log('--- In addItem function ---');
    // if (!isFull === true) {
    //     return false+': Your basket is full, '+ item+' was NOT added'
    // }
    basket.push(item)
    return true+': '+ item+ ' was added to the basket, your basket now contains: ['+basket+']'
}

console.log(addItem('socks'));
console.log(addItem('t-shirt'));
console.log(addItem(1));
basket_removed=basket.pop();
console.log('Oops, that not an item. Removed', basket_removed, 'from basket.');
console.log('Your basket now contains: ['+basket+']');

// Create a function called listItems. It should:
    // loop over the items in the basket array
    // console.log each individual item on a new line
function listItems(basket){
    console.log('--- In listItems ---');
    for (let i = 0; i < basket.length; i++) {
        let items_in_basket = basket[i]
        console.log(items_in_basket);
    }
    return 'The above items are in your basket'
}

console.log(listItems(basket));

// Create a function called empty. It should:
    // reset the basket to an empty array
function empty(basket){
    console.log('--- In empty function ---');
    basket.length = 0
    return basket
}

console.log('You have emptied your basket of all contents. Your basket is now:', empty(basket));


// Stretch Goals
// Remember that Stretch Goals are not required, but will help you to further develop concepts from the skills we have covered.

// Using functions in other functions!

// Add a global const named maxItems and set it to 5.
const maxItems = 5

// Create a function called isFull(). It should:
    // return false if the basket contains less than max number of items
    // return true otherwise (equal or more than maxItems)

function isFull(basket){
    console.log('--- In isFull function ---');
    console.log('The max items in your basket is', maxItems);
    if (basket.length < maxItems){
        return false
    }
    return true
}

console.log(addItem('jeans'));
console.log(addItem('button-up'));
console.log(addItem('socks'));
console.log(addItem('t-shirt'));

console.log('isFull - Expected false:',isFull(basket), basket);

console.log(addItem('2-piece suit'));
console.log('isFull - Expected true:',isFull(basket), basket);

console.log(addItem('3-piece suit'));
console.log('isFull - Expected true:',isFull(basket), basket);


// Update the required addItem function to:
    // Use the isFull function to prevent more than maxItems from being added to the basket.
    // If an item was added to the array, return true
    // If there was no room and the item could not be added return false

// Using Array built-in functions!
// Create a function called removeItem. It should:
    // Take an input parameter for a string item
    // Use Array.indexOf to find the index of the first matching item in the basket.
    // Use Array.splice to remove the first matching item from the basket.
    // Return the item removed or null if the item was not found
function removeItem(item_to_remove){
    for (let i = 0; i < basket.length; i++) {
        if (basket.indexOf(item_to_remove) === basket[i]){
            basket.splice(i,1)
            return `${item_to_remove} has been removed from the basket`
        }
    }
    return null
}

function find( Searching_array, value_to_find ){
    for (let i=0; i<Searching_array.length; i++) {
      if (value_to_find === Searching_array[i]) {
        console.log(value_to_find, 'is a part of', Searching_array, ' at array.length='+ i);
        return true 
      } 
    }
    console.log(value_to_find, 'is not a part of', Searching_array);
    return false
  }