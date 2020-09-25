array = [5,4,2,3,1]
def insertion_sort(array):
    for index in range(1, len(array)):
        key_index = index
        while array[key_index-1]> array[key_index] and key_index > 0:
            temp = array[key_index-1]
            array[key_index-1] = array[key_index]
            array[key_index] = temp
            key_index -= 1

insertion_sort(array)
print(array)