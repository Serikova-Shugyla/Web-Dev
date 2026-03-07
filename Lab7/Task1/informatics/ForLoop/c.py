import math

a = int(input())
b = int(input())

start = int(math.ceil(a**0.5))

for i in range(start, int(b**0.5) + 1):
    square = i * i
    if a <= square <= b:
        print(square, end=" ")