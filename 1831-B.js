var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
  var arr = {}, brr = {}, max = 0, count = 1;
  var n = parseInt(readline());
  var a = readline().split(' ').map(x => parseInt(x));
  var b = readline().split(' ').map(x => parseInt(x));
  for (var i = 1; i < n; i++) {
    if (a[i] == a[i - 1]) {
      count++;
    } else {
      arr[a[i - 1]] = Math.max(arr[a[i - 1]] || 0, count);
      max = Math.max(max, arr[a[i - 1]]);
      count = 1;
    }
  }
  arr[a[n-1]] = Math.max(arr[a[n-1]] || 0, count);
  max = Math.max(max, arr[a[n-1]]);
  count = 1;
  for (var i = 1; i < n; i++) {
    if (b[i] == b[i - 1]) {
      count++;
    } else {
      brr[b[i - 1]] = Math.max(brr[b[i - 1]] || 0, count);
      max = Math.max(max, brr[b[i - 1]] + (arr[b[i - 1]] || 0));
      count = 1;
    }
  }
  brr[b[n-1]] = Math.max(brr[b[n-1]] || 0, count);
  max = Math.max(max, brr[b[n-1]] + (arr[b[n-1]] || 0));
  count = 1;
  print(max);
}
