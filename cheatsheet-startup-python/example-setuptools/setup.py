#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import setuptools


setuptools.setup(
    name='example-setuptools',
    version='1.0.0',
    description='',
    author='Walter Hu',
    author_email='alterhu2020@gmail.com',
    classifiers=["Framework :: Pytest"],
    packages=setuptools.find_packages(),
    install_requires=[
        'pytest~=5.4.1'
    ]
)
