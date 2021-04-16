#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import types


class Student(object):
    pass


class NewStudent(object):
    __slots__ = ('name','sex')

class GraduteStudent(NewStudent):
    # 此处如果定义__slot__，则限制的属性是自己的属性加上父类的属性综合
    pass

if __name__ == '__main__':
    s=Student()
    # 动态语言特性
    # 1. 动态绑定一个属性
    s.name='test'
    print(dir(s))
    # 2. 动态绑定一个方法
    def set_age(self,age):
        self.age =age

    s.set_age=types.MethodType(set_age, s)
    s.set_age(4334)
    print(s.age)
    # 给一个实例绑定的方法，对另一个实例是不起作用的
    # s2=Student()
    # s2.set_age(2323)
    # print(s2.age)
    # 给class绑定方法
    Student.set_age=set_age
    s2= Student()
    s2.set_age(13)
    print(s2.age)

    # 2. 使用__slot__
    student=NewStudent()
    student.name ='test'
    student.sex ='fale'
    # student.test='wewe'

    # 继承的类不受__slot__限制
    g=GraduteStudent()
    g.name='walter'
    g.sex='fale'
    g.test='test232'

