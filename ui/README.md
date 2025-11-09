# 💬 Real-Time Chat App with Socket.IO

A simple real-time chat application built with **React** on the client and **Node.js + Socket.IO** on the server.

---

## ⚙️ Client-Side Socket Connection

```javascript
// client/src/socket.js
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000"); // replace with your server URL
export default socket;
```

cd server
npm install express socket.io cors

npm start
