# 🏠 Hostel Assist – Hostel Notice Board System

**Distributed Systems Lab – Module 3 (RPC / REST API)**

---

## 📌 Problem Description

Hostel environments require a simple and efficient mechanism to communicate important information such as announcements, maintenance updates, and rules to students. Traditional notice boards are not always accessible or up to date.

This project implements a **Hostel Notice Board System** as part of the **Hostel Assist distributed application**. The system allows:

* **Admins** to add hostel notices
* **Students** to view notices through a web interface

The application demonstrates **Distributed Systems concepts** using a **REST-based Remote Procedure Call (RPC) communication model**, along with **in-memory data storage**.

---

## 📡 Communication Model Used

### Module 3 – RPC (REST API)

| Component          | Description                 |
| ------------------ | --------------------------- |
| Communication Type | Remote Procedure Call (RPC) |
| Protocol           | HTTP                        |
| Style              | RESTful API                 |
| Methods Used       | GET, POST                   |
| Nature             | Stateless request–response  |

### Explanation

* The client (browser) sends HTTP requests to the server.
* The server exposes REST endpoints that act as **remote procedures**.
* Each request is **stateless**, meaning the server does not maintain client session data.
* JSON is used as the data exchange format.

This approach closely models real-world distributed web services.

---

## 🧠 In-Memory Data Design Explanation

### Data Stored in Memory

* Hostel notices

  * Title
  * Message
  * Date and time

### Storage Mechanism

* Python **list** stored in server memory
* No external database is used

### Why In-Memory Storage Is Appropriate

* Notices are **temporary and informational**
* Persistence is **not critical** for this module
* Focus is on **communication and system behavior**, not durability
* Reduces system complexity and setup overhead
* Mimics real-world systems such as:

  * Live dashboards
  * Caching layers
  * Temporary coordination services

### Server Restart Behavior

* All notices are cleared when the server restarts
* This is acceptable because:

  * Data is non-critical
  * Demonstrates ephemeral state management
  * Aligns with stateless service design

---

## 🛠️ Technology Stack

| Layer         | Technology                |
| ------------- | ------------------------- |
| Backend       | Python (Flask)            |
| Frontend      | HTML, CSS, JavaScript     |
| Communication | REST (HTTP)               |
| Storage       | In-memory data structures |
| Deployment    | Render.com                |

---

## ▶️ Steps to Compile and Run the Application

### 1️⃣ Prerequisites

* Python 3.x installed
* Git installed
* Internet connection

---

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/hostel-notice-board.git
cd hostel-notice-board
```

---

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

---

### 4️⃣ Run the Application Locally

```bash
python app.py
```

The server will start at:

```
http://127.0.0.1:5000/
```

---

### 5️⃣ Access the Application

| URL      | Purpose                    |
| -------- | -------------------------- |
| `/`      | Student Notice View        |
| `/admin` | Admin Panel to Add Notices |

---

## 🌐 Deployment

The application is deployed on **Render.com** by connecting the GitHub repository.

---

## 🎓 Learning Outcomes

* Understanding of REST-based RPC communication
* Stateless service design
* In-memory state management
* Client–server interaction
* Practical distributed system implementation

---

## ✅ Conclusion

This module successfully demonstrates **RPC communication using REST APIs** within a distributed system, while adhering to lab constraints such as **mandatory UI**, **in-memory storage**, and **stateless design**.
