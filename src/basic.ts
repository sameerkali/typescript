let age: number = 20;

if (age < 50)
age += 10;
console.log(age);

let sales: number = 123_456_789;                 //number                   
let course: string = 'TypeScript';              //string
let is_publish: boolean = true;                 //boolean 
let sam: any = 'sameer'                         //any

            //or


let saless = 123_456_789;                        //number
let coursee = 'TypeScript';                     //string
let is_publishh = true;                         //boolean
let sameer                                      //any


/////////////////////////////////////////////////////[  ARRAY  ]////////////////////////////////////////////////////////////////////////////////////////////

let numbers = [1,2,3,'4'];      //bad 

let numberr: number[] = [1,2,3,4];
// numberr = [1,2,3,'4']

/////////////////////////////////////////////////////[  TUPPLE  ]////////////////////////////////////////////////////////////////////////////////////////////

let user : [number, string] = [69, 'sameer'];

user[0].toExponential;                          //use all number related functions
user[1].replace;                                //use all string related functions

/////////////////////////////////////////////////////[  ENUMS  ]////////////////////////////////////////////////////////////////////////////////////////////

const enum Size {Small = 1, Medium, Large};

let MySize : Size = Size.Large;
console.log(MySize);