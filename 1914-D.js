var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var n = parseInt(readline());
    var a = readline().split(' ').map(x => parseInt(x));
    var b = readline().split(' ').map(x => parseInt(x));
    var c = readline().split(' ').map(x => parseInt(x));

    function highest3i(arr) {
        var res = new Array(3).fill(-1);
        for (var i = 0; i < n; i++) {
            if (res[0] == -1 || arr[i] > arr[res[0]]) {
                res[2] = res[1];
                res[1] = res[0];
                res[0] = i;
            } else if (res[1] == -1 || arr[i] > arr[res[1]]) {
                res[2] = res[1];
                res[1] = i;
            } else if (res[2] == -1 || arr[i] > arr[res[2]]) {
                res[2] = i;
            }
        }
        return res;
    }

    var res = 0;
    for (var i of highest3i(a)) {
        for (var j of highest3i(b)) {
            for (var k of highest3i(c)) {
                if (i != j && i != k && j != k) res = Math.max(res, a[i] + b[j] + c[k]);
            }
        }
    }
    print(res);
}
