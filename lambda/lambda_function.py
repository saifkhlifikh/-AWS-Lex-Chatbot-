"""
AWS Lambda Function for Lex Chatbot
This function processes requests from AWS Lex and returns appropriate responses
"""

import json
import datetime
import logging

# Set up logging
logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    """
    Main Lambda handler function
    
    Parameters:
    - event: Input from AWS Lex
    - context: Lambda context object
    
    Returns:
    - Response to AWS Lex
    """
    
    logger.info(f"Event: {json.dumps(event)}")
    
    # Get the intent name from the event
    intent_name = event['sessionState']['intent']['name']
    
    # Route to appropriate intent handler
    if intent_name == 'GreetingIntent':
        return greeting_intent(event)
    elif intent_name == 'BusinessHoursIntent':
        return business_hours_intent(event)
    elif intent_name == 'OrderTrackingIntent':
        return order_tracking_intent(event)
    else:
        return fallback_intent(event)


def greeting_intent(event):
    """Handle greeting intent"""
    
    # Get current time to customize greeting
    current_hour = datetime.datetime.now().hour
    
    if current_hour < 12:
        greeting = "Good morning"
    elif current_hour < 18:
        greeting = "Good afternoon"
    else:
        greeting = "Good evening"
    
    message = f"{greeting}! Welcome to our customer support. How can I help you today?"
    
    return close(event, message)


def business_hours_intent(event):
    """Handle business hours inquiry""" 
    
    message = "We're open Monday through Friday, 9 AM to 5 PM EST. We're closed on weekends and holidays."
    
    return close(event, message)


def order_tracking_intent(event):
    """Handle order tracking requests""" 
    
    # Get slots (user-provided information)
    slots = event['sessionState']['intent']['slots']
    
    # Check if order number was provided
    if slots.get('OrderNumber') and slots['OrderNumber']['value']:
        order_number = slots['OrderNumber']['value']['interpretedValue']
        
        # In a real application, you would query a database here
        # For now, we'll return a mock response
        message = f"I found your order #{order_number}! It's currently in transit and expected to arrive in 2-3 business days."
    else:
        # Ask for order number if not provided
        message = "I'd be happy to help you track your order. Could you please provide your order number?"
    
    return close(event, message)


def fallback_intent(event):
    """Handle unrecognized intents""" 
    
    message = "I'm sorry, I didn't understand that. Could you please rephrase your question?"
    
    return close(event, message)


def close(event, message):
    """
    Build response to close the conversation
    
    Parameters:
    - event: Original event from Lex
    - message: Message to send back to user
    
    Returns:
    - Properly formatted response for Lex
    """
    
    return {
        'sessionState': {
            'dialogAction': {
                'type': 'Close'
            },
            'intent': {
                'name': event['sessionState']['intent']['name'],
                'state': 'Fulfilled'
            }
        },
        'messages': [
            {
                'contentType': 'PlainText',
                'content': message
            }
        ]
    }