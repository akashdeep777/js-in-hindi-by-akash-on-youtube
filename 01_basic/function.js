// function addTwonumbers(num1,num2) {
//     if (typeof num1 == `number` && typeof num2 == `number`) {
//         console.log(num1 + num2)
//     }else{
//         console.log(false)
//     }
// }

// const reslut = addTwonumbers(4 , 4)

// console.log(reslut);
// addTwonumbers(4 , 4)
// addTwonumbers(4 , null)
// addTwonumbers(4 , undefined)

function addnumber(a , b) {
    let reslut = a + b
    return reslut
}

// const reslut = addnumber(3 , 3)
// console.log(`return ${reslut}`);

function loginuser(username) {
    if (!username) {
        console.log("please enter username first")
    }else{
        return `${username} just logged in`
    }
}

// console.log(loginuser("akash"));
// console.log(loginuser());

function calculatecartPrice(...num1){
return num1
}
// console.log(calculatecartPrice(200 , 600 , 500));

const user ={
    username:"akash",
    price:999,
}

function handleObject(anyobjects){
    console.log(`username is ${user.username} and price of course is ${user.price}`);
}

// handleObject(user)
// handleObject({
    // username:"akash",
    // price:999,
// })

const myArr = [200 , 300 , 400]

function returnnewarr(getArr) {
    return getArr;
}

console.log(returnnewarr(myArr));
console.log(returnnewarr([200 , 300 , 400]));




