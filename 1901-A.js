
var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
  var ab = readline().split(' ');
  var n = parseInt(ab[0]), x = parseInt(ab[1]);
  var fuel = readline().split(' ').map(num => parseInt(num));
  var maxFuel = fuel[0];
  for (var i = 0; i < n; i++) {
    var distance = i === n-1 ? 2 * (x - fuel[i]) : fuel[i+1] - fuel[i];
    maxFuel = Math.max(maxFuel, distance);
  }
  print(maxFuel);
}