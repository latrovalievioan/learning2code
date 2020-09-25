def selection_sort(array):
    for index_minimum in range(len(array)):
        for index_current in range(len(array)):
            if array[index_current] < array[index_minimum]:
                temp = array[index_minimum]
                array[index_minimum] = array[index_current]
                array[index_current] = temp


array = [2,8,5,3,9,4,1]
selection_sort(array)
print(array)