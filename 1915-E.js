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
        let n = parseInt(readline());
        let arr = readline().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            if (i % 2) arr[i] *= -1;
        }
        let s = 0, p = new Set(), res = false;
        p.add(0);
        for (let i = 0; i < n; i++) {
            s += arr[i];
            if (p.has(s)) {
                res = true;
                break;
            }
            p.add(s);
        }
        console.log(res ? 'YES' : 'NO');
    }
}
