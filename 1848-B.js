var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var nk = readline().split(' ').map(x => parseInt(x));
    var n = nk[0], k = nk[1];
    var c = readline().split(' ').map(x => parseInt(x));
    var m1 = new Array(k).fill(0), m2 = new Array(k).fill(0);
    var ls = new Array(k).fill(-1);
    for (var i = 0; i < n; i++) {
        var step = i - ls[c[i] - 1];
        if (step > m1[c[i] - 1]) {
            m2[c[i] - 1] = m1[c[i] - 1];
            m1[c[i] - 1] = step;
        } else if (step > m2[c[i] - 1]) {
            m2[c[i] - 1] = step;
        }
        ls[c[i] - 1] = i;
    }
    for (var i = 0; i < k; i++) {
        var step = n - ls[i];
        if (step > m1[i]) {
            m2[i] = m1[i];
            m1[i] = step;
        } else if (step > m2[i]) {
            m2[i] = step;
        }
    }
    var res = n;
    for (var i = 0; i < k; i++) {
        var ms = Math.max(Math.floor((m1[i] + 1) / 2), m2[i]);
        res = Math.min(ms, res);
    }
    print(res - 1);
}
