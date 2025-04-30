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
        let arr = readline().split(' ').map(x => parseInt(x));
        arr.sort((a, b) => a - b);
        let chain = 1, max = 1;
        for (let i = 1; i < n; i++) {
            if (arr[i] - arr[i - 1] <= k) chain++;
            else chain = 1;
            max = Math.max(max, chain);
        }
        console.log(n - max);
    }
}
