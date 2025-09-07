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
        var n = parseInt(readline());
        var p = readline().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) if (p[i] === 1) p[i]++;
        for (let i = 1; i < n; i++) {
            if (p[i] % p[i - 1] === 0) {
                if (p[i] % p[i - 1] === 0) p[i]++;
            }
        }
        console.log(p.join(' '));
    }
}
