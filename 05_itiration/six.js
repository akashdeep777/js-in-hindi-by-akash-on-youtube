// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   const userneed = books.filter( (bk) => {return bk.genre === `History` || bk.edition > 2000});

//   console.log(userneed);

// //   books.forEach( (bktwo) => {
// //         if(bktwo.genre === `Science` || bktwo.publish === 1981){
// //             console.log(bktwo);
// //         }
// //   })

// // +++++++++ Map ++++++++++++

// const mYnumber = [1,2,3,4,5,6,7];

// // const newNum = mYnumber.map( (num1) => num1 * 2);

// const newNum = mYnumber.map( (num1) => num1 * 2)
//                        .map( (num1) =>num1 + 1)
//                        .filter((num1) => num1 >= 4);


// console.log(newNum);

// ++++++++++MAP END ++++++++++++

//+++++++++++++ Reduce +++++++++

// const arr = [1,2,3]

// // const sum = arr.reduce(function (acc , curval){
// //   console.log(`acc: ${acc} ; curval ${curval}`);
// //   return acc + curval
// // }, 0)

// // const sum = arr.reduce( (acc , curval) => acc + curval , 0)
// console.log(sum);

const shopping =[
  { itemname : "javascript",
    itemprice : 2999
  },
  { itemname : "java",
    itemprice : 299
  },
  { itemname : "c++",
    itemprice : 29
  },
  { itemname : "python",
    itemprice : 1229
  },
] 

const addPrice = shopping.reduce( (acc , item) => acc + item.itemprice , 0)
console.log(addPrice);
