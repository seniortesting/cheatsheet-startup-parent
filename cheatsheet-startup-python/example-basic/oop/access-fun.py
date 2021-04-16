#!/usr/bin/env python3
# -*- coding: utf-8 -*-

class Student(object):

    # def __init__(self,name, score):
    #     self.name=name
    #     self.score=score
    # 两个下划线变成了私有属性，private
    def __init__(self, name, score):
        self.__name = name
        self.__score = score

    def print_score(self):
        print('score is: %d' % (self.__score))

    def get_name(self):
        return self.__name

    def set_score(self, score):
        self.__score = score

    def get_score(self):
        return self.__score

    # 变量名类似__xxx__的，也就是以双下划线开头，并且以双下划线结尾的，是特殊变量
    # 特殊变量是可以直接访问的，不是private变量，所以，不能用__name__、__score__这样的变量名


class Student(object):
    def __init__(self, name, gender):
        self.name = name
        self.__gender = gender

    def get_gender(self):
        return self.__gender

    def set_gender(self, gender):
        self.__gender = gender


if __name__ == '__main__':
    student = Student('walter', 23)
    student.print_score()
    # 不能直接访问属性，
    # print(student.name, student.score)
    # 其实就是__name,__score被python解释器更改了对应的属性名称
    print(student._Student__name)
    student.__name = 'new update user'
    print(student.get_name())
    print(student.__name)
