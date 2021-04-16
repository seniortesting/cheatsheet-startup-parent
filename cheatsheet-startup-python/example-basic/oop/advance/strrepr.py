#!/usr/bin/env python3
# -*- coding: utf-8 -*-

class Student(object):

    def __init__(self, name):
        self.__name = name

    def __str__(self):
        print('student object is: %s ' % (self.__name))

    def __call__(self, *args, **kwargs):
        print('call myself...')

    __repr__ = __str__


if __name__ == '__main__':
    s=Student('name').__str__()
