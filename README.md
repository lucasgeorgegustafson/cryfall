# cryfall

```
                           ..:::a:::::..
                      ..:::::::d8::::::::::..
                   .::::::::::d88b:::::::::::::.
                 .:::::::::::d8888:::::::::::::::.
               .::::::::::::d88888b::::::::::::::::.
              :::::::::::::d8888888::::::::::::::::::
             ::::::::::::d888888888b::::::::::::::::::
            ::::::::::::d88888888888b::::::::::::::::::
           .:::::::::::d88888888888888b::::::::::::::::.
           :::::::::::d888888888888888888a::::::::::::::
           ::::::::::d888888888888888b:Y88b:::::::::::::
           :::::::::d88888888888888888b:888b::::::::::::
           `::::::::8888888888888888888:Y888b::::::::::'
            ::::::::8888888888888888888::Y888::::::::::
             :::::::Y888888888888888888?:d88P:::::::::
              :::::::Y88888888888888888bd88P:::::::::
               `:::::::Y88888888888888888P:::::::::'
                 `::::::Y88888888888888P:::::::::'
                   `::::::Y8888888888P:::::::::'
                      ``::::::Y888P::::::::''
                           ``:::::::::''
```

A web service for managing _Magic: The Gathering_ decks, created as an exercise in learning how to develop web applications using Python and Flask.

## Prerequisites

Python 3 with the `pip` and `venv` modules. The examples in this document will assume that the `python` command points to an installation of Python 3; replace the command names with `python3` if necessary.

## Running Locally

1. Create a virtual environment:
    ```sh
    python -m venv venv
    ```
2. Activate the virtual environment:
    ```sh
    . venv/bin/activate
    ```
3. Install application dependencies:
    ```sh
    pip install -r requirements.txt
    ```
    If psycopg2 doesn't build on Ubuntu, google it. You probably just need to `apt-get install` something.
4. Start the flask development server:
    ```sh
    FLASK_APP=main.py flask run
    ```
