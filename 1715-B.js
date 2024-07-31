var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var nkbs = readline().split(' ').map(x => parseInt(x));
    var n = nkbs[0], k = nkbs[1], b = nkbs[2], s = nkbs[3];
    var res = new Array(n).fill(0);
    var min = k*b;
    var max = (k*b) + n*(k-1);
    if (s >= min && s <= max) {
        var res = new Array(n).fill(0);
        res[n-1] = k*b;
        var diff = s - k*b;
        for (var i = 0; i < n; i++) {
            var cur = Math.min(diff, k-1);
            res[i] += cur;
            diff -= cur;
        }
        print(res.toString().split(',').join(' '));
    } else {
        print(-1);
    }
}
