var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
  var np = readline().split(' ').map(x => parseInt(x));
  var a = readline().split(' ').map(x => parseInt(x));
  var b = readline().split(' ').map(x => parseInt(x));
  var c = [];
  for (var i = 0; i < np[0]; i++) {
    c.push([Math.min(np[1], b[i]), a[i]]);
  }
  c.sort((a, b) => a[0] - b[0]);
  var cost = np[1], rem = np[0] - 1;
  for (var i = 0; i < np[0]; i++) {
    cost += Math.min(c[i][1], rem) * c[i][0];
    rem -= Math.min(c[i][1], rem);
  }
  print(cost);
}