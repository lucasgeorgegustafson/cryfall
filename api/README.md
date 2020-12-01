# cryfall API

A web service for managing _Magic: The Gathering_ decks.

## Prerequisites

* Python 3
* PostgreSQL 12

## Running Locally

1. Create the cryfall database by running the following SQL:
    ```sql
    CREATE DATABASE cryfall;
    ```
2. Create a virtual environment:
    ```sh
    python3 -m venv venv
    ```
3. Activate the virtual environment:
    ```sh
    . venv/bin/activate
    ```
4. Install application dependencies:
    ```sh
    pip install -r requirements-lock.txt
    ```
5. Create a local config file from the default:
    ```sh
    cp config/config.py.template config/config.py
    ```
    ...and edit it as necessary based on your local PostgreSQL setup.
6. Create a script to set app's environment variables from the defaults:
    ```sh
    cp setenv.sh.template setenv.sh
    chmod 775 setenv.sh
    ```
7. Run the migrations to create the database structure:
    ```sh
    flask db upgrade
    ```
8. Start the flask development server:
    ```sh
    flask run
    ```
