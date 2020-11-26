
def isGreater(s1, s2):
  if (len(s1) < len(s2)): return False
  elif (len(s1) > len(s2)): return True

  for i in range(len(s1)):
    if (s1[i] > s2[i]): return True
  return False

result = isGreater('223', '125'); # should be True
# result = isGreater('11', '0'); # should be True
# result = isGreater('1', '1'); # should be false
print(result);
