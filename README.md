# RetroSMS - Vintage SMS Application

A nostalgic, retro-styled SMS application that can send **real SMS messages** to actual phone numbers using Twilio API integration.

## Features

- **Real SMS Functionality**: Send actual SMS messages to real phone numbers
- **Vintage Design**: CRT-style display with green text on black background
- **Message Display**: Shows incoming messages with sender's phone number and timestamp
- **New Message Modal**: Simple form to send messages to any phone number
- **Notification Style**: Messages appear as individual notifications rather than conversations
- **Retro Effects**: Scan lines, glowing effects, and vintage typography
- **Responsive Design**: Works on both desktop and mobile devices

## 🚀 Real SMS Setup

### Step 1: Get Twilio Account
1. Sign up for a free Twilio account at [https://www.twilio.com](https://www.twilio.com)
2. Verify your account (you'll get free credits to start)

### Step 2: Get Your Credentials
1. Go to your [Twilio Console](https://console.twilio.com/)
2. Find your **Account SID** and **Auth Token**
3. Get a **Twilio Phone Number** (you'll need this to send SMS)

### Step 3: Configure the App
1. Open `config.js` in your code editor
2. Replace the placeholder values:
   ```javascript
   const SMS_CONFIG = {
       accountSid: 'YOUR_ACTUAL_ACCOUNT_SID',
       authToken: 'YOUR_ACTUAL_AUTH_TOKEN', 
       fromNumber: 'YOUR_TWILIO_PHONE_NUMBER',
       apiUrl: 'https://api.twilio.com/2010-04-01/Accounts/'
   };
   ```

### Step 4: Test Your Setup
1. Open `index.html` in your browser
2. Try sending a message to a real phone number
3. You should see "✅ SMS sent successfully!" notification

## How to Use

1. **View Messages**: The main page displays all received messages with sender information and timestamps
2. **Send New Message**: Click the "New Message" button (✉) in the bottom right corner
3. **Fill Form**: Enter the recipient's phone number and your message
4. **Send**: Click "Send" to submit the message

## File Structure

```
retroSMS/
├── index.html      # Main HTML structure
├── styles.css      # Vintage styling and animations
├── script.js       # JavaScript functionality with SMS API
├── config.js       # SMS configuration (Twilio credentials)
└── README.md       # This file
```

## Features in Detail

### Real SMS Functionality
- **Twilio Integration**: Uses Twilio API to send actual SMS messages
- **International Support**: Can send to phone numbers worldwide
- **Error Handling**: Proper error messages for failed sends
- **Demo Mode**: Falls back to demo if not configured

### Visual Design
- **CRT Effect**: Scan lines overlay for authentic retro feel
- **Green Terminal**: Classic green text on black background
- **Glowing Elements**: Interactive elements have subtle glow effects
- **Vintage Typography**: Uses VT323 and Press Start 2P fonts

### Message System
- **Individual Messages**: Each message is displayed as a separate notification
- **Sender Information**: Shows the phone number of who sent the message
- **Timestamps**: Relative time display (e.g., "2h ago", "Just now")
- **Auto-scroll**: New messages appear at the top

### Modal Interface
- **Clean Form**: Simple phone number and message input
- **Validation**: Basic phone number format validation
- **Sending Animation**: Loading dots while "sending" message
- **Success Notifications**: Confirmation when message is sent

### Demo Features
- **Sample Messages**: Pre-loaded with example messages
- **Random Incoming**: Simulates receiving random messages every 10 seconds
- **Sound Effects**: Console logs for typing and interaction sounds

## Technical Details

- **Pure HTML/CSS/JavaScript**: No external dependencies
- **Twilio API**: For real SMS functionality
- **Responsive**: Adapts to different screen sizes
- **Cross-browser**: Works on modern browsers
- **Accessible**: Proper form labels and keyboard navigation

## SMS Configuration

### Phone Number Format
- Supports international numbers: `+1234567890`
- US numbers: `(555) 123-4567` or `555-123-4567`
- International: `+44 20 7946 0958`

### Twilio Requirements
- **Free Trial**: 1 phone number, limited SMS
- **Paid Account**: More numbers, higher limits
- **Verification**: Some countries require verification

## Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## Troubleshooting

### SMS Not Sending
1. Check your Twilio credentials in `config.js`
2. Verify your Twilio account has credits
3. Check the browser console for error messages
4. Ensure the phone number is in correct format

### Demo Mode
If you see "Demo mode" messages, it means:
- Twilio credentials not configured
- Check `config.js` for proper setup

## Security Notes

⚠️ **Important**: Never commit your Twilio credentials to public repositories
- Keep `config.js` in your `.gitignore`
- Use environment variables in production
- Consider using a backend proxy for production apps

## Future Enhancements

- Message history persistence
- Contact list functionality
- Custom themes
- Sound effects with actual audio files
- Webhook support for incoming messages
- Message templates

## Getting Started

1. **Setup Twilio**: Follow the setup instructions above
2. **Configure**: Update `config.js` with your credentials
3. **Test**: Open `index.html` and try sending a message
4. **Enjoy**: Start sending vintage-style SMS messages!

The application is ready to send real SMS messages once configured with Twilio credentials. 