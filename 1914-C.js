var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var nk = readline().split(' ').map(x => parseInt(x));
    var n = nk[0], k = nk[1];
    var a = readline().split(' ').map(x => parseInt(x));
    var b = readline().split(' ').map(x => parseInt(x));
    var maxb = 0, max = 0, sum = 0;
    for (var i = 0; i < n; i++) {
        if (i == k) break;
        maxb = Math.max(maxb, b[i]);
        sum += a[i];
        max = Math.max(max, sum + (k - i - 1)*maxb);
    }
    print(max);
}
