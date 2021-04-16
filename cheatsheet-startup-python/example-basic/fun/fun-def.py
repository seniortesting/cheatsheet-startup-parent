#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import math


def abs(x):
    # 1. 参数检查
    if not isinstance(x, (int, float)):
        raise TypeError('类型错误')
    if x>=0:
        return x
    else:
        return -x

# 2. 多个参数返回
def move(x,y,step, angle=0):
    nx=x + step * math.cos(angle)
    ny = y - step * math.sin(angle)
    return nx,ny

def quadratic(a, b, c):
    if a>0:
        delta= b*b-4*a*c
        result1= (-b+math.sqrt(delta))/(2*a)
        result2= (-b-math.sqrt(delta))/(2*a)
    else:
        raise TypeError('a不能为0')
    return result1,result2
if __name__ == '__main__':
    postivenum=abs(100)
    ngetivenum=abs(-100)
    # errnum=abs('test')
    # print('正数是： %s,负数时: %s'%(postivenum,ngetivenum))
    x,y=move(100,100,60,math.pi/6)
    print('x is: %s, y is: %s'%(x,y))
    # 测试:
    print('quadratic(2, 3, 1) =', quadratic(2, 3, 1))
    print('quadratic(1, 3, -4) =', quadratic(1, 3, -4))

    if quadratic(2, 3, 1) != (-0.5, -1.0):
        print('测试失败')
    elif quadratic(1, 3, -4) != (1.0, -4.0):
        print('测试失败')
    else:
        print('测试成功')