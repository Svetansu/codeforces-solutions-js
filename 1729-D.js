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
// -8 -3 0 1 2 5
function main() {
    var t = parseInt(readline());

    for (var a0 = 0; a0 < t; a0++) {
        var n = parseInt(readline());
        var a = readline().split(' ').map(x => parseInt(x));
        var b = readline().split(' ').map(x => parseInt(x));
        var c = new Array(n);
        for (let i = 0; i < n; i++) {
            c[i] = b[i] - a[i];
        }
        c.sort((a, b) => b - a);
        let j = n-1, res = 0;
        for (let i = 0; i < n; i++) {
            while (j > i && (c[i] + c[j] < 0)) j--;
            if (j <= i) break;
            res++;
            j--;
        }
        console.log(res);
    }
}
