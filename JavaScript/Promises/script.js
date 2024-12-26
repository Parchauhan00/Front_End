// function getCheee() {
//     setTimeout(() =>{
// const cheese = '🎂'
// return cheese;
//     },2000)
// }

const ticket = new Promise(function (resolve, reject){
    const isBoarded = true;
    if(isBoarded) {
        resolve("You are in the Flight");
    } else{
        reject("Your flight has been cancelled")
    }
})

ticket.then((data) => {
console.log('wohoo', data);

}).catch((data) => {
    console.log('oh No', data);
    
})
.finally(() =>{
    console.log("I will always be exexuted");
    
}
);

