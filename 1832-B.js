var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var nk = readline().split(' ').map(x => parseInt(x));
    var n = nk[0], k = nk[1];
    var a = readline().split(' ').map(x => parseInt(x));
    a.sort((a, b) => a - b);
    var preSum = new Array(n).fill(0);
    for (var i = 0; i < n; i++) {
        preSum[i] = a[i] + (i > 0 ? preSum[i-1] : 0);
    }
    var sum = 0;
    for (var i = 0; i <= k; i++) {
        var l = 2*(k - i) - 1;
        var r = n - 1 - i;
        sum = Math.max(sum, preSum[r] - (l >= 0 ? preSum[l] : 0));
    }    
    print(sum);
}
