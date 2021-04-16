#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import inspect
from functools import reduce


def f(x):
    return x * x


def add(x, y):
    return x + y


def normalize(name):
    return list(map(lambda x: x.capitalize(), name))


def str2float(s):
    def str_int(s):
        return reduce(lambda x, y: x * 10 + y, map(lambda x: int(x), s))
    def str_float(s):
        return reduce(lambda x,y:x*0.1+y, map(lambda x:int(x),s))

    result = s.split(".")
    const = list(result[0])
    float = list(result[1])
    float.reverse()
    return str_int(const)+str_float(float)*0.1


if __name__ == '__main__':
    # 1. map使用
    r = map(f, [1, 2, 3])
    print('r:', type(r))
    print('list:', list(r))
    # map()传入的第一个参数是f，即函数对象本身。由于结果r是一个Iterator，Iterator是惰性序列，因此通过list()函数让它把整个序列都计算出来并返回一个list
    tostr = list(map(str, [1, 3, 5]))
    print('tostr: ', tostr)
    # 2. reduce
    result = reduce(add, [1, 3, 5])
    result2 = reduce(lambda x, y: x * 10 + y, [1, 3, 5])
    print('reduce: ', result)
    # 测试:
    L1 = ['adam', 'LISA', 'barT']
    L2 = normalize(L1)
    print(L2)
    # 测试
    print('str2float(\'123.456\') =', str2float('123.456'))
    if abs(str2float('123.456') - 123.456) < 0.00001:
        print('测试成功!')
    else:
        print('测试失败!')
