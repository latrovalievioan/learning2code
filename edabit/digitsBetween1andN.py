def digits(number):
    string = ''
    i = number
    for i in range(1, number):
        string = string + (str(i))
    return len(string)

print(digits(2020))    