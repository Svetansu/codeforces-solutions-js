var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var n = parseInt(readline());
    var s = readline();
    var u = new Set(), sum = 0;
    for (var i = 0; i < n; i++) {
        u.add(s[i]);
        sum += u.size;
    }
    print(sum);
}
