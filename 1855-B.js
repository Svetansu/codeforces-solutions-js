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
        let n = readline().split(' ').map(x => BigInt(x))[0];
        for (let i = 1n; i <= 100n; i++) {
            if (n % i) {
                console.log(parseInt(i - 1n));
                break;
            }
        }
    }
}
