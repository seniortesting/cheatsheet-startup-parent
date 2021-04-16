#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import multiprocessing


def run_job(name):
    print('run child process name: ',name, ',process id: ',os.getpid())



if __name__ == '__main__':
    print('starting process pid is: ',os.getpid(),os.getppid())
    # 1. 创建子进程
    # pid=os.fork()
    # print('just created child process is: ',pid)
    p=multiprocessing.Process(target=run_job,args=('test',))
    print('begin to start a new process...')
    p.start()
    p.join()

    print('process end!')

    # 2. 进程池