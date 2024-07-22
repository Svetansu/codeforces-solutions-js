var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var n = parseInt(readline());
    var a = readline().split(' ').map(x => parseInt(x));
    var prefixSum = new Array(n).fill(0);
    prefixSum[0] = a[0];
    for (var i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i-1] + a[i];
    }
    var max = 0;
    for (var i = 1; i < n; i++) {
        if (n % i === 0) {
            var sums = [];
            for (var j = i-1; j < n; j += i) {
                var sum = prefixSum[j] - (j < i ? 0 : prefixSum[j-i]);
                sums.push(sum);
            }
            sums.sort((a, b) => a - b);
            max = Math.max(max, sums[sums.length-1] - sums[0]);
        }
    }
    print(max);
}
