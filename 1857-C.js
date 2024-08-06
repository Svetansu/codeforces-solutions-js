var t = parseInt(readline());

for (var a0 = 0; a0 < t; a0++) {
    var n = parseInt(readline());
    var b = readline().split(' ').map(x => parseInt(x));
    print(getArray(n, b));
}

function getArray(n, arr) {
    var c = n;
    var ans = [], p = 0, i = -1;
    arr.sort((a, b) => a - b);
    while (p < n) {
        p++;
        c--;
        if (c < 0) c = 0;
        ans.push(arr[i + c]);
        i += c;
    }
    return ans.join(' ');
}
