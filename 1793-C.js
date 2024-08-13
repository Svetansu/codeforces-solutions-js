var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var n = parseInt(readline());
    var p = readline().split(' ').map(x => parseInt(x));
    var res = [];
    if (n > 3) {
        var l = 0, r = n-1;
        var min = 1, max = n;
        while (l < r) {
            var s = [min, max];
            var min1 = min, max1 = max;
            if (!s.includes(p[l]) && !s.includes(p[r])) {
                break;
            } else {
                if (s.includes(p[l])) {
                    if (p[l] == min) min1++;
                    else max1--;
                    l++;
                }
                if (s.includes(p[r])) {
                    if (p[r] == min) min1++;
                    else max1--;
                    r--;
                }
            }
            min = min1;
            max = max1;
        }
        if (l < r) res = [l+1, r+1];
    }
    print(res.length ? res.join(' ') : '-1');
}
