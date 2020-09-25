import flask
from flask_cors import CORS

server = flask.Flask(__name__)
CORS(server)


@server.route('/')
def process():
    return 'result from: def process(): return string  in python'


server.run(port=5000, debug=True)





