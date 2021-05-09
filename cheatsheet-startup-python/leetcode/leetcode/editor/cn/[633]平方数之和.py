# 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。
#
#
#
#  示例 1：
#
#  输入：c = 5
# 输出：true
# 解释：1 * 1 + 2 * 2 = 5
#
#
#  示例 2：
#
#  输入：c = 3
# 输出：false
#
#
#  示例 3：
#
#  输入：c = 4
# 输出：true
#
#
#  示例 4：
#
#  输入：c = 2
# 输出：true
#
#
#  示例 5：
#
#  输入：c = 1
# 输出：true
#
#
#
#  提示：
#
#
#  0 <= c <= 231 - 1
#
#  Related Topics 数学
#  👍 277 👎 0


# leetcode submit region begin(Prohibit modification and deletion)
import math


class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        max = int(math.sqrt(c))
        a, b = 0, max
        while (a <= b):
            total = a * a + b * b
            if total == c:
                return True
            elif total > c:
                b -= 1
            else:
                a += 1
        return False


# leetcode submit region end(Prohibit modification and deletion)

if __name__ == '__main__':
    s = Solution()
    r = s.judgeSquareSum(5)
    print(r)
