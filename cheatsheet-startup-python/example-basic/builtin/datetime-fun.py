from datetime import datetime
from time import time

if __name__ == '__main__':
    d = datetime.now()
    print('datetime is: ', d)
    start = time()
    print('start: ', start)
    end = time()
    print('end: ', end-start)
