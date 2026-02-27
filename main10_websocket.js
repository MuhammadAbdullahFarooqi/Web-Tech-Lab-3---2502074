const socket = new WebSocket('wss://echo.websocket.org');

document.getElementById('sendBtn').onclick = () => {
    const text = document.getElementById('chatInput').value;
    socket.send(text);
    console.log("Sent to Server:", text);
};

socket.onmessage = (e) => console.log("Server Echo:", e.data);