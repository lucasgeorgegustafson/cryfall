from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres+psycopg2://postgres:password@localhost:5432/cryfall'

db = SQLAlchemy(app)
migrate = Migrate(app, db)

class Deck(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128))

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/decks")
def list_decks():
   return Deck.query.all() 




