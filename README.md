# 🤖 AWS Lex Chatbot

> Enterprise-grade conversational AI chatbot built with AWS Lex, Lambda, and serverless architecture.

[![AWS](https://img.shields.io/badge/AWS-Lex-FF9900?logo=amazon-aws)](https://aws.amazon.com/lex/)
[![Python](https://img.shields.io/badge/Python-3.9+-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📖 Overview

An intelligent customer support chatbot leveraging AWS cloud services to provide automated responses, order tracking, and business information. Built with a serverless architecture for scalability and cost-efficiency.

### Key Features

- 🧠 **Natural Language Understanding** - Powered by AWS Lex NLU engine
- ⚡ **Serverless Architecture** - Zero infrastructure management with Lambda
- 📊 **Real-time Processing** - Instant responses with sub-second latency
- 🔒 **Secure & Compliant** - AWS IAM integration and encryption
- 💰 **Cost Effective** - Pay-per-use model with AWS Free Tier support
- 🌐 **Web Integration** - Responsive chat interface

## 🏗️ Architecture

```
┌─────────────┐
│   Client    │
│  (Browser)  │
└──────┬──────┘
       │ HTTPS
       ▼
┌─────────────────┐
│   AWS S3        │
│ Static Website  │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│   AWS Lex       │
│   Bot Engine    │
└──────┬────────���─┘
       │
       ▼
┌─────────────────┐
│  AWS Lambda     │
│ Business Logic  │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│   DynamoDB      │
│   (Optional)    │
└─────────────────┘
```

## 🛠️ Tech Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **NLU Engine** | AWS Lex | Intent recognition & slot filling |
| **Backend** | AWS Lambda (Python 3.9) | Request processing & business logic |
| **Frontend** | HTML5, CSS3, JavaScript | User interface |
| **Hosting** | AWS S3 + CloudFront | Static website delivery |
| **Database** | DynamoDB | Session & user data storage |
| **Security** | AWS IAM | Authentication & authorization |

## 📂 Project Structure

```
-AWS-Lex-Chatbot-/
├── bot-configuration/
│   └── intents/
│       ├── greeting.json           # Greeting intent definition
│       ├── business-hours.json     # Business hours intent
│       └── order-tracking.json     # Order tracking intent
├── lambda/
│   ├── lambda_function.py          # Core Lambda handler
│   └── requirements.txt            # Python dependencies
├── website/
│   ├── index.html                  # Chat interface
│   ├── style.css                   # UI styling
│   └── script.js                   # Client-side logic
├── docs/
│   └── architecture.md             # System architecture
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- AWS Account with appropriate IAM permissions
- AWS CLI configured
- Python 3.9+
- Node.js (optional, for local testing)

### Deployment

#### 1. Configure AWS Lex Bot

```bash
# Import bot configuration
aws lex-models put-intent --cli-input-json file://bot-configuration/intents/greeting.json
aws lex-models put-intent --cli-input-json file://bot-configuration/intents/business-hours.json
aws lex-models put-intent --cli-input-json file://bot-configuration/intents/order-tracking.json
```

#### 2. Deploy Lambda Function

```bash
cd lambda
pip install -r requirements.txt -t .
zip -r function.zip .
aws lambda create-function \
  --function-name lex-chatbot-handler \
  --runtime python3.9 \
  --handler lambda_function.lambda_handler \
  --zip-file fileb://function.zip \
  --role arn:aws:iam::YOUR_ACCOUNT_ID:role/lambda-lex-execution-role
```

#### 3. Deploy Website

```bash
cd website
aws s3 sync . s3://your-bucket-name/ --acl public-read
aws s3 website s3://your-bucket-name/ --index-document index.html
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `BOT_NAME` | Lex bot name | Yes |
| `BOT_ALIAS` | Lex bot alias | Yes |
| `REGION` | AWS region | Yes |
| `DYNAMODB_TABLE` | DynamoDB table name | No |

### IAM Permissions

The Lambda function requires the following IAM permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "lex:PostContent",
        "lex:PostText",
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "*"
    }
  ]
}
```

## 💬 Bot Capabilities

### Supported Intents

| Intent | Description | Sample Utterances |
|--------|-------------|-------------------|
| **GreetingIntent** | Welcome users | "Hello", "Hi", "Hey there" |
| **BusinessHoursIntent** | Provide business hours | "When are you open?", "What are your hours?" |
| **OrderTrackingIntent** | Track customer orders | "Track my order", "Where is order #12345?" |

### Slot Types

- `OrderNumber` - Captures alphanumeric order identifiers
- `DateTime` - Handles date/time inputs for scheduling

## 📊 Performance

- **Response Time**: < 500ms average
- **Availability**: 99.9% SLA (AWS Lex)
- **Scalability**: Auto-scales to handle concurrent requests
- **Cost**: ~$0.01 per 1,000 requests (within Free Tier limits)

## 🔐 Security

- ✅ HTTPS enforced for all communications
- ✅ AWS IAM role-based access control
- ✅ Encryption at rest and in transit
- ✅ Input validation and sanitization
- ✅ CloudWatch logging for audit trails

## 🧪 Testing

### Local Testing

```bash
# Test Lambda function locally
python -m pytest tests/

# Test Lex bot in console
aws lex-runtime post-text \
  --bot-name CustomerSupportBot \
  --bot-alias prod \
  --user-id testuser \
  --input-text "Hello"
```

### Integration Testing

Use the AWS Lex console test window or the included website interface to validate bot responses.

## 📈 Monitoring

Integrated with AWS CloudWatch for:

- Request/response metrics
- Error rates and latency
- Custom business metrics
- Automated alerting

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Sayf Khlifi** - [@saifkhlifikh](https://github.com/saifkhlifikh)

Project Link: [https://github.com/saifkhlifikh/-AWS-Lex-Chatbot-](https://github.com/saifkhlifikh/-AWS-Lex-Chatbot-)

## 🙏 Acknowledgments

- AWS Lex Documentation
- AWS Lambda Best Practices
- Serverless Architecture Patterns

---

⭐ **Star this repository if you find it useful!**