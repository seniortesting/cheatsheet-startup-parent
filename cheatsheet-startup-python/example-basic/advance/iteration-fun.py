#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from collections.abc import Iterable


def findMinAndMax(L):
    if L is None:
        raise TypeError('不能为空')
    if len(L)==0:
        return None,None
    # 采用循环得到对应的最小值最大值
    max=min=L[0]
    for i in range(len(L)):
        if L[i]>=max:
            max= L[i]
        else:
            if L[i]<=min:
                min=L[i]
    return (min,max)


if __name__ == '__main__':
    # 字典
    d = {'a': 1, 'b': 2, 'c': 3}
    for key in d:
        print(key,d[key])

    # 字符串
    for x in 'abc':
        print(x)

    # 对象是否客迭代
    iter=isinstance(['a','b','c'], Iterable)
    print(iter)
    # 得到对应的下标，需要将可迭代对象加上emumerate
    for index,value in enumerate([1,3,52]):
        print('index: ',index, 'value: ',value)
    # 或者通过range
    for x in range(10):
        print(x)
    # 测试
    if findMinAndMax([]) != (None, None):
        print('测试失败!')
    elif findMinAndMax([7]) != (7, 7):
        print('测试失败!')
    elif findMinAndMax([7, 1]) != (1, 7):
        print('测试失败!')
    elif findMinAndMax([7, 1, 3, 9, 5]) != (1, 9):
        print('测试失败!')
    else:
        print('测试成功!')

    # 迭代器
    # list、tuple、dict、set、str
    # generator,包括生成器和带yield的generator function
    print(isinstance([],Iterable))



