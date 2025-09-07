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
        var nq = readline().split(' ').map(x => parseInt(x));
        let n = nq[0], q = nq[1];
        let a = readline().split(' ').map(x => parseInt(x));
        let prefix = new Array(n + 1).fill(0);
        for (let i = 1; i <= n; i++) prefix[i] = a[i - 1] + prefix[i - 1];
        for (let j = 0; j < q; j++) {
            let [l, r, k] = readline().split(' ').map(x => parseInt(x));
            let sum = prefix[l - 1] + ((l - r + 1) * k) + prefix[n] - prefix[r];
            console.log(sum % 2 ? 'YES' : 'NO');
        }
    }
}
