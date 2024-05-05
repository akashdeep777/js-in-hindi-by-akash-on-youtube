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

