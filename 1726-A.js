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
        var a = readline().split(' ').map(x => parseInt(x));
        let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity, max4 = a[n - 1] - a[0];
        for (let i = 0; i < n; i++) {
            max1 = Math.max(max1, (a[n - 1] - a[i]));
            max2 = Math.max(max2, (a[i] - a[0]));
            if (i > 0) max3 = Math.max(max3, (a[i - 1] - a[i]));
        }
        console.log(Math.max(max1, max2, max3, max4));
    }
}
