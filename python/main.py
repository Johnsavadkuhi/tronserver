import os

command = os.popen('ls -al')
print(command.read())
print(command.close())

fo = open("/home/mmc/tronserver/python/sqli" , "r")

