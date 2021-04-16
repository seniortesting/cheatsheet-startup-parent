#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from functools import reduce

if __name__ == '__main__':
    r=list(reduce(lambda x:x*3, [1,2,3,4]))
    print(r)
