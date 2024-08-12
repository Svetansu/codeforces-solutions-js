var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var xyk = readline().split(' ').map(x => parseInt(x));
    var x = xyk[0], y = xyk[1], k = xyk[2];
    var xc = [];
    var yc = [];
    if (k % 2 !== 0) {
        xc.push(x);
        yc.push(y);
    }
    var i = 0;
    while (xc.length < k) {
        i++;
        xc.push(x + i);
        xc.unshift(x - i);
        yc.push(y + i);
        yc.unshift(y - i);
    }
    for (var j = 0; j < k; j++) {
        print(xc[j] + ' ' + yc[j]);
    }
}
