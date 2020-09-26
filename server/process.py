import flask
from flask_cors import CORS
from flask import request
import cv2
import matplotlib.pyplot as plt
import cvlib as cv
from cvlib.object_detection import draw_bbox

server = flask.Flask(__name__)
CORS(server)
# counts = [10, 10, 10, 10, 10, 10, 10]

lot = ['SP', 'CP', 'GP', 'EP']
lot_limit = [3, 5, 5, 3]
# lot is 1 based

@server.route('/<time>')
def process(time):
    counts = {1: 100, 2: 100, 3: 100, 4: 100}
    for i in range(4):
        if int(time) <= lot_limit[i]:
            img_name = '../img/' + lot[i] + '_' + time + '.jpg'
            im = cv2.imread(img_name)
            bbox, label, conf = cv.detect_common_objects(im)
            output_image = draw_bbox(im, bbox, label, conf)
            plt.subplots()
            plt.imshow(output_image)
            plt.show()
            count = label.count('car')
            counts[i+1] -= count
        else:
            counts[i+1] = -1
    return counts


server.run(port=5000, debug=True)
