var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var nq = readline().split(' ').map(x => parseInt(x));
    var n = nq[0], q = nq[1];
    var a = readline().split(' ').map(x => parseInt(x));
    var l = 1, r = Math.pow(10, 10);
    while (l < r-1) {
        var w = 0;
        var mid = Math.floor((l + r) / 2);
        for (var i = 0; i < n; i++) {
            w += (mid > a[i]) ? mid - a[i] : 0;
        }
        if (w > q) {
            r = mid;
        } else {
            l = mid;
        }
    }
    print(l);
}
