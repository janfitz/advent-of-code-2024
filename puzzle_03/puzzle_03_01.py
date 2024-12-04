import re

result = 0

with open('inputString.txt') as f:
  stringToAnalyze = " ".join(line.strip() for line in f).replace(" ", "") 

mulOccurrences = re.findall(r'mul\(\d*,\d*\)', stringToAnalyze)

for mul in mulOccurrences:
  values = mul.replace('mul(', '').replace(')', '').split(',')
  result += (int(values[0]) * int(values[1]))
  
print result
  

