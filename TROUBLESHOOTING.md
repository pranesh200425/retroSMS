# 🔧 Troubleshooting Guide

## ❌ "Phone number is unverified" Error

### **Problem:**
```
The number +91954369XXXX is unverified. Trial accounts cannot send messages to unverified numbers
```

### **Solution:**

#### **Option 1: Verify the Phone Number (Recommended)**
1. Go to [Twilio Console](https://console.twilio.com/)
2. Click **"Phone Numbers"** → **"Manage"** → **"Verified Caller IDs"**
3. Click **"Add a new Caller ID"**
4. Enter the phone number you want to send to
5. Twilio will send a verification SMS to that number
6. Enter the verification code
7. ✅ Now you can send SMS to this number!

#### **Option 2: Test with Your Own Number**
1. Verify your own phone number first
2. Send test messages to yourself
3. This is the safest way to test

#### **Option 3: Upgrade to Paid Account**
- Upgrade at [Twilio Console](https://console.twilio.com/)
- Pay-as-you-go: ~$0.0075 per SMS
- No verification required for any number

## 📱 **How to Verify a Phone Number**

### **Step-by-Step:**
1. **Login** to [Twilio Console](https://console.twilio.com/)
2. **Navigate** to Phone Numbers → Manage → Verified Caller IDs
3. **Click** "Add a new Caller ID"
4. **Enter** the phone number (e.g., +91954369XXXX)
5. **Select** "SMS" as verification method
6. **Click** "Add Caller ID"
7. **Check** the phone for verification SMS
8. **Enter** the 6-digit code
9. **Click** "Verify Caller ID"

### **What Happens:**
- ✅ Number becomes verified
- ✅ You can send SMS to this number
- ✅ Works with trial account
- ✅ No additional cost

## 🎯 **Quick Test**

### **Test with Your Own Number:**
1. Verify your own phone number first
2. Open RetroSMS app
3. Click "New Message"
4. Enter your own number
5. Send a test message
6. Check your phone for the SMS

### **Expected Result:**
- ✅ "SMS sent successfully!" notification
- ✅ Message appears in your phone
- ✅ No more verification errors

## 💡 **Pro Tips**

### **For Development:**
- Always verify your own number first
- Test with friends' numbers (ask permission!)
- Keep a list of verified numbers

### **For Production:**
- Upgrade to paid Twilio account
- No verification needed
- Send to any number worldwide

## 🆘 **Still Having Issues?**

### **Common Problems:**
1. **"Invalid phone number"** → Check format (+91XXXXXXXXXX)
2. **"Verification failed"** → Check SMS for correct code
3. **"Number not found"** → Ensure number is active
4. **"Rate limited"** → Wait a few minutes, try again

### **Get Help:**
- [Twilio Support](https://support.twilio.com/)
- [Twilio Documentation](https://www.twilio.com/docs)
- [SMS Best Practices](https://www.twilio.com/docs/sms/best-practices)

## 🎉 **Success Checklist**

- ✅ Twilio account created
- ✅ Credentials configured in config.js
- ✅ Phone number verified in Twilio Console
- ✅ Test message sent successfully
- ✅ RetroSMS app working perfectly!

Once you verify the phone number, your RetroSMS app will work perfectly! 🚀 