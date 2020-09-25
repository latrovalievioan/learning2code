def bubble_sort(array):
    has_swapped = True
    while (has_swapped):
        has_swapped = False
        i = 0
        while i < len(array) - 1:
            if array[i]> array[i + 1]:
                temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
                has_swapped = True
            i += 1
array = [1,3,5,2,4]
bubble_sort((array))
print(array)
