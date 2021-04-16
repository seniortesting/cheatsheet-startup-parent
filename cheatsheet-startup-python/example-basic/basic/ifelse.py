if __name__ == '__main__':
    i=input("your age:")
    age=int(i)
    if age<3:
        print('child')
    elif age>3 and age<30:
        print('adult')
    else:
        print('man')