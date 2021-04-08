def fizz_buzz(maximum):
    arr = []
    for i in range(1, maximum + 1):
        element = i
        if i % 3 == 0:
            element = "Fizz"
        if i % 5 == 0:
            element = "Buzz"  
        if i % 5 == 0 and i % 3 == 0:
            element = "FizzBuzz"      
        arr.append(element)
    return(arr)





print(fizz_buzz(10))    