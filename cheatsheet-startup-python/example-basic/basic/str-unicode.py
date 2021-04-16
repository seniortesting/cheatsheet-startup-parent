#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import datetime
import math

if __name__ == '__main__':
    '''
    英文ASCII: 英文一个子节,一个字节八位，所有总多可以表示255个对应的整数
    中文Unicode： 两个子节
    中文UTF-8： 3个子节
    
    通常python文件会写上对应的编码信息
    '''
    chinese='这是中文字符串'
    print(chinese)
    # 获取字符的整数部分，ASCII数值
    single_char='中'
    print(ord(single_char))
    print(chr(65))
    print(chr(122))
    # 十六进制表示字符串
    hex='\u4e2d\u6587'
    print(hex)
    # 子节编码数据表示,虽然显示的内容一样，但是bytes每个字符只占用一个子节
    bnumber=b'abc'
    print(bnumber )
    print('子节长度: '+str(len(bnumber)) +',字符长度: '+str(len('abc')))
    # 字符编码转换
    byteNumber='abc'.encode('ascii')
    # 一般子节转为中文需要decode
    strchinese=b'\xe4\xb8\xad\xe6\x96\x87'.decode('utf-8')
    # 如果子节转为utf-8的时候有些错误，可以忽略
    ignoredecode=b'\xe4\xb8\xad\xff'.decode('utf-8', errors='ignore')
    print(byteNumber)
    print(strchinese)
    print(ignoredecode)
    # 计算字符长度
    strlen=len('随文长度')
    print('长度: '+str(strlen))
    strEncoder="中文".encode("utf-8")
    strEncoder2="abc".encode("utf-8")
    print('中文encode: '+str(strEncoder))
    print("英文encode: "+str(strEncoder2))
    # 以上就是str bytes转换
    # 字符串的格式化
    print("hello %s" %('walter'))
    print("today is : %s"%(datetime.datetime.now()))
    print("my age is: %d"%(3))
    # 将数字按宽度为2，采用右对齐方式输出，若数据位数不到2位，则左边补空格
    print("my age 2d is %2d, not %02d"%(2,5))
    print('my pi is: %f'%(math.pi))
    print("my pi is: %.2f" %(math.pi))
    # 特殊字符%表示
    print('grow rate is: %d %%'%(30))
    # format形式格式化
    print("hello {0},你的简历已经更新: {1}".format("wlater", datetime.datetime.now()))

    score= 85-72/72
    print('%.1f%%'%(score))





