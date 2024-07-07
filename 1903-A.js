var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
  var nAndk = readline().split(' ');
  var k = parseInt(nAndk[1]);
  var arr = readline().split(' ').map(num => parseInt(num));
  if (k > 1) {
    print('YES'+'\n');
  } else if (k === 1 & isSorted(arr)) {
    print('YES'+'\n');
  } else {
    print('NO'+'\n');
  }
}

function isSorted(arr) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}