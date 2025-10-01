# 💳 CashCrest - Spring Boot Project

SmartATM is a simple ATM simulation project built using **Spring Boot**.  
It provides basic banking operations such as **Balance Inquiry**, **Deposit**, **Withdraw**, and **Transfer** through RESTful APIs.

---

## 🚀 Features
- ✅ Check account balance  
- ✅ Withdraw money with validations  
- ✅ Deposit money with limit checks  
- ✅ Transfer money to another account  
- ✅ REST API powered by Spring Boot  
- ✅ Lightweight and easy to run  

---

## 🛠️ Tech Stack
- **Java 25**
- **Spring Boot 3.3.4**
- **Maven**
- **REST API**

---

yaml
---

## ⚡ API Endpoints

### 1️⃣ Check Balance  
**GET** `/api/atm/balance`  
Response:  
```json
"💳 Current Balance: 10000.0"
2️⃣ Withdraw Money
POST /api/atm/withdraw?amount=500
Response:

json
"✅ Withdrawal of 500.0 successful. Remaining Balance: 9500.0"
3️⃣ Deposit Money
POST /api/atm/deposit?amount=1000
Response:

json
"✅ Deposit of 1000.0 successful. Current Balance: 11000.0"
4️⃣ Transfer Money
POST /api/atm/transfer?recipient=John&amount=2000
Response:

json
"✅ Transferred 2000.0 to John. Balance: 8000.0"
▶️ How to Run
Clone the repository

bash
git clone https://github.com/your-username/SmartATM.git
cd SmartATM
Build the project using Maven

bash
mvn clean install
Run the Spring Boot application

bash

mvn spring-boot:run
Open your browser / Postman and test the APIs:

http://localhost:8080/api/atm/balance

http://localhost:8080/api/atm/withdraw?amount=500

http://localhost:8080/api/atm/deposit?amount=1000

http://localhost:8080/api/atm/transfer?recipient=John&amount=2000

📸 Preview

🤝 Contributing
Feel free to fork this repository, open issues, or submit pull requests to enhance functionality.

📜 License
This project is licensed under the MIT License.
You are free to use, modify, and distribute this project.

✨ Made with ❤️ using Spring Boot

pgsql


👉 Just make a folder `assets/` inside your repo and put the ATM background image there (rename it to `atm-interface.png`) so GitHub shows the preview.

Do you want me to also **add badges** (like Java, Spring Boot, Maven) at the top for a professional GitHub look?






