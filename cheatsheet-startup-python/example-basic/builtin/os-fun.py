import datetime
import os

if __name__ == '__main__':
    # 列出当前目录文件文件夹
    files = [file for file in os.listdir('.')]
    print(files)
    # 操作系统
    print(os.name)
    # print(os.uname().__str__())
    # 环境变量
    path=os.environ.get('path')
    print('path is: ',path)
    defaultEnv=os.environ.get('test','test')
    print('test environment is: ',defaultEnv)
    ## 操作文件和目录
    abspath=os.path.abspath(".")
    print('absolute path is: ',abspath)
    joinpath=os.path.join('.','test.py')
    print('join path is: ',joinpath)
    os.mkdir('d:/testdir')
    print('创建目录: ',os.path.exists(os.path.abspath('d:/testdir')))
    os.rmdir('d:/testdir')
    print('删除目录后是否不存在: ',os.path.exists(os.path.abspath("d:/testdir")))
    # 得到扩展名
    filenameList=os.path.splitext(os.path.abspath('os-fun.py'))
    print('split extension is: '+str(filenameList))
    # 列出所有的pyhon文件
    files=[f for f in os.listdir('.') if os.path.isfile(f) and os.path.splitext(f)[1]=='.py']
    for f in files:
        print('file is: ',f, 'size: ',os.path.getsize(f),',create time: ',datetime.datetime.fromtimestamp( os.path.getctime(f)), ',modify time: ',os.path.getmtime(f))