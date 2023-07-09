// let user = {
//     // property
//     firstName:'Mostafa',
//     lastName:'Shawky',
//     email:'mostafashawky100000@gmail.com',
//     age:26,
//     skills:['html','css','js','php','mysql'],
//     active:false,
//     phoneNumber:{
//         first:'0106547687',
//         second:'0126574687',
//     },
//     address:{
//         Egypt:'Cairo',
//         Uae:'Dubai',
//     },
//     // method
//     isActive:function(){
//         if(user.active === true){
//             return 'you are active';
//         }
//         else{
//             return 'you are not active';
//         }
//     },
//     getAge:function(){
//         if(user.age >= 18)
//         {
//             return 'available';
//         }
//         else{
//             return 'not available'';
//         }
//     },
// };
// console.log(user.isActive())
// console.log(user['getAge']())

//create object use create method
// let user = Object.create(null);
// user.firstName = 'Mostafa';
// user.lastName = 'Shawky';
// user.age = 26;
// user.skills = ['html','css','js','php','mysql'];
// user.active = false;
// user.phoneNumber = {
//     first:'0106547687',
//     second:'0126574687',
// };
// user.address = {
//     Egypt:'Cairo',
//     Uae:'Dubai',
// };
// console.log(user);

//use this in Method,function,function in strict mode,arrow function,Event and print what this refer to in each case
// let user = {
//     firstName:'Mostafa',
//     lastName:'Shawky',
//     fullName:function(){
//         return `${this.firstName} ${this.lastName}`;
//     },
//     skills:['html','css','js','php','mysql'],
//     active:false,
//     phoneNumber:{
//         first:'0106547687',
//         second:'0126574687',
//     },
//     address:{
//         Egypt:'Cairo',
//         Uae:'Dubai',
//     },
//     isActive:function(){
//         if(this.active === true){
//             return 'you are active';
//         }
//         else{
//             return 'you are not active';
//         }
//     },
//     getAge:function(){
//         if(this.age >= 18)
//         {
//             return 'available';
//         }
//         else{
//             return 'not available';
//         }
//     },
// };
// console.log(user.fullName());
// console.log(user.isActive());
// console.log(user.getAge());

//create object use Object.create() method
// let user = Object.create(null);
// user.firstName = 'Mostafa';
// user.lastName = 'Shawky';
// user.age = 26;
// user.skills = ['html','css','js','php','mysql'];
// user.active = false;
// user.phoneNumber = {
//     first:'0106547687',
//     second:'0126574687',
// };
// user.address = {
//     Egypt:'Cairo',
//     Uae:'Dubai',
// };
// console.log(user);

//exapmle of Object.assign() method
// let user = {
//     firstName:'Mostafa',
//     lastName:'Shawky',
//     fullName:function(){
//         return `${this.firstName} ${this.lastName}`;
//     },
//     skills:['html','css','js','php','mysql'],
//     active:false,
//     phoneNumber:{
//         first:'0106547687',
//         second:'0126574687',
//     },
//     address:{
//         Egypt:'Cairo',
//         Uae:'Dubai',
//     },
//     isActive:function(){
//         if(this.active === true){
//             return 'you are active';
//         }
//         else{
//             return 'you are not active';
//         }
//     },
//     getAge:function(){
//         if(this.age >= 18)
//         {
//             return 'available';
//         }
//         else{
//             return 'not available';
//         }
//     },
// };
// let user2 = Object.assign({},user);
// console.log(user2);

//get elements using id, class, tag name, querySelector, querySelectorAll,images,links,forms,forms elements
// let myDiv = document.getElementById('myDiv');
// console.log(myDiv);
// let myDivs = document.getElementsByClassName('myDiv');
// console.log(myDivs);
// let myDivs2 = document.getElementsByTagName('div');
// console.log(myDivs2);
// let myDivs3 = document.querySelectorAll('.myDiv');
// console.log(myDivs3);
// let myDivs4 = document.querySelector('.myDiv');
// console.log(myDivs4);
// let myImages = document.images;
// console.log(myImages);
// let myLinks = document.links;
// console.log(myLinks);
// let myForms = document.forms;
// console.log(myForms);
// let myForm = document.forms[0];
// console.log(myForm);

//get element attributes, set element attributes, remove element attributes
// let myDiv = document.getElementById('myDiv');
// console.log(myDiv.getAttribute('id'));
// console.log(myDiv.getAttribute('class'));
// console.log(myDiv.getAttribute('data-name'));
// console.log(myDiv.getAttribute('data-job'));
// console.log(myDiv.getAttribute('data-lang'));
// myDiv.setAttribute('data-lang','php');
// console.log(myDiv.getAttribute('data-lang'));
// myDiv.removeAttribute('data-lang');
// console.log(myDiv.getAttribute('data-lang'));
