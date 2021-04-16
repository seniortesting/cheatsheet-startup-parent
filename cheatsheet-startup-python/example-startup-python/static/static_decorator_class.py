#!/usr/bin/env python3
# -*- coding: utf-8 -*-

class StaticMethodTest(object):


    @staticmethod
    def staticmethod():
        print('这是静态方法')

    @classmethod
    def classmethod(cls):
        print("这是classmethod调用: %s"%(cls.__name__))

    def normalMethod(self):
        print("这是常规方法")



if __name__ == '__main__':
    caller=StaticMethodTest()
    caller.normalMethod()
    caller.staticmethod()
    caller.classmethod()
    # 静态方法调用
    StaticMethodTest.staticmethod()
    StaticMethodTest.classmethod()