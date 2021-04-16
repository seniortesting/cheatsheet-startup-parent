import sys

if __name__ == '__main__':
    # 变量内存占用
    a=24
    memory=sys.getsizeof(a)
    print('内存占用: %d'%(memory))
    path=sys.path
    print('path: ',path)
