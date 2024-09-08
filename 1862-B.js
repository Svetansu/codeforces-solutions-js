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
        let m = parseInt(readline());
        let b = readline().split(' ').map(x => parseInt(x));
        let res = [b[0]];
        for (let i = 1; i < m; i++) {
            if (b[i] < b[i-1]) {
                res.push(b[i]);
            }
            res.push(b[i]);
        }
        console.log(res.length);
        console.log(res.join(' '));
    }
}
