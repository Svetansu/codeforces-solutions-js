var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var n = parseInt(readline());
    var p = readline().split(' ').map(x => parseInt(x));
    var q = [];
    for (var i = 1; i < n; i++) {
        q.push(p[i]);
    }
    q.push(p[0]);
    print(q.join(' '));
}
