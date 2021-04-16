#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import functools
import time


def log(args):
    '''
     对于装饰器，如果没有加上参数，这第一次嵌套函数传递的就是函数，也就没有必要需要第二层嵌套函数
     否则
    :param args:
    :return:
    '''
    if not isinstance(args, str):
        def decorator(func):
            @functools.wraps(func)
            def wrapper(*args, **kw):
                print('The text is: %s' % args)
                print('begin call')
                a = func(*args, **kw)
                print('end call')
                return a

            return wrapper

        return decorator
    else:
        @functools.wraps(args)
        def wrapper(*args, **kw):
            print('begin call')
            a = args(*args, **kw)
            print('end call')
            return a

        return wrapper


@log('text')
def run():
    print("run method now")


if __name__ == '__main__':
    run()
