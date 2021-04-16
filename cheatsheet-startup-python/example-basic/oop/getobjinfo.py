#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import types


class Animation(object):

    def __init__(self, name):
        self.__name = name


def test():
    print('test')


# 测试对应的长度方法
class TestLen(object):

    def __len__(self):
        return 1000


class MyObject(object):
    def __init__(self):
        self.x = 9

    def power(self):
        return self.x * self.x


if __name__ == '__main__':
    # 1. type使用
    t = type(1232)
    print(t)
    t = type(abs)
    print(t)
    a = Animation('dog')
    t = type(a)
    print('animation type: ', t)
    print(type(123) == int)
    print(type('test') == str)
    # 判断一个对象是否是函数
    isfun = type(test) == types.FunctionType
    print('isfun: ', isfun)
    isbuiltin = type(abs) == types.BuiltinFunctionType
    print(isbuiltin)
    islamba = type(lambda x: x + 3) == types.LambdaType
    print(islamba)
    isgenerator = type((x for x in range(100))) == types.GeneratorType
    print(isgenerator)

    # isinstance使用, 优先使用isinstance
    print(isinstance(13, int))
    isany = isinstance([1, 3, 5], (list, tuple))
    print('isany: ', isany)
    isany = isinstance((1, 5, 2), (list, tuple))
    print('isany: ', isany)

    # 2. dir, 所有属性和方法
    str = 'test'
    print(dir(str))
    # len其实是调用对象的__len__()方法
    print(str.__len__())
    test = TestLen()
    print(len(test))

    # hasattr,setattr ,getattr
    obj=MyObject()
    hasproperty =hasattr(obj,'x')
    print('hasattr: ',hasproperty)

    setattr(obj,'y',1000)
    hasproperty=hasattr(obj,'y')
    print('hasatrr: ',hasproperty)

    y=getattr(obj,'y')
    print('getattr:',y)
    notfound=getattr(obj,'test',404)
    print('notfound: ',notfound)

    hasproperty=hasattr(obj,'power')
    print('hasproperty: ',hasproperty)

    power=getattr(obj,'power')
    print(power)
    print(power())

