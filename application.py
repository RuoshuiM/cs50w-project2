import os

from flask import Flask, render_template, url_for, send_from_directory
from flask_socketio import SocketIO, emit

# settings
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
reload = os.getenv("FLASK_ENV") == "development"
debug = os.getenv("FLASK_DEBUG") == "1"

#  Only for dev mode backend: disable browser cache
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

socketio = SocketIO(app)
# doc: https://flask-socketio.readthedocs.io/en/latest/

# @app.add_url_rule('/favicon.ico', redirect_to=url_for('static', filename='favicon.png'))
@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.png', mimetype='image/vnd.microsoft.icon')

@app.route("/")
def index():
    return render_template('index.html')

# Trying to add React to this project
# https://stackoverflow.com/questions/54263609/adding-flask-server-to-create-react-app-default-app-404-on-dist-bundle-js


if __name__ == '__main__':
    socketio.run(app, use_reloader=reload, debug=debug)