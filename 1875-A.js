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
        let abn = readline().split(' ').map(x => BigInt(x));
        const a = abn[0], b = abn[1], n = abn[2];
        let c = readline().split(' ').map(x => BigInt(x));
        let res = b, lim = a - 1n;
        for (let x of c) {
            res += x >= lim ? lim : x;
        }
        console.log(res.toString());
    }
}
