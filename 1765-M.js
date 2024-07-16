var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var n = parseInt(readline());
    if (n % 2 == 0) {
        print(n/2 + ' ' + n/2);
    } else {
        var min = 1;
        for (var i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                min = n/i;
                break;
            }
        }
        print(min + ' ' + (n - min));
    }
}
