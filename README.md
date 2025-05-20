
# 💬 iChat – Real-time Chat App

iChat is a simple real-time chat application built with **Node.js**, **Socket.io**, and vanilla JavaScript. It allows multiple users to chat in real time with instant messaging via WebSockets.

---

## 🚀 Features

- Real-time bi-directional communication using **Socket.io**
- Join/leave notifications
- Lightweight and responsive frontend
- Audio notification on receiving messages
- Simple and minimal UI

---

## 📁 Project Structure

```
ChitChat/
├── nodeServer/
│   ├── index.js               # Node.js + Socket.io server
│   ├── .env                   # Environment variables (optional)
│   └── package.json           # Dependencies and scripts
├── public/
│   ├── chat.jpg               # Logo image
├── js/
│   ├── client.js              # Frontend socket code
│   └── config.js              # Config for socket server URL
├── css/
│   └── style.css              # Styling
├── notif.mp3                 # Notification sound
├── index.html                # Frontend UI
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ichat.git
cd ichat
```

### 2. Setup and start the server

```bash
cd nodeServer
npm install
npm start
```

> Make sure port **8000** is open or change it in `index.js`.

### 3. Open `index.html` in your browser

Use Live Server or simply open the file in a browser.

---

## 📦 Scripts

```bash
# Starts the server with auto-reload
npm run dev
```

---

## 🔐 Environment Variables

You can optionally use a `.env` file in `nodeServer/`:

```env
PORT=8000
```

Make sure to use `dotenv` in your `index.js` if you include this.

---

## 🧪 Demo

https://user-images.githubusercontent.com/your-gif-or-screenshot.gif

---

## 🙋‍♂️ Author

**Aditya**  
Feel free to reach out for contributions, feedback, or improvements!

---

## 📝 License

This project is licensed under the **ISC License**.
