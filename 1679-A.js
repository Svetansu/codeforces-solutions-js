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
        let n = BigInt(readline());
        if (n % BigInt(2) || n < BigInt(4)) {
            console.log('-1');
        } else {
            const max = n / 4n;
            const min = (n / 6n) + (n % 6n ? 1n : 0n);
            console.log(min + ' ' + max);
        }
    }
}
