var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
  var ab = readline().split(" ");
  var n = parseInt(ab[0]),
    k = parseInt(ab[1]),
    x = parseInt(ab[2]);
  var minSum = (k * (k + 1)) / 2;
  var total = (n * (n + 1)) / 2;
  var maxSum = total - ((n - k) * (n - k + 1)) / 2;
  if (x >= minSum && x <= maxSum) {
    print("YES");
  } else {
    print("NO");
  }
}
