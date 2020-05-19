"use strict";
// classes
var Invoice = /** @class */ (function () {
    // readonly client: string;
    // private details: string;
    // amount: number;
    // constructor(client: string, details: string, amount: number) {
    //   this.client = client;
    //   this.details = details;
    //   this.amount = amount;
    // }
    // short-hand method for defining properties of a class.  need to have access modifiers
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invoiceOne = new Invoice('mario', 'work on the mario websit', 500);
var invoiceTwo = new Invoice('luigi', 'work on the luigi websit', 300);
// this says that only invoice objects can be added to this array
var invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
// use type casting for form element
var newFormItem = document.getElementById('newItemForm');
// use type casting for input elements
var type = document.getElementById('type');
var tofrom = document.getElementById('tofrom');
var details = document.getElementById('details');
var amount = document.getElementById('amount');
newFormItem.addEventListener('submit', function (e) {
    // prevent the page refresh when the form is submitted
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
