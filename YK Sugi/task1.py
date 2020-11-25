
myList = [1, 3, 4, 5, 0, 2]; # should return 4
# myList = [2, 2, 1]; # should return 2
# myList = [-2, -1]; # should return -2
# myList = [1, 2, 2, 1]; # should return 2
# myList = [1]; # should return None
# myList = []; # should return None

def secondLargest(givenList):
  largest = None
  secondLargest = None
  for current in givenList:
    if largest == None:
      largest = current
    elif current > largest:
      secondLargest = largest
      largest = current
    elif secondLargest == None:
      secondLargest = current
    elif current > secondLargest:
      secondLargest = current
  return secondLargest

print(secondLargest(myList))
