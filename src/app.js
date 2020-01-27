const ITEMS = [
    'Caffè Americano',
    'Cappuccino',
    'Cold Brew',
    'Iced Black Tea',
    'Creame Frappuccino',
    'Matcha Green Tea',
    'Matcha Lemonade',
    'Peppermint Shake',
    'Salted Caramel',
    'Hot Chocolate',
    'Hibiscus Lemonade'
];

const PRICE = [180,200,150,300,180,150,250,300,270,200,150];

// Create a class for MenuItem 

   
    // Write a function to return menu item as a HTML element
    getItem = () =>{

    }


// -----------------------   -----------------------


// Create a class for Menu


    // Write a function to return array of HTML element
    //  for all the menu items.
    displayCatalogue= () =>{

    }
    
    // Write a function to add menu items to cart
    addToCart = (target) => {

    }
    

// -----------------------   -----------------------    

// Create a class for cart


    // Write a function to return an array of HTML elements
    //  for cart
    displayCart = () => {

    }
    
    // Check if particular item is present in cart or not
    checkAvailability = (productId) =>{

    } 
    
    // Increment the quantity of item in cart
    handleIncrementClick = (target) => {

    }
    
    // Decrement the quantity of item in cart
    handleDecrementClick = (target) => {

    }
    
    // Remove item from cart
    handleRemoveClick = (target) => {

    }
    
    // Remove items that are not present in cart from cart fragment
    refreshCart = (productId) => {

    }
    
    // Remove item from cart
    deleteItem = (productId) => {

    }
    
    // Update HTML element for every 
    // cartItem Increment/decrement
    update = (item) => {

    }
    
    // Calculate total amount to be paid
    calculateTotal = () => {

    }


// -----------------------   -----------------------


// Create a class for cart item

     
    // Increment quantity and total of a cart item
    incrementItem = () => {

    }
 
    // Decrement quantity and total of a cart item
    decrementItem = () => {

    }
 
    // Create HTML elements for each item in cart
    displayItem = () => {

    }

    
// -----------------------   -----------------------


// Create a class Miscellaneous
class Miscellaneous{

    // Include all the basic functionalities
    init = () => {
        document.getElementById('cart-container').style.display = 'none';
        let menu = new Menu(ITEMS,PRICE);
        let menuItems = menu.displayCatalogue();
        let itemsContainer = document.getElementById('items-container');
        let cartSummary = document.getElementById('cart-summary');
        itemsContainer.append(...menuItems);
        feather.replace();
    
        document.getElementById('order-now').onclick = () =>{
            window.location.href = '#category-heading';
        }
    
        document.getElementById('cart-btn').onclick = () => {
            document.getElementById('menu-container').style.display = 'none';
            document.getElementById('category-heading').style.display = 'none';
            itemsContainer.style.display = 'none';
            document.getElementById('cart-container').style.display = 'block';
            cartSummary.innerHTML = '';
            let fragment = menu.cart.displayCart();
            cartSummary.append(...fragment);
            feather.replace();
        }
    
        document.getElementById('view-menu').onclick = () => {
            document.getElementById('cart-container').style.display = 'none';
            itemsContainer.style.display = 'grid';
            document.getElementById('menu-container').style.display = 'grid';
            document.getElementById('category-heading').
            style.display = 'block';
        }
    }
}

// Uncomment the following code after passing all the test cases to
//  run the application.
window.onload = () =>{
    // let miscellaneous = new Miscellaneous();
    // miscellaneous.init();
}