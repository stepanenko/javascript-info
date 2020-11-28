
array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

def diaSum(arr):
  sum = 0

  for i in range(len(arr)):
    sum += arr[i][i];
  
  return sum


result = diaSum(array)
print('diagonal sum is:', result);
