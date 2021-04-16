
import math
from decimal import Decimal

if __name__ == '__main__':
   # data type
   # 1. list
   # 2. number
   # 3. String
   str_single='test'
   print(type(str_single))
   print(type(str_single) is str)
   str_doublequote="test"
   str_strip="hello \'walter\'" # 转义字符串
   print(str_single+','+str_doublequote+','+str_strip)
   #  raw string, 不转义
   str_raw=r'test\'walter'
   hello_multline=r'''hello,\n
   world
   '''
   print(str_raw)
   print('mulitple line: '+hello_multline)
   # 4. Dictionary
   # 5. Tuples
   # 6. boolean
   anwser=True
   print(3>5)
   print(anwser)
   # 7. none
   myobj=None
   print(myobj)
   # const
   pi=math.pi
   print('pi is: '+str(pi))
   divide=12/4
   print('divide is: '+str(divide))
   divideleft= 10/3
   dividefloor=10//3
   deviderest =10%3
   print("divde list is: "+str(divideleft)+',floor is: '+str(dividefloor)+',rest is: '+str(deviderest))

   # 精确度计算,java中的是BigDecimal
   result=Decimal('0.8')+ Decimal('0.34')
   print('Decimal data is: ',result)

