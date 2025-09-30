// Base API URL
const API = "/api/atm";

// Display results in the "result" paragraph
function showResult(message) {
    document.getElementById("result").innerText = message;
}

// Check current balance
async function checkBalance() {
    try {
        const response = await fetch(`${API}/balance`);
        const text = await response.text();
        showResult(text);
    } catch (error) {
        showResult("❌ Error fetching balance: " + error);
    }
}

// Withdraw amount
async function withdraw() {
    const amount = document.getElementById("withdrawAmount").value;
    if (!amount || amount <= 0) {
        showResult("❌ Enter a valid amount to withdraw.");
        return;
    }
    try {
        const response = await fetch(`${API}/withdraw?amount=${encodeURIComponent(amount)}`, {
            method: "POST"
        });
        const text = await response.text();
        showResult(text);
    } catch (error) {
        showResult("❌ Error withdrawing: " + error);
    }
}

// Deposit amount
async function deposit() {
    const amount = document.getElementById("depositAmount").value;
    if (!amount || amount <= 0) {
        showResult("❌ Enter a valid amount to deposit.");
        return;
    }
    try {
        const response = await fetch(`${API}/deposit?amount=${encodeURIComponent(amount)}`, {
            method: "POST"
        });
        const text = await response.text();
        showResult(text);
    } catch (error) {
        showResult("❌ Error depositing: " + error);
    }
}

// Transfer amount to recipient
async function transfer() {
    const recipient = document.getElementById("recipient").value.trim();
    const amount = document.getElementById("transferAmount").value;
    if (!recipient) {
        showResult("❌ Enter recipient name.");
        return;
    }
    if (!amount || amount <= 0) {
        showResult("❌ Enter a valid amount to transfer.");
        return;
    }
    try {
        const response = await fetch(`${API}/transfer?recipient=${encodeURIComponent(recipient)}&amount=${encodeURIComponent(amount)}`, {
            method: "POST"
        });
        const text = await response.text();
        showResult(text);
    } catch (error) {
        showResult("❌ Error transferring: " + error);
    }
}
