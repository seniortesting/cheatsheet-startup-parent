#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json

if __name__ == '__main__':
    data = [
        {
            "name": 'test1',
            "data": [
                {
                    "step": "test1 work story",
                    "place": "test1 shanghai"
                },
                {
                    "step": "test1 work story2",
                    "place": "test1 shanghai2"
                }
            ]
        },
        {
            "name": 'test2',
            "data": [
                {
                    "step": "test2 work story",
                    "place": "test2 shanghai"
                }
            ]
        }
    ]

    steps = [item for item in data]
    print(steps)
