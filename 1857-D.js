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
        let a = readline().split(' ').map(x => parseInt(x));
        let b = readline().split(' ').map(x => parseInt(x));
        let c = [], max = -Infinity;
        for (let i = 0; i < n; i++) {
            c.push(a[i] - b[i]);
            max = Math.max(max, c[c.length - 1]);
        }
        let res = 0, resStr = [];
        for (let i = 0; i < n; i++) {
            if (c[i] === max) {
                res++;
                resStr.push(i + 1);
            }
        }
        console.log(res);
        console.log(resStr.join(' '));
    }
}
