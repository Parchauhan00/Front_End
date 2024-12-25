

const a = 12;
const b = 15;

sum(a,b)

function sum(a,b) {
    const sum = a+b;
    console.log("sum is: ",sum)
}




function addSqure(a,b) {
    const x = square(a);
    const y = square(b);

    function squre(num) {
        return num*num;

    }
    return x+y;
}


const no = addSqure(10,12)
console.log(no)



