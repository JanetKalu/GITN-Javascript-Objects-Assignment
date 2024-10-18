// Assignment 1: Modeling a circle
console.log("***************************** Modeling a circle ***************************** ")
const r = Number(prompt("Enter the circle radius:"));
const pi = 3.14159265359;
let result;

const circle = {
    circumference() {
    result = 2 * pi * r;
    return result.toFixed(2);
    },

    area() {
        result = pi * Math.pow(r, 2);
        return result.toFixed(2);

    }  
}

 console.log(`Its circumference is ${circle.circumference()}`);
 console.log(`Its area is ${circle.area()}`);

 console.log()
 console.log()

//Assignment 2: Modeling a bank account
console.log("*****************************  Welcome to Janet Trust Bank ***************************")
const JanetBank  = {
    name : "Alex",
    balance : 0,
    credit(creditAmount) {
        amount = creditAmount
        this.balance += amount;
        return this.balance;
    },
    debit(debitAmount){
        this.balance -= debitAmount;
        return debitAmount;
    },
    describe(deposit, withdrawal) {
        console.log(`**********OPENING BALANCE*******\n\tOwner: ${this.name}\n\tBalance: ${JanetBank.balance}`)
        let creditBalance = this.credit(deposit);
        let debitBalance = creditBalance - this.debit(withdrawal);
        
        //credit display
        console .log(`**********CREDIT ALERT*******\nHello ${this.name}, your account has been credited with ${deposit} Naira\n\t Owner: ${this.name}\n\t Balance: ${creditBalance}`);
       
        //debit display
        console .log(`Hello ${this.name}, ${withdrawal} Naira has been debited from your account.\n\t Owner: ${this.name}\n\tBalance: ${debitBalance}`);
        
    }
    
}


console.log(JanetBank.describe(250, 80));



// Write a program that creates an account object with the following characteristics:
// • A name property set to “Alex”.
// • A balance property set to 0.
// • A credit method adding the (positive or negative) value passed as an argument to the
// account balance.
// • A describe method returning the account description.
// Use this object to show its description, crediting 250, debiting 80, then show its description again.