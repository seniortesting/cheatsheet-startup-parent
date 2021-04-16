#!/usr/bin/env python3
# -*- coding: utf-8 -*-

class Student(object):

    def __init__(self, score):
        self.__score = score

    @property
    def score(self):
        return self.__score

    @score.setter
    def score(self, value):
        if not isinstance(value, int):
            raise ValueError('输入值错误')
        else:
            self.__score = value


class Screen(object):

    @property
    def width(self):
        return self.__width

    @width.setter
    def width(self, value):
        self.__width = value
    @property
    def height(self):
        return self.__height

    @height.setter
    def height(self, value):
        self.__height = value

    @property
    def resolution(self):
        return self.width * self.height


if __name__ == '__main__':
    s = Student(32)
    print(s.score)
    s.score = 13233
    print(s.score)

    # 作用: 采用简单的代码，可以保证对参数属性验证，减少出错， 只读属性 .必须加return， 类似与getter
    # 测试:
    s = Screen()
    s.width = 1024
    s.height = 768
    print('resolution =', s.resolution)
    if s.resolution == 786432:
        print('测试通过!')
    else:
        print('测试失败!')

    # 1. 使函数方法，变成数据属性，方便使用者理解
    # 2. 为了让隐藏的数据属性按照特定的函数进行调用, 类似vue中的计算属性
