// Chat functionality
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const typingIndicator = document.getElementById('typingIndicator');

// Initialize first message timestamp
document.addEventListener('DOMContentLoaded', () => {
    const firstMessage = chatMessages.querySelector('.message-timestamp');
    if (firstMessage) {
        firstMessage.textContent = formatTimestamp(new Date());
    }
    userInput.focus();
});

// Format timestamp
function formatTimestamp(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Show typing indicator
function showTypingIndicator() {
    typingIndicator.classList.add('active');
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Hide typing indicator
function hideTypingIndicator() {
    typingIndicator.classList.remove('active');
}

// Add message with animation
function addMessage(text, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const timestamp = formatTimestamp(new Date());
    const avatar = isUser ? '👤' : '🤖';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">${avatar}</div>
        <div class="message-content">
            <p>${text}</p>
            <span class="message-timestamp">${timestamp}</span>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    
    // Smooth scroll to bottom
    setTimeout(() => {
        chatMessages.scrollTo({
            top: chatMessages.scrollHeight,
            behavior: 'smooth'
        });
    }, 100);
}

// Disable/enable input
function setInputState(disabled) {
    userInput.disabled = disabled;
    sendButton.disabled = disabled;
}

// Send message
function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;
    
    // Add user message
    addMessage(text, true);
    userInput.value = '';
    
    // Disable input while processing
    setInputState(true);
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate bot response (will connect to AWS Lex later)
    setTimeout(() => {
        hideTypingIndicator();
        addMessage('This is a demo response. AWS Lex integration coming soon!', false);
        
        // Re-enable input and focus
        setInputState(false);
        userInput.focus();
    }, 1500);
}

// Event listeners
sendButton.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !userInput.disabled) {
        sendMessage();
    }
});

// Auto-focus input when clicking in the chat area
chatMessages.addEventListener('click', () => {
    if (!userInput.disabled) {
        userInput.focus();
    }
});