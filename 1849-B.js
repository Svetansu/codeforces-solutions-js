var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
  var arr = [], res = [];
  var nAndk = readline().split(' ').map(x => parseInt(x));
  var n = nAndk[0], k = nAndk[1];
  var ar = readline().split(' ').map(x => parseInt(x));
  for (var i = 0; i < n; i++) {
    if (ar[i] % k == 0) {
      res.push(i+1);
    } else {
      var a = [ar[i] % k, i+1];
      arr.push(a);
    }
  }
  arr.sort(function(a, b) {
    return a[0] != b[0] ? b[0] - a[0] : a[1] - b[1];
  });
  for (var i = 0; i < arr.length; i++) {
    res.push(arr[i][1]);
  }
  print(res.join(' '));
}