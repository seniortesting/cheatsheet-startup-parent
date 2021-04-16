#!/usr/bin/env python3
# -*- coding: utf-8 -*-

x=123456


def changeValue():
    x=10000
    print(x)
    # 在函数内部需要访问函数外部的变量，从而改变外部变量结果。

if __name__ == '__main__':
     changeValue()
     print(x)