import flask
from flask_cors import CORS

server = flask.Flask(__name__)
CORS(server)


import cv2
import matplotlib.pyplot as plt
import cvlib as cv
from cvlib.object_detection import draw_bbox


@server.route('/')
def process():
    # test = []
    # for i in range(35, 57):
    #     img_name = '100MEDIA/DJI_00' + str(i) + '.jpg'
    img_name = 'cars_1.jepg'
    im = cv2.imread(img_name)
    bbox, label, conf = cv.detect_common_objects(im)
    output_image = draw_bbox(im, bbox, label, conf)
    # plt.savefig('export_'+str(i))
    plt.subplots()
    plt.imshow(output_image)
    test.append(str(label.count('car')))
        
    plt.show()
    # return str(test)
    return 'Number of cars in the image is '+ str(label.count('car'))


server.run(port=5000, debug=True)





