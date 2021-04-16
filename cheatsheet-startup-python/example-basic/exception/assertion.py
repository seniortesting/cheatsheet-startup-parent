#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import logging
logging.basicConfig(level=logging.INFO)
if __name__ == '__main__':
    n=3+5
    logging.info('msg is: {0}'.format(n))
    assert n==9