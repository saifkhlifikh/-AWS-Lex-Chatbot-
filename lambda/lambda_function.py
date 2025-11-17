import json
import boto3
import os
from datetime import datetime

# Initialize AWS clients
dynamodb = boto3.resource('dynamodb')
sns = boto3.client('sns')

# DynamoDB tables
bookings_table = dynamodb.Table(os.environ.get('BOOKINGS_TABLE', 'PawlPal-Bookings'))
sitters_table = dynamodb.Table(os.environ.get('SITTERS_TABLE', 'PawlPal-Sitters'))
pets_table = dynamodb.Table(os.environ.get('PETS_TABLE', 'PawlPal-Pets'))
vets_table = dynamodb.Table(os.environ.get('VETS_TABLE', 'PawlPal-Vets'))

def lambda_handler(event, context):
    """
    Main handler for PawlPal chatbot fulfillment
    Supports multilingual responses (EN, FR, AR-TN)
    """
    
    intent_name = event['sessionState']['intent']['name']
    locale = event.get('bot', {}).get('localeId', 'en_US')
    language = locale.split('_')[0]  # Extract language code
    
    # Route to appropriate intent handler
    handlers = {
        'FindPetSitter': handle_find_pet_sitter,
        'BookPetSitter': handle_book_pet_sitter,
        'CheckBookingStatus': handle_check_booking_status,
        'GetSitterInfo': handle_get_sitter_info,
        'PetHealthVaccines': handle_pet_health_vaccines,
        'VeterinaryPartners': handle_veterinary_partners,
        'PriceEstimation': handle_price_estimation,
        'PetProfileSetup': handle_pet_profile_setup,
        'EmergencyHelp': handle_emergency_help,
        'AppSupport': handle_app_support,
        'FallbackIntent': handle_fallback
    }
    
    handler = handlers.get(intent_name, handle_fallback)
    return handler(event, language)


def handle_fin
