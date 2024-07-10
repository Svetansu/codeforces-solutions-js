var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
  var nAndk = readline().split(' ').map(x => parseInt(x));
  var n = nAndk[0], k = nAndk[1];
  var nums = readline().split(' ').map(x => parseInt(x));
  var ans = k, even = 0;
  for (var num of nums) {
    if (num % 2 == 0) even++;
    if (num % k == 0) ans = 0;
    var dif = k - (num % k);
    ans = Math.min(ans, dif);
  }
  if (k == 4) {
    if (even >= 2) ans = 0;
    else ans = Math.min(ans, even == 1 ? 1 : 2);
  }
  print(ans);
}
