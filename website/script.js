// Bot logo SVG template
const botLogoSVG = `
    <svg class="bot-logo-small" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="logoGradientMsg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect x="25" y="30" width="50" height="45" rx="8" fill="url(#logoGradientMsg)"/>
        <line x1="50" y1="20" x2="50" y2="30" stroke="url(#logoGradientMsg)" stroke-width="3" stroke-linecap="round"/>
        <circle cx="50" cy="17" r="4" fill="url(#logoGradientMsg)"/>
        <circle cx="38" cy="48" r="5" fill="white"/>
        <circle cx="62" cy="48" r="5" fill="white"/>
        <circle cx="39" cy="49" r="2.5" fill="#667eea"/>
        <circle cx="63" cy="49" r="2.5" fill="#667eea"/>
        <path d="M 38 62 Q 50 68, 62 62" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>
        <rect x="18" y="50" width="7" height="15" rx="3" fill="url(#logoGradientMsg)"/>
        <rect x="75" y="50" width="7" height="15" rx="3" fill="url(#logoGradientMsg)"/>
        <line x1="32" y1="65" x2="68" y2="65" stroke="white" stroke-width="2" stroke-opacity="0.5"/>
    </svg>
`;

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
    const avatar = isUser ? '👤' : botLogoSVG;
    
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