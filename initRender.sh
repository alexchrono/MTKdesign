#!/bin/bash

# Initialize the Flask-Migrate/Alembic migrations
flask db init

# Path to your custom scripts
CUSTOM_SCRIPTS_PATH="./custom_scripts_alex"



# Copy the custom env.py and script.py.mako to the migrations directory
cp "${CUSTOM_SCRIPTS_PATH}/env.py" ./migrations/
cp "${CUSTOM_SCRIPTS_PATH}/script.py.mako" ./migrations/

echo "Custom scripts have been applied to migrations."

flask db migrate
echo "GENERATED MIGRATIONS"

flask db upgrade
echo "UPGRADED ALL MIGRATIONS."

flask seed all

echo "SEEDED ALL"
