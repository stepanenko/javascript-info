
def areSafe(chess):
  n = len(chess)

  for row in range(n):
    rowCount = 0
    for col in range(n):
      rowCount += chess[row][col]
    if rowCount > 1:
      return False

  for col in range(n):
    colCount = 0
    for row in range(n):
      colCount += chess[row][col]
    if colCount > 1:
      return False

  return True

# result = areSafe([[1,1],[0,1]]); # False
result = areSafe([[1,0,0],[0,0,1], [0,1,0]]); # True
print(result)
