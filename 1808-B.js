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
        var nm = readline().split(' ').map(x => parseInt(x));
        var n = nm[0], m = nm[1];
        var play = [];
        for (var i = 0; i < n; i++) {
            var p = readline().split(' ').map(x => parseInt(x));
            play.push(p);
        }
        var pot = BigInt(0);
        for (var i = 0; i < m; i++) {
            var a = new Array(n), b = new Array(n).fill(0);
            for (var j = 0; j < n; j++) a[j] = play[j][i];
            a.sort((a, b) => a - b);
            for (var j = n - 2; j >= 0; j--) {
                b[j] = a[j + 1] + b[j + 1];
                pot += BigInt(b[j] - (n - 1 - j) * a[j]);
            }
        }
        console.log(pot.toString());
    }
}
