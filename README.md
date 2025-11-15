# 🤖 AWS Lex Chatbot - Beginner Cloud Engineering Project

> An AI-powered customer support chatbot built with AWS Lex, Lambda, and deployed on AWS S3. Perfect for learning cloud engineering!

## 📋 What is This Project?

This is a **hands-on learning project** where we build an intelligent chatbot from scratch using Amazon Web Services (AWS). By the end, you'll have:

- ✅ A working AI chatbot that understands natural language
- ✅ Cloud infrastructure knowledge (AWS Lex, Lambda, S3)
- ✅ A live website with your chatbot integrated
- ✅ Portfolio-ready project on GitHub

## 🎯 What You'll Learn

### Cloud Services
- **AWS Lex**: Amazon's service for building conversational interfaces (the same tech behind Alexa!)
- **AWS Lambda**: Run code without managing servers (serverless computing)
- **AWS S3**: Host your website on cloud storage
- **AWS IAM**: Manage permissions and security

### Development Skills
- Natural Language Processing (NLP) basics
- RESTful API integration
- Frontend web development (HTML/CSS/JavaScript)
- Git & GitHub workflow

## 🛠️ Tech Stack

| Technology | Purpose | Why? |
|------------|---------|------|
| AWS Lex | Chatbot brain | Understands user intent |
| AWS Lambda | Backend logic | Processes requests & responses |
| DynamoDB | Database | Stores user data (optional) |
| HTML/CSS/JS | Frontend | User interface |
| AWS S3 | Hosting | Serves the website |

## 📚 Project Structure

```
-AWS-Lex-Chatbot-/
├── README.md                 # You are here!
├── .gitignore               # Files to ignore
├── docs/                    # Documentation
│   ├── PHASE-1-AWS-SETUP.md
│   ├── PHASE-2-LEX-BASICS.md
│   ├── PHASE-3-LAMBDA.md
│   └── architecture.md
├── bot-configuration/       # AWS Lex bot definitions
│   └── intents/
│       ├── greeting.json
│       ├── faq.json
│       └── order-tracking.json
├── lambda/                  # Backend code
│   ├── requirements.txt
│   └── lambda_function.py
├── website/                 # Frontend
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
└── scripts/                 # Deployment scripts
    └── setup.sh
```

## 🚀 Getting Started

### Prerequisites

Before we begin, make sure you have:

- [ ] A GitHub account (you're already here! ✅)
- [ ] An email address for AWS
- [ ] A credit/debit card (for AWS account - we'll use **FREE tier only**)
- [ ] A computer with internet access
- [ ] Enthusiasm to learn! 💪

### Phase 1: AWS Account Setup

**👉 Start here:** [docs/PHASE-1-AWS-SETUP.md](docs/PHASE-1-AWS-SETUP.md)

We'll walk through:
1. Creating your AWS account
2. Understanding the AWS Free Tier
3. Setting up billing alerts (so you never get charged!)
4. Navigating the AWS Console

### Phase 2: Building Your First Bot

**📖 Guide:** [docs/PHASE-2-LEX-BASICS.md](docs/PHASE-2-LEX-BASICS.md)

Learn:
- What is AWS Lex and how it works
- Creating your first bot in the console
- Understanding Intents, Utterances, and Slots
- Testing your bot

### Phase 3: Adding Intelligence with Lambda

**📖 Guide:** [docs/PHASE-3-LAMBDA.md](docs/PHASE-3-LAMBDA.md)

Build:
- Your first Lambda function
- Connect Lambda to your Lex bot
- Add dynamic responses

### Phase 4: Website Integration

Create a simple website and integrate your chatbot

### Phase 5: Deployment

Deploy your website to AWS S3 and make it live!

## 💡 How This Chatbot Works

```
User types message
       ↓
   [Website UI]
       ↓
   [AWS Lex] ← Understands intent
       ↓
  [AWS Lambda] ← Processes logic
       ↓
   [Response] → Back to user
```

**Example Conversation:**
- **User:** "What are your business hours?"
- **Bot:** "We're open Monday-Friday, 9 AM - 5 PM EST!"

## 📖 Key Concepts Explained

### What is a Chatbot?
A chatbot is a program that can have conversations with humans. It understands what you're asking and responds appropriately.

### What is AWS?
Amazon Web Services (AWS) is a cloud platform that provides computing resources (servers, databases, AI services) that you can rent instead of buying your own hardware.

### What is "Serverless"?
It means you write code that runs in the cloud without managing servers. AWS handles all the infrastructure!

### What is an Intent?
An intent is what the user wants to do. Example: "CheckBalance" or "OrderPizza"

### What is Natural Language Processing (NLP)?
It's AI technology that helps computers understand human language, not just exact commands.

## 📝 Progress Tracking

Track your progress through [GitHub Issues](https://github.com/saifkhlifikh/-AWS-Lex-Chatbot-/issues)

- [ ] Phase 1: AWS Account Setup
- [ ] Phase 2: First Lex Bot
- [ ] Phase 3: Add Intents
- [ ] Phase 4: Lambda Integration
- [ ] Phase 5: Website Frontend
- [ ] Phase 6: Deployment
- [ ] Phase 7: Testing & Documentation

## 🎓 Resources

### AWS Documentation
- [AWS Lex Documentation](https://docs.aws.amazon.com/lex/)
- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/)
- [AWS Free Tier](https://aws.amazon.com/free/)

### Tutorials
- [AWS Lex Workshop](https://catalog.us-east-1.prod.workshops.aws/workshops/f8b3e6c8-6287-43f7-b945-86dd3b4ae715/en-US)
- [Serverless Chatbot Tutorial](https://aws.amazon.com/getting-started/hands-on/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/)

## 🤝 Contributing

This is a learning project! Feel free to:
- Open issues for questions
- Suggest improvements
- Share your experience

## 📄 License

This project is open source and available under the MIT License.

## 🙋 Questions?

Open an issue and let's learn together!

---

**Built with ❤️ by a beginner cloud engineer learning AWS**

🌟 Star this repo if you find it helpful!