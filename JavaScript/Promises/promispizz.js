function getChees() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const cheese = "🎂";
            //console.log("here is the cheese",cheese);
            resolve(cheese);
        },2000)
    })
   
} 
function makeDough(cheese) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const dough = cheese+"🎂";
            //console.log("here is the dough",dough);
           // resolve(dough);
            reject("Bad cheese");
        },2000)
    })
   
}
function bakePizza(dough) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const pizza = dough+"🎂";
          //  console.log("here is the cheese",pizza);
            resolve(pizza);
        },2000)
    })
   
} 

async function OrderPizza() {
    try {
        const cheese = await getChees();
        console.log("here is the cheese",cheese);
        const dough = await makeDough(cheese);
        console.log("here is the dough",dough);
        const pizza = await bakePizza(dough)
        console.log("here is the pizza",pizza);
    } catch (err) {
        console.log("Error Occured",err);
        
    }
    finally {
        console.log("This is finally end");
        
    }  
}

OrderPizza();




// getChees().then((cheese) => {
//     console.log("here is the cheese",cheese);
//    return makeDough(cheese)
// }).then((dough) => {
//     console.log("here is the dough",dough);
// }).then((pizza) =>{
//     console.log("here is the pizza",pizza);
// }).catch((data) =>{
//     console.log("Error accured", data);
    
// }).finally((data) =>{
//     console.log("This is final block");
    
// })


