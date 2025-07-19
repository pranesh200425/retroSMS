# RetroSMS - Vintage SMS Application

A nostalgic, retro-styled SMS application that simulates the experience of using an old mobile phone with a vintage aesthetic.

## Features

- **Vintage Design**: CRT-style display with green text on black background
- **Message Display**: Shows incoming messages with sender's phone number and timestamp
- **New Message Modal**: Simple form to send messages to any phone number
- **Notification Style**: Messages appear as individual notifications rather than conversations
- **Retro Effects**: Scan lines, glowing effects, and vintage typography
- **Responsive Design**: Works on both desktop and mobile devices

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
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Features in Detail

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
- **Responsive**: Adapts to different screen sizes
- **Cross-browser**: Works on modern browsers
- **Accessible**: Proper form labels and keyboard navigation

## Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## Future Enhancements

- Real SMS integration via APIs
- Message history persistence
- Contact list functionality
- Custom themes
- Sound effects with actual audio files

## Getting Started

1. Download all files to a folder
2. Open `index.html` in your web browser
3. Start using the vintage SMS experience!

The application is ready to use immediately - no installation or setup required. 