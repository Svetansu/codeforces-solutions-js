var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var nq = readline().split(' ').map(x => parseInt(x));
    var n = nq[0], q = nq[1];
    var a = readline();
    var b = readline();
    var mapa = new Array(n);
    var mapb = new Array(n);
    for (var i = 0; i < n; i++) {
        mapa[i] = new Array(26).fill(0);
        mapb[i] = new Array(26).fill(0);
    }
    for (var i = 0; i < n; i++) {
        if (i > 0) {
            mapa[i] = [...mapa[i-1]];
            mapb[i] = [...mapb[i-1]];
        }
        mapa[i][a.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        mapb[i][b.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    for (var i = 0; i < q; i++) {
        var lr = readline().split(' ').map(x => parseInt(x));
        var l = lr[0], r = lr[1];
        var res = 0;
        l--;
        r--;
        for (var j = 0; j < 26; j++) {
            var cura = mapa[r][j];
            if (l > 0) cura -= mapa[l-1][j];
            var curb = mapb[r][j];
            if (l > 0) curb -= mapb[l-1][j];
            res += Math.abs(cura - curb);
        }
        print(res/2);
    }
}
