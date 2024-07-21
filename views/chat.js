const socket = io("http://localhost:5000");
const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

const username = prompt("Enter your name: ");
appendMessage('You joined', 'received');

socket.emit('new-user', username);

socket.on('chat-message', data=>{
    appendMessage(data.sender + ": " + data.message, 'received');
});

socket.on('user-connected', username=>{
    appendMessage(username + " joined", 'received');
});

socket.on('user-disconnected', username=>{
    appendMessage(username + " left", 'received');
});

messageForm.addEventListener('submit', e=>{
    e.preventDefault();
    const message = messageInput.value;
    appendMessage("You: " + message, 'sent');
    socket.emit('send-chat-message', message);
    messageInput.value = '';
});

function appendMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    if (type === 'sent') {
        messageElement.classList.add('sent');
    } else {
        messageElement.classList.add('received');
    }
    const textElement = document.createElement('p');
    textElement.innerText = message;
    messageElement.appendChild(textElement);
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight; // Auto-scroll to the latest message
}
