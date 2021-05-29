
# How many negative numbers are there in the following array:

array = [
    [-4, -3, -1, 1],
    [-2, -2, 1, 2],
    [-1, 1, 2, 3],
    [1, 2, 3, 4]
]

array2 = [
    [-1, -1, 0],
    [1, 1, 0],
    [2, 1, 0]
]


# O(n) Solution:
def count_negatives(arr):
    count = 0
    row_i = 0
    col_i = len(arr[0]) - 1
    while col_i >= 0 and row_i < len(arr):
        if arr[row_i][col_i] < 0:
            count += (col_i + 1)
            row_i += 1
        else:
            col_i -= 1
    return count


res = count_negatives(array)
res2 = count_negatives(array2)
print('results:', res, res2) # results 6 2
