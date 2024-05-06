// <---------- this and array ------------>


// const user = {
//     username:"akash",
//     price: 999,

//     Welcomemsg: function () {
//         console.log(`${this.username}`);
//         console.log(this);
//     }
// } 

// user.Welcomemsg()
// user.username = "rahul"
// user.Welcomemsg()

// function two() {
//     let user = "saloni"
//     // console.log(this);
//     // console.log(this.user);     // this not work in function it only work with obj
// }
// const three = () => {
//     let user = "saloni"
//     // console.log(this);
//     console.log(this.user);     // this not work in function it only work with obj
// }

// three()

// const addnum = (num1 , num2) => {
//     return num1 + num2         // <-- implicite return
// }
// const addnum = (num1 , num2) => num1 + num2     
// const addnum = (num1 , num2) => ( num1 + num2 )

// const addnum = (num1 , num2) => ({username : "rahul"})

// console.log(addnum(3 , 3));