// Sample messages data (in a real app, this would come from a backend)
let messages = [
    {
        id: 1,
        sender: "+1 (555) 123-4567",
        content: "Hey! How's it going?",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
    },
    {
        id: 2,
        sender: "+1 (555) 987-6543",
        content: "Don't forget about the meeting tomorrow at 10 AM!",
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000) // 4 hours ago
    },
    {
        id: 3,
        sender: "+1 (555) 456-7890",
        content: "Thanks for the help with the project. Really appreciate it!",
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000) // 6 hours ago
    },
    {
        id: 4,
        sender: "+1 (555) 321-6540",
        content: "Are you free this weekend? We should catch up!",
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000) // 1 day ago
    }
];

// SMS Configuration is now loaded from config.js

// DOM elements
const messagesContainer = document.getElementById('messagesContainer');
const newMessageBtn = document.getElementById('newMessageBtn');
const messageModal = document.getElementById('messageModal');
const closeModal = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelBtn');
const messageForm = document.getElementById('messageForm');
const phoneNumberInput = document.getElementById('phoneNumber');
const messageTextInput = document.getElementById('messageText');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    displayMessages();
    setupEventListeners();
    checkSMSConfiguration();
    
    // Add some vintage startup effects
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Check if SMS is properly configured
function checkSMSConfiguration() {
    if (SMS_CONFIG.accountSid === 'YOUR_TWILIO_ACCOUNT_SID') {
        showNotification('⚠️ SMS not configured. Please set up Twilio credentials in config.js', 'warning');
        console.log('To enable real SMS functionality:');
        console.log('1. Sign up at https://www.twilio.com');
        console.log('2. Get your Account SID and Auth Token');
        console.log('3. Get a Twilio phone number');
        console.log('4. Update SMS_CONFIG in config.js');
    } else {
        // Show helpful info for trial accounts
        showNotification('📱 SMS Ready! Note: Trial accounts can only send to verified numbers', 'info');
        console.log('💡 Trial Account Tips:');
        console.log('- Verify recipient numbers in Twilio Console');
        console.log('- Or upgrade to paid account for unlimited sending');
    }
}

// Setup event listeners
function setupEventListeners() {
    newMessageBtn.addEventListener('click', openModal);
    closeModal.addEventListener('click', closeModalFunc);
    cancelBtn.addEventListener('click', closeModalFunc);
    messageForm.addEventListener('submit', handleMessageSubmit);
    
    // Close modal when clicking outside
    messageModal.addEventListener('click', function(e) {
        if (e.target === messageModal) {
            closeModalFunc();
        }
    });
    
    // Add vintage typing sound effect
    phoneNumberInput.addEventListener('input', playTypingSound);
    messageTextInput.addEventListener('input', playTypingSound);
}

// Display messages
function displayMessages() {
    messagesContainer.innerHTML = '';
    
    messages.forEach(message => {
        const messageElement = createMessageElement(message);
        messagesContainer.appendChild(messageElement);
    });
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Create message element
function createMessageElement(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.dataset.id = message.id;
    
    const timeString = formatTime(message.timestamp);
    
    messageDiv.innerHTML = `
        <div class="message-header">
            <span class="sender-number">${message.sender}</span>
            <span class="message-time">${timeString}</span>
        </div>
        <div class="message-content">${message.content}</div>
    `;
    
    return messageDiv;
}

// Format time
function formatTime(timestamp) {
    const now = new Date();
    const diff = now - timestamp;
    
    if (diff < 60 * 1000) {
        return 'Just now';
    } else if (diff < 60 * 60 * 1000) {
        const minutes = Math.floor(diff / (60 * 1000));
        return `${minutes}m ago`;
    } else if (diff < 24 * 60 * 60 * 1000) {
        const hours = Math.floor(diff / (60 * 60 * 1000));
        return `${hours}h ago`;
    } else {
        const days = Math.floor(diff / (24 * 60 * 60 * 1000));
        return `${days}d ago`;
    }
}

// Open modal
function openModal() {
    messageModal.classList.add('active');
    phoneNumberInput.focus();
    
    // Add vintage modal opening sound effect
    playModalSound();
}

// Close modal
function closeModalFunc() {
    messageModal.classList.remove('active');
    messageForm.reset();
}

// Handle message submission
function handleMessageSubmit(e) {
    e.preventDefault();
    
    const phoneNumber = phoneNumberInput.value.trim();
    const messageText = messageTextInput.value.trim();
    
    if (!phoneNumber || !messageText) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Validate phone number (simple validation)
    if (!isValidPhoneNumber(phoneNumber)) {
        showNotification('Please enter a valid phone number', 'error');
        return;
    }
    
    // Check if SMS is configured
    if (SMS_CONFIG.accountSid === 'YOUR_TWILIO_ACCOUNT_SID') {
        // Fallback to demo mode
        sendDemoMessage(phoneNumber, messageText);
    } else {
        // Send real SMS
        sendRealSMS(phoneNumber, messageText);
    }
    
    // Close modal
    closeModalFunc();
}

// Validate phone number
function isValidPhoneNumber(phone) {
    // More comprehensive validation for international numbers
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    return phoneRegex.test(cleanPhone);
}

// Send real SMS via Twilio
async function sendRealSMS(phoneNumber, content) {
    // Show sending animation
    showSendingAnimation();
    
    try {
        // Format phone number for Twilio
        const formattedNumber = formatPhoneForTwilio(phoneNumber);
        
        // Create the request body for Twilio
        const formData = new URLSearchParams();
        formData.append('To', formattedNumber);
        formData.append('From', SMS_CONFIG.fromNumber);
        formData.append('Body', content);
        
        // Make the API call to Twilio
        const response = await fetch(`${SMS_CONFIG.apiUrl}${SMS_CONFIG.accountSid}/Messages.json`, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(`${SMS_CONFIG.accountSid}:${SMS_CONFIG.authToken}`),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });
        
        const result = await response.json();
        
        if (response.ok) {
            // Success
            const newMessage = {
                id: Date.now(),
                sender: `Sent to ${phoneNumber}`,
                content: `✅ SMS sent successfully! Message: "${content}"`,
                timestamp: new Date()
            };
            
            messages.unshift(newMessage);
            displayMessages();
            showNotification('✅ SMS sent successfully!', 'success');
            playSuccessSound();
            
        } else {
            // Error from Twilio
            let errorMessage = result.message || 'Failed to send SMS';
            
            // Provide helpful guidance for common errors
            if (errorMessage.includes('unverified')) {
                errorMessage = 'Phone number not verified. Please verify this number in your Twilio Console or upgrade to a paid account.';
            } else if (errorMessage.includes('trial')) {
                errorMessage = 'Trial account limitation. Verify the number in Twilio Console or upgrade to paid account.';
            }
            
            throw new Error(errorMessage);
        }
        
    } catch (error) {
        console.error('SMS Error:', error);
        
        // Show error message
        const errorMessage = {
            id: Date.now(),
            sender: 'System Error',
            content: `❌ Failed to send SMS: ${error.message}`,
            timestamp: new Date()
        };
        
        messages.unshift(errorMessage);
        displayMessages();
        showNotification(`❌ SMS failed: ${error.message}`, 'error');
    }
}

