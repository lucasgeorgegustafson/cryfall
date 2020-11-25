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
6. Run the migrations to create the database structure:
    ```sh
    FLASK_APP=main.py flask db upgrade
    ```
7. Create a local run script from the default:
    ```sh
    cp run.sh.template run.sh
    chmod 775 run.sh
    ```
8. Start the flask development server:
    ```sh
    FLASK_APP=main.py flask run
    ```
