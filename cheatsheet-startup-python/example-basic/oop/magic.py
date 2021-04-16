#!/usr/bin/env python3
# -*- coding: utf-8 -*-

class MagicMethod(object):
    def __init__(self):
        pass
    def __new__(cls, *args, **kwargs):
        print('new')

    def __str__(self):
        # 直接print打印的输出内容
        return '自定义结果显示'


if __name__ == '__main__':
    m = MagicMethod()
    print(m)
