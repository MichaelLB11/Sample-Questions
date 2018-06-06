#!/usr/bin/env python3
'''
fileOperation.py: Checks the first line of text file to see if it contains the word 'bears'

Instructions: Run the program using command python3 fileOperation.py <text file name>
              alternatively, run the program using command python3 fileOperation.py
              specifying the filename on line 16 (note: text file must be in same directory as .py file).
'''

import sys

def main():
    if (len(sys.argv) > 1): #if the command contains an argument, use it.
        filePath = sys.argv[1]
    else:
        filePath = "withBears.txt"

    f = open(filePath, 'r')
    line = f.readline()
    line = line.lower()

    words = line.split();

    containsBears = False

    for i in words:
        if i == "bears":
            containsBears = True

    if (containsBears):
        print("This file contains the word bears")

    else:
        print("This file does not contain the word bears")


main()
