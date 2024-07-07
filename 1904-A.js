
var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
  var count = 0;
  var ab = readline().split(' ');
  var a = parseInt(ab[0]), b = parseInt(ab[1]);
  var king = readline().split(' ').map(num => parseInt(num));
  var queen = readline().split(' ').map(num => parseInt(num));
  var positions = [[a, b], [a, -b], [-a, b], [-a, -b], [b, a], [b, -a], [-b, a], [-b, -a]];
  var kSet = new Set(), qSet = new Set();
  for (var pos of positions) {
    var ak = pos[0] + king[0], bk = pos[1] + king[1];
    kSet.add(ak + ',' + bk);
  }
  for (var pos of positions) {
    var aq = pos[0] + queen[0], bq = pos[1] + queen[1];
    var posQ = aq + ',' + bq;
    if (kSet.has(posQ) && !qSet.has(posQ)) {
      qSet.add(posQ);
      count++;
    }
  }
  print(count);
}

