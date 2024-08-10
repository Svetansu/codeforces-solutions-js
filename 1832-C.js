var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var n = parseInt(readline());
    var a = readline().split(' ').map(x => parseInt(x));
    var s = [a[0]];
    var j = 0;
    for (var i = 1; i < n; i++) {
        if (a[i] !== s[j]) {
            s.push(a[i]);
            j++;
        }
    }
    var ns = s.length;
    var count = 0;
    if (ns > 2) {
        for (var i = 1; i < ns - 1; i++) {
            var check = ((s[i] > s[i-1]) && (s[i] > s[i+1])) || ((s[i] < s[i-1]) && (s[i] < s[i+1]));
            if (!check) count++;
        }
    }
    print(ns - count);
}
