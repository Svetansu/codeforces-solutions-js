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
        let nk = readline().split(' ').map(x => parseInt(x));
        const n = nk[0], k = nk[1];
        let a = readline().split(' ').map(x => parseInt(x));
        let s = new Set(a);
        console.log(s.has(k) ? 'YES' : 'NO');
    }
}
