package com.atm.demo.model;

import org.springframework.stereotype.Component;

@Component
public class BankAccount {
    private String name = "Utkarsh";
    private String accountNo = "12345";
    private float balance = 10000f;

    public float getBalance() {
        return balance;
    }

    public String withdraw(float amount) {
        if (balance >= amount && amount > 0) {
            balance -= amount;
            return "✅ Withdrawal of " + amount + " successful. Remaining Balance: " + balance;
        }
        return "❌ Insufficient balance!";
    }

    public String deposit(float amount) {
        if (amount > 0 && amount <= 10000f) {
            balance += amount;
            return "✅ Deposit of " + amount + " successful. Current Balance: " + balance;
        }
        return "❌ Invalid deposit amount!";
    }

    public String transfer(String recipient, float amount) {
        if (balance >= amount && amount > 0 && amount <= 50000f) {
            balance -= amount;
            return "✅ Transferred " + amount + " to " + recipient + ". Balance: " + balance;
        }
        return "❌ Transfer failed. Check balance or limits!";
    }
}

