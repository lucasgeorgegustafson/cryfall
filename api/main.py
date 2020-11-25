from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from views import blueprint
from database import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres+psycopg2://postgres:password@localhost:5432/cryfall'
db.init_app(app)
app.register_blueprint(blueprint)
