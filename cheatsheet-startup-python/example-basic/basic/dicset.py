if __name__ == '__main__':
    # 1.dic, 具有更快的查找速度
    d={'name': 'walter', 'age': 100}
    dic=dict({'name': 'test','sex': 'male'})

    # 添加
    d.setdefault('where','henan')
    d['address']='shanghai'
    # 更安全，如果没有对应的key返回none
    # 查找值
    print(d['name'])
    print(d.get('name'))
    print(d.get('sex'))
    print(d.get('sex','未知'))
    print('name' in d)
    # 删除值
    d.pop('name')
    print('删除后是: %s'%(str(d)))
    for x in d:
        print(x,d[x])
    for k,v in d.items():
        print(k,v)
    # 与list对比优点
    # 1. 查找和插入的速度极快，不会随着key的增加而变慢；
    # 2. 需要占用大量的内存，内存浪费多。
    # list优点
    # 1. 查找和插入的时间随着元素的增加而增加；
    # 2. 占用空间小，浪费内存很少。
    # dict是用空间来换取时间的一种方法。
    #
    # 2. set不存储key，key值不重复, 无序和无重复元素的集合
    s=set([1,2,3])
    s={1,2,3}
    print('set is： %s'%(str(s)))
    # 添加值
    s.add('4')
    print('s添加后: %s'%(str(s)))
    # 删除值
    s.remove('4')
    print('s添加后: %s'%(str(s)))
    # 是否存在该元素
    print('p' in s)
    # 一句循环转为set
    data ={ x for x in 'sd32323' if x not in 'abc'}
    print(data)




