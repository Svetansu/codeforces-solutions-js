var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var nq = readline().split(' ').map(x => parseInt(x));
    var n = nq[0], q = nq[1];
    var a = readline().split(' ').map(x => parseInt(x));
    var b = readline().split(' ').map(x => parseInt(x));
    var bSet = new Set(b);
    for (var power of bSet) {
        var num = Math.pow(2, power);
        for (var i = 0; i < n; i++) {
            if (a[i] % num === 0) a[i] += num/2;
        }
    }
    print(a.join(' '));
}
