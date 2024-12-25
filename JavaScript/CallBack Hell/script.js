// console.log("Hello");

// setTimeout(function() {
//     console.log("this will, execute later");

// }, 3000);

// console.log("World");
// console.log("Three");


function getChese(callback) {
    setTimeout(() = > {
        const cheese = "🎂";
        console.log("Here is cheese", cheese);
        callback(cheese)
        
    },2000);
}

getChese();


