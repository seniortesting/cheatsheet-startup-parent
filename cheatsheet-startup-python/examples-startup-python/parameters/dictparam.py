#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 可变参数和关键字参数

def rundict(**kwargs):
    for key, item in kwargs.items():
        print(item.__str__())

def runlist(*list):
    for item in list:
        print(item)

if __name__ == '__main__':
    dictData={
        "name": "walter",
        "sex": "male"
    }
    listData=[100,200,300]

    rundict(name="test",sex="test2")
    runlist(1,3)
    print("*"*30)
    # 直接传递list或者dict
    rundict(**dictData)
    rundict(**dict(dictData))
    runlist(*listData)
    crun=runlist(*list(listData))

    r=callable(runlist)
    print(r)