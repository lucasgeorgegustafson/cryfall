from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from views import blueprint
from database import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres+psycopg2://postgres:password@localhost:5432/cryfall'
db.init_app(app)
migrate = Migrate(app, db)
app.register_blueprint(blueprint)
