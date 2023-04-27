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

enum Dize {Small = 1, Medium, Large};           //normal code
const enum Size {Small = 1, Medium, Large};     // with const it is more optimise code 

let MySize : Size = Size.Large;
console.log(MySize);

/////////////////////////////////////////////////////[  FUNCTONS  ]////////////////////////////////////////////////////////////////////////////////////////////

function incomeTaxCalculation(income:number, year:number): number {
    if(year < 2022)
    return income*1.2;

    return income*2;
}
console.log(incomeTaxCalculation(10_000, 2020));




//type 2 -- ?

function incomeTaxCalculate(income:number, year ?:number): number {        // use old js || operator
    if((year || 2020) < 2022)
    return income*1.2;

    return income*2;
}
console.log(incomeTaxCalculate(10_000));



//type 3 most optimised 

function TaxCalculate(income:number, year = 2020): number {               // use predefine value
    if(year < 2022)
    return income*1.2;

    return income*2;
}
console.log(TaxCalculate(10_000));

/////////////////////////////////////////////////////[  OBJECTS  ]////////////////////////////////////////////////////////////////////////////////////////////

let employee : {
    readonly id : number,
    name : string,
    retire : (date:Date)=> void
} = {
    id : 1,
    name : 'sameer',
    retire : (date:Date) => { console.log(date)}
};


///////////////////////////////////////////[                        advance                     ]/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////[  Type Alias  ]////////////////////////////////////////////////////////////////////////////////////////////

type Employee = {
    readonly id : number,
    name : string,
    retire : (date:Date) => void
}


let  /**/ employeee   /**/ : Employee = {
    id : 1,
    name : 'sameer',
    retire : (date:Date) => {
        console.log(date);
    }
}

/////////////////////////////////////////////////////[  UNION TYPE  ]////////////////////////////////////////////////////////////////////////////////////////////

function kgToLbs(weight : number | string) : number {
    //narrowing
    if(typeof weight === 'number')
        return weight * 2.2;
    else   
        return parseInt(weight) * 2.2;
}


console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));

/////////////////////////////////////////////////////[  LITERAL TYPE  ]////////////////////////////////////////////////////////////////////////////////////////////

type Quantity = 50 | 100;
let quantity : Quantity = 100;

/////////////////////////////////////////////////////[  NULLABLE TYPE  ]////////////////////////////////////////////////////////////////////////////////////////////

function greeting (name:string | null | undefined) {
    if (name) console.log(name.toUpperCase());
    // else if () console.log('hola');
    else console.log('undefined')
}

greeting('sameer');
greeting(sameer);

/////////////////////////////////////////////////////[  OPTIONAL CHAINING  ]////////////////////////////////////////////////////////////////////////////////////////////

type Customer = {
    birthday : Date
};

function getCustomer(id:number) : Customer | null | undefined {
    return id === 0 ? null : {birthday : new Date()}
}


// unoptimised way 
let customerr = getCustomer(1);
if (customerr !== null && customerr !== undefined)
    console.log(customerr.birthday)

// optimized way
let costomerrr = getCustomer(1);
// optional property access operation 
console.log(costomerrr?.birthday)