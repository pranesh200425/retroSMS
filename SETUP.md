# 🚀 RetroSMS Setup Guide

## Quick Start: Real SMS in 5 Minutes

### 1. Get Twilio Account (2 minutes)
1. Go to [https://www.twilio.com](https://www.twilio.com)
2. Click "Sign up for free"
3. Fill in your details and verify your email
4. **Important**: Verify your phone number when prompted

### 2. Get Your Twilio Credentials (1 minute)
1. Go to [Twilio Console](https://console.twilio.com/)
2. Copy your **Account SID** (starts with "AC...")
3. Copy your **Auth Token** (click "show" to reveal)
4. Go to "Phone Numbers" → "Manage" → "Active numbers"
5. Copy your **Twilio Phone Number** (starts with "+1...")

### 3. Configure the App (1 minute)
1. Open `config.js` in any text editor
2. Replace the placeholder values:

```javascript
const SMS_CONFIG = {
    accountSid: 'YOUR_ACCOUNT_SID_HERE',              // Your Account SID
    authToken: 'YOUR_AUTH_TOKEN_HERE',                // Your Auth Token
    fromNumber: 'YOUR_TWILIO_NUMBER_HERE',           // Your Twilio number
    apiUrl: 'https://api.twilio.com/2010-04-01/Accounts/'
};
```

### 4. Test Your Setup (1 minute)
1. Open `index.html` in your browser
2. Click "New Message"
3. Enter a real phone number (your own to test)
4. Type a test message
5. Click "Send"
6. Check your phone for the SMS!

## 📱 Phone Number Formats

### Supported Formats:
- **US**: `(555) 123-4567` or `555-123-4567` or `5551234567`
- **International**: `+44 20 7946 0958` or `+1234567890`
- **With Country Code**: `+1 555 123 4567`

### Examples:
```
✅ Good: +1 (555) 123-4567
✅ Good: +44 20 7946 0958  
✅ Good: 555-123-4567
❌ Bad: 123-4567 (missing country code)
```

## 🔧 Troubleshooting

### "SMS not configured" Message
- Check that you updated `config.js` with real values
- Make sure you didn't leave the placeholder text

### "Failed to send SMS" Error
- Verify your Twilio credentials are correct
- Check that your Twilio account has credits
- Ensure the phone number format is correct

### "Demo mode" Messages
- This means Twilio isn't configured yet
- Follow the setup steps above

### Browser Console Errors
- Open Developer Tools (F12)
- Check the Console tab for error messages
- Common issues: CORS errors (use a local server)

## 💰 Twilio Pricing

### Free Trial:
- **$15-20 free credit**
- **1 phone number**
- **Limited SMS** (usually enough for testing)

### Paid Plans:
- **Pay-as-you-go**: ~$0.0075 per SMS
- **Bulk discounts** available
- **Multiple phone numbers**

## 🔒 Security Best Practices

### For Development:
- Keep `config.js` in your local folder only
- Don't share your credentials

### For Production:
- Use environment variables
- Set up a backend proxy
- Never expose credentials in frontend code

## 🎯 Testing Tips

### Test with Your Own Number:
1. Send a message to your own phone number
2. This is the safest way to test
3. You'll receive the SMS immediately

### Test with Friends:
1. Ask a friend for their phone number
2. Send them a test message
3. Make sure they're okay with it first!

## 📞 Advanced Features

### International SMS:
- Works with any country code
- Some countries require verification
- Check Twilio's coverage map

### Message Length:
- Standard SMS: 160 characters
- Long messages: Automatically split
- Unicode: May reduce character limit

## 🆘 Need Help?

### Common Issues:
1. **"Invalid phone number"** → Check format
2. **"Authentication failed"** → Check credentials
3. **"Insufficient funds"** → Add credits to Twilio
4. **"Not delivered"** → Check recipient number

### Support Resources:
- [Twilio Documentation](https://www.twilio.com/docs)
- [Twilio Support](https://support.twilio.com/)
- [SMS Best Practices](https://www.twilio.com/docs/sms/best-practices)

## 🎉 Success!

Once you see "✅ SMS sent successfully!", you're all set! 

Your RetroSMS app is now sending real SMS messages with that beautiful vintage aesthetic. Enjoy sending nostalgic messages to your friends and family! 