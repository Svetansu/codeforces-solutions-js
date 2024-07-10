var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
  var n = parseInt(readline());
  var arr = readline().split('');
  var count = 0, spaceCount = 0, isOpen = false;
  for (var i = 0; i < n; i++) {
    if (arr[i] == '.') {
      if (!isOpen) {
        isOpen = true;
        spaceCount = 1;
      } else {
        spaceCount++;
        if (spaceCount == 3) {
          count = 2;
          isOpen = false;
          break;
        }
      }
    } else {
      isOpen = false;
      count += spaceCount;
      spaceCount = 0;
    }
  }
  if (isOpen) {
    count += spaceCount;
  }
  print(count);
}
