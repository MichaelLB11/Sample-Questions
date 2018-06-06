'''
threadStats.py: Calculates the average attendance and professional baseball
                games using Python's capability to run multiple threads
                at one time.

Instructions: Run via terminal using command "python3 threadStats.py"
'''

import os, threading
import multiprocessing as mp
import math

def aveColumn(fileName, col, que):

    yearData = []

    handle = open(fileName, 'r')
    lines = handle.read()
    handle.close()


    yearData = lines.split('\n')

    for i in range(0, len(yearData)):
        yearData[i] = yearData[i].split(',')

    attendance = 0
    average = 0

    for i in range(0, len(yearData) - 1):
        try:  #this may be bad programming practice, but it allows us to do
              #do the computation even if there is an error in the data file
            attendance += int(yearData[i][col])
        except:
            pass

    average = math.ceil(attendance/(len(yearData)))
    que.put("{}: {}".format(fileName[7:11], average))


def aveAttendance(f, que):

    aveColumn("data/" + f, 17, que)


def main():
    path = os.getcwd() + "/data"

    #print(path)

    que = mp.Queue()
    threads = []

    for i in os.listdir(path):
        t = threading.Thread(name = "file: " + str(i), target = aveAttendance, args = [i, que]) #must use brackets to contain the args or error thrown

        threads.append(t)
        t.start()

    for t in threads:
        t.join()

    while not que.empty():
        print("Average attendance for", que.get())

main()
