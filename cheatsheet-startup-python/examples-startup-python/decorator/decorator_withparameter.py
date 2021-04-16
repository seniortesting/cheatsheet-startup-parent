#!/usr/bin/env python3
# -*- coding: utf-8 -*-


def timer(name):
    def callfunc(func):
        def callfuncmethod(*args, **kwargs):
            print("start call function")
            result = func(*args, **kwargs)
            print("end call function")
            return result

        return callfuncmethod

    return callfunc


@timer("tester")
def printNow(test1, test2):
    print('test1: %s, test2: %s' % (test1, test2))
    return test1 + test2


if __name__ == '__main__':
    result = printNow(1, 3)
    print(result)
