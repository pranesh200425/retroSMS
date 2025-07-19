// SMS Configuration Template
// Copy this file to config.js and fill in your Twilio credentials

const SMS_CONFIG = {
    // Get these from your Twilio Console: https://console.twilio.com/
    accountSid: 'YOUR_TWILIO_ACCOUNT_SID',
    authToken: 'YOUR_TWILIO_AUTH_TOKEN',
    fromNumber: 'YOUR_TWILIO_PHONE_NUMBER', // Your Twilio phone number
    
    // Twilio API URL (usually don't need to change this)
    apiUrl: 'https://api.twilio.com/2010-04-01/Accounts/'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SMS_CONFIG;
} 