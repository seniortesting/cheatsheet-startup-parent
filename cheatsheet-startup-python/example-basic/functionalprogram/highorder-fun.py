#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import math

def add(x, y, f):
    return f(x)+f(y)
if __name__ == '__main__':
    r=add(100,-3,abs)
    print(r)
