const products =[];
const cart = [];
const orders = [];
const customers = [];

const bottle1 = {
    name: "Retro",
    price: 20,
    id: 1,
    available: true,
    picture: "bottle_retro.jpg",
    desc: "Retro Bottle",
    details: {
        color: "white",
        volume_l: 1,
        material: "steel",
        sustainability: "",
        isolation:"24h hot or cold",
    }
};
// console.log(1, bottle1);
products.push(bottle1);
// console.log(2, products);
// addToCart(1);
// console.log(3, cart);
// addToCart(1);
// console.log(4, cart)
//to do. declare bottle 2 to n and push them products list

function addToCart(productID){
    //check if product is alreadyin cart
    cart.forEach(function(product){
        // if it is, icrease quantity by
        if(productID === product.id){
            product.quantity++

        }
    });
    
    //if not:
    
    if(!productInList){
        cart.push({
            id: productID,
            quantity: 1,
        });
    }

}

function isNewcustomer(email){
    let newCustomer = false;
    customers.forEach(function(customer){
        if(email === customer.email){
            return false;
        }
    })
    return true;
}

function createCustomer(customer){
    customers.push({
        id: customers.length+1,
        email: customer.email,
        fname: customer.fname,
        lname: customer.lname,
    }); // to do: add all needed infos.
}

function getCustomerId(email){
    customers.forEach(function(customer){
        if(email === customer.email){
            return customer.id;
        }
    });
}

function getProductInfo(){
    const resultArr = [];
    cart.forEach(function(item){
        const obj = {};
        let productID = item.id;
        let productQuantity =item.quantity;
        products.forEach(function(product){
            if(product.id === productID){
                obj = product;
                obj.quantity = productQuantity;
                obj.productTotal = product.price * productQuantity;

            }
        })
        resultArr.push(obj);
    });
    
    return resultArr; 
}

function calculateTotal(productInfos){
    let total= 0;
    productInfos.forEach(function(product){
        total+= product.productTotal;
        //same as total= total + product.productTotal;
    });
    return total;

}

function createOrder(formData){
    if(isNewcustomer(formData.email)){
        createCustomer(formData);

    }
    let customerID = getCustomerId(formData.email);
    let productInfos = getProductInfo();
    let total = calculateTotal(productInfos);
    let shippingAddress = getShippingAddress(formData)

    const order = {
        id: orders.length + 1,
        datetime: new Date().toISOString(),
        customerID: customerID,
        total: total,
        productInfos: productInfos,
        paymentMethod: formData, paymentMethod,
        shippingAddress: shippingAddress,
        status: "new"
    }
    clearCart();
    formData = null;
    


    //cart info
    //product info: calculating the total
    //form info - 
    //new: orderID,orderDate
    /*
    1.Check if customer already exists inlist customers
    2. if customer exists: cuntomerID to store it later in ther orders (connecting customers with orders)
    3. if customer does not exist: create new customer and get new customerID
    4. get all product information of the products in the cart
    5. calculate total
    6. create ne object in orders with 
        *orderID- number
        *orderDate - string
        *customerID - number
        *total - number
        *productInfos - array of objects
        *paymentMethod - string
        *shippingAddress- object
        *status (new & unpaid, confirmed & paid, preocessed, delivered, returned, canceled)- string
        7. clear out cart and formData
    */
}