#!/usr/bin/env python3
# -*- coding: utf-8 -*-
class Student(object):
    # 1. 类属性
    name = 'student'


class Student(object):
    count = 0

    def __init__(self, name):
        self.name = name
        Student.count = Student.count + 1


if __name__ == '__main__':
    student = Student()
    name = student.name
    print(name)
    print(Student.name)
    # 修改属性
    student.name = 'test'
    print(student.name)
    print(Student.name)
    del student.name
    print(student.name)
    # 千万不要对实例属性和类属性使用相同的名字,
    # 因为相同名称的实例属性将屏蔽掉类属性，但是当你删除实例属性后，再使用相同的名称，访问到的将是类属性。
    # 类属性相当于静态属性，可以通过类直接访问
