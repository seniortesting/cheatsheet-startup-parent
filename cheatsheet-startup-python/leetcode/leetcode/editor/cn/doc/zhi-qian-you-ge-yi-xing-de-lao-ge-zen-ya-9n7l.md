### 解题思路
参考了他的，但我找不到他了

### 代码

```python3
class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        return any(sqrt(c-a*a).is_integer() for a in range(int(sqrt(c))+1))

```