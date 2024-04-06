// let countApple=0
// while(countApple<10){
//     countApple++
//     //Выполнится 10 раз
// }
//------------------------------
// let countApple=0
// for(let i=0;i<10;i++){
//     countApple++
//     //Выполнится 10 раз
// }
//--------------------------------
// let arr = [14,56,88,0,77]
// arr = ['14','56','88','0','77']
// arr = [true,true,false,true,false]
// arr = [14,true,'88',{key:3456},[77,444]]
//--------------------------------

// const a = [1, 2, 3]
// const b = Array.of(1, 2, 3) //[1, 2, 3]
// const c = Array(4).fill(1) //[1, 1, 1, 1]

// console.log(a[1]);//2

//--------------------------------

// const a = [1, 2, 3]

// for(let i=0;i<a.length;i++){
//     console.log(a[i]);
// }
// //1
// //2
// //3
//--------------------------------

// let a = [1, 2, 3]
// let b = a.slice()//копируем не ссылку, а значение

// b.push(22)

// console.log(b); //[ 1, 2, 3, 22 ]
//----------------------------------------------------

// let obj = {
//     name:'Петька',
//     age:21,
//     hobby:['Футбол',"Баскетбол","Бездельничать"],
// }

// let copy = structuredClone(obj)

//-----------------------------------------------------

// let obj = {
//     name:'Петька',
//     age:21,
//     hobby:['Футбол',"Баскетбол","Бездельничать"],
// }

// for(let key in obj){
//     //key - имя ключа
//     console.log(obj[key]);
// }
// // Петька
// // 21
// // [ 'Футбол', 'Баскетбол', 'Бездельничать' ]

//-------------------------------------------------

// let obj = {
//     name:'Петька',
//     age:21,
//     hobby:['Футбол',"Баскетбол","Бездельничать"],
// }

// obj.birthday = '01.01.2003'

// let obj = {
//     name:'Петька',
//     age:21,
//     hobby:['Футбол',"Баскетбол","Бездельничать"],
//     birthday:'01.01.2003'
// }
//-------------------------------------------------------


// let first_obj = {
//     name:'Петька',
//     age:21,
//     hobby:['Футбол',"Баскетбол","Бездельничать"],
// }

// let second_obj = {
//     name:'Петька',
//     age:21,
//     hobby:['Футбол',"Баскетбол","Бездельничать"],
// }

// console.log(JSON.stringify(first_obj) == JSON.stringify(second_obj)); 
// //true

// let arr1 = [1]
// let arr2 = [1]
// console.log(arr1.toString() == arr2.toString());
// //true

//----------------------------------------------------------


// function function_name(param1){ //Function Declaration
//     //тут можно что-то делать
//     return param1 + 1
// }

// let result = function_name(3)
// let result2 = function_name(100)

// console.log(result); //4
// console.log(result2); //101

//--------------------------------------------------------

// let function_name = function(param1){ //Function Expression
//     //тут можно что-то делать
//     return param1 + 1
// }

// let result = function_name(3)

// console.log(result); //4

//-----------------------------------------------------------

// let function_name = (param1) => { //Arrow function
//     //тут можно что-то делать
//     return param1 + 1
// }

// let result = function_name(3)

// console.log(result); //4

//---------------------------------------------------------------

// function function_name(param1){ //Function Declaration
//     //тут можно что-то делать
//     return param1 + 1
// }

// let result = function_name //result стала функцией

// console.log(result); //[Function: function_name]

