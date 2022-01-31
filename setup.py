#!/usr/bin/env python

import os
from distutils.core import setup

def read(fname):
    return open(os.path.join(os.path.dirname(__file__), fname)).read()

setup(
    name = "austama",
    version = "0.1.0",
    author = "Austama Project",
    author_email = "Austama",
    description = ("Austama project community manager"),
    license = "MIT",
    keywords = "austama",
    url = "https://github.com/austama/austama",
    package_dir = { 'austama': 'austama' },
    packages=['austama'],
    long_description=read('README.md'),
    classifiers=[
        "Development Status :: 1 - Planning",
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11 ",
        "Framework :: Flask",
    ],
)
