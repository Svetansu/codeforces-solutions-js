var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
  var arr = [], res = 0;
  var nkq = readline().split(' ').map(x => parseInt(x));
  var n = nkq[0], k = nkq[1], q = nkq[2];
  var ar = readline().split(' ').map(x => parseInt(x));
  var i = 0;
  while (i < n) {
    var j = i, count = 0;
    while (j < n && ar[j] <= q) {
      count++;
      j++;
    }
    i = count > 0 ? j : j + 1;
    if (count >= k) {
      res += ((count-k+1) * (count-k+2) / 2);
    }
  }
  print(res);
}
