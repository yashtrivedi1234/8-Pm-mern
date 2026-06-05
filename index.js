// 1. let 2. var 3. const
// let

// let name = "abc"
// console.log(name)

// let age = 12
// console.log(age)
// age = 13
// console.log(age)

// {
//     let nameOfPerson = "XYZ"
//     console.log(nameOfPerson)

// }

// {
//   let nameOfPerson = "XYZ";
// }

// console.log(nameOfPerson);

// const number = 232323;
// console.log(number)

// {
//   const number = 232323;
//   console.log(number);
// }

// {
//   const number = 232323;
// }
// console.log(number);

// var age = 21
// console.log(age)
// var age = 30
// console.log(age)

// let name = "OP"
// console.log(name);
// let name = "OP"
// console.log(name);

// Data Types

// example 1 number
// let num = 12;
// console.log(num);
// console.log(typeof num);

// example 2 bollean
// let condition = true;
// console.log(condition);
// console.log(typeof condition);

// example string
// let name = "xyz";
// console.log(name);
// console.log(typeof name);

// let results = null
// console.log(results);

// let arr = [1,2,3,4]
// console.log(arr)
// console.log(typeof(arr))

// let obj = { name: "xyz", class: 12 };
// console.log(obj);
// console.log(typeof obj);
// console.log(obj.name);

// arithm operators
// let a = 5
// let b = 5
// console.log(a-b);
// console.log(a+b);
// console.log(a*b);
// console.log(a**b); //exponent mtlb power
// console.log(a/b);
// // console.log(a+b);

// comp operator
// let a = 5
// let b = 5
// console.log(a ==b); //lose equlaity oper
// console.log(a ===b); // strict equlaity oper

// console.log(a!=b);
// console.log(a!==b);

// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);

// logical operator
// let age = 20
// let drivinglicense = true

// console.log(age>=1 && drivinglicense);

// let isAdmin = false
// let user = false
// console.log(isAdmin || user);

// let userLoggedIn = false
// console.log(!userLoggedIn);

// let userName = "admin"
// let password = "1234"
//  if (userName === "admin" && password ==="1234") {
//     console.log("User LoggedIn Sucessfully");
//  }
//  else{
//     console.log("Invalid crede");
//  }

// functions
// type 1 nommal function // function declaration
// function greet() {
//   console.log("Hii");
// }
// greet();

// function with params
// function greet(){
//     console.log("Hii" + name);
// }
// greet("XYZ")

// default params
// function greet(name = "Shivam") {
//   console.log("Hii" + name);
// }
// greet();
// greet("Rahul");

// function exprssion
// const mutiply = function (a, b) {
//   return a * b;
// };
// console.log(mutiply(2, 2));

// arrow function
// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(5, 5));

// interview question
// function test() {
//   return "HII";
// }
// console.log(test());

// array

// 1. array
// 2. object
// strings
// error handling
// loops
// statement

// let phones = ["iPhone", "Samsung", "Motorola", "Vivo", "Redmi"];
// console.log(phones);

// element access
// console.log(phones[2]);

// array ki length
// console.log(phones.length);

// add elements
// phones.push("Oppo") //end mai add
// console.log(phones);
// phones.unshift("Apple") // start mai add
// console.log(phones);

// remove elem
// phones.pop() //last wla remove hota hain
// console.log(phones);
// phones.shift()
// console.log(phones);

// loops in a araay
// for (let i = 0; i < phones.length; i++) {
//   console.log(phones[i]);
// }

// let obj = { name: "OP", age: 2 };
// console.log(obj);

// // access element in a object
// console.log(obj.age)

// let studentData = {
//     name: "Vivek",
//     age: 22,
//     university : "AKTU"
// }
// // add key and value (data)
// studentData.skill = "NEXTJS"
// console.log(studentData);
// // update
// // studentData.skill = "NESTJS"
// // console.log(studentData);

// // delete
// delete studentData.skill
// console.log(studentData);

// 1. var
// var a = 1.33
// console.log(a);

// let arr = ["Yash", "Shalu", "Vivek", "raghav"]
// console.log(arr[1]);

// {
//   let num = 12;
//   console.log(num);

//   console.log(typeof num);
// }

// cons
// var age = 12
// console.log(age);
// var age = 30
// console.log(age);

// let age ;
// console.log(number); //
// console.log(typeof number); //

// let age  = null;
// console.log(age); //
// console.log(typeof(age)); //

// let arr = [1,2,3,4]
// console.log(arr);
// console.log(typeof(arr));

// let obj = {
//   name: "Mango",
//   age: 12
// }
// console.log(obj);
// console.log(typeof(obj));
// console.log(obj.age); //dot notation
// console.log(obj["age"]);

// let arr = [1, 2, 3];
// [1,2,3,4]
// arr.push(4); // add at the end
// arr.unshift(0); // add at the start
// arr.pop()
// arr.shift()

// console.log(arr);



// let arr2 = [4,5,6]
// // [1,2,3,4,5,6]

// let total = arr.concat(arr2)

// let sum = arr + arr2
// console.log(sum);



// let a = 10
// let b = "5"
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a**b);


// let firstLetter = "R"
// let lastLetter = "A"
// let Letter = firstLetter.concat(lastLetter)
// console.log(Letter);
// let op = firstLetter + lastLetter //return string
// console.log(op);


// let arr3 = [1,2]
// let arr4 = ["RAMA"]
// let arr5 = [true]
// console.log(arr3.concat(arr4)); //return arr
// console.log(arr3 + arr4 )  //return string

// // function expession
// function greet(){
//   console.log("Hii everyone");
// }
// greet()

// // arrow function
// let mutiply = (a,b) =>{
//   return a*b
// }
// console.log(mutiply(2,2))



// let student = ["Ajay"]
// const address = ["Monika"]
// console.log(address.concat(student));
// console.log(student.concat(address));

// NaN not an number 
// falsy 0 truthy 1
let number = []
let age = {}
let results = number + age
console.log(results);
console.log(typeof(results));

// console.log(number - age); //
// console.log(number + age); //12Four
