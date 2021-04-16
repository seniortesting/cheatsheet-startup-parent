#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import types

def test():
    print('test')


if __name__ == '__main__':
    isfun=type(test)==types.FunctionType
    print('isfun: ',isfun)
    isbuiltin=type(abs)==types.BuiltinFunctionType
    print(isbuiltin)
    islamba=type(lambda x:x+3)==types.LambdaType
    print(islamba)
    # 动态设置方法
