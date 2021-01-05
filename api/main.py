import click
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from views import blueprint
from database import db
from cli import seed_db
from card_import import import_cards

# initialize the flask app
app = Flask(__name__)

# load config values from the file at the path stored in an environment variable
app.config.from_envvar('CRYFALL_CONFIG_FILE')

# configure the app with a database connection
db.init_app(app)

# init the migration library
migrate = Migrate(app, db)

# load the views
app.register_blueprint(blueprint)

# register custom commands
@app.cli.command("seed")
def command_seed_db(): seed_db()


@app.cli.command("import-cards")
@click.option(
    "--path",
    default="oracle-cards.json",
    help="The path to the scryfall oracle cards json file."
)
def command_import_cards(path): import_cards(path)

