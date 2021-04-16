#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 回数
def is_palindrome(n):
    l1=str(n)
    l2=l1[::-1]
    return l2==l1
if __name__ == '__main__':
    # filter操作
    l=[1, 2, 4, 5, 6, 9, 10, 15]
    r=filter(lambda x:x>3,l)
    print(list(r))
    r=list(filter(is_palindrome, range(23,156)))
    print(r)