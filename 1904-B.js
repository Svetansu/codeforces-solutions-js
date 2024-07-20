var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var n = parseInt(readline());
    var a = readline().split(' ').map(x => parseInt(x));
    var map = [];
    for (var i = 0; i < n; i++) map.push([a[i], i]);
    map.sort((a, b) => a[0] - b[0]);
    var preSum = new Array(n).fill(0);
    for (var i = 0; i < n; i++) {
        preSum[i] = map[i][0] + (i > 0 ? preSum[i-1] : 0); 
    }
    var ans = new Array(n).fill(0);
    ans[n-1] = n-1;
    for (var i = n-2; i >= 0; i--) {
        ans[i] = preSum[i] >= map[i+1][0] ? ans[i+1] : i;
        var j = i-1;
        while (j >= 0 && map[j][0] == map[i][0]) {
            ans[j] = ans[i];
            j--;
        }
        i = j+1;
    }
    for (var i = 0; i < n; i++) {
        map[i][0] = ans[i];
    }
    map.sort((a, b) => a[1] - b[1]);
    var res = map.map(x => x[0]);
    print(res.join(' '));
}
