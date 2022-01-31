import json

def load(file):
    with open(file) as fp:
        return json.load(fp)

def new(data):
    return data['method']

	
