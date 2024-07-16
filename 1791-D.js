var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var uset = new Set(), ans = 0;
    var n = parseInt(readline());
    var pre = new Array(n), suf = new Array(n);
    var s = readline();
    for (var i = 0; i < n; i++) {
        uset.add(s[i]);
        pre[i] = uset.size;
    }
    uset.clear();
    for (var i = n-1; i >= 0; i--) {
        uset.add(s[i]);
        suf[i] = uset.size;
    }
    for (var i = 0; i < n-1; i++) {
        ans = Math.max(ans, pre[i] + suf[i+1]);
    }
    print(ans);
}
