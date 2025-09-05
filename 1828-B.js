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

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

// solution here

function main() {
    var t = parseInt(readline());
    for (let i = 0; i < t; i++) {
        let n = parseInt(readline());
        let a = readline().split(' ').map(x => parseInt(x));
        let res = 0;
        for (let i = 0; i < n; i++) {
            const d = Math.abs(a[i] - (i + 1));
            res = gcd(res, d);
        } 
        console.log(res);
    }
}
