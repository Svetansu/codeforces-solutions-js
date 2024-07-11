var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
  var arr = [];
  var b = parseInt(readline());
  for (var i = 0; i < b; i++) {
    var l = parseInt(readline());
    var ar = readline().split(' ').map(x => parseInt(x)).sort((a, b) => a - b);
    arr.push(ar);
  }
  arr.sort((a, b) => a[0] - b[0]);
  var ans = arr[0][0];
  arr.sort((a, b) => a[1] - b[1]);
  for (var i = 1; i < arr.length; i++) {
    ans += arr[i][1];
  }
  print(ans);
}