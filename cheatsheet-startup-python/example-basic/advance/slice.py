#!/usr/bin/env python3
# -*- coding: utf-8 -*-


def trim(s):
    if len(s)==0:
        raise TypeError('不能为空三')
    while s[:1]=='':
        s=s[1:]
    while s[-1:]==0:
        s=s[:-1]
    return s

if __name__ == '__main__':
    L = ['Michael', 'Sarah', 'Tracy', 'Bob', 'Jack']
    # 取前三个, 起始索引，结束索引，但不包含最后一个索引值
    print(L[0:3])
    print(L[:3])   # 更简单方法，默认索引为0
    print(L[1:3])
    # 记住倒数第一个元素的索引是-1
    print('倒排索引')
    print(L[-2:])
    print(L[-2: -1])
    L = list(range(1, 101))
    # 取前十个
    print(L[0:10])
    # 取十个
    print(L[-10:])
    # 后反
    print(L[:-10])
    # 前十个数，每两个取一个
    print(L[0:10:2])
    # 所有数，每5个取一个
    print(L[::5])
    # 原样复制一个list
    print(L[:])

    # tuple也可以采用切片来获取元素，只是获得的结果仍是tuple
    t=tuple(range(1,100))
    print(t[:5])
    # str的substr就是切片操作
    print(trim(' hello'))
    print(trim('hello world '))

