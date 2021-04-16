#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os

if __name__ == '__main__':
    list1 = list(range(1, 11))
    print(list1)
    list2 = [x * x for x in range(1, 11)]
    print(list2)
    list3 = [x * x for x in range(1, 11) if x % 2 == 0]
    print(list3)
    list4 = [m + n for m in 'abc' for n in '1333']
    print(list4)
    # 列出当前目录的所有文件
    dirs = [d for d in os.listdir('.')]
    print(dirs)
    # dic中的迭代
    d = {'x': 'A', 'y': 'B', 'z': 'C'}
    for k, v in d.items():
        print(k, v)
    # 采用列表生成器
    dic = [k + '=' + v for k, v in d.items()]
    print(dic)
    # 字符串编程大写
    L = ['Hello', 'World', 'IBM', 'Apple']
    lowers = [x.lower() for x in L]
    print(lowers)
    # if 需要放在后面， if else 放在for前面
    # 一个列表生成式中，for前面的if ... else是表达式，而for后面的if是过滤条件，不能带else
    # 过滤器改变大小，而表达式不会改变大小
    L1 = ['Hello', 'World', 18, 'Apple', None]
    L2 = [r.lower() for r in L1 if isinstance(r, str)]
    if L2 == ['hello', 'world', 'apple']:
        print('测试通过!')
    else:
        print('测试失败!')
