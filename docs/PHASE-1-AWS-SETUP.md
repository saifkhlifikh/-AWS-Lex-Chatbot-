# 📝 Phase 1: AWS Account Setup

## 🎯 Learning Objectives

By the end of this phase, you will:
- ✅ Understand what AWS is and why we use it
- ✅ Create your own AWS account
- ✅ Navigate the AWS Management Console
- ✅ Set up billing alerts to avoid charges
- ✅ Understand the AWS Free Tier

---

## 📖 What is AWS?

**AWS (Amazon Web Services)** is like renting a super-powered computer from Amazon. Instead of buying expensive servers and keeping them in your basement, you rent computing power from AWS's massive data centers around the world.

### Why Use AWS?
- **No upfront cost**: Pay only for what you use
- **Scalable**: Start small, grow as needed
- **Reliable**: Amazon handles maintenance, backups, security
- **Global**: Deploy your app worldwide in minutes
- **Industry standard**: Used by Netflix, Airbnb, NASA, and millions more

---

## 💰 Understanding AWS Free Tier

AWS offers a **Free Tier** perfect for learning:

### What's FREE for 12 months?
- **AWS Lex**: 10,000 text requests per month
- **AWS Lambda**: 1 million requests per month
- **AWS S3**: 5GB of storage
- **And much more!**

### Important Notes:
- ⚠️ You need a credit card, but **we won't exceed free limits**
- ⚠️ We'll set up billing alerts to notify you if anything costs money
- ⚠️ Follow this guide carefully to stay within free tier

---

## 🚀 Step-by-Step: Create Your AWS Account

### Step 1: Go to AWS Sign Up Page

