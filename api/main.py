from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from views import blueprint
from database import db

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
