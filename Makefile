help:
	@echo "Usage: make [bootstrap|console]"

all: bootstrap

bootstrap: venv

venv:
	virtualenv venv
	./venv/bin/pip install -r requirements.txt
	./venv/bin/python setup.py install

venv-update: venv
	./venv/bin/pip install -r requirements.txt
	./venv/bin/python setup.py install

console: bootstrap
	./venv/bin/python

serve: bootstrap
	FLASK_APP=austama/flask ./venv/bin/flask run

test: bootstrap
	./venv/bin/python -m unittest discover tests '*_test.py'

test-schema:
	cat ./priv/schema.sql | sqlite3 test.db
	cat ./priv/schema_test.sql | sqlite3 test.db
