var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var n = parseInt(readline());
    var a = readline().split(' ').map(x => parseInt(x));
    var freq = {}, max = -1, count = 0;
    for (var i = 0; i < n; i++) {
        if (!freq[a[i]]) freq[a[i]] = 0;
        freq[a[i]]++;
        max = Math.max(max, a[i]);
    }
    a.sort((a, b) => a - b);
    for (var i = 0; i < n; i++) {
        if (freq[a[i]] > 0) {
            var v = a[i] + 1;
            while (v <= max && freq[v] && freq[v] > 0) {
                freq[v]--;
                v++;
            }
            freq[a[i]]--;
            count++;
        }
    }
    print(count);
}
