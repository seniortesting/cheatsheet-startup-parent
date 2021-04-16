#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# unittest缺点： 重试功能
# （1）.如果你想用pytest寻找整个文件夹下的测试用例，那么文件须以test_开头或者以test结尾。
# （2）.测试类以Test开头，并且不能带有 init 方法。
# （3）.测试函数以test开头。
# （4）.另外，pytest不支持也不打算支持中文路径，如果项目路径中有中文会报错。
import pytest
# import pytest-html
# import pytest-rerunfailures

class TestObject(object):

    @pytest.mark.release
    def test_one(self,x,y):
        assert 3+4==7