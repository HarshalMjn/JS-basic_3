// In-built Object Math,String,Template literal,Date & Time

// console.log("Hello ji");

// let lastName =  "Mahajan";


// let firstName = new String('Harshal');

// let message = 
// `This  ${lastName},
// my  first  
// Message`;
// console.log(message);

// let words = message. split(' ');

// console.log(words);

// let date = new Date();

// let date2 = new Date('June 20 1998 07:15');

// let date3 = new Date(1998,5,20 ,7);



// console.log(date);

// date3.setFullYear(1947);

// console.log(date3);

//----- --------------------Array----------------------------

// let numbers = [1,3,5,7];

// console.log(numbers);

//end --> push

//beginning --> unshift

//middle --> splice

//searching -->
// console.log(numbers);

// console.log(numbers.indexOf(5));

//we wwant to check if a number exist in an array
// if(numbers.indexOf(3) != -1)
//   console.log("present");

// console.log(numbers.includes(7));

// console.log(numbers.indexOf(4,2));

 //Reference

// let courses = [
//     {no:1, naam:'Harshal'},
//     {no:2, naam:'Rahul'}
// ];
// console.log(courses);

// console.log(courses.indexOf({no:1, naam:'Harshal'}));
// let course = courses.find(function(courses){
//     return courses.naam === 'Harshal';
// }
// );
// console.log(course);

//readable --> Arrrow function
// let course = courses.find(courses => courses.naam === 'Harshal';

// );

//-----Removing The Element------

// let numbers = [1,2,3,4,5,6,7];
// //end
// numbers.pop();
// //beginning
// numbers.shift();
// //middle
// numbers.splice(2,1);

// console.log(numbers);

//----Emptying an Array--

// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;

// numbers = [];
// numbers.length = 0;
// numbers.splice(0,numbers.length);

// console.log(numbers);
// console.log(numbers2);


//-----Combining & Slicing Arrays
// let first = [1,2,3];
// let second = [4,5,6];

// let combined = first.concat(second);
// console.log(combined);


// let marks = [10,20,30,40,50,60,70]
// let sliced = marks.slice()
// // let sliced = marks.slice(2)
// // let sliced = marks.slice(2,6);
// console.log(sliced);

// spread  operator
//  let first = [1,2,3];
//  let second = [4,5,6];

//  let combined = [...first,'a',false,...second];
//  console.log(combined);

//  //copy
//  let another =[...combined];


//  iterating an Array
//  let arr = [10,20,30,40];

//  for(let value of arr) {
//     console.log(value);
//  }

//  arr.forEach(function(number){
//     console.log(number);
//  })

// arr.forEach(number=> console.log(number));

// // joining array

// let numbers = [10,20,30,40,50];
// const joined = numbers.join(',');

// console.log(joined);

// split array

// let message = 'This is first message';
// let parts = message.split(' ');

// console.log(parts);

// let joined = parts.join('_');
//  console.log(joined);

// // sorting array
// let number = [40,10,30,20,50];

//  number.sort();

//  console.log(number);

//  number.reverse();
//  console.log(number);

// filtering array


// let numbers = [1,2,-1,-4];
//  let filtered = numbers.filter(function (value) {
//     return value >=0;
    
//  });
// let filtered = numbers.filter( value =>  value >=0);
    
// console.log(filtered);

// Mapping

// let numbers = [7,8,9,10];


// let items = numbers.map(function(value){
//     return 'student_no' + value;
// // });
//  let items = numbers.map(value=> 'student_no' + value);


// console.log(items);

//Mapping with objects;
let numbers = [1,2,-6,-9];
let filtered = numbers.filter(value => value >= 0);

let items = filtered.map(function(num){
    let obj = {value:num};
    return obj;
})
console.log(items);
 




