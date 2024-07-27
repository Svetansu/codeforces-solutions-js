var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var nk = readline().split(' ').map(x => parseInt(x));
    var n = nk[0], k = nk[1];
    var sq = [];
    for (var i = 0; i < n; i++) {
        var r = readline().split('').map(x => parseInt(x));
        sq.push(r);
    }
    for (var i = 0; i < n; i += k) {
        var row = [];
        for (var j = 0; j < n; j += k) row.push(sq[i][j]);
        print(row.join(''));
    }
}
