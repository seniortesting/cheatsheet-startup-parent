from collections.abc import Iterable

if __name__ == '__main__':
    # 是否可迭代
    print(isinstance('abc', Iterable))
    print(isinstance([1,3],Iterable))
