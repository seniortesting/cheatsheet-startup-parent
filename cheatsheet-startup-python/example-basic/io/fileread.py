#!/usr/bin/env python3
# -*- coding: utf-8 -*-

if __name__ == '__main__':
    with open('fileread.py','r') as f:
        print(f.read())
    # 二进制流读取方式
    with open('fileread.py', 'r', encoding='utf-8') as f:
        print(f.read())
