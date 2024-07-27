var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var nkab = readline().split(' ').map(x => parseInt(x));
    var n = nkab[0], k = nkab[1], a = nkab[2], b = nkab[3];
    var cities = [];
    for (var i = 0; i < n; i++) {
        var c = readline().split(' ').map(x => parseInt(x));
        cities.push(c);
    }
    var cost = getCost(a, b, k, cities);
    var minCa = Math.pow(10, 10);
    for (var i = 1; i <= k; i++) {
        minCa = Math.min(minCa, getCost(a, i, k, cities));
    }
    var minCb = Math.pow(10, 10);
    for (var i = 1; i <= k; i++) {
        minCb = Math.min(minCb, getCost(b, i, k, cities));
    }
    cost = Math.min(cost, minCa + minCb);
    print(cost);
}

function getCost(a, b, k, cities) {
    var source = cities[a-1], dest = cities[b-1];
    if (a <= k && b <= k) {
        return 0;
    } else {
        return (Math.abs(source[0] - dest[0]) + Math.abs(source[1] - dest[1]));
    }
}
