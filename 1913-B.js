var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
  var s = readline().split('').map(x => parseInt(x));
  var freq = new Array(2).fill(0);
  for (var i of s) {
    freq[i]++;
  }
  var ans = 0, n = s.length;
  for (var i = 0; i < n; i++) {
    var val = s[i];
    if (val == 0) {
      if (freq[1] > 0) {
        freq[1]--;
      } else {
        ans = n-i;
        break;
      }
    } else {
      if (freq[0] > 0) {
        freq[0]--;
      } else {
        ans = n-i;
        break;
      }
    }
  }
  print(ans);
}