// Format phone number for Twilio
function formatPhoneForTwilio(phoneNumber) {
    // Remove all non-digit characters except +
    let cleaned = phoneNumber.replace(/[^\d+]/g, '');
    
    // Ensure it starts with +
    if (!cleaned.startsWith('+')) {
        // Assume US number if no country code
        cleaned = '+1' + cleaned;
    }
    
    return cleaned;
}

// Demo message function (fallback)
function sendDemoMessage(phoneNumber, content) {
    console.log(`Demo mode: Sending message to ${phoneNumber}: ${content}`);
    
    // Show sending animation
    showSendingAnimation();
    
    // Simulate network delay
    setTimeout(() => {
        // Add to messages (simulating received response)
        const newMessage = {
            id: Date.now(),
            sender: `Demo: ${phoneNumber}`,
            content: `📱 Demo SMS sent to ${phoneNumber}: "${content}"`,
            timestamp: new Date()
        };
        
        messages.unshift(newMessage);
        displayMessages();
        
        // Show success notification
        showNotification('📱 Demo message sent (SMS not configured)', 'info');
        
        // Play vintage success sound
        playSuccessSound();
    }, 1500);
}

// Show sending animation
function showSendingAnimation() {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message';
    loadingDiv.innerHTML = `
        <div class="message-header">
            <span class="sender-number">Sending SMS...</span>
            <span class="message-time">Just now</span>
        </div>
        <div class="message-content">
            <div class="loading-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    
    messagesContainer.insertBefore(loadingDiv, messagesContainer.firstChild);
    messagesContainer.scrollTop = 0;
    
    // Remove loading message after delay
    setTimeout(() => {
        if (loadingDiv.parentNode) {
            loadingDiv.parentNode.removeChild(loadingDiv);
        }
    }, 1500);
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    const bgColor = type === 'success' ? '#00ff00' : 
                   type === 'error' ? '#ff0000' : 
                   type === 'warning' ? '#ffaa00' : '#00ff00';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: #000;
        padding: 15px 20px;
        border-radius: 5px;
        font-family: 'VT323', monospace;
        font-size: 16px;
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 4px 15px rgba(0, 255, 0, 0.3);
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// Sound effects (simulated)
function playTypingSound() {
    // In a real app, you'd play actual sound files
    console.log('Typing sound effect');
}

function playModalSound() {
    console.log('Modal opening sound effect');
}

function playSuccessSound() {
    console.log('Success sound effect');
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .loading-dots {
        display: flex;
        gap: 5px;
        justify-content: center;
    }
    
    .loading-dots span {
        width: 8px;
        height: 8px;
        background: #00ff00;
        border-radius: 50%;
        animation: loading 1.4s infinite ease-in-out;
    }
    
    .loading-dots span:nth-child(1) { animation-delay: -0.32s; }
    .loading-dots span:nth-child(2) { animation-delay: -0.16s; }
    
    @keyframes loading {
        0%, 80%, 100% {
            transform: scale(0);
        }
        40% {
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// Simulate incoming messages (for demo purposes)
setInterval(() => {
    const demoMessages = [
        "Hey there! How's your day going?",
        "Don't forget about our meeting later!",
        "Thanks for the help yesterday!",
        "Are you free this weekend?",
        "Great job on the project!",
        "Can you call me when you get a chance?",
        "Happy birthday! 🎉",
        "The weather is amazing today!"
    ];
    
    const demoNumbers = [
        "+1 (555) 111-2222",
        "+1 (555) 333-4444", 
        "+1 (555) 555-6666",
        "+1 (555) 777-8888"
    ];
    
    // 5% chance of receiving a message every 10 seconds
    if (Math.random() < 0.05) {
        const randomMessage = demoMessages[Math.floor(Math.random() * demoMessages.length)];
        const randomNumber = demoNumbers[Math.floor(Math.random() * demoNumbers.length)];
        
        const newMessage = {
            id: Date.now(),
            sender: randomNumber,
            content: randomMessage,
            timestamp: new Date()
        };
        
        messages.unshift(newMessage);
        displayMessages();
        
        // Show notification
        showNotification(`New message from ${randomNumber}`, 'info');
    }
}, 10000); // Check every 10 seconds 