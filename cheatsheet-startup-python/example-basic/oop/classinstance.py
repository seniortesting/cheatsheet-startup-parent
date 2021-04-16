#!/usr/bin/env python3
# -*- coding: utf-8 -*-

class Student(object):

    def __init__(self,name, age):
        self.name=name
        self.age=age
    # 1. 封装
    def print_score(self):
        print('score: %s'%(self.age))
    def get_grade(self):
        if self.age<10:
            return 'a'
        elif self.age>=40:
            return 'b'
        else:
            return 'c'

if __name__ == '__main__':
    student=Student('walter',23)
    student.print_score()
