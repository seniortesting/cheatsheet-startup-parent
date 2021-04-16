#!/usr/bin/env python3
# -*- coding: utf-8 -*-
def fib(max):
    n, a, b = 0, 0, 1
    while n < max:
        yield b
        a, b = b, a + b
        n = n + 1
    return 'done'


# 杨辉三角
def triangles():
    l = [1]
    while True:
        yield l
        # 前后为1，中间计算
        l = [1] + [l[i] + l[i + 1] for i in range(len(l) - 1)] + [1]


def read_file():
    with open('slice.py', 'r', encoding='utf-8') as f:
        yield f.readline()


if __name__ == '__main__':
    # 列表生成器外层的[]改成(),generator保存的是算法
    g = (x for x in range(101))
    print(g)
    # 每次调用next(g)，就计算出g的下一个元素的值，直到计算到最后一个元素，没有更多的元素时，抛出StopIteration的错误。
    print(next(g))
    print(next(g))
    # 使用for循环
    for n in g:
        print(n)
    # 基本上永远不会调用next()，而是通过for循环来迭代它，并且不需要关心StopIteration的错误
    # 函数是顺序执行，遇到return语句或者最后一行函数语句就返回。而变成generator的函数，
    # 在每次调用next()的时候执行，遇到yield语句返回，再次执行时从上次返回的yield语句处继续执行
    r = fib(10)
    print('fib: ')
    for x in r:
        print(x)
    while True:
        try:
            x = next(r)
            print("x: ", x)
        except StopIteration as e:
            print('generate return value is: ', e.value)
            break
    n = 0
    results = []
    for t in triangles():
        results.append(t)
        n = n + 1
        if n == 11:
            break

        for t in results:
            print(t)

        if results == [
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1],
            [1, 4, 6, 4, 1],
            [1, 5, 10, 10, 5, 1],
            [1, 6, 15, 20, 15, 6, 1],
            [1, 7, 21, 35, 35, 21, 7, 1],
            [1, 8, 28, 56, 70, 56, 28, 8, 1],
            [1, 9, 36, 84, 126, 126, 84, 36, 9, 1]
        ]:
            print('测试通过!')
        else:
            print('测试失败!')
    # 生成器读取文件
    for line in read_file():
        print(line)
