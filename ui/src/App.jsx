import { useState } from "react";
import ChatRoom from "./components/ChatRoom";

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [joined, setJoined] = useState(false);

  const handleJoinRoom = () => {
    if (username && room) {
      setJoined(true);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 text-black flex items-center justify-center p-4">
      {!joined ? (
        <div className="w-full max-w-md bg-white p-6 rounded shadow ">
          <h2 className="text-2xl font-bold text-center">Join Chat Room</h2>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border rounded mb-4"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Room ID"
            className="w-full p-2 border rounded mb-4"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 w-full"
            onClick={handleJoinRoom}
          >
            Join Room
          </button>
        </div>
      ) : (
        <ChatRoom username={username} room={room} />
      )}
    </div>
  );
}

export default App;
