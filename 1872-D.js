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
        var nxy = readline().split(' ').map(x => parseInt(x));
        var n = nxy[0], x = nxy[1], y = nxy[2];
        var lcmCount = Math.floor(n / lcm(x, y));
        var c1 = Math.floor(n / x) - lcmCount;
        var c2 = Math.floor(n / y) - lcmCount;
        var rs1 = rangeSum(n - c1 + 1, n);
        var rs2 = rangeSum(1, c2);
        console.log((rs1 - rs2).toString());
    }
}

function lcm(x, y) {
    return Math.floor((x * y) / gcd(x, y));
}

function gcd(x, y) {
    if (x == 0) return y;
    return gcd(y % x, x);
}

function rangeSum(l, r) {
    let p1 = BigInt(r + l);
    let p2 = BigInt(r - l + 1);
    return (p1 * p2 / BigInt(2));
}
