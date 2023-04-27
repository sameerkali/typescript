"use strict";
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let sales = 123456789;
let course = 'TypeScript';
let is_publish = true;
let sam = 'sameer';
let saless = 123456789;
let coursee = 'TypeScript';
let is_publishh = true;
let sameer;
let numbers = [1, 2, 3, '4'];
let numberr = [1, 2, 3, 4];
let user = [69, 'sameer'];
user[0].toExponential;
user[1].replace;
var Dize;
(function (Dize) {
    Dize[Dize["Small"] = 1] = "Small";
    Dize[Dize["Medium"] = 2] = "Medium";
    Dize[Dize["Large"] = 3] = "Large";
})(Dize || (Dize = {}));
;
;
let MySize = 3;
console.log(MySize);
function incomeTaxCalculation(income, year) {
    if (year < 2022)
        return income * 1.2;
    return income * 2;
}
console.log(incomeTaxCalculation(10000, 2020));
function incomeTaxCalculate(income, year) {
    if ((year || 2020) < 2022)
        return income * 1.2;
    return income * 2;
}
console.log(incomeTaxCalculate(10000));
function TaxCalculate(income, year = 2020) {
    if (year < 2022)
        return income * 1.2;
    return income * 2;
}
console.log(TaxCalculate(10000));
let employee = {
    id: 1,
    name: 'sameer',
    retire: (date) => { console.log(date); }
};
let employeee = {
    id: 1,
    name: 'sameer',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));
let quantity = 100;
function greeting(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('undefined');
}
greeting('sameer');
greeting(sameer);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customerr = getCustomer(1);
if (customerr !== null && customerr !== undefined)
    console.log(customerr.birthday);
let costomerrr = getCustomer(1);
console.log(costomerrr === null || costomerrr === void 0 ? void 0 : costomerrr.birthday);
//# sourceMappingURL=basic.js.map