"""Austama Flask Application, a really light web interface for telegram based
on telethon.

"""

from flask import Flask, url_for, render_template, request
import austama
import logging

app = Flask(__name__)

@app.route('/')
def index():
    """ main route, only used to load javascript application.
    """
    return render_template('index.html')

@app.route('/telegram', methods=['POST'])
def telegram():
    """return telegram client status, numbers of messages (published or not).
    """
    return {
        'test': 'test'
    }

@app.route('/telegram/settings', methods=['POST'])
def telegram_settings():
    """set telegram client configuration.
    """
    return {
        'result': []
    }

@app.route('/telegram/sign_in', methods=['POST'])
def telegram_signin():
    """connect to telegram with one account. This is a two step connection, first
    you share your api_id and api_hash or your phone number, then you wait for
    authentication code. If valid, the session is stored in string format in
    database.
    """
    print(request.get_json())
    return {
        "result": {
            'callback': '/telegram/sign_in/random_string'
        }
    }

@app.route('/telegram/sign_in/<callback>', methods=['POST'])
def telegram_signin_callback():
    """signin callback for authentication code.
    """
    return {
        'result': {
            'id': 'session_id'
        }
    }

@app.route('/telegram/sign_out', methods=['POST'])
def telegram_signout():
    """explicitely disconnect a client and remove a session from database.
    """
    return {
        'result': 'success'
    }

@app.route('/telegram/messages', methods=['POST'])
def telegram_messages():
    """ list all available messages, published or not.
    """
    return {
        'result': [
            {
                'id': 1,
                'message': 'my message',
                'create_date': '2022-01-01 10:00:00',
                'remote_id': '',
                'publish_date': '',
                'delete_date': ''
            }
        ]
    }

@app.route('/telegram/messages/<int:id>', methods=['POST'])
def telegram_message():
    """ list only one selected message.
    """
    return {
        'result': {
            'id': 1,
            'message': 'my message',
            'create_date': '2022-01-01 10:00:00',
            'remote_id': '',
            'publish_date': '',
            'delete_date': ''
        }
    }
