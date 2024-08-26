process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readline() {
    return inputString[currentLine++];
}

// solution here

function main() {
    var t = parseInt(readline());

    function getVal(l, r, preSum) {
        return preSum[r] - (l > 0 ? preSum[l - 1] : 0)
    }

    for (var a0 = 0; a0 < t; a0++) {
        let ns = readline().split(' ').map(x => parseInt(x));
        const n = ns[0], s = ns[1];
        let a = readline().split(' ').map(x => parseInt(x));
        let preSum = new Array(n).fill(0);
        for (let i = 0; i < n; i++) {
            preSum[i] = a[i] + (i > 0 ? preSum[i-1] : 0);
        }
        let min = Infinity;
        for (let i = 0; i < n; i++) {
            let l = i, r = n-1, p = -1;
            while (l <= r) {
                let mid = Math.floor((l + r)/2);
                if (getVal(i, mid, preSum) <= s) {
                    p = mid;
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
            if (p == -1 || getVal(i, p, preSum) != s) continue;
            min = Math.min(min, n - (p - i + 1));
        }
        console.log(min == Infinity ? -1 : min);
    }
}
