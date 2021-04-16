#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 位置参数
def power(x):
    return x * x


# 默认参数
def power(x, n=3):
    s = 1
    while n > 0:
        n = n - 1
        s = s * x
    return s


# 可变参数,传参是个元组tuple，或者list
def calc(*number):  # 接受的时tuple对象
    sum = 0
    for n in number:
        sum = sum + n * n
    return sum


# 关键字参数,传参是个字典dic
def person(name, age, **kv):
    print('name: ', name, 'age: ', age, 'others', kv)


def f1(a, b, c=0, *args, **kw):
    print('a =', a, 'b =', b, 'c =', c, 'args =', args, 'kw =', kw)


def f2(a, b, c=0, *, d, **kw):
    print('a =', a, 'b =', b, 'c =', c, 'd =', d, 'kw =', kw)


def product(*arg):
    if len(arg) == 0:
        raise TypeError('类型错误')
    num = 1
    for v in arg:
        num = num * v
    return num

def add(x,y,f):
    return f(x)+f(y)

if __name__ == '__main__':
    result = power(3)
    print(result)
    number = [1, 3, 5]
    # 可变参数
    print('可变参数结果: %s' % (calc(1, 3)))
    print('可变参数结果是: %s' % (str(calc(*number))))
    # 关键字参数, 作用是必填和可选填项
    person('walter', 100)
    person('test', 32, city='shanghai', address='hena')
    extra = {'city': 'sh', 'address': 'pudong'}
    person('test2', 32, **extra)
    # 传入函数参数，函数的参数能够接收别的函数
    result=add(100,-3,abs)
    print('result: ',result)
