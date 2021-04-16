#!/usr/bin/env python3
# -*- coding: utf-8 -*-
def by_name(t):
    return t[0]
def by_score(t):
    return -t[1]
if __name__ == '__main__':
    # 也是一个高阶函数
    r1=sorted([36, 5, -12, 9, -21], key=abs)
    r2=sorted(['bob', 'about', 'Zoo', 'Credit'],key=str.lower,reverse=True)
    print(r1,r2)
    l3 = [('Bob', 75), ('Adam', 92), ('Bart', 66), ('Lisa', 88)]
    r2=sorted(l3,key=by_name)
    print('resutl',r2)
    r3=sorted(l3,key=by_score)
    print('result: ',r3)
