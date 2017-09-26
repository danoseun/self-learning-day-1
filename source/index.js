'use strict';

class Account {
    // Initialize the account details with account name, number and balance
    constructor(name, number, balance){
            this.accountName = name;
            this.accountNumber = number;
            this.accountBalance = balance;
    }
    // gets the account holders account name
    get name(){
        return this.accountName;
    }
    // gets the account holders account number
    get number(){
        return this.accountNumber;
    }
    // gets the account holders account balance
    get balance(){
        return this.accountBalance;
    }
    
    // Updates the account balance with money deposited
    deposit(amount){
        // Check if the amount to be deposited is a number value
        if (typeof amount !== 'number') {
            return 'Invalid input';
        }
        else{
            this.accountBalance += amount;
        }
    }
    
    // Updates the account balance after a withdrawal
    withdraw(amount){
        // check if the amount is a number
        if (typeof amount !== 'number') {
            return 'Invalid input';
        }
        // check if the amount to be withdrawn exceeds the account balance
        else if (amount > this.accountBalance){
            return 'You have insufficient balance';
        }
        else{
            this.accountBalance -= amount;
        }
    }
}

class SavingsAccount extends Account {
    // Updates account balance for savings account
    deposit(amount) {
        // Check if the amount to be deposited is a number value
        if (typeof amount !== 'number') {
            return 'Invalid input';
        }
        // perform deposit and add interest value
        else {
            this.accountBalance = this.accountBalance + amount + ((1/100) * amount);
        }
    }
}

class CurrentAccount extends Account {
    constructor(name, number, balance) {
        super(name, number, balance);
        this.creditLine = 50000;
    }

    // Updates the account balance for a current account after withdrawal
    withdraw(amount) {
        // Check if the amount to be withdrawn is a number value
        if (typeof amount !== 'number') {
            return 'Invalid input';
        }
        // Check if the amount places the account balance below the credit line
        if ((this.accountBalance - amount) < -this.creditLine) {
            return 'You have insufficient coverage';
        }
        // perform withdrawal without 2% charge on the credit line withdrawn
        else if (this.accountBalance > amount) {
            this.accountBalance -= amount
        }
        // perform withdrawal with 2% charge on the credit line withdrawn
        else {
            this.accountBalance = this.accountBalance - amount - ((2/100) * (amount - this.balance));
        }
    }
}

export {Account, SavingsAccount, CurrentAccount};