#!/usr/bin/env python3
# -*- coding: utf-8 -*-
class Animation(object):
    def run(self):
        print('animation run...')

class Dog(Animation):

    def run(self):
        print('dog run...')
    def eat(self):
        print('dog eat...')

class Cat(Animation):
    pass

def run_twice(animation):
    return animation.run()

if __name__ == '__main__':
    # 封装、抽象、继承和多态
    dog=Dog()
    dog.run()
    cat=Cat()
    cat.run()
    print(isinstance(cat,Animation))
    # 多态
    animation=Animation()
    run_twice(animation)
    run_twice(dog)
    run_twice(cat)
    # file-like 对象


