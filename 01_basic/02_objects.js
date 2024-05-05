// singlton obj   const tinderuser = new Object()

const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "akash"
tinderuser.islogged = true

const reguralusers = {
    email: "hello@gmail.com",
    fullname: {
        userfullname: {
            firstname: "akash",
            lastname: "deep"
        }
    }
}

// // console.log(tinderuser)
// console.log(reguralusers.fullname.userfullname);
// console.log(reguralusers.full ? "true" : "false");

const  obj1 = {a:"1",b:"2",c:"3"};
const obj2 = {d:"1",e:"5",f:"6"};

// const obj3 = Object.assign({} , obj1 , obj2);
const obj3 = {...obj1 , ...obj2}

// console.log(obj3);

const users = [
    {
        id:1,
        name:"akash",
    },
    {
        id:2,
        name:"saloni",
    },
    {
        id:3,
        name:"rahul",
    },
]

users[1].id
// console.log(tinderuser)

// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))

// console.log(tinderuser.hasOwnProperty(`isllogged`))
// console.log(tinderuser.hasOwnProperty(`islogged`))
