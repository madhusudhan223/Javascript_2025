


// promises ---> used for handling asynchronous operations


// fullfilled(resolved), rejected, pending --> 3 states



const p = new Promise((resolve, reject) => {

    let x = 4

    if(x > 5){
        resolve("Success")
    }else{
        reject("Failure")
    }

})

p.then((res)=>{
    console.log("then block", res)
    return "My then"
}).then((mes)=>{
    console.log('hello', mes)
})
.catch((res)=>{
    console.log("catch block", res)
}).finally(()=>{
    console.log("finally")
})



// async await

async function ecommerceOrder(){
    try {
      await addtoCart();
      await checkForPaymentSuccess();
      await placeOrder();
    } catch (err) {
        throw new Error("error occure")
    }

}

// synchronous generator 

function* ecommerceOrder(){
    yield addtoCart();
    yield checkForPaymentSuccess();
}

ecommerceOrder()



