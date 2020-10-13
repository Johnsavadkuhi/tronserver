
import os  

en = os.listdir(".")

print("list dir : " , en[0] )

with open("/home/mmc/tronserver/python/sqli.txt") as f: 
    data = f.read() 
    print(data)