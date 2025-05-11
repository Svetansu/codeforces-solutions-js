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
        let q = parseInt(readline());
        let pref = new Array(n + 1).fill(0), p = -1;
        for (let i = 1; i <= n; i++) {
            if (arr[i - 1] !== p) pref[i] = i - 1;
            else pref[i] = pref[i - 1];
            p = arr[i - 1];
        }
        for (let i = 0; i < q; i++) {
            let lr = readline().split(' ').map(x => parseInt(x));
            const [l, r] = lr;
            if ((pref[r]) >= l) {
                console.log(pref[r] + ' ' + r);
            } else {
                console.log('-1 -1');
            }
        }
        console.log('');
    }
}
