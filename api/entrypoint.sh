#!/bin/bash

python manage.py  migrate

daphne -b 0.0.0.0 api.asgi:application