1. Open your browser
2. Go to: [aws.amazon.com](https://aws.amazon.com)
3. Click **"Create an AWS Account"** (orange button in top right)

---

### Step 2: Enter Your Account Information

You'll see a form asking for:

**Root user email address**
- Use your personal email
- This will be your AWS account login
- Example: `yourname@gmail.com`

**AWS account name**
- Give your account a name
- Example: `MyLearningAccount` or `CloudProjects`

**Click**: "Verify email address"

---

### Step 3: Verify Your Email

1. Check your email inbox
2. You'll receive a verification code from AWS
3. Enter the code in the browser
4. Click "Verify"

---

### Step 4: Create Root User Password

Create a **strong password** (AWS requires):
- At least 8 characters
- Uppercase and lowercase letters
- Numbers
- Special characters (!@#$%^&*)

💡 **Tip**: Use a password manager like LastPass or 1Password

---

### Step 5: Contact Information

AWS asks for your personal information:

**Account type**: Choose **"Personal"**
- Unless you're creating this for a company

**Full name**: Your real name

**Phone number**: Your mobile number

**Country/Region**: Where you live

**Address**: Your home address

**Why does AWS need this?**
- It's required for account verification
- Your information is kept private and secure

Click: **"Continue"**

---

### Step 6: Payment Information

⚠️ **Don't worry!** We're staying in the FREE tier.

**Credit/Debit Card**:
- AWS needs a card to verify your identity
- They'll charge $1 temporarily (refunded immediately)
- You won't be charged if you stay in free tier

**Enter your card details**:
- Card number
- Expiration date
- Cardholder name
- Billing address (same as before)

Click: **"Verify and Continue"**

---

### Step 7: Identity Verification

AWS will verify your identity by phone:

1. **Select verification method**: SMS or Voice call
2. **Enter your phone number**
3. **Enter the CAPTCHA code**
4. Click: "Send SMS" or "Call me now"
5. **Enter the 4-digit code** you receive
6. Click: "Continue"

---

### Step 8: Choose a Support Plan

AWS offers different support plans:

**Select**: ✅ **Basic Support - Free**
- Perfect for learning
- Includes access to forums and documentation
- No need to pay for support plans

Click: **"Complete sign up"**

---

### Step 9: Congratulations! 🎉

You'll see a confirmation page:

**"Congratulations! Your AWS account is ready!"**

It may take a few minutes for your account to be fully activated.

---

## 🔐 Step 10: Secure Your Account (IMPORTANT!)

### Enable Multi-Factor Authentication (MFA)

This adds an extra layer of security. Even if someone steals your password, they can't log in without your phone!

1. **Sign in to AWS Console**: [console.aws.amazon.com](https://console.aws.amazon.com)
2. Click your account name (top right) → **"Security credentials"**
3. Find **"Multi-factor authentication (MFA)"**
4. Click: "Assign MFA device"
5. Choose: "Virtual MFA device" (uses your phone)
6. Download an authenticator app:
   - **Google Authenticator** (iOS/Android)
   - **Microsoft Authenticator** (iOS/Android)
   - **Authy** (iOS/Android)
7. Scan the QR code with your app
8. Enter two consecutive MFA codes
9. Click: "Assign MFA"

✅ **Your account is now secure!**

---

## 💰 Step 11: Set Up Billing Alerts

Let's make sure you never get surprised by charges!

### Create a Billing Alarm

1. In AWS Console, search for **"Billing"** in the top search bar
2. Click **"Billing Dashboard"**
3. In the left menu, click **"Billing preferences"**
4. Check these boxes:
   - ✅ "Receive Free Tier Usage Alerts"
   - ✅ "Receive Billing Alerts"
5. Enter your email address
6. Click: "Save preferences"

### Create a CloudWatch Alarm (Extra Safety!)

1. Search for **"CloudWatch"** in the top search bar
2. Make sure you're in **"US East (N. Virginia)"** region (top right)
3. Click **"Alarms"** in the left menu
4. Click: "Create alarm"
5. Click: "Select metric"
6. Choose: "Billing" → "Total Estimated Charge"
7. Select: USD
8. Click: "Select metric"
9. Set threshold: **$1** (or any small amount)
10. Click: "Next"
11. Create new SNS topic (for email notification)
12. Enter your email
13. Click: "Create topic"
14. Click: "Next"
15. Name your alarm: "BillingAlert"
16. Click: "Next" → "Create alarm"

**Check your email** and confirm the SNS subscription!

---

## 🧭 Step 12: Navigate the AWS Console

Let's explore your new AWS Console!

### Key Areas:

**1. Search Bar (Top)**
- Type any service name to find it quickly
- Example: Type "Lex" to find AWS Lex

**2. Services Menu (Top Left)**
- Browse all AWS services by category
- Machine Learning → Amazon Lex
- Compute → AWS Lambda
- Storage → Amazon S3

**3. Region Selector (Top Right)**
- Choose where your services run
- For this project, use: **"US East (N. Virginia)"** (us-east-1)
- Different regions have different prices and available services

**4. Account Menu (Top Right)**
- Your account name
- Access billing, security credentials
- Sign out

---

## 🎓 Understanding AWS Regions

AWS has data centers worldwide called **regions**.

### Why do regions matter?
- **Latency**: Choose a region close to your users
- **Pricing**: Prices vary by region
- **Service availability**: New services launch in certain regions first

### For This Project:
Always use: **US East (N. Virginia)** - `us-east-1`
- Most services available here
- Often cheapest
- Best documentation and examples

💡 **Pro Tip**: Always check the region selector before creating resources!

---

## ✅ Phase 1 Checklist

Before moving to Phase 2, make sure you've completed:

- [ ] Created AWS account
- [ ] Verified email
- [ ] Verified phone number
- [ ] Added payment method
- [ ] Enabled MFA (Multi-Factor Authentication)
- [ ] Set up billing alerts
- [ ] Confirmed SNS subscription email
- [ ] Familiarized yourself with AWS Console
- [ ] Set region to US East (N. Virginia)

---

## 🎉 Congratulations!

You've completed Phase 1! Your AWS account is ready and secured.

### What You've Learned:
✅ What cloud computing is
✅ How to create and secure an AWS account
✅ How to protect yourself from unexpected charges
✅ How to navigate the AWS Console

---

## 📚 Additional Resources

- [AWS Free Tier Details](https://aws.amazon.com/free/)
- [AWS Billing Dashboard](https://console.aws.amazon.com/billing/)
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)

---

## 🚀 Next Steps

**Ready for Phase 2?** → [PHASE-2-LEX-BASICS.md](PHASE-2-LEX-BASICS.md)

In Phase 2, we'll create your first chatbot using AWS Lex!

---

**Questions?** Open an issue in the repository and let's figure it out together! 💪