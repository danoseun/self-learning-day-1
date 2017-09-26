import 'mocha';
import chai from 'chai';
import {Account, SavingsAccount, CurrentAccount} from '../source';

const assert = chai.assert;

describe('Account', () => {
    describe('#Account', () => {
        it('should be able to return the account name', () => {
            let account = new Account('Justin', 1234567890, 200000);
            assert.equal(account.name, 'Justin');
        })
    })

    describe('#Account', () => {
        it('should be able to return the account number', () => {
            let account = new Account('Justin', 1234567890, 200000);
            assert.equal(account.number, 1234567890);
        });
    })

    describe('#Account', () => {
        it('should be able to return the account balance', () => {
            let account = new Account('Justin', 1234567890, 200000);
            assert.equal(account.balance, 200000);
        });
    })

    describe('#Account balance', () => {
        it('should have its balance updated when a deposit is made', () => {
            let account = new Account('Justin', 1234567890, 200000);
            account.deposit(50000);
            assert.equal(account.balance, 250000);
        });
    })

    describe('#Savings account', () => {
        it('should attracts 1% interest for every new deposit made', () => {
            let account = new SavingsAccount('Justin', 1234567890, 200000);
            account.deposit(50000);
            assert.equal(account.balance, 250500);
        });
    })

    describe('#Savings account', () => {
        it('should not have a negative account balance when a withdrawal is made', () => {
            let account = new SavingsAccount('Justin', 1234567890, 200000);
            assert.equal(account.withdraw(210000), 'You have insufficient balance');
        });
    })

    describe('#Savings account', () => {
        it('should return Invalid input when withdrawal value is not a number', () => {
            let account = new SavingsAccount('Justin', 1234567890, 200000);
            assert.equal(account.withdraw('amount'), 'Invalid input');
        });
    })

    describe('#Savings account', () => {
        it('should should return Invalid input when withdrawal value is not a number', () => {
            let account = new SavingsAccount('Justin', 1234567890, 200000);
            assert.equal(account.deposit("amount"), 'Invalid input');
        });
    })

    describe('#Current account', () => {
        it('should have a negative account balance but not more than credit line can cover', () => {
            let account = new CurrentAccount('Justin', 1234567890, 200000);
            account.withdraw(210000);
            assert.equal(account.balance, -10200);
        });
    })

    describe('#Current account', () => {
        it('should return You have insufficient coverage when withdrawal exceeds what credit line can cover', () => {
            let account = new CurrentAccount('Justin', 1234567890, 200000);
            assert.equal(account.withdraw(580000), "You have insufficient coverage");
        });
    })

    describe('#Current account', () => {
        it('attracts 2% for amounts withdrawm from the credit line', () => {
            let account = new CurrentAccount('Justin', 1234567890, 200000);
            account.withdraw(220000);
            assert.equal(account.balance, -20400);
        });
    })

    describe('#Current account', () => {
        it('should return Invalid input when withdrawal value is not a number', () => {
            let account = new CurrentAccount('Justin', 1234567890, 200000);
            account.withdraw(220000);
            assert.equal(account.withdraw('amount'), 'Invalid input');
        });
    })    
})