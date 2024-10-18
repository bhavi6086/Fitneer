// Get the chat messages container
const chatMessagesContainer = document.getElementById('chat-messages');

// Get the message input field and send button
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Add an event listener to the send button
sendButton.addEventListener('click', () => {
    // Get the user's message
    const userMessage = messageInput.value.trim();

    // Check if the user has entered a message
    if (userMessage !== '') {
        // Create a new chat message element
        const chatMessage = document.createElement('div');
        chatMessage.classList.add('chat-message', 'user-message');
        chatMessage.textContent = userMessage;

        // Add the chat message to the container
        chatMessagesContainer.appendChild(chatMessage);

        // Clear the message input field
        messageInput.value = '';

        // Simulate a response from the assistant
        setTimeout(() => {
            const assistantMessage = document.createElement('div');
            assistantMessage.classList.add('chat-message');
            assistantMessage.textContent = 'Thank you for your message!';

            chatMessagesContainer.appendChild(assistantMessage);

            // Scroll to the bottom of the chat messages container
            chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
        }, 1000);
    }
});

// Add an event listener to the message input field
messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});