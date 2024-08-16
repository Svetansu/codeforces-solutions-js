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

    for (var a0 = 0; a0 < t; a0++) {
        var nq = readline().split(' ').map(x => parseInt(x));
        var n = nq[0], k = nq[1];
        var a = readline().split(' ').map(x => parseInt(x));
        var k = readline().split(' ').map(x => parseInt(x));
        var res = [];
        var preSum = new Array(n+1).fill(0n);
        var preMax = new Array(n+1).fill(0);
        for (let i = 1; i <= n; i++) {
            preSum[i] = BigInt(a[i-1]) + preSum[i-1];
            preMax[i] = Math.max(a[i-1], preMax[i-1]);
        }
        preMax.shift();
        for (const b of k) {
            let l = -1, r = n, mid = 0;
            while (l < r - 1) {
                mid = Math.floor((l + r)/2);
                if (preMax[mid] <= b) {
                    l = mid;
                } else {
                    r = mid;
                }
            }
            res.push(preSum[r]);
        }
        console.log(res.join(' '));
    }
}
