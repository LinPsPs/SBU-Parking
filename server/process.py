import flask
from flask_cors import CORS
from flask import request
import cv2
import matplotlib.pyplot as plt
import cvlib as cv
from cvlib.object_detection import draw_bbox

server = flask.Flask(__name__)
CORS(server)
counts = [10, 10, 10, 10, 10, 10, 10]


# lot is 1 based

@server.route('/<lot>')
def process(lot):
    img_name = 'cars_' + str(lot) + '.jpeg'
    im = cv2.imread(img_name)
    bbox, label, conf = cv.detect_common_objects(im)
    output_image = draw_bbox(im, bbox, label, conf)
    plt.subplots()
    plt.imshow(output_image)
    plt.show()
    count = label.count('car')
    counts[lot - 1] -= count
    return counts[lot - 1]


server.run(port=5000, debug=True)
