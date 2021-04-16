#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import logging

import pytest

LOGGER=logging.getLogger(__name__)

@pytest.fixture(scope='session',autouse=True)
def pytest_sessionstart(request):
    LOGGER.debug("session start...")



def test_session_work():
    print("test session function")


