if __name__ == '__main__':
    # 1. list是一个可变的有序表,可以list中追加元素到末尾
    classmates = ['Michael', 'Bob', 'Tracy']
    print(classmates)
    print(len(classmates))
    print(classmates[0])
    print(classmates[-1])
    # 可变
    classmates.append('walter')
    print(classmates)
    classmates.insert(1, 'jack')
    print(classmates)
    # 删除
    classmates.pop(-1)
    classmates.remove('jack')
    print('删除后: '+str(classmates))
    # 赋值
    classmates[1]='jack2'
    print('重新赋值后: '+str(classmates))
    # 类型可以不同
    listobj=[1,'test',True]
    print('不同数据类型: '+str(listobj))
    # 嵌套list
    s = ['python', 'java', ['asp', 'php'], 'scheme']
    print('嵌套list: %s, php 是: %s'%(str(s), s[2][1]))
    # 对于可变对象，任何操作会改变对象
    s= ['java', 'python', 'php']
    s.sort(reverse=True)
    print('排序后的s是：%s'%(str(s)))

    # 2. tuple ,不可变，更安全，不可修改，上面的方法都没有了
    classmates = ('Michael', 'Bob', 'Tracy')
    print('tuple is: %s, 访问元素: %s'%(str(classmates),classmates[1]))
    classmates=('test',)
    print('tuple只有一个元素： %s'%(str(classmates)))
    b1=('"\'',)
    print(b1)



