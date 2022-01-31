# Austama

WARNING: THIS PROJECT IS IN ACTIVE DEVELOPMENT

This project is a in active development state, used to help austama project to
be shared across many network. Please don't use it in production environment.

## Why?

This project was created to easily share document produced by austama
project. It is not intended to be run as multi-user application, but only as
simple local application.

## How?

TL;DR: This project is a simple interface to [telethon
module](https://docs.telethon.dev), offering an interface to play with this
module with json datastructure over a web api.

 - [Telethon](https://github.com/LonamiWebs/Telethon) module as Telegram Client;
 
 - [JSON](https://docs.python.org/3/library/json.html) as main datastructure;
 
 - [Flask](https://flask.palletsprojects.com/en/2.0.x/) as Web Server;

 - [JSON-RPC](https://www.jsonrpc.org/) like structure, validated by
   [jsonschema](https://pypi.org/project/jsonschema/) module;
 
 - [SQLite](https://docs.python.org/3/library/sqlite3.html) for managing states
   (e.g. session, documents, message...);
   
 - [Python Typing](https://docs.python.org/3/library/typing.html) to design
   interfaces;
   
 - [Pysocks](https://github.com/Anorov/PySocks) for proxy support;
 
 - [Unittest](https://docs.python.org/3/library/unittest.html) and
   [Mock](https://docs.python.org/3/library/unittest.mock.html) as test
   framework;
   
 - On the frontend side, we are looking for something small like
   [Mithril](https://mithril.js.org) or [Riot](https://riot.js.org);
   
 - [PureCSS](https://purecss.io) is used for style.

More documentation can be found in `docs` directory at the root of this project.

## Using it?

To start a python console with austama support:

```sh
make console
```
