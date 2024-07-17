var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var nc = readline().split(' ');
    var n = parseInt(nc[0]), c = nc[1];
    var s = readline();
    var max = 0;
    if (c != 'g') {
        var firstG = 0;
        for (var i = 0; i < n; i++) {
            if (s[i] == 'g') {
                firstG = i;
                break;
            }
        }
        for (var i = 0; i < n; i++) {
            if (s[i] == c) {
                var j = i;
                while (j < n && s[j] != 'g') {
                    j++;
                }
                if (s[j] == 'g') {
                    max = Math.max(max, j - i);
                } else {
                    max = Math.max(max, n - i + firstG);
                }
                i = j;
            }
        }
    }
    print(max);
}
