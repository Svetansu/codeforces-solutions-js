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
    var nq = readline().split(' ').map(x => parseInt(x));
    const n = nq[0], q = nq[1];
    let a = readline().split(' ').map(x => BigInt(x));
    let sum = 0n, lsq = -1, lfq = new Array(n).fill(-1), lsqv = 0n;
    for (let i of a) sum += i;
    for (let b = 0; b < q; b++) {
        let curq = readline().split(' ');
        if (curq.length == 3) {
            let idx = parseInt(curq[1]) - 1, val = BigInt(curq[2]);
            let oldVal = lsq > lfq[idx] ? lsqv : a[idx];
            sum -= oldVal;
            sum += val;
            lfq[idx] = b;
            a[idx] = val;
        } else {
            lsq = b;
            let val = BigInt(curq[1]);
            lsqv = val;
            sum = BigInt(n) * val;
        }
        console.log(sum.toString());
    }
}
