// singleton
//  Object.create
// objects literals

const sym = Symbol("key1")

const jsuser = {
    name:"akash",
    "fullname":"akashdeep",
    id:"hello",
    email:"hello@gmail.com",
    [sym]:"mykey1",
    islogged:false,
    lastlogin:["monday","sunday"],
}

// console.log(jsuser["email"])
// console.log(jsuser.fullname)
// console.log(jsuser[sym])

// jsuser.email = "hi@gmail.com"
// Object.freeze(jsuser)

// console.log(jsuser[sym])
// console.log(typeof jsuser[sym])


jsuser.greeting = function(){
    console.log(`hello js ${this.name}`)
}

console.log(jsuser.greeting())