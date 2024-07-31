var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var nx = readline().split(' ').map(x => parseInt(x));
    var n = nx[0], x = nx[1];
    var a = readline().split(' ').map(x => parseInt(x));
    var b = readline().split(' ').map(x => parseInt(x));
    var c = readline().split(' ').map(x => parseInt(x));
    var res = 0;
    for (var i = 0; i < n; i++) {
        if ((x | a[i]) <= x) {
            res |= a[i];
        } else {
            break;
        }
    }
    for (var i = 0; i < n; i++) {
        if ((x | b[i]) <= x) {
            res |= b[i];
        } else {
            break;
        }
    }
    for (var i = 0; i < n; i++) {
        if ((x | c[i]) <= x) {
            res |= c[i];
        } else {
            break;
        }
    }
    print(res === x ? 'Yes' : 'No');
}
