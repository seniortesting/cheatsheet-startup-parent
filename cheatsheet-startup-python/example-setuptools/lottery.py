#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import decimal


def groupLottery(size: int = 10, reward: int = 0.5):
    print("预设的总计彩票投递组数是：%s,预期每期中奖金额是: %s" % (size, reward))
    print("赌博有风险，不要看别人的，不要贪，四期止步，每日30元止步,不可全部跟！")
    lotteryList = []
    for i in range(size):
        previousSum = sum(lotteryList) + reward
        long_data = previousSum / 0.96
        # data = round(previousSum / 0.96, 1)
        # data = float(format(long_data, '.1f'))
        data = float(decimal.Decimal.from_float(long_data).quantize(decimal.Decimal('0.0')))
        lotteryList.append(data)

    [print(item) for item in lotteryList]


if __name__ == '__main__':
    # 1
    # print(3/0.96)
    # 3.2
    print((28+34.4+71.3+146.5+300.2+9)/0.96)
