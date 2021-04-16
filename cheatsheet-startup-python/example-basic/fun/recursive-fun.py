#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# fact(n)=n!=1×2×3×⋅⋅⋅×(n−1)×n=(n−1)!×n=fact(n−1)×n
def fact(n):
    if n == 1:
        return 1
    return n * fact(n - 1)

# 尾递归，在函数返回的时候，调用自身本身，
# 并且，return语句不能包含表达式。
# 这样，编译器或者解释器就可以把尾递归做优化，使递归本身无论调用多少次，都只占用一个栈帧，不会出现栈溢出的情况。
def fact(n):
    return fact_int(n,1)

def fact_int(n,product):
    if n==1:
        return 1
    else:
        return fact_int(n-1, n*product)

if __name__ == '__main__':
    # 计算结果
    print(fact(100))
    print(fact(1000))
    # 使用递归函数的优点是逻辑简单清晰，缺点是过深的调用会导致栈溢出

