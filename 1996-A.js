var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var n = parseInt(readline());
    print(n % 4 === 0 ? n / 4 : Math.floor(n / 4) + 1);
}