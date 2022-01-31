import unittest
import unittest.mock as mock
import austama

class TestSampleSession(unittest.TestCase):

    def test_open(self):
        _data = austama.load('tests/files/sample/telegram/session/open.json')

    def test_close(self):
        _data = austama.load('tests/files/sample/telegram/session/close.json')

if __name__ == '__main__':
    unittest.main()
