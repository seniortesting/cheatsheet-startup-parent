#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from enum import Enum, unique


@unique
class Weekend(Enum):
    SUN = 1
    MON = 2


class Gender(Enum):
    MALE = 1
    FEMALE = 2


class student(object):
    def __init__(self, name, gender):
        self.name = name
        self.gender = gender


if __name__ == '__main__':
    print(Weekend.MON)
    print(Weekend.MON.value)
    # 使用
    s = student('alter', Gender.FEMALE)
    print(s.gender == Gender.FEMALE)
