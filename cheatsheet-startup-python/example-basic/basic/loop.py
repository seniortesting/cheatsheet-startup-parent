if __name__ == '__main__':
    # 1. for
    names = ['Michael', 'Bob', 'Tracy']
    for name in names:
        print(name)
    # 计算1到100的和，采用range方法
    sum=0;
    for x in list(range(1,101)):
        sum+=x
    print('计算综合是: %d'%(sum))
    #  2. while循环
    sum=0;
    n=1;
    while n<101:
        sum+=n
        n=n+1
    print(sum)
    L = ['Bart', 'Lisa', 'Adam']
    for name in L:
        print('Hello, %s!'%(name))

    # 3. break
    n=2
    while n<=100:
        if n>10:
            break;
        print(n)
        n=n+1