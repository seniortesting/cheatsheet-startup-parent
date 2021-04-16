#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json
import pickle

if __name__ == '__main__':
    customer=dict(name='walter',age=100)
    bstr=pickle.dumps(customer)
    print(bstr)

    # 写入文件
    f=open('dump.txt', 'wb')
    pickle.dump(customer,f)
    f.close()
    # 读出文件
    f=open('dump.txt','rb')
    customer=pickle.load(f)
    f.close()
    print('load customer is: ',customer)

    customer2=dict(name='peter',age=23)
    jsonstr=json.dumps(customer2)
    print('json str',jsonstr)

    jsonstr='{"name": "petr2","age":23}'
    customer3=json.loads(jsonstr)
    print('json loads: ',customer3)
    # json 中文会转为ansc码
    customer4=dict(name='小米')
    strcustomer=json.dumps(customer4,ensure_ascii=True)
    print('str customer is: ',strcustomer)
    strcustomer='{"from": "china","to": "usa"}'
    customer=json.loads(strcustomer)
    print('customer is: ',customer,'type is: ',type(customer))


