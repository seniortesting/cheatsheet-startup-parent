#!/usr/bin/env python3
# -*- coding: utf-8 -*-
if __name__ == '__main__':
    try:
        r = 10 / 0
    except ZeroDivisionError as e:
        print('zero divide')
    finally:
        print('finally')


def str2Num(num):
    try:
        return int(num)
    except TypeError as e:
        return float(num)